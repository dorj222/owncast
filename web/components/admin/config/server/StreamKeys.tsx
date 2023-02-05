import React, { useContext, useState } from 'react';
import { Table, Space, Button, Typography, Alert, Input, Form, Tooltip } from 'antd';
import dynamic from 'next/dynamic';
import { ServerStatusContext } from '../../../../utils/server-status-context';

import { fetchData, UPDATE_STREAM_KEYS } from '../../../../utils/apis';
import { UpdateArgs } from '../../../../types/config-section';

const { Paragraph } = Typography;

const COPY_TOOLTIP_TIMEOUT = 3000;

const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*]).{8,192}$/;

// Lazy loaded components

const DeleteOutlined = dynamic(() => import('@ant-design/icons/DeleteOutlined'), {
  ssr: false,
});

const EyeOutlined = dynamic(() => import('@ant-design/icons/EyeOutlined'), {
  ssr: false,
});

const PlusOutlined = dynamic(() => import('@ant-design/icons/PlusOutlined'), {
  ssr: false,
});

const CopyOutlined = dynamic(() => import('@ant-design/icons/CopyOutlined'), {
  ssr: false,
});

const RedoOutlined = dynamic(() => import('@ant-design/icons/RedoOutlined'), {
  ssr: false,
});

const saveKeys = async (keys, setError) => {
  try {
    await fetchData(UPDATE_STREAM_KEYS, {
      method: 'POST',
      auth: true,
      data: { value: keys },
    });
  } catch (error) {
    console.error(error);
    setError(error);
  }
};

const AddKeyForm = ({ setShowAddKeyForm, setFieldInConfigState, streamKeys, setError }) => {
  const [formDataValues, setFormDataValues] = useState(null);
  const [copyIsVisible, setCopyVisible] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);
  const [form] = Form.useForm();
  const { Item } = Form;
  const handleAddKey = (newkey: any) => {
    const updatedKeys = [...streamKeys, newkey];

    setFieldInConfigState({
      fieldName: 'streamKeys',
      value: updatedKeys,
    });

    saveKeys(updatedKeys, setError);

    setShowAddKeyForm(false);
  };

  const handleInputChange = (event: any) => {
    const val = event.target.value;
    if (regex.test(val)) {
      setHasChanged(true);
    } else {
      setHasChanged(false);
    }
  };

  const handleFieldChange = ({ fieldName, value }: UpdateArgs) => {
    setFormDataValues({
      ...formDataValues,
      [fieldName]: value,
    });
  };

  function generateStreamKey() {
    let key = '';
    const s = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    key = Array.apply(20, Array(30))
      .map(() => s.charAt(Math.floor(Math.random() * s.length)))
      .join('');

    handleFieldChange({ fieldName: 'streamKey', value: key });
  }

  function copyStreamKey() {
    navigator.clipboard.writeText(formDataValues.streamKey).then(() => {
      setCopyVisible(true);
      setTimeout(() => setCopyVisible(false), COPY_TOOLTIP_TIMEOUT);
    });
  }

  if (!formDataValues) {
    return null;
  }

  return (
    <Form
      layout="horizontal"
      autoComplete="off"
      onFinish={handleAddKey}
      form={form}
      style={{ display: 'flex', flexDirection: 'row' }}
    >
      <Item
        style={{ width: '60%', marginRight: '5px' }}
        label="Key"
        name="key"
        tooltip={
          <p>
            The key you provide your broadcasting software. Please note that the key must be a
            minimum of eight characters and must include at least one uppercase letter, at least one
            lowercase letter, at least one special character, and at least one number.
          </p>
        }
        rules={[
          { min: 8, message: '- minimum 8 characters' },
          { max: 192, message: '- maximum 192 characters' },
          {
            pattern: /^(?=.*[a-z])/,
            message: '- at least one lowercase letter',
          },
          {
            pattern: /^(?=.*[A-Z])/,
            message: '- at least one uppercase letter',
          },
          {
            pattern: /\d/,
            message: '- at least one digit',
          },
          {
            pattern: /^(?=.*?[#?!@$%^&*-])/,
            message: '- at least one special character: !@#$%^&*',
          },
        ]}
      >
        <Input onChange={handleInputChange} />
      </Item>
      <Item
        style={{ width: '60%', marginRight: '5px' }}
        label="Comment"
        name="comment"
        tooltip="For remembering why you added this key"
      >
        <Input placeholder="My OBS Key" />
      </Item>
      <Button type="primary" htmlType="submit" disabled={!hasChanged}>
        Add
      </Button>
      <div
        className="streamkey-actions"
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: '5px',
          marginInlineStart: '5px',
          columnGap: '5px',
        }}
      >
        <Tooltip title="Generate a stream key">
          <Button icon={<RedoOutlined />} size="small" onClick={generateStreamKey} />
        </Tooltip>

        <Tooltip className="copy-tooltip" title={copyIsVisible ? 'Copied!' : 'Copy to clipboard'}>
          <Button icon={<CopyOutlined />} size="small" onClick={copyStreamKey} />
        </Tooltip>
      </div>
    </Form>
  );
};

const AddKeyButton = ({ setShowAddKeyForm }) => (
  <Button type="default" onClick={() => setShowAddKeyForm(true)}>
    <PlusOutlined />
  </Button>
);

const StreamKeys = () => {
  const serverStatusData = useContext(ServerStatusContext);
  const { serverConfig, setFieldInConfigState } = serverStatusData || {};
  const { streamKeys } = serverConfig;
  const [showAddKeyForm, setShowAddKeyForm] = useState(false);
  const [showKeyMap, setShowKeyMap] = useState({});
  const [error, setError] = useState(null);

  const handleDeleteKey = keyToRemove => {
    const newKeys = streamKeys.filter(k => k !== keyToRemove);
    setFieldInConfigState({
      fieldName: 'streamKeys',
      value: newKeys,
    });
    saveKeys(newKeys, setError);
  };

  const handleToggleShowKey = key => {
    setShowKeyMap({
      ...showKeyMap,
      [key]: !showKeyMap[key],
    });
  };

  const columns = [
    {
      title: 'Key',
      dataIndex: 'key',
      key: 'key',
      render: text => (
        <Space direction="horizontal">
          <Paragraph copyable>{showKeyMap[text] ? text : '**********'}</Paragraph>

          <Button
            type="link"
            style={{ top: '-7px' }}
            icon={<EyeOutlined />}
            onClick={() => handleToggleShowKey(text)}
          />
        </Space>
      ),
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment',
    },
    {
      title: '',
      key: 'delete',
      render: text => <Button onClick={() => handleDeleteKey(text)} icon={<DeleteOutlined />} />,
    },
  ];

  return (
    <div>
      <Paragraph>
        A streaming key is used with your broadcasting software to authenticate itself to Owncast.
        Most people will only need one. However, if you share a server with others or you want
        different keys for different broadcasting sources you can add more here.
      </Paragraph>
      <Paragraph>
        These keys are unrelated to the admin password and will not grant you access to make changes
        to Owncast&apos;s configuration.
      </Paragraph>
      <Paragraph>
        Read more about broadcasting at{' '}
        <a
          href="https://owncast.online/docs/broadcasting/?source=admin"
          target="_blank"
          rel="noopener noreferrer"
        >
          the documentation
        </a>
        .
      </Paragraph>

      <Space direction="vertical" style={{ width: '70%' }}>
        {error && <Alert type="error" message="Saving Keys Error" description={error} />}

        {streamKeys.length === 0 && (
          <Alert
            message="No stream keys!"
            description="You will not be able to stream until you create at least one stream key and add it to your broadcasting software."
            type="error"
          />
        )}

        <Table
          rowKey="key"
          columns={columns}
          dataSource={streamKeys}
          pagination={false}
          // eslint-disable-next-line react/no-unstable-nested-components
          footer={() =>
            showAddKeyForm ? (
              <AddKeyForm
                setShowAddKeyForm={setShowAddKeyForm}
                streamKeys={streamKeys}
                setFieldInConfigState={setFieldInConfigState}
                setError={setError}
              />
            ) : (
              <AddKeyButton setShowAddKeyForm={setShowAddKeyForm} />
            )
          }
        />
        <br />
      </Space>
    </div>
  );
};
export default StreamKeys;

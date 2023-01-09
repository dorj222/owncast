(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7722],{2976:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config/server",function(){return n(6696)}])},73706:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var s=n(85893),a=n(67294),r=n(94594),i=n(41983),o=n(39664),l=n(90745),c=n(99519);let d=e=>{let{apiPath:t,checked:n,reversed:d=!1,configPath:u="",disabled:h=!1,fieldName:m,label:f,tip:y,useSubmit:x,onChange:g}=e,[v,p]=(0,a.useState)(null),j=null,k=(0,a.useContext)(c.aC),{setFieldInConfigState:b}=k||{},w=()=>{p(null),clearTimeout(j),j=null},N=async e=>{if(x){p((0,i.kg)(i.Jk));let n=d?!e:e;await (0,l.Si)({apiPath:t,data:{value:n},onSuccess:()=>{b({fieldName:m,value:n,path:u}),p((0,i.kg)(i.zv))},onError:e=>{p((0,i.kg)(i.Un,"There was an error: ".concat(e)))}}),j=setTimeout(w,l.sI)}g&&g(e)},C=null!==v&&v.type===i.Jk;return(0,s.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[f&&(0,s.jsx)("div",{className:"label-side",children:(0,s.jsx)("span",{className:"formfield-label",children:f})}),(0,s.jsxs)("div",{className:"input-side",children:[(0,s.jsxs)("div",{className:"input-group",children:[(0,s.jsx)(r.Z,{className:"switch field-".concat(m),loading:C,onChange:N,defaultChecked:n,checked:n,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:h}),(0,s.jsx)(o.E,{status:v})]}),(0,s.jsx)("p",{className:"field-tip",children:y})]})]})};d.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},68097:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var s=n(85893),a=n(54907),r=n(71577),i=n(94184),o=n.n(i),l=n(67294),c=n(99519),d=n(82661),u=n(90745),h=n(41983),m=n(40117),f=n(39664),y=n(37174),x=n(73706);let{Panel:g}=a.Z;function v(){let[e,t]=(0,l.useState)(null),[n,i]=(0,l.useState)(null),[v,p]=(0,l.useState)(!1),j=(0,l.useContext)(c.aC),{serverConfig:k,setFieldInConfigState:b}=j||{},{setMessage:w}=(0,l.useContext)(d.k),{s3:N}=k,{accessKey:C="",acl:S="",bucket:Z="",enabled:T=!1,endpoint:P="",region:E="",secret:K="",servingEndpoint:O="",forcePathStyle:z=!1}=N;if((0,l.useEffect)(()=>{t({accessKey:C,acl:S,bucket:Z,enabled:T,endpoint:P,region:E,secret:K,servingEndpoint:O,forcePathStyle:z}),p(T)},[N]),!e)return null;let _=()=>{i(null),clearTimeout(null)},F=n=>{let{fieldName:s,value:a}=n;t({...e,[s]:a})},I=async()=>{i((0,h.kg)(h.Jk)),await (0,u.Si)({apiPath:u.$w,data:{value:e},onSuccess:()=>{b({fieldName:"s3",value:e,path:""}),i((0,h.kg)(h.zv,"Updated.")),setTimeout(_,u.sI),w("Changing your storage configuration will take place the next time you start a new stream.")},onError:e=>{i((0,h.kg)(h.Un,e)),setTimeout(_,u.sI)}})},A=e=>{p(e),F({fieldName:"enabled",value:e})},D=e=>{F({fieldName:"forcePathStyle",value:e})},U=o()({"edit-storage-container":!0,"form-module":!0,enabled:v}),M=function(e,t){let{endpoint:n,accessKey:s,secret:a,bucket:r,region:i,enabled:o,servingEndpoint:l,acl:c,forcePathStyle:d}=e;if(o){if(n&&(0,y.jv)(n)&&s&&a&&r&&i&&(o!==t.enabled||n!==t.endpoint||s!==t.accessKey||a!==t.secret||r!==t.bucket||i!==t.region||!t.servingEndpoint&&""!==l||t.servingEndpoint&&l!==t.servingEndpoint||!t.acl&&""!==c||t.acl&&c!==t.acl||d!==t.forcePathStyle))return!0}else if(o!==t.enabled)return!0;return!1}(e,N);return(0,s.jsxs)("div",{className:U,children:[(0,s.jsx)("div",{className:"enable-switch",children:(0,s.jsx)(x.Z,{apiPath:"",fieldName:"enabled",label:"Use S3 Storage Provider",checked:e.enabled,onChange:A})}),(0,s.jsxs)("div",{className:"form-fields",children:[(0,s.jsx)("div",{className:"field-container",children:(0,s.jsx)(m.nv,{...u.zm.endpoint,value:e.endpoint,onChange:F})}),(0,s.jsx)("div",{className:"field-container",children:(0,s.jsx)(m.nv,{...u.zm.accessKey,value:e.accessKey,onChange:F})}),(0,s.jsx)("div",{className:"field-container",children:(0,s.jsx)(m.nv,{...u.zm.secret,value:e.secret,onChange:F})}),(0,s.jsx)("div",{className:"field-container",children:(0,s.jsx)(m.nv,{...u.zm.bucket,value:e.bucket,onChange:F})}),(0,s.jsx)("div",{className:"field-container",children:(0,s.jsx)(m.nv,{...u.zm.region,value:e.region,onChange:F})}),(0,s.jsx)(a.Z,{className:"advanced-section",children:(0,s.jsxs)(g,{header:"Optional Settings",children:[(0,s.jsx)("div",{className:"field-container",children:(0,s.jsx)(m.nv,{...u.zm.acl,value:e.acl,onChange:F})}),(0,s.jsx)("div",{className:"field-container",children:(0,s.jsx)(m.nv,{...u.zm.servingEndpoint,value:e.servingEndpoint,onChange:F})}),(0,s.jsx)("div",{className:"enable-switch",children:(0,s.jsx)(x.Z,{...u.zm.forcePathStyle,fieldName:"forcePathStyle",checked:e.forcePathStyle,onChange:D})})]},"1")})]}),(0,s.jsxs)("div",{className:"button-container",children:[(0,s.jsx)(r.Z,{type:"primary",onClick:I,disabled:!M,children:"Save"}),(0,s.jsx)(f.E,{status:n})]})]})}},87807:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var s=n(85893),a=n(67294),r=n(54907),i=n(94199),o=n(71577),l=n(84485),c=n(87740),d=n(57132),u=n(40117),h=n(10135),m=n(99519),f=n(82661),y=n(90745),x=n(65360),g=n(64777),v=n(41983),p=n(39664);let j=()=>{let{setMessage:e}=(0,a.useContext)(f.k),[t,n]=(0,a.useState)(null),r=()=>{n(null),clearTimeout(null)},i=async()=>{n((0,v.kg)(v.Jk));try{await (0,g.rQ)(g.UJ),e(""),n((0,v.kg)(v.zv)),setTimeout(r,y.sI)}catch(t){n((0,v.kg)(v.Un,"There was an error: ".concat(t))),setTimeout(r,y.sI)}};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Z.Title,{level:3,className:"section-title",children:"Reset Directory"}),(0,s.jsx)("p",{className:"description",children:'If you are experiencing issues with your listing on the Owncast Directory and were asked to "reset" your connection to the service, you can do that here. The next time you go live it will try and re-register your server with the directory from scratch.'}),(0,s.jsx)(x.Z,{placement:"topLeft",title:"Are you sure you want to reset your connection to the Owncast directory?",onConfirm:i,okText:"Yes",cancelText:"No",children:(0,s.jsx)(o.Z,{type:"primary",children:"Reset Directory Connection"})}),(0,s.jsx)("p",{children:(0,s.jsx)(p.E,{status:t})})]})},{Panel:k}=r.Z,b=()=>{let[e,t]=(0,a.useState)(null),n=(0,a.useContext)(m.aC),{setMessage:x}=(0,a.useContext)(f.k),{serverConfig:g}=n||{},{adminPassword:v,ffmpegPath:p,rtmpServerPort:b,webServerPort:w,yp:N,socketHostOverride:C}=g,[S,Z]=(0,a.useState)(!1);if((0,a.useEffect)(()=>{t({adminPassword:v,ffmpegPath:p,rtmpServerPort:b,webServerPort:w,socketHostOverride:C})},[g]),!e)return null;let T=n=>{let{fieldName:s,value:a}=n;t({...e,[s]:a})},P=()=>{x("Updating server settings requires a restart of your Owncast server.")},E=()=>{x("Changing your stream key will log you out of the admin and block you from streaming until you change the key in your broadcasting software.")},K=()=>{n.online&&x("The updated ffmpeg path will be used when starting your next live stream.")};return(0,s.jsxs)("div",{className:"edit-server-details-container",children:[(0,s.jsx)("div",{className:"field-container field-streamkey-container",children:(0,s.jsxs)("div",{className:"left-side",children:[(0,s.jsx)(h.$7,{fieldName:"adminPassword",...y.tQ,value:e.adminPassword,initialValue:v,type:u.A8,onChange:T,onSubmit:E}),(0,s.jsxs)("div",{className:"streamkey-actions",children:[(0,s.jsx)(i.Z,{title:"Generate a stream key",children:(0,s.jsx)(o.Z,{icon:(0,s.jsx)(c.Z,{}),size:"small",onClick:function(){let e="";for(let t=0;t<3;t+=1)e+=Math.random().toString(36).substring(2);T({fieldName:"streamKey",value:e})}})}),(0,s.jsx)(i.Z,{className:"copy-tooltip",title:S?"Copied!":"Copy to clipboard",children:(0,s.jsx)(o.Z,{icon:(0,s.jsx)(d.Z,{}),size:"small",onClick:function(){navigator.clipboard.writeText(e.streamKey).then(()=>{Z(!0),setTimeout(()=>Z(!1),3e3)})}})})]})]})}),(0,s.jsx)(h.$7,{fieldName:"ffmpegPath",...y.KB,value:e.ffmpegPath,initialValue:p,onChange:T,onSubmit:K}),(0,s.jsx)(h.$7,{fieldName:"webServerPort",...y.rE,value:e.webServerPort,initialValue:w,type:u.mG,onChange:T,onSubmit:P}),(0,s.jsx)(h.$7,{fieldName:"rtmpServerPort",...y.lT,value:e.rtmpServerPort,initialValue:b,type:u.mG,onChange:T,onSubmit:P}),(0,s.jsx)(r.Z,{className:"advanced-settings",children:(0,s.jsxs)(k,{header:"Advanced Settings",children:[(0,s.jsx)(l.Z.Paragraph,{children:"If you have a CDN in front of your entire Owncast instance, specify your origin server here for the websocket to connect to. Most people will never need to set this."}),(0,s.jsx)(h.$7,{fieldName:"socketHostOverride",...y.ME,value:e.socketHostOverride,initialValue:C||"",type:u.xA,onChange:T}),N.enabled&&(0,s.jsx)(j,{})]},"1")})]})};function w(){return(0,s.jsxs)("div",{className:"config-server-details-form",children:[(0,s.jsx)("p",{className:"description",children:"You should change your admin password from the default and keep it safe. For most people it's likely the other settings will not need to be changed."}),(0,s.jsx)("div",{className:"form-module config-server-details-container",children:(0,s.jsx)(b,{})})]})}},60396:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var s=n(85893);n(67294);var a=n(68097);function r(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("p",{className:"description",children:["Owncast supports optionally using external storage providers to stream your video. Learn more about this by visiting our"," ",(0,s.jsx)("a",{href:"https://owncast.online/docs/storage/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Storage Documentation"}),"."]}),(0,s.jsx)("p",{className:"description",children:"Configuring this incorrectly will likely cause your video to be unplayable. Double check the documentation for your storage provider on how to configure the bucket you created for Owncast."}),(0,s.jsx)("p",{className:"description",children:"Keep in mind this is for live streaming, not for archival, recording or VOD purposes."}),(0,s.jsx)(a.default,{})]})}},88610:function(e,t,n){"use strict";n.r(t);var s=n(85893),a=n(67294),r=n(84485),i=n(18119),o=n(69677),l=n(71577),c=n(26713),d=n(14670),u=n(81025),h=n(24969),m=n(99611),f=n(48689),y=n(99519),x=n(64777);let{Paragraph:g}=r.Z,{Item:v}=i.Z,p=async(e,t)=>{try{await (0,x.rQ)(x.um,{method:"POST",auth:!0,data:{value:e}})}catch(n){console.error(n),t(n)}},j=e=>{let{setShowAddKeyForm:t,setFieldInConfigState:n,streamKeys:a,setError:r}=e,c=e=>{let s=[...a,e];n({fieldName:"streamKeys",value:s}),p(s,r),t(!1)};return(0,s.jsxs)(i.Z,{layout:"inline",autoComplete:"off",onFinish:c,children:[(0,s.jsx)(v,{label:"Key",name:"key",tooltip:"The key you provide your broadcasting software",children:(0,s.jsx)(o.Z,{placeholder:"def456"})}),(0,s.jsx)(v,{label:"Comment",name:"comment",tooltip:"For remembering why you added this key",children:(0,s.jsx)(o.Z,{placeholder:"My OBS Key"})}),(0,s.jsx)(l.Z,{type:"primary",htmlType:"submit",children:"Add"})]})},k=e=>{let{setShowAddKeyForm:t}=e;return(0,s.jsx)(l.Z,{type:"default",onClick:()=>t(!0),children:(0,s.jsx)(h.Z,{})})},b=()=>{let e=(0,a.useContext)(y.aC),{serverConfig:t,setFieldInConfigState:n}=e||{},{streamKeys:r}=t,[i,o]=(0,a.useState)(!1),[h,x]=(0,a.useState)({}),[v,b]=(0,a.useState)(null),w=e=>{let t=r.filter(t=>t!==e);n({fieldName:"streamKeys",value:t}),p(t,b)},N=e=>{x({...h,[e]:!h[e]})};return(0,s.jsxs)("div",{children:[(0,s.jsx)(g,{children:"A streaming key is used with your broadcasting software to authenticate itself to Owncast. Most people will only need one. However, if you share a server with others or you want different keys for different broadcasting sources you can add more here."}),(0,s.jsx)(g,{children:"These keys are unrelated to the admin password and will not grant you access to make changes to Owncast's configuration."}),(0,s.jsxs)(g,{children:["Read more about broadcasting at"," ",(0,s.jsx)("a",{href:"https://owncast.online/docs/broadcasting/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"the documentation"}),"."]}),(0,s.jsxs)(c.Z,{direction:"vertical",style:{width:"70%"},children:[v&&(0,s.jsx)(d.Z,{type:"error",message:"Saving Keys Error",description:v}),0===r.length&&(0,s.jsx)(d.Z,{message:"No stream keys!",description:"You will not be able to stream until you create at least one stream key and add it to your broadcasting software.",type:"error"}),(0,s.jsx)(u.Z,{rowKey:"key",columns:[{title:"Key",dataIndex:"key",key:"key",render:e=>(0,s.jsxs)(c.Z,{direction:"horizontal",children:[(0,s.jsx)(g,{copyable:!0,children:h[e]?e:"**********"}),(0,s.jsx)(l.Z,{type:"link",style:{top:"-7px"},icon:(0,s.jsx)(m.Z,{}),onClick:()=>N(e)})]})},{title:"Comment",dataIndex:"comment",key:"comment"},{title:"",key:"delete",render:e=>(0,s.jsx)(l.Z,{onClick:()=>w(e),icon:(0,s.jsx)(f.Z,{})})}],dataSource:r,pagination:!1,footer:()=>i?(0,s.jsx)(j,{setShowAddKeyForm:o,streamKeys:r,setFieldInConfigState:n,setError:b}):(0,s.jsx)(k,{setShowAddKeyForm:o})}),(0,s.jsx)("br",{})]})]})};t.default=b},6696:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var s=n(85893);n(67294);var a=n(90575),r=n(88610),i=n(87807),o=n(60396);function l(){return(0,s.jsx)("div",{className:"config-public-details-page",children:(0,s.jsx)(a.Z,{defaultActiveKey:"1",centered:!0,items:[{label:"Server Config",key:"1",children:(0,s.jsx)(i.default,{})},{label:"Stream Keys",key:"2",children:(0,s.jsx)(r.default,{})},{label:"S3 Object Storage",key:"3",children:(0,s.jsx)(o.default,{})}]})})}}},function(e){e.O(0,[4485,8909,3903,3899,1025,575,8119,5473,3053,9774,2888,179],function(){return e(e.s=2976)}),_N_E=e.O()}]);
//# sourceMappingURL=server-c0dd2c3e7dc4a623.js.map
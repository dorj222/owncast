(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1871],{39856:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config/general",function(){return n(67750)}])},48186:function(e,t,n){"use strict";n.d(t,{Q:function(){return d},Y:function(){return u}});var s=n(85893),a=n(67294),l=n(6880),i=n(20550),r=n(79139),o=n(73615);let{Title:c}=l.Z,d="#5a67d8",u=e=>{let{title:t,description:n,placeholder:l,maxLength:u,values:m,handleDeleteIndex:h,handleCreateString:p,submitStatus:x,continuousStatusMessage:j}=e,[g,f]=(0,a.useState)(""),v=e=>{let{value:t}=e;f(t)},N=()=>{let e=g.trim();p(e),f("")};return(0,s.jsxs)("div",{className:"edit-string-array-container",children:[(0,s.jsx)(c,{level:3,className:"section-title",children:t}),(0,s.jsx)("p",{className:"description",children:n}),(0,s.jsx)("div",{className:"edit-current-strings",children:null==m?void 0:m.map((e,t)=>{let n=()=>{h(t)};return(0,s.jsx)(i.Z,{closable:!0,onClose:n,color:d,children:e},"tag-".concat(e,"-").concat(t))})}),j&&(0,s.jsx)("div",{className:"continuous-status-section",children:(0,s.jsx)(o.E,{status:j})}),(0,s.jsx)("div",{className:"add-new-string-section",children:(0,s.jsx)(r.nv,{fieldName:"string-input",value:g,onChange:v,onPressEnter:N,maxLength:u,placeholder:l,status:x})})]})};u.defaultProps={maxLength:50,description:null,submitStatus:null,continuousStatusMessage:null}},6979:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var s=n(85893),a=n(67294),l=n(94594),i=n(41983),r=n(73615),o=n(90745),c=n(99519);let d=e=>{let{apiPath:t,checked:n,reversed:d=!1,configPath:u="",disabled:m=!1,fieldName:h,label:p,tip:x,useSubmit:j,onChange:g}=e,[f,v]=(0,a.useState)(null),N=null,k=(0,a.useContext)(c.aC),{setFieldInConfigState:y}=k||{},b=()=>{v(null),clearTimeout(N),N=null},C=async e=>{if(j){v((0,i.kg)(i.Jk));let n=d?!e:e;await (0,o.Si)({apiPath:t,data:{value:n},onSuccess:()=>{y({fieldName:h,value:n,path:u}),v((0,i.kg)(i.zv))},onError:e=>{v((0,i.kg)(i.Un,"There was an error: ".concat(e)))}}),N=setTimeout(b,o.sI)}g&&g(e)},S=null!==f&&f.type===i.Jk;return(0,s.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[p&&(0,s.jsx)("div",{className:"label-side",children:(0,s.jsx)("span",{className:"formfield-label",children:p})}),(0,s.jsxs)("div",{className:"input-side",children:[(0,s.jsxs)("div",{className:"input-group",children:[(0,s.jsx)(l.Z,{className:"switch field-".concat(h),loading:S,onChange:C,defaultChecked:n,checked:n,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:m}),(0,s.jsx)(r.E,{status:f})]}),(0,s.jsx)("p",{className:"field-tip",children:x})]})]})};d.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},49817:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var s=n(85893),a=n(67294),l=n(6880),i=n(71577),r=n(69677),o=n(48213),c=n(85402),d=n(10010),u=n(39398),m=n(48689),h=n(34041),p=n(90745);let x=e=>{let{iconList:t,selectedOption:n,onSelected:a}=e,l=e=>{a&&a(e)},i=""===n?null:n;return(0,s.jsxs)("div",{className:"social-dropdown-container",children:[(0,s.jsx)("p",{className:"description",children:"If you are looking for a platform name not on this list, please select Other and type in your own name. A logo will not be provided."}),(0,s.jsxs)("div",{className:"formfield-container",children:[(0,s.jsx)("div",{className:"label-side",children:(0,s.jsx)("span",{className:"formfield-label",children:"Social Platform"})}),(0,s.jsx)("div",{className:"input-side",children:(0,s.jsxs)(h.Z,{style:{width:240},className:"social-dropdown",placeholder:"Social platform...",defaultValue:i,value:i,onSelect:l,children:[t.map(e=>{let{platform:t,icon:n,key:a}=e;return(0,s.jsxs)(h.Z.Option,{className:"social-option",value:a,children:[(0,s.jsx)("span",{className:"option-icon",children:(0,s.jsx)("img",{src:n,alt:"",className:"option-icon"})}),(0,s.jsx)("span",{className:"option-label",children:t})]},"platform-".concat(a))}),(0,s.jsx)(h.Z.Option,{className:"social-option",value:p.z_,children:"Other..."},"platform-".concat(p.z_))]})})]})]})};var j=n(64777),g=n(99519),f=n(37174),v=n(79139),N=n(41983),k=n(73615);let{Title:y}=l.Z;function b(){var e,t;let[n,l]=(0,a.useState)([]),[h,b]=(0,a.useState)([]),[C,S]=(0,a.useState)(!1),[w,Z]=(0,a.useState)(!1),[T,E]=(0,a.useState)(!1),[P,z]=(0,a.useState)(-1),[_,U]=(0,a.useState)(p.wC),[L,O]=(0,a.useState)(null),I=(0,a.useContext)(g.aC),{serverConfig:A,setFieldInConfigState:B}=I||{},{instanceDetails:M}=A,{socialHandles:R}=M,V=async()=>{try{let e=await (0,j.rQ)(j.$i,{auth:!1}),t=Object.keys(e).map(t=>({key:t,...e[t]}));l(t)}catch(n){console.log(n)}},D=e=>n.find(t=>t.key===e)||!1,F=""!==_.platform&&!n.find(e=>e.key===_.platform);(0,a.useEffect)(()=>{V()},[]),(0,a.useEffect)(()=>{M.socialHandles&&b(R)},[M]);let H=()=>{O(null),clearTimeout(null)},J=()=>{S(!1),z(-1),Z(!1),E(!1),U({...p.wC})},$=()=>{J()},K=(e,t)=>{U({..._,[e]:t})},Y=e=>{e===p.z_?(Z(!0),K("platform","")):(Z(!1),K("platform",e))},G=e=>{let{value:t}=e.target;K("platform",t)},Q=e=>{let{value:t}=e;K("url",t)},X=async e=>{await (0,p.Si)({apiPath:p.c9,data:{value:e},onSuccess:()=>{B({fieldName:"socialHandles",value:e,path:"instanceDetails"}),E(!1),$(),O((0,N.kg)(N.zv)),setTimeout(H,p.sI)},onError:e=>{O((0,N.kg)(N.Un,"There was an error: ".concat(e))),E(!1),setTimeout(H,p.sI)}})},q=()=>{E(!0);let e=h.length?[...h]:[];-1===P?e.push(_):e.splice(P,1,_),X(e)},W=e=>{let t=[...h];t.splice(e,1),X(t)},ee=e=>{if(e<=0||e>=h.length)return;let t=[...h],n=t[e-1];t[e-1]=t[e],t[e]=n,X(t)},et=e=>{if(e<0||e>=h.length-1)return;let t=[...h],n=t[e+1];t[e+1]=t[e],t[e]=n,X(t)},en={disabled:(e=_.url,"xmpp"===(t=_.platform)?!(0,f.Kf)(e,"xmpp"):"matrix"===t?!(0,f.bu)(e):!(0,f.jv)(e))},es=(0,s.jsxs)("div",{className:"other-field-container formfield-container",children:[(0,s.jsx)("div",{className:"label-side"}),(0,s.jsx)("div",{className:"input-side",children:(0,s.jsx)(r.Z,{placeholder:"Other platform name",defaultValue:_.platform,onChange:G})})]});return(0,s.jsxs)("div",{className:"social-links-edit-container",children:[(0,s.jsx)(y,{level:3,className:"section-title",children:"Your Social Handles"}),(0,s.jsx)("p",{className:"description",children:"Add all your social media handles and links to your other profiles here."}),(0,s.jsx)(k.E,{status:L}),(0,s.jsx)(o.Z,{className:"social-handles-table",pagination:!1,size:"small",rowKey:e=>"".concat(e.platform,"-").concat(e.url),columns:[{title:"Social Link",dataIndex:"",key:"combo",render:(e,t)=>{let{platform:n,url:a}=t,l=D(n);if(!l)return(0,s.jsx)("div",{className:"social-handle-cell",children:(0,s.jsxs)("p",{className:"option-label",children:[(0,s.jsx)("strong",{children:n}),(0,s.jsx)("span",{className:"handle-url",title:a,children:a})]})});let{icon:i,platform:r}=l;return(0,s.jsxs)("div",{className:"social-handle-cell",children:[(0,s.jsx)("span",{className:"option-icon",children:(0,s.jsx)("img",{src:i,alt:"",className:"option-icon"})}),(0,s.jsxs)("p",{className:"option-label",children:[(0,s.jsx)("strong",{children:r}),(0,s.jsx)("span",{className:"handle-url",title:a,children:a})]})]})}},{title:"",dataIndex:"",key:"edit",render:(e,t,n)=>(0,s.jsxs)("div",{className:"actions",children:[(0,s.jsx)(i.Z,{size:"small",onClick:()=>{let e=h[n];z(n),U({...e}),S(!0),D(e.platform)||Z(!0)},children:"Edit"}),(0,s.jsx)(i.Z,{icon:(0,s.jsx)(d.Z,{}),size:"small",hidden:0===n,onClick:()=>ee(n)}),(0,s.jsx)(i.Z,{icon:(0,s.jsx)(u.Z,{}),size:"small",hidden:n===h.length-1,onClick:()=>et(n)}),(0,s.jsx)(i.Z,{className:"delete-button",icon:(0,s.jsx)(m.Z,{}),size:"small",onClick:()=>W(n)})]})}],dataSource:h}),(0,s.jsx)(c.Z,{title:"Edit Social Handle",open:C,onOk:q,onCancel:$,confirmLoading:T,okButtonProps:en,children:(0,s.jsxs)("div",{className:"social-handle-modal-content",children:[(0,s.jsx)(x,{iconList:n,selectedOption:F?p.z_:_.platform,onSelected:Y}),w&&es,(0,s.jsx)("br",{}),(0,s.jsx)(v.nv,{fieldName:"social-url",label:"URL",placeholder:{mastodon:"https://mastodon.social/@username",twitter:"https://twitter.com/username"}[_.platform]||"Url to page",value:_.url,onChange:Q,useTrim:!0,type:"url",pattern:f.ax}),(0,s.jsx)(k.E,{status:L})]})}),(0,s.jsx)("br",{}),(0,s.jsx)(i.Z,{type:"primary",onClick:()=>{J(),S(!0)},children:"Add a new social link"})]})}},67750:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return en}});var s=n(85893),a=n(67294),l=n(90575),i=n(6880),r=n(46551),o=n(99519),c=n(90745),d=n(6979),u=n(77916),m=n(71577),h=n(50888),p=n(88484),x=n(73615),j=n(41983),g=n(64777),f=n(60956);let v=()=>{var e;let[t,n]=(0,a.useState)(null),[l,i]=(0,a.useState)(!1),[r,d]=(0,a.useState)(0),v=(0,a.useContext)(o.aC),{setFieldInConfigState:N,serverConfig:k}=v||{},y=null==k?void 0:null===(e=k.instanceDetails)||void 0===e?void 0:e.logo,[b,C]=(0,a.useState)(null),S=null,{apiPath:w,tip:Z}=c.ZQ,T=()=>{C(null),clearTimeout(S),S=null},E=e=>(i(!0),new Promise((t,s)=>{if(e.size>f.Z7){let a="File size is too big: ".concat((0,f.kR)(e.size));return C((0,j.kg)(j.Un,"There was an error: ".concat(a))),S=setTimeout(T,c.sI),i(!1),s()}if(!f.dr.includes(e.type)){let l="File type is not supported: ".concat(e.type);return C((0,j.kg)(j.Un,"There was an error: ".concat(l))),S=setTimeout(T,c.sI),i(!1),s()}(0,f.y3)(e,e=>{n(e),setTimeout(()=>t(),100)})})),P=async()=>{t!==y&&(C((0,j.kg)(j.Jk)),await (0,c.Si)({apiPath:w,data:{value:t},onSuccess:()=>{N({fieldName:"logo",value:t,path:""}),C((0,j.kg)(j.zv)),i(!1),d(Math.floor(100*Math.random()))},onError:e=>{C((0,j.kg)(j.Un,"There was an error: ".concat(e))),i(!1)}}),S=setTimeout(T,c.sI))},z="".concat(g.WB,"logo?random=").concat(r);return(0,s.jsxs)("div",{className:"formfield-container logo-upload-container",children:[(0,s.jsx)("div",{className:"label-side",children:(0,s.jsx)("span",{className:"formfield-label",children:"Logo"})}),(0,s.jsxs)("div",{className:"input-side",children:[(0,s.jsxs)("div",{className:"input-group",children:[(0,s.jsx)("img",{src:z,alt:"avatar",className:"logo-preview"}),(0,s.jsx)(u.Z,{name:"logo",listType:"picture",className:"avatar-uploader",showUploadList:!1,accept:f.dr.join(","),beforeUpload:E,customRequest:P,disabled:l,children:l?(0,s.jsx)(h.Z,{style:{color:"white"}}):(0,s.jsx)(m.Z,{icon:(0,s.jsx)(p.Z,{})})})]}),(0,s.jsx)(x.E,{status:b}),(0,s.jsx)("p",{className:"field-tip",children:Z})]})]})},{Title:N}=i.Z;function k(){let[e,t]=(0,a.useState)(null),n=(0,a.useContext)(o.aC),{serverConfig:l}=n||{},{instanceDetails:i,yp:u}=l,{instanceUrl:m}=u;if((0,a.useEffect)(()=>{t({...i,...u})},[i,u]),!e)return null;let h=()=>{""===e.instanceUrl&&!0===u.enabled&&(0,c.Si)({apiPath:c.AP,data:{value:!1}})},p=n=>{let{fieldName:s,value:a}=n;t({...e,[s]:a})},x=""!==m;return(0,s.jsxs)("div",{className:"edit-general-settings",children:[(0,s.jsx)(N,{level:3,className:"section-title",children:"Configure Instance Details"}),(0,s.jsx)("br",{}),(0,s.jsx)(r.$7,{fieldName:"name",...c.RE,value:e.name,initialValue:i.name,onChange:p}),(0,s.jsx)(r.$7,{fieldName:"instanceUrl",...c.cj,value:e.instanceUrl,initialValue:u.instanceUrl,type:r.xA,onChange:p,onSubmit:h}),(0,s.jsx)(r.$7,{fieldName:"summary",...c.rs,type:r.Sk,value:e.summary,initialValue:i.summary,onChange:p}),(0,s.jsx)(r.$7,{fieldName:"offlineMessage",...c.rd,type:r.Sk,value:e.offlineMessage,initialValue:i.offlineMessage,onChange:p}),(0,s.jsx)(v,{}),(0,s.jsx)(d.Z,{fieldName:"hideViewerCount",useSubmit:!0,...c._X,checked:e.hideViewerCount,onChange:function(e){p({fieldName:"hideViewerCount",value:e})}}),(0,s.jsx)("br",{}),(0,s.jsxs)("p",{className:"description",children:["Increase your audience by appearing in the"," ",(0,s.jsx)("a",{href:"https://directory.owncast.online",target:"_blank",rel:"noreferrer",children:(0,s.jsx)("strong",{children:"Owncast Directory"})}),". This is an external service run by the Owncast project."," ",(0,s.jsx)("a",{href:"https://owncast.online/docs/directory/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Learn more"}),"."]}),!u.instanceUrl&&(0,s.jsxs)("p",{className:"description",children:["You must set your ",(0,s.jsx)("strong",{children:"Server URL"})," above to enable the directory."]}),(0,s.jsxs)("div",{className:"config-yp-container",children:[(0,s.jsx)(d.Z,{fieldName:"enabled",useSubmit:!0,...c.P,checked:e.enabled,disabled:!x}),(0,s.jsx)(d.Z,{fieldName:"nsfw",useSubmit:!0,...c.EY,checked:e.nsfw,disabled:!x})]})]})}var y=n(20550),b=n(79139),C=n(48186);let{Title:S}=i.Z;function w(){let[e,t]=(0,a.useState)(""),[n,l]=(0,a.useState)(null),i=(0,a.useContext)(o.aC),{serverConfig:r,setFieldInConfigState:d}=i||{},{instanceDetails:u}=r,{tags:m=[]}=u,{apiPath:h,maxLength:p,placeholder:x,configPath:g}=c.y_,f=null;(0,a.useEffect)(()=>()=>{clearTimeout(f)},[]);let v=()=>{l(null),clearTimeout(f=null)},N=async e=>{l((0,j.kg)(j.Jk)),await (0,c.Si)({apiPath:h,data:{value:e},onSuccess:()=>{d({fieldName:"tags",value:e,path:g}),l((0,j.kg)(j.zv,"Tags updated.")),t(""),f=setTimeout(v,c.sI)},onError:e=>{l((0,j.kg)(j.Un,e)),f=setTimeout(v,c.sI)}})},k=e=>{let{value:s}=e;n||l(null),t(s)},w=()=>{v();let t=e.trim();if(""===t){l((0,j.kg)(j.dG,"Please enter a tag"));return}if(m.some(e=>e.toLowerCase()===t.toLowerCase())){l((0,j.kg)(j.dG,"This tag is already used!"));return}let n=[...m,t];N(n)},Z=e=>{v();let t=[...m];t.splice(e,1),N(t)};return(0,s.jsxs)("div",{className:"tag-editor-container",children:[(0,s.jsx)(S,{level:3,className:"section-title",children:"Add Tags"}),(0,s.jsx)("p",{className:"description",children:"This is a great way to categorize your Owncast server on the Directory!"}),(0,s.jsx)("div",{className:"edit-current-strings",children:m.map((e,t)=>{let n=()=>{Z(t)};return(0,s.jsx)(y.Z,{closable:!0,onClose:n,color:C.Q,children:e},"tag-".concat(e,"-").concat(t))})}),(0,s.jsx)("div",{className:"add-new-string-section",children:(0,s.jsx)(b.nv,{fieldName:"tag-input",value:e,className:"new-tag-input",onChange:k,onPressEnter:w,maxLength:p,placeholder:x,status:n})})]})}var Z=n(49817),T=n(87685),E=n(58909),P=n(48825),z=n(76538);let{Title:_}=i.Z;function U(){let[e,t]=(0,a.useState)(""),[n,l]=(0,a.useState)(null),[i,r]=(0,a.useState)(!1),d=(0,a.useContext)(o.aC),{serverConfig:u,setFieldInConfigState:h}=d||{},{instanceDetails:p}=u,{extraPageContent:g}=p,f=null,v=()=>{l(null),r(!1),clearTimeout(f),f=null};async function N(){l((0,j.kg)(j.Jk)),await (0,c.Si)({apiPath:c.AA,data:{value:e},onSuccess:t=>{h({fieldName:"extraPageContent",value:e,path:"instanceDetails"}),l((0,j.kg)(j.zv,t))},onError:e=>{l((0,j.kg)(j.Un,e))}}),f=setTimeout(v,c.sI)}return(0,a.useEffect)(()=>{t(g)},[p]),(0,s.jsxs)("div",{className:"edit-page-content",children:[(0,s.jsx)(_,{level:3,className:"section-title",children:"Custom Page Content"}),(0,s.jsxs)("p",{className:"description",children:["Edit the content of your page by using simple"," ",(0,s.jsx)("a",{href:"https://www.markdownguide.org/basic-syntax/",target:"_blank",rel:"noopener noreferrer",children:"Markdown syntax"}),"."]}),(0,s.jsx)(T.ZP,{value:e,placeholder:"Enter your custom page content here...",theme:E.F,onChange:function(e){t(e),e===g||i?e===g&&i&&r(!1):r(!0)},extensions:[(0,P.markdown)({base:P.markdownLanguage,codeLanguages:z.M})]}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{className:"page-content-actions",children:[i&&(0,s.jsx)(m.Z,{type:"primary",onClick:N,children:"Save"}),(0,s.jsx)(x.E,{status:n})]})]})}function L(){return(0,s.jsxs)("div",{className:"config-public-details-page",children:[(0,s.jsxs)("p",{className:"description",children:["The following are displayed on your site to describe your stream and its content."," ",(0,s.jsx)("a",{href:"https://owncast.online/docs/website/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]}),(0,s.jsxs)("div",{className:"top-container",children:[(0,s.jsx)("div",{className:"form-module instance-details-container",children:(0,s.jsx)(k,{})}),(0,s.jsxs)("div",{className:"form-module social-items-container ",children:[(0,s.jsx)("div",{className:"form-module tags-module",children:(0,s.jsx)(w,{})}),(0,s.jsx)("div",{className:"form-module social-handles-container",children:(0,s.jsx)(Z.Z,{})})]})]}),(0,s.jsx)("div",{className:"form-module page-content-module",children:(0,s.jsx)(U,{})})]})}var O=n(54907),I=n(15746),A=n(26713),B=n(71230),M=n(22918),R=n(21987),V=n(11700),D=n(61426);let{Title:F}=i.Z,H=()=>{let[e,t]=(0,a.useState)("/* Enter custom CSS here */"),[n,l]=(0,a.useState)(null),[i,r]=(0,a.useState)(!1),d=(0,a.useContext)(o.aC),{serverConfig:u,setFieldInConfigState:h}=d||{},{instanceDetails:p}=u,{customStyles:g}=p,f=null,v=()=>{l(null),r(!1),clearTimeout(f),f=null};async function N(){l((0,j.kg)(j.Jk)),await (0,c.Si)({apiPath:c.d$,data:{value:e},onSuccess:t=>{h({fieldName:"customStyles",value:e,path:"instanceDetails"}),l((0,j.kg)(j.zv,t))},onError:e=>{l((0,j.kg)(j.Un,e))}}),f=setTimeout(v,c.sI)}(0,a.useEffect)(()=>{t(g)},[p]);let k=a.useCallback(e=>{t(e),e===g||i?e===g&&i&&r(!1):r(!0)},[]);return(0,s.jsxs)("div",{className:"edit-custom-css",children:[(0,s.jsx)(F,{level:3,className:"section-title",children:"Customize your page styling with CSS"}),(0,s.jsxs)("p",{className:"description",children:["Customize the look and feel of your Owncast instance by overriding the CSS styles of various components on the page. Refer to the"," ",(0,s.jsx)("a",{href:"https://owncast.online/docs/website/",rel:"noopener noreferrer",target:"_blank",children:"CSS & Components guide"}),"."]}),(0,s.jsx)("p",{className:"description",children:"Please input plain CSS text, as this will be directly injected onto your page during load."}),(0,s.jsx)(T.ZP,{value:e,placeholder:"/* Enter custom CSS here */",theme:E.F,height:"200px",extensions:[(0,D.css)()],onChange:k}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{className:"page-content-actions",children:[i&&(0,s.jsx)(m.Z,{type:"primary",onClick:N,children:"Save"}),(0,s.jsx)(x.E,{status:n})]})]})};var J=n(69575),$=n.n(J);let{Panel:K}=O.Z,Y="/appearance",G=[{name:"theme-color-users-0",description:""},{name:"theme-color-users-1",description:""},{name:"theme-color-users-2",description:""},{name:"theme-color-users-3",description:""},{name:"theme-color-users-4",description:""},{name:"theme-color-users-5",description:""},{name:"theme-color-users-6",description:""},{name:"theme-color-users-7",description:""}],Q=[{name:"theme-color-palette-0",description:""},{name:"theme-color-palette-1",description:""},{name:"theme-color-palette-2",description:""},{name:"theme-color-palette-3",description:""},{name:"theme-color-palette-4",description:""},{name:"theme-color-palette-5",description:""},{name:"theme-color-palette-6",description:""},{name:"theme-color-palette-7",description:""},{name:"theme-color-palette-8",description:""},{name:"theme-color-palette-9",description:""},{name:"theme-color-palette-10",description:""},{name:"theme-color-palette-11",description:""},{name:"theme-color-palette-12",description:""}],X=[{name:"theme-color-background-main",description:"Background"},{name:"theme-color-action",description:"Action"},{name:"theme-color-action-hover",description:"Action Hover"},{name:"theme-color-components-chat-background",description:"Chat Background"},{name:"theme-color-components-chat-text",description:"Text: Chat"},{name:"theme-color-components-text-on-dark",description:"Text: Light"},{name:"theme-color-components-text-on-light",description:"Text: Dark"},{name:"theme-color-background-header",description:"Header/Footer"},{name:"theme-color-components-content-background",description:"Page Content"},{name:"theme-color-components-scrollbar-background",description:"Scrollbar Background"},{name:"theme-color-components-scrollbar-thumb",description:"Scrollbar Thumb"}],q=[{name:"theme-rounded-corners",description:"Corner radius"}],W=[...Q,...X,...G,...q].reduce((e,t)=>(e[t.name]={name:t.name,description:t.description},e),{});function ee(e){let{value:t,name:n,description:a,onChange:l}=e;return(0,s.jsxs)(I.Z,{span:3,children:[(0,s.jsx)("input",{type:"color",id:n,name:a,title:a,value:t,className:$().colorPicker,onChange:e=>l(n,e.target.value,a)}),(0,s.jsx)("div",{style:{padding:"2px"},children:a})]},n)}function et(){var e,t,n;let l=(0,a.useContext)(o.aC),{serverConfig:i}=l,{instanceDetails:r}=i,{appearanceVariables:d}=r,[u,h]=(0,a.useState)(),[p,g]=(0,a.useState)(null),f=()=>{g(null),clearTimeout(null)},v=()=>{let e={};[...Q,...X,...G,...q].forEach(t=>{let n=getComputedStyle(document.documentElement).getPropertyValue("--".concat(t.name));e[t.name]={value:n.trim(),description:t.description}}),h(e)};(0,a.useEffect)(()=>{v()},[]),(0,a.useEffect)(()=>{if(0===Object.keys(d).length)return;let e=u||{};Object.keys(d).forEach(t=>{var n;e[t]={value:d[t],description:(null===(n=W[t])||void 0===n?void 0:n.description)||""}}),h(e)},[d]);let N=(e,t,n)=>{h({...u,[e]:{value:t,description:n}})},k=async()=>{await (0,c.Si)({apiPath:Y,data:{value:{}},onSuccess:()=>{g((0,j.kg)(j.zv,"Updated.")),setTimeout(f,c.sI),v()},onError:e=>{g((0,j.kg)(j.Un,e)),setTimeout(f,c.sI)}})},y=async()=>{let e={};Object.keys(u).forEach(t=>{e[t]=u[t].value}),await (0,c.Si)({apiPath:Y,data:{value:e},onSuccess:()=>{g((0,j.kg)(j.zv,"Updated.")),setTimeout(f,c.sI)},onError:e=>{g((0,j.kg)(j.Un,e)),setTimeout(f,c.sI)}})},b=e=>{N("theme-rounded-corners","".concat(e.toString(),"px"),"")};return u?(0,s.jsxs)(A.Z,{direction:"vertical",children:[(0,s.jsx)(V.Z,{children:"Customize Appearance"}),(0,s.jsx)(R.Z,{children:"The following colors are used across the user interface."}),(0,s.jsx)("div",{children:(0,s.jsxs)(O.Z,{defaultActiveKey:["1"],children:[(0,s.jsxs)(K,{header:(0,s.jsx)(V.Z,{level:3,children:"Section Colors"}),children:[(0,s.jsx)("p",{children:"Certain sections of the interface can be customized by selecting new colors for them."}),(0,s.jsx)(B.Z,{gutter:[16,16],children:X.map(e=>{let{name:t}=e,n=u[t];return(0,s.jsx)(ee,{value:n.value,name:t,description:n.description,onChange:N},t)})})]},"1"),(0,s.jsx)(K,{header:(0,s.jsx)(V.Z,{level:3,children:"Chat User Colors"}),children:(0,s.jsx)(B.Z,{gutter:[16,16],children:G.map(e=>{let{name:t}=e,n=u[t];return(0,s.jsx)(ee,{value:n.value,name:t,description:n.description,onChange:N},t)})})},"2"),(0,s.jsx)(K,{header:(0,s.jsx)(V.Z,{level:3,children:"Theme Colors"}),children:(0,s.jsx)(B.Z,{gutter:[16,16],children:Q.map(e=>{let{name:t}=e,n=u[t];return(0,s.jsx)(ee,{value:n.value,name:t,description:n.description,onChange:N},t)})})},"3"),(0,s.jsxs)(K,{header:(0,s.jsx)(V.Z,{level:3,children:"Other Settings"}),children:["How rounded should corners be?",(0,s.jsxs)(B.Z,{gutter:[16,16],children:[(0,s.jsx)(I.Z,{span:12,children:(0,s.jsx)(M.Z,{min:0,max:20,tooltip:{formatter:null},onChange:e=>{b(e)},value:Number((null===(e=u["theme-rounded-corners"])||void 0===e?void 0:null===(t=e.value)||void 0===t?void 0:t.replace("px",""))||0)})}),(0,s.jsx)(I.Z,{span:4,children:(0,s.jsx)("div",{style:{width:"100px",height:"30px",borderRadius:"".concat(null===(n=u["theme-rounded-corners"])||void 0===n?void 0:n.value),backgroundColor:"var(--theme-color-palette-7)"}})})]})]},"4")]})}),(0,s.jsxs)(A.Z,{direction:"horizontal",children:[(0,s.jsx)(m.Z,{type:"primary",onClick:y,children:"Save Colors"}),(0,s.jsx)(m.Z,{type:"ghost",onClick:k,children:"Reset to Defaults"})]}),(0,s.jsx)(x.E,{status:p}),(0,s.jsx)("div",{className:"form-module page-content-module",children:(0,s.jsx)(H,{})})]}):(0,s.jsx)("div",{children:"Loading..."})}function en(){return(0,s.jsx)("div",{className:"config-public-details-page",children:(0,s.jsx)(l.Z,{defaultActiveKey:"1",centered:!0,items:[{label:"General",key:"1",children:(0,s.jsx)(L,{})},{label:"Appearance",key:"2",children:(0,s.jsx)(et,{})}]})})}},60956:function(e,t,n){"use strict";n.d(t,{Z7:function(){return s},dr:function(){return a},kR:function(){return i},y3:function(){return l}});let s=2097152,a=["image/png","image/jpeg","image/gif"];function l(e,t){let n=new FileReader;n.addEventListener("load",()=>t(n.result)),n.readAsDataURL(e)}function i(e){let t=Math.floor(Math.log(e)/Math.log(1024)),n=1*Number((e/Math.pow(1024,t)).toFixed(2));return"".concat(n," ").concat(["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t])}},69575:function(e){e.exports={colorPicker:"appearance_colorPicker__xsvcV"}}},function(e){e.O(0,[5762,6880,6386,3698,3013,8213,575,7910,1082,969,7916,1700,1382,5356,9774,2888,179],function(){return e(e.s=39856)}),_N_E=e.O()}]);
//# sourceMappingURL=general-d1c5ccb50b7eba06.js.map
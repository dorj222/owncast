(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5685],{93645:function(e,t,n){"use strict";n.d(t,{u:function(){return o}});var r={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function o(e){return e?r[e]:r.trunc}},59910:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(19013),o=n(13882);function a(e,t){return(0,o.Z)(2,arguments),(0,r.Z)(e).getTime()-(0,r.Z)(t).getTime()}},11699:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(59910),o=n(13882),a=n(93645);function l(e,t,n){(0,o.Z)(2,arguments);var l=(0,r.Z)(e,t)/1e3;return(0,a.u)(null==n?void 0:n.roundingMethod)(l)}},54005:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/actions",function(){return n(2075)}])},2075:function(e,t,n){"use strict";n.r(t);var r=n(85893),o=n(85818),a=n(85402),l=n(79292),i=n(79531),c=n(32808),u=n(26713),s=n(71577),d=n(54398),h=n(96486),p=n.n(h),x=n(5152),f=n.n(x),m=n(67294),y=n(73615),j=n(90745),g=n(41983),v=n(99519),k=n(37174),Z=n(6960);let{Title:w,Paragraph:b}=o.Z,C=f()(()=>Promise.all([n.e(2074),n.e(7949)]).then(n.t.bind(n,77949,23)),{loadableGenerated:{webpack:()=>[77949]},ssr:!1}),I=f()(()=>Promise.all([n.e(2074),n.e(775)]).then(n.t.bind(n,10775,23)),{loadableGenerated:{webpack:()=>[10775]},ssr:!1}),E=e=>{let{onOk:t,onCancel:n,open:o,action:u}=e,[s,d]=(0,m.useState)(""),[h,p]=(0,m.useState)(""),[x,f]=(0,m.useState)(""),[y,j]=(0,m.useState)(""),[g,v]=(0,m.useState)(""),[Z,w]=(0,m.useState)(!1);(0,m.useEffect)(()=>{d((null==u?void 0:u.url)||""),p((null==u?void 0:u.title)||""),f((null==u?void 0:u.description)||""),j((null==u?void 0:u.icon)||""),v((null==u?void 0:u.color)||""),w((null==u?void 0:u.openExternally)||!1)},[u]);let b={disabled:!((0,k.jv)(s,["https:"])&&""!==h)},C=e=>{w(e.target.checked)};return(0,r.jsx)(a.Z,{destroyOnClose:!0,title:null==u?"Create New Action":"Edit Action",open:o,onOk:function(){t(u,s,h,x,y,g,Z),d(""),p(""),f(""),j(""),v(""),w(!1)},onCancel:n,okButtonProps:b,children:(0,r.jsxs)(l.Z,{initialValues:u,children:["Add the URL for the external action you want to present."," ",(0,r.jsx)("strong",{children:"Only HTTPS urls are supported."}),(0,r.jsx)("p",{children:(0,r.jsx)("a",{href:"https://owncast.online/thirdparty/actions/",target:"_blank",rel:"noopener noreferrer",children:"Read more about external actions."})}),(0,r.jsx)(l.Z.Item,{name:"url",children:(0,r.jsx)(i.Z,{required:!0,placeholder:"https://myserver.com/action (required)",onChange:e=>d(e.currentTarget.value.trim()),type:"url",pattern:k.ax})}),(0,r.jsx)(l.Z.Item,{name:"title",children:(0,r.jsx)(i.Z,{value:h,required:!0,placeholder:"Your action title (required)",onChange:e=>p(e.currentTarget.value)})}),(0,r.jsx)(l.Z.Item,{name:"description",children:(0,r.jsx)(i.Z,{value:x,placeholder:"Optional description",onChange:e=>f(e.currentTarget.value)})}),(0,r.jsx)(l.Z.Item,{name:"icon",children:(0,r.jsx)(i.Z,{value:y,placeholder:"https://myserver.com/action/icon.png (optional)",onChange:e=>j(e.currentTarget.value)})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(l.Z.Item,{name:"color",style:{marginBottom:"0px"},children:(0,r.jsx)(i.Z,{type:"color",value:g,onChange:e=>v(e.currentTarget.value)})}),"Optional background color of the action button."]}),(0,r.jsx)(l.Z.Item,{name:"openExternally",children:(0,r.jsx)(c.Z,{checked:Z,defaultChecked:Z,onChange:C,children:"Open in a new tab instead of within your page."})})]})})},S=()=>{let e=(0,m.useContext)(v.aC),{serverConfig:t,setFieldInConfigState:n}=e||{},{externalActions:o}=t,[a,l]=(0,m.useState)(null),[i,c]=(0,m.useState)(!1),[h,x]=(0,m.useState)(null),[f,k]=(0,m.useState)(null),Z=()=>{x(null),clearTimeout(null)};async function S(e){await (0,j.Si)({apiPath:j.os,data:{value:e},onSuccess:()=>{n({fieldName:"externalActions",value:e,path:""}),x((0,g.kg)(g.zv,"Updated.")),setTimeout(Z,j.sI)},onError:e=>{console.log(e),x((0,g.kg)(g.Un,e)),setTimeout(Z,j.sI)}})}async function T(e){let t=[...a],n=a.findIndex(t=>t.url===e.url);t.splice(n,1);try{l(t),S(t)}catch(r){console.error(r)}}async function _(e,t,n,r,o,i,c){try{let u=[...a],s={url:t,title:n,description:r,icon:o,color:i,openExternally:c},d=e?a.findIndex(t=>p().isEqual(t,e)):-1;d>=0?u[d]=s:u.push(s),l(u),await S(u)}catch(h){console.error(h)}}async function O(e){k(e),c(!0)}(0,m.useEffect)(()=>{l(o||[])},[o]);let N=()=>{k(null),c(!0)},P=(e,t,n,r,o,a,l)=>{c(!1),_(e,t,n,r,o,a,l),k(null)},A=()=>{c(!1)};return(0,r.jsxs)("div",{children:[(0,r.jsx)(w,{children:"External Actions"}),(0,r.jsx)(b,{children:"External action URLs are 3rd party UI you can display, embedded, into your Owncast page when a user clicks on a button to launch your action."}),(0,r.jsxs)(b,{children:["Read more about how to use actions, with examples, at"," ",(0,r.jsx)("a",{href:"https://owncast.online/thirdparty/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"our documentation"}),"."]}),(0,r.jsx)(d.Z,{rowKey:e=>"".concat(e.title,"-").concat(e.url),columns:[{title:"",key:"delete-edit",render:(e,t)=>(0,r.jsxs)(u.Z,{size:"middle",children:[(0,r.jsx)(s.Z,{onClick:()=>T(t),icon:(0,r.jsx)(C,{})}),(0,r.jsx)(s.Z,{onClick:()=>O(t),icon:(0,r.jsx)(I,{})})]})},{title:"Name",dataIndex:"title",key:"title"},{title:"Description",dataIndex:"description",key:"description"},{title:"URL",dataIndex:"url",key:"url"},{title:"Icon",dataIndex:"icon",key:"icon",render:e=>e?(0,r.jsx)("img",{style:{width:"2vw"},src:e,alt:""}):null},{title:"Color",dataIndex:"color",key:"color",render:e=>e?(0,r.jsx)("div",{style:{backgroundColor:e,height:"30px"},children:e}):null},{title:"Opens",dataIndex:"openExternally",key:"openExternally",render:e=>e?"In a new tab":"In a modal"}],dataSource:a,pagination:!1}),(0,r.jsx)("br",{}),(0,r.jsx)(s.Z,{type:"primary",onClick:N,children:"Create New Action"}),(0,r.jsx)(y.E,{status:h}),(0,r.jsx)(E,{action:f,open:i,onOk:P,onCancel:A})]})};S.getLayout=function(e){return(0,r.jsx)(Z.l,{page:e})},t.default=S}},function(e){e.O(0,[3662,173,164,2138,31,4931,5402,2231,492,5818,7524,9915,6386,3698,3013,4398,9292,9534,710,6960,9774,2888,179],function(){return e(e.s=54005)}),_N_E=e.O()}]);
//# sourceMappingURL=actions-fe76b39a118538ef.js.map
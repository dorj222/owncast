(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30],{48689:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(1413),l=n(67294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},o=n(42135),s=function(e,t){return l.createElement(o.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:i}))};s.displayName="DeleteOutlined";var r=l.forwardRef(s)},62705:function(e,t,n){var a=n(55639).Symbol;e.exports=a},44239:function(e,t,n){var a=n(62705),l=n(89607),i=n(2333),o=a?a.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":o&&o in Object(e)?l(e):i(e)}},27561:function(e,t,n){var a=n(67990),l=/^\s+/;e.exports=function(e){return e?e.slice(0,a(e)+1).replace(l,""):e}},31957:function(e,t,n){var a="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=a},89607:function(e,t,n){var a=n(62705),l=Object.prototype,i=l.hasOwnProperty,o=l.toString,s=a?a.toStringTag:void 0;e.exports=function(e){var t=i.call(e,s),n=e[s];try{e[s]=void 0;var a=!0}catch(l){}var r=o.call(e);return a&&(t?e[s]=n:delete e[s]),r}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},55639:function(e,t,n){var a=n(31957),l="object"==typeof self&&self&&self.Object===Object&&self,i=a||l||Function("return this")();e.exports=i},67990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:function(e,t,n){var a=n(13218),l=n(7771),i=n(14841),o=Math.max,s=Math.min;e.exports=function(e,t,n){var r,c,u,d,f,p,m=0,h=!1,v=!1,x=!0;if("function"!=typeof e)throw TypeError("Expected a function");function j(t){var n=r,a=c;return r=c=void 0,m=t,d=e.apply(a,n)}function N(e){var n=e-p,a=e-m;return void 0===p||n>=t||n<0||v&&a>=u}function g(){var e,n,a,i=l();if(N(i))return b(i);f=setTimeout(g,(e=i-p,n=i-m,a=t-e,v?s(a,u-n):a))}function b(e){return(f=void 0,x&&r)?j(e):(r=c=void 0,d)}function y(){var e,n=l(),a=N(n);if(r=arguments,c=this,p=n,a){if(void 0===f)return m=e=p,f=setTimeout(g,t),h?j(e):d;if(v)return clearTimeout(f),f=setTimeout(g,t),j(p)}return void 0===f&&(f=setTimeout(g,t)),d}return t=i(t)||0,a(n)&&(h=!!n.leading,u=(v="maxWait"in n)?o(i(n.maxWait)||0,t):u,x="trailing"in n?!!n.trailing:x),y.cancel=function(){void 0!==f&&clearTimeout(f),m=0,r=p=c=f=void 0},y.flush=function(){return void 0===f?d:b(l())},y}},13218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},37005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},33448:function(e,t,n){var a=n(44239),l=n(37005);e.exports=function(e){return"symbol"==typeof e||l(e)&&"[object Symbol]"==a(e)}},7771:function(e,t,n){var a=n(55639);e.exports=function(){return a.Date.now()}},14841:function(e,t,n){var a=n(27561),l=n(13218),i=n(33448),o=0/0,s=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return o;if(l(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=l(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=a(e);var n=r.test(e);return n||c.test(e)?u(e.slice(2),n?2:8):s.test(e)?o:+e}},81009:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-social-items",function(){return n(87945)}])},87652:function(e,t,n){"use strict";n.d(t,{h:function(){return w}});var a=n(85893),l=n(67294),i=n(84485),o=n(71577),s=n(69677),r=n(52206),c=n(85402),u=n(10010),d=n(39398),f=n(48689),p=n(38939),m=n(90745);let h=e=>{let{iconList:t,selectedOption:n,onSelected:l}=e,i=e=>{l&&l(e)},o=""===n?null:n;return(0,a.jsxs)("div",{className:"social-dropdown-container",children:[(0,a.jsx)("p",{className:"description",children:"If you are looking for a platform name not on this list, please select Other and type in your own name. A logo will not be provided."}),(0,a.jsxs)("div",{className:"formfield-container",children:[(0,a.jsx)("div",{className:"label-side",children:(0,a.jsx)("span",{className:"formfield-label",children:"Social Platform"})}),(0,a.jsx)("div",{className:"input-side",children:(0,a.jsxs)(p.Z,{style:{width:240},className:"social-dropdown",placeholder:"Social platform...",defaultValue:o,value:o,onSelect:i,children:[t.map(e=>{let{platform:t,icon:n,key:l}=e;return(0,a.jsxs)(p.Z.Option,{className:"social-option",value:l,children:[(0,a.jsx)("span",{className:"option-icon",children:(0,a.jsx)("img",{src:n,alt:"",className:"option-icon"})}),(0,a.jsx)("span",{className:"option-label",children:t})]},"platform-".concat(l))}),(0,a.jsx)(p.Z.Option,{className:"social-option",value:m.z_,children:"Other..."},"platform-".concat(m.z_))]})})]})]})};var v=n(64777),x=n(99519),j=n(37174),N=n(40117),g=n(41983),b=n(39664);let{Title:y}=i.Z,w=()=>{var e,t;let[n,i]=(0,l.useState)([]),[p,w]=(0,l.useState)([]),[S,k]=(0,l.useState)(!1),[O,Z]=(0,l.useState)(!1),[T,_]=(0,l.useState)(!1),[E,C]=(0,l.useState)(-1),[z,H]=(0,l.useState)(m.wC),[I,P]=(0,l.useState)(null),A=(0,l.useContext)(x.aC),{serverConfig:L,setFieldInConfigState:M}=A||{},{instanceDetails:U}=L,{socialHandles:$}=U,D=async()=>{try{let e=await (0,v.rQ)(v.$i,{auth:!1}),t=Object.keys(e).map(t=>({key:t,...e[t]}));i(t)}catch(n){console.log(n)}},B=e=>n.find(t=>t.key===e)||!1,K=""!==z.platform&&!n.find(e=>e.key===z.platform);(0,l.useEffect)(()=>{D()},[]),(0,l.useEffect)(()=>{U.socialHandles&&w($)},[U]);let R=()=>{P(null),clearTimeout(null)},V=()=>{k(!1),C(-1),Z(!1),_(!1),H({...m.wC})},W=()=>{V()},X=(e,t)=>{H({...z,[e]:t})},F=e=>{e===m.z_?(Z(!0),X("platform","")):(Z(!1),X("platform",e))},Q=e=>{let{value:t}=e.target;X("platform",t)},Y=e=>{let{value:t}=e;X("url",t)},q=async e=>{await (0,m.Si)({apiPath:m.c9,data:{value:e},onSuccess(){M({fieldName:"socialHandles",value:e,path:"instanceDetails"}),_(!1),W(),P((0,g.kg)(g.zv)),setTimeout(R,m.sI)},onError(e){P((0,g.kg)(g.Un,"There was an error: ".concat(e))),_(!1),setTimeout(R,m.sI)}})},G=()=>{_(!0);let e=p.length?[...p]:[];-1===E?e.push(z):e.splice(E,1,z),q(e)},J=e=>{let t=[...p];t.splice(e,1),q(t)},ee=e=>{if(e<=0||e>=p.length)return;let t=[...p],n=t[e-1];t[e-1]=t[e],t[e]=n,q(t)},et=e=>{if(e<0||e>=p.length-1)return;let t=[...p],n=t[e+1];t[e+1]=t[e],t[e]=n,q(t)},en={disabled:(e=z.url,"xmpp"===(t=z.platform)?!(0,j.Kf)(e,"xmpp"):"matrix"===t?!(0,j.bu)(e):!(0,j.jv)(e))},ea=(0,a.jsxs)("div",{className:"other-field-container formfield-container",children:[(0,a.jsx)("div",{className:"label-side"}),(0,a.jsx)("div",{className:"input-side",children:(0,a.jsx)(s.Z,{placeholder:"Other platform name",defaultValue:z.platform,onChange:Q})})]});return(0,a.jsxs)("div",{className:"social-links-edit-container",children:[(0,a.jsx)(y,{level:3,className:"section-title",children:"Your Social Handles"}),(0,a.jsx)("p",{className:"description",children:"Add all your social media handles and links to your other profiles here."}),(0,a.jsx)(b.E,{status:I}),(0,a.jsx)(r.Z,{className:"social-handles-table",pagination:!1,size:"small",rowKey:e=>"".concat(e.platform,"-").concat(e.url),columns:[{title:"Social Link",dataIndex:"",key:"combo",render(e,t){let{platform:n,url:l}=t,i=B(n);if(!i)return(0,a.jsx)("div",{className:"social-handle-cell",children:(0,a.jsxs)("p",{className:"option-label",children:[(0,a.jsx)("strong",{children:n}),(0,a.jsx)("span",{className:"handle-url",title:l,children:l})]})});let{icon:o,platform:s}=i;return(0,a.jsxs)("div",{className:"social-handle-cell",children:[(0,a.jsx)("span",{className:"option-icon",children:(0,a.jsx)("img",{src:o,alt:"",className:"option-icon"})}),(0,a.jsxs)("p",{className:"option-label",children:[(0,a.jsx)("strong",{children:s}),(0,a.jsx)("span",{className:"handle-url",title:l,children:l})]})]})}},{title:"",dataIndex:"",key:"edit",render:(e,t,n)=>(0,a.jsxs)("div",{className:"actions",children:[(0,a.jsx)(o.Z,{size:"small",onClick(){let e=p[n];C(n),H({...e}),k(!0),B(e.platform)||Z(!0)},children:"Edit"}),(0,a.jsx)(o.Z,{icon:(0,a.jsx)(u.Z,{}),size:"small",hidden:0===n,onClick:()=>ee(n)}),(0,a.jsx)(o.Z,{icon:(0,a.jsx)(d.Z,{}),size:"small",hidden:n===p.length-1,onClick:()=>et(n)}),(0,a.jsx)(o.Z,{className:"delete-button",icon:(0,a.jsx)(f.Z,{}),size:"small",onClick:()=>J(n)})]})}],dataSource:p}),(0,a.jsx)(c.Z,{title:"Edit Social Handle",open:S,onOk:G,onCancel:W,confirmLoading:T,okButtonProps:en,children:(0,a.jsxs)("div",{className:"social-handle-modal-content",children:[(0,a.jsx)(h,{iconList:n,selectedOption:K?m.z_:z.platform,onSelected:F}),O&&ea,(0,a.jsx)("br",{}),(0,a.jsx)(N.nv,{fieldName:"social-url",label:"URL",placeholder:{mastodon:"https://mastodon.social/@username",twitter:"https://twitter.com/username"}[z.platform]||"Url to page",value:z.url,onChange:Y,useTrim:!0,type:"url",pattern:j.ax}),(0,a.jsx)(b.E,{status:I})]})}),(0,a.jsx)("br",{}),(0,a.jsx)(o.Z,{type:"primary",onClick(){V(),k(!0)},children:"Add a new social link"})]})}},87945:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var a=n(85893);n(67294);var l=n(84485),i=n(87652);let{Title:o}=l.Z;function s(){return(0,a.jsxs)("div",{className:"config-social-items",children:[(0,a.jsx)(o,{children:"Social Items"}),(0,a.jsx)(i.h,{})]})}}},function(e){e.O(0,[4485,8909,3903,4267,2206,9774,2888,179],function(){return e(e.s=81009)}),_N_E=e.O()}]);
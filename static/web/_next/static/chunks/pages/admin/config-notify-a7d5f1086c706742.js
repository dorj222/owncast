(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4440],{24308:function(e,n,t){"use strict";t.d(n,{c4:function(){return i}});var a=t(4942),r=t(87462),i=["xxl","xl","lg","md","sm","xs"],s={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},o=new Map,l=-1,c={};n.ZP={matchHandlers:{},dispatch:function(e){return c=e,o.forEach(function(e){return e(c)}),o.size>=1},subscribe:function(e){return o.size||this.register(),l+=1,o.set(l,e),e(c),l},unsubscribe:function(e){o.delete(e),o.size||this.unregister()},unregister:function(){var e=this;Object.keys(s).forEach(function(n){var t=s[n],a=e.matchHandlers[t];null==a||a.mql.removeListener(null==a?void 0:a.listener)}),o.clear()},register:function(){var e=this;Object.keys(s).forEach(function(n){var t=s[n],i=function(t){var i=t.matches;e.dispatch((0,r.Z)((0,r.Z)({},c),(0,a.Z)({},n,i)))},o=window.matchMedia(t);o.addListener(i),e.matchHandlers[t]={mql:o,listener:i},i(o)})}}},15746:function(e,n,t){"use strict";var a=t(21584);n.Z=a.Z},99134:function(e,n,t){"use strict";var a=(0,t(67294).createContext)({});n.Z=a},21584:function(e,n,t){"use strict";var a=t(4942),r=t(87462),i=t(71002),s=t(94184),o=t.n(s),l=t(67294),c=t(53124),d=t(99134),u=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>n.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>n.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t},f=["xs","sm","md","lg","xl","xxl"],p=l.forwardRef(function(e,n){var t,s=l.useContext(c.E_),p=s.getPrefixCls,h=s.direction,m=l.useContext(d.Z),x=m.gutter,g=m.wrap,v=m.supportFlexGap,b=e.prefixCls,y=e.span,Z=e.order,j=e.offset,w=e.push,C=e.pull,k=e.className,N=e.children,E=e.flex,O=e.style,S=u(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),P=p("col",b),T={};f.forEach(function(n){var t,s={},o=e[n];"number"==typeof o?s.span=o:"object"===(0,i.Z)(o)&&(s=o||{}),delete S[n],T=(0,r.Z)((0,r.Z)({},T),(t={},(0,a.Z)(t,"".concat(P,"-").concat(n,"-").concat(s.span),void 0!==s.span),(0,a.Z)(t,"".concat(P,"-").concat(n,"-order-").concat(s.order),s.order||0===s.order),(0,a.Z)(t,"".concat(P,"-").concat(n,"-offset-").concat(s.offset),s.offset||0===s.offset),(0,a.Z)(t,"".concat(P,"-").concat(n,"-push-").concat(s.push),s.push||0===s.push),(0,a.Z)(t,"".concat(P,"-").concat(n,"-pull-").concat(s.pull),s.pull||0===s.pull),(0,a.Z)(t,"".concat(P,"-rtl"),"rtl"===h),t))});var _=o()(P,(t={},(0,a.Z)(t,"".concat(P,"-").concat(y),void 0!==y),(0,a.Z)(t,"".concat(P,"-order-").concat(Z),Z),(0,a.Z)(t,"".concat(P,"-offset-").concat(j),j),(0,a.Z)(t,"".concat(P,"-push-").concat(w),w),(0,a.Z)(t,"".concat(P,"-pull-").concat(C),C),t),k,T),L={};if(x&&x[0]>0){var I=x[0]/2;L.paddingLeft=I,L.paddingRight=I}if(x&&x[1]>0&&!v){var F=x[1]/2;L.paddingTop=F,L.paddingBottom=F}return E&&(L.flex="number"==typeof E?"".concat(E," ").concat(E," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(E)?"0 0 ".concat(E):E,!1!==g||L.minWidth||(L.minWidth=0)),l.createElement("div",(0,r.Z)({},S,{style:(0,r.Z)((0,r.Z)({},L),O),className:_,ref:n}),N)});n.Z=p},92820:function(e,n,t){"use strict";var a=t(87462),r=t(4942),i=t(71002),s=t(97685),o=t(94184),l=t.n(o),c=t(67294),d=t(53124),u=t(98082),f=t(24308),p=t(93355),h=t(99134),m=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>n.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>n.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};function x(e,n){var t=c.useState("string"==typeof e?e:""),a=(0,s.Z)(t,2),r=a[0],o=a[1],l=function(){if("object"===(0,i.Z)(e))for(var t=0;t<f.c4.length;t++){var a=f.c4[t];if(n[a]){var r=e[a];if(void 0!==r){o(r);return}}}};return c.useEffect(function(){l()},[JSON.stringify(e),n]),r}(0,p.b)("top","middle","bottom","stretch"),(0,p.b)("start","end","center","space-around","space-between","space-evenly");var g=c.forwardRef(function(e,n){var t,o,p=e.prefixCls,g=e.justify,v=e.align,b=e.className,y=e.style,Z=e.children,j=e.gutter,w=void 0===j?0:j,C=e.wrap,k=m(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),N=c.useContext(d.E_),E=N.getPrefixCls,O=N.direction,S=c.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),P=(0,s.Z)(S,2),T=P[0],_=P[1],L=c.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),I=(0,s.Z)(L,2),F=I[0],D=I[1],U=x(v,F),A=x(g,F),R=(0,u.Z)(),z=c.useRef(w);c.useEffect(function(){var e=f.ZP.subscribe(function(e){D(e);var n=z.current||0;(!Array.isArray(n)&&"object"===(0,i.Z)(n)||Array.isArray(n)&&("object"===(0,i.Z)(n[0])||"object"===(0,i.Z)(n[1])))&&_(e)});return function(){return f.ZP.unsubscribe(e)}},[]);var H=E("row",p),M=(t=[void 0,void 0],(Array.isArray(w)?w:[w,void 0]).forEach(function(e,n){if("object"===(0,i.Z)(e))for(var a=0;a<f.c4.length;a++){var r=f.c4[a];if(T[r]&&void 0!==e[r]){t[n]=e[r];break}}else t[n]=e}),t),q=l()(H,(o={},(0,r.Z)(o,"".concat(H,"-no-wrap"),!1===C),(0,r.Z)(o,"".concat(H,"-").concat(A),A),(0,r.Z)(o,"".concat(H,"-").concat(U),U),(0,r.Z)(o,"".concat(H,"-rtl"),"rtl"===O),o),b),B={},G=null!=M[0]&&M[0]>0?-(M[0]/2):void 0,J=null!=M[1]&&M[1]>0?-(M[1]/2):void 0;if(G&&(B.marginLeft=G,B.marginRight=G),R){var K=(0,s.Z)(M,2);B.rowGap=K[1]}else J&&(B.marginTop=J,B.marginBottom=J);var V=(0,s.Z)(M,2),W=V[0],X=V[1],$=c.useMemo(function(){return{gutter:[W,X],wrap:C,supportFlexGap:R}},[W,X,C,R]);return c.createElement(h.Z.Provider,{value:$},c.createElement("div",(0,a.Z)({},k,{className:q,style:(0,a.Z)((0,a.Z)({},B),y),ref:n}),Z))});n.Z=g},71230:function(e,n,t){"use strict";var a=t(92820);n.Z=a.Z},94594:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var a=t(87462),r=t(4942),i=t(50888),s=t(94184),o=t.n(s),l=t(97685),c=t(45987),d=t(67294),u=t(21770),f=t(15105),p=d.forwardRef(function(e,n){var t,a=e.prefixCls,i=void 0===a?"rc-switch":a,s=e.className,p=e.checked,h=e.defaultChecked,m=e.disabled,x=e.loadingIcon,g=e.checkedChildren,v=e.unCheckedChildren,b=e.onClick,y=e.onChange,Z=e.onKeyDown,j=(0,c.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),w=(0,u.Z)(!1,{value:p,defaultValue:h}),C=(0,l.Z)(w,2),k=C[0],N=C[1];function E(e,n){var t=k;return m||(N(t=e),null==y||y(t,n)),t}var O=o()(i,s,(t={},(0,r.Z)(t,"".concat(i,"-checked"),k),(0,r.Z)(t,"".concat(i,"-disabled"),m),t));return d.createElement("button",Object.assign({},j,{type:"button",role:"switch","aria-checked":k,disabled:m,className:O,ref:n,onKeyDown:function(e){e.which===f.Z.LEFT?E(!1,e):e.which===f.Z.RIGHT&&E(!0,e),null==Z||Z(e)},onClick:function(e){var n=E(!k,e);null==b||b(n,e)}}),x,d.createElement("span",{className:"".concat(i,"-inner")},k?g:v))});p.displayName="Switch";var h=t(53124),m=t(98866),x=t(97647),g=t(68349),v=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>n.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>n.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t},b=d.forwardRef(function(e,n){var t,s=e.prefixCls,l=e.size,c=e.disabled,u=e.loading,f=e.className,b=v(e,["prefixCls","size","disabled","loading","className"]),y=d.useContext(h.E_),Z=y.getPrefixCls,j=y.direction,w=d.useContext(x.Z),C=d.useContext(m.Z),k=Z("switch",s),N=d.createElement("div",{className:"".concat(k,"-handle")},u&&d.createElement(i.Z,{className:"".concat(k,"-loading-icon")})),E=o()((t={},(0,r.Z)(t,"".concat(k,"-small"),"small"===(l||w)),(0,r.Z)(t,"".concat(k,"-loading"),u),(0,r.Z)(t,"".concat(k,"-rtl"),"rtl"===j),t),void 0===f?"":f);return d.createElement(g.Z,{insertExtraNode:!0},d.createElement(p,(0,a.Z)({},b,{prefixCls:k,className:E,disabled:(null!=c?c:C)||u,ref:n,loadingIcon:N})))});b.__ANT_SWITCH=!0;var y=b},7148:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-notify",function(){return t(86686)}])},6979:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var a=t(85893),r=t(67294),i=t(94594),s=t(41983),o=t(73615),l=t(90745),c=t(99519);let d=e=>{let{apiPath:n,checked:t,reversed:d=!1,configPath:u="",disabled:f=!1,fieldName:p,label:h,tip:m,useSubmit:x,onChange:g}=e,[v,b]=(0,r.useState)(null),y=null,Z=(0,r.useContext)(c.aC),{setFieldInConfigState:j}=Z||{},w=()=>{b(null),clearTimeout(y),y=null},C=async e=>{if(x){b((0,s.kg)(s.Jk));let t=d?!e:e;await (0,l.Si)({apiPath:n,data:{value:t},onSuccess:()=>{j({fieldName:p,value:t,path:u}),b((0,s.kg)(s.zv))},onError:e=>{b((0,s.kg)(s.Un,"There was an error: ".concat(e)))}}),y=setTimeout(w,l.sI)}g&&g(e)},k=null!==v&&v.type===s.Jk;return(0,a.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[h&&(0,a.jsx)("div",{className:"label-side",children:(0,a.jsx)("span",{className:"formfield-label",children:h})}),(0,a.jsxs)("div",{className:"input-side",children:[(0,a.jsxs)("div",{className:"input-group",children:[(0,a.jsx)(i.Z,{className:"switch field-".concat(p),loading:k,onChange:C,defaultChecked:t,checked:t,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:f}),(0,a.jsx)(o.E,{status:v})]}),(0,a.jsx)("p",{className:"field-tip",children:m})]})]})};d.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},86686:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return O}});var a=t(85893),r=t(85818),i=t(14670),s=t(71230),o=t(15746),l=t(71577),c=t(67294),d=t(41664),u=t.n(d),f=t(99519),p=t(79139),h=t(73615),m=t(90745),x=t(6979),g=t(41983);let{Title:v}=r.Z,b=()=>{let e=(0,c.useContext)(f.aC),{serverConfig:n,setFieldInConfigState:t}=e||{},{notifications:r}=n||{},{discord:i}=r||{},{enabled:s,webhook:o,goLiveMessage:d}=i||{},[u,b]=(0,c.useState)({}),[y,Z]=(0,c.useState)(null),[j,w]=(0,c.useState)(!1);(0,c.useEffect)(()=>{b({enabled:s,webhook:o,goLiveMessage:d})},[r,i]);let C=()=>""!==o&&""!==d,k=e=>{let{fieldName:n,value:t}=e;b({...u,[n]:t}),w(C())},N=()=>{Z(null),clearTimeout(null)},E=async()=>{await (0,m.Si)({apiPath:"/notifications/discord",data:{value:u},onSuccess:()=>{t({fieldName:"discord",value:u,path:"notifications"}),Z((0,g.kg)(g.zv,"Updated.")),setTimeout(N,m.sI)},onError:e=>{Z((0,g.kg)(g.Un,e)),setTimeout(N,m.sI)}})},O=e=>{k({fieldName:"enabled",value:e})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(v,{children:"Discord"}),(0,a.jsx)("p",{className:"description reduced-margins",children:"Let your Discord channel know each time you go live."}),(0,a.jsxs)("p",{className:"description reduced-margins",children:[(0,a.jsx)("a",{href:"https://support.discord.com/hc/en-us/articles/228383668",target:"_blank",rel:"noreferrer",children:"Create a webhook"})," ","under ",(0,a.jsx)("i",{children:"Edit Channel / Integrations"})," on your Discord channel and provide it below."]}),(0,a.jsx)(x.Z,{apiPath:"",fieldName:"discordEnabled",label:"Enable Discord",checked:u.enabled,onChange:O}),(0,a.jsx)("div",{style:{display:u.enabled?"block":"none"},children:(0,a.jsx)(p.nv,{...m.oy.webhookUrl,required:!0,value:u.webhook,onChange:k})}),(0,a.jsx)("div",{style:{display:u.enabled?"block":"none"},children:(0,a.jsx)(p.nv,{...m.oy.goLiveMessage,required:!0,value:u.goLiveMessage,onChange:k})}),(0,a.jsx)(l.Z,{type:"primary",onClick:E,style:{display:j?"inline-block":"none",position:"relative",marginLeft:"auto",right:"0",marginTop:"20px"},children:"Save"}),(0,a.jsx)(h.E,{status:y})]})},{Title:y}=r.Z,Z=()=>{let e=(0,c.useContext)(f.aC),{serverConfig:n,setFieldInConfigState:t}=e||{},{notifications:r}=n||{},{browser:i}=r||{},{enabled:s,goLiveMessage:o}=i||{},[d,u]=(0,c.useState)({}),[v,b]=(0,c.useState)(null),[Z,j]=(0,c.useState)(!1);(0,c.useEffect)(()=>{u({enabled:s,goLiveMessage:o})},[r,i]);let w=()=>!0,C=e=>{let{fieldName:n,value:t}=e;console.log(n,t),u({...d,[n]:t}),j(w())},k=e=>{C({fieldName:"enabled",value:e})},N=()=>{b(null),clearTimeout(null)},E=async()=>{await (0,m.Si)({apiPath:"/notifications/browser",data:{value:d},onSuccess:()=>{t({fieldName:"browser",value:d,path:"notifications"}),b((0,g.kg)(g.zv,"Updated.")),setTimeout(N,m.sI)},onError:e=>{b((0,g.kg)(g.Un,e)),setTimeout(N,m.sI)}})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(y,{children:"Browser Alerts"}),(0,a.jsx)("p",{className:"description reduced-margins",children:"Viewers can opt into being notified when you go live with their browser."}),(0,a.jsx)("p",{className:"description reduced-margins",children:"Not all browsers support this."}),(0,a.jsx)(x.Z,{apiPath:"",fieldName:"enabled",label:"Enable browser notifications",onChange:k,checked:d.enabled}),(0,a.jsx)("div",{style:{display:d.enabled?"block":"none"},children:(0,a.jsx)(p.nv,{...m.mv.goLiveMessage,required:!0,type:p.Sk,value:d.goLiveMessage,onChange:C})}),(0,a.jsx)(l.Z,{type:"primary",style:{display:Z?"inline-block":"none",position:"relative",marginLeft:"auto",right:"0",marginTop:"20px"},onClick:E,children:"Save"}),(0,a.jsx)(h.E,{status:v})]})},{Title:j}=r.Z,w=()=>{let e=(0,c.useContext)(f.aC),{serverConfig:n}=e||{},{federation:t}=n||{},{enabled:r}=t||{},[i,s]=(0,c.useState)({});return(0,c.useEffect)(()=>{s({enabled:r})},[r]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(j,{children:"Fediverse Social"}),(0,a.jsx)("p",{className:"description",children:"Enabling the Fediverse social features will not just alert people to when you go live, but also enable other functionality."}),(0,a.jsxs)("p",{children:["Fediverse social features:"," ",(0,a.jsx)("span",{style:{color:t.enabled?"green":"red"},children:i.enabled?"Enabled":"Disabled"})]}),(0,a.jsx)(u(),{passHref:!0,href:"/config-federation",children:(0,a.jsx)(l.Z,{type:"primary",style:{position:"relative",marginLeft:"auto",right:"0",marginTop:"20px"},children:"Configure"})})]})};var C=t(46551),k=t(37174),N=t(6960);let{Title:E}=r.Z;function O(){let[e,n]=(0,c.useState)(null),t=(0,c.useContext)(f.aC),{serverConfig:r}=t||{},{yp:d}=r,{instanceUrl:p}=d,[h,x]=(0,c.useState)(!1);(0,c.useEffect)(()=>{n({instanceUrl:p})},[d]);let g=()=>{h&&n({...e,enabled:!1})},v=t=>{let{fieldName:a,value:r}=t;x((0,k.jv)(r)),n({...e,[a]:r})},y=""!==p,j=!y&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{message:"You must set your server URL before you can enable this feature.",type:"warning",showIcon:!0}),(0,a.jsx)("br",{}),(0,a.jsx)(C.$7,{fieldName:"instanceUrl",...m.yi,value:(null==e?void 0:e.instanceUrl)||"",initialValue:d.instanceUrl,type:C.xA,onChange:v,onSubmit:g,required:!0})]});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(E,{children:"Notifications"}),(0,a.jsxs)("p",{className:"description",children:["Let your viewers know when you go live by supporting any of the below notification channels."," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/notifications/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Learn more about live notifications."})]}),j,(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(o.Z,{span:10,className:"form-module ".concat(y?"":"disabled"),style:{margin:"5px",display:"flex",flexDirection:"column"},children:(0,a.jsx)(Z,{})}),(0,a.jsx)(o.Z,{span:10,className:"form-module ".concat(y?"":"disabled"),style:{margin:"5px",display:"flex",flexDirection:"column"},children:(0,a.jsx)(b,{})}),(0,a.jsx)(o.Z,{span:10,className:"form-module ".concat(y?"":"disabled"),style:{margin:"5px",display:"flex",flexDirection:"column"},children:(0,a.jsx)(w,{})}),(0,a.jsxs)(o.Z,{span:10,className:"form-module ".concat(y?"":"disabled"),style:{margin:"5px",display:"flex",flexDirection:"column"},children:[(0,a.jsx)(E,{children:"Custom"}),(0,a.jsx)("p",{className:"description",children:"Build your own notifications by using custom webhooks."}),(0,a.jsx)(u(),{passHref:!0,href:"/admin/webhooks",children:(0,a.jsx)(l.Z,{type:"primary",style:{position:"relative",marginLeft:"auto",right:"0",marginTop:"20px"},children:"Create"})})]})]})]})}O.getLayout=function(e){return(0,a.jsx)(N.l,{page:e})}}},function(e){e.O(0,[173,164,2138,31,4931,5402,2231,7118,5818,9915,8883,710,6960,9774,2888,179],function(){return e(e.s=7148)}),_N_E=e.O()}]);
//# sourceMappingURL=config-notify-a7d5f1086c706742.js.map
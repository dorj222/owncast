(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2532],{24308:function(e,t,n){"use strict";n.d(t,{c4:function(){return s}});var r=n(4942),a=n(87462),s=["xxl","xl","lg","md","sm","xs"],l={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},o=new Map,i=-1,c={};t.ZP={matchHandlers:{},dispatch:function(e){return c=e,o.forEach(function(e){return e(c)}),o.size>=1},subscribe:function(e){return o.size||this.register(),i+=1,o.set(i,e),e(c),i},unsubscribe:function(e){o.delete(e),o.size||this.unregister()},unregister:function(){var e=this;Object.keys(l).forEach(function(t){var n=l[t],r=e.matchHandlers[n];null==r||r.mql.removeListener(null==r?void 0:r.listener)}),o.clear()},register:function(){var e=this;Object.keys(l).forEach(function(t){var n=l[t],s=function(n){var s=n.matches;e.dispatch((0,a.Z)((0,a.Z)({},c),(0,r.Z)({},t,s)))},o=window.matchMedia(n);o.addListener(s),e.matchHandlers[n]={mql:o,listener:s},s(o)})}}},15746:function(e,t,n){"use strict";var r=n(21584);t.Z=r.Z},99134:function(e,t,n){"use strict";var r=(0,n(67294).createContext)({});t.Z=r},21584:function(e,t,n){"use strict";var r=n(4942),a=n(87462),s=n(71002),l=n(94184),o=n.n(l),i=n(67294),c=n(53124),u=n(99134),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},f=["xs","sm","md","lg","xl","xxl"],h=i.forwardRef(function(e,t){var n,l=i.useContext(c.E_),h=l.getPrefixCls,p=l.direction,m=i.useContext(u.Z),v=m.gutter,g=m.wrap,b=m.supportFlexGap,x=e.prefixCls,y=e.span,w=e.order,Z=e.offset,j=e.push,C=e.pull,k=e.className,O=e.children,N=e.flex,E=e.style,P=d(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),S=h("col",x),_={};f.forEach(function(t){var n,l={},o=e[t];"number"==typeof o?l.span=o:"object"===(0,s.Z)(o)&&(l=o||{}),delete P[t],_=(0,a.Z)((0,a.Z)({},_),(n={},(0,r.Z)(n,"".concat(S,"-").concat(t,"-").concat(l.span),void 0!==l.span),(0,r.Z)(n,"".concat(S,"-").concat(t,"-order-").concat(l.order),l.order||0===l.order),(0,r.Z)(n,"".concat(S,"-").concat(t,"-offset-").concat(l.offset),l.offset||0===l.offset),(0,r.Z)(n,"".concat(S,"-").concat(t,"-push-").concat(l.push),l.push||0===l.push),(0,r.Z)(n,"".concat(S,"-").concat(t,"-pull-").concat(l.pull),l.pull||0===l.pull),(0,r.Z)(n,"".concat(S,"-rtl"),"rtl"===p),n))});var R=o()(S,(n={},(0,r.Z)(n,"".concat(S,"-").concat(y),void 0!==y),(0,r.Z)(n,"".concat(S,"-order-").concat(w),w),(0,r.Z)(n,"".concat(S,"-offset-").concat(Z),Z),(0,r.Z)(n,"".concat(S,"-push-").concat(j),j),(0,r.Z)(n,"".concat(S,"-pull-").concat(C),C),n),k,_),T={};if(v&&v[0]>0){var I=v[0]/2;T.paddingLeft=I,T.paddingRight=I}if(v&&v[1]>0&&!b){var L=v[1]/2;T.paddingTop=L,T.paddingBottom=L}return N&&(T.flex="number"==typeof N?"".concat(N," ").concat(N," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(N)?"0 0 ".concat(N):N,!1!==g||T.minWidth||(T.minWidth=0)),i.createElement("div",(0,a.Z)({},P,{style:(0,a.Z)((0,a.Z)({},T),E),className:R,ref:t}),O)});t.Z=h},92820:function(e,t,n){"use strict";var r=n(87462),a=n(4942),s=n(71002),l=n(97685),o=n(94184),i=n.n(o),c=n(67294),u=n(53124),d=n(98082),f=n(24308),h=n(93355),p=n(99134),m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function v(e,t){var n=c.useState("string"==typeof e?e:""),r=(0,l.Z)(n,2),a=r[0],o=r[1],i=function(){if("object"===(0,s.Z)(e))for(var n=0;n<f.c4.length;n++){var r=f.c4[n];if(t[r]){var a=e[r];if(void 0!==a){o(a);return}}}};return c.useEffect(function(){i()},[JSON.stringify(e),t]),a}(0,h.b)("top","middle","bottom","stretch"),(0,h.b)("start","end","center","space-around","space-between","space-evenly");var g=c.forwardRef(function(e,t){var n,o,h=e.prefixCls,g=e.justify,b=e.align,x=e.className,y=e.style,w=e.children,Z=e.gutter,j=void 0===Z?0:Z,C=e.wrap,k=m(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),O=c.useContext(u.E_),N=O.getPrefixCls,E=O.direction,P=c.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),S=(0,l.Z)(P,2),_=S[0],R=S[1],T=c.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),I=(0,l.Z)(T,2),L=I[0],F=I[1],U=v(b,L),D=v(g,L),z=(0,d.Z)(),A=c.useRef(j);c.useEffect(function(){var e=f.ZP.subscribe(function(e){F(e);var t=A.current||0;(!Array.isArray(t)&&"object"===(0,s.Z)(t)||Array.isArray(t)&&("object"===(0,s.Z)(t[0])||"object"===(0,s.Z)(t[1])))&&R(e)});return function(){return f.ZP.unsubscribe(e)}},[]);var q=N("row",h),H=(n=[void 0,void 0],(Array.isArray(j)?j:[j,void 0]).forEach(function(e,t){if("object"===(0,s.Z)(e))for(var r=0;r<f.c4.length;r++){var a=f.c4[r];if(_[a]&&void 0!==e[a]){n[t]=e[a];break}}else n[t]=e}),n),K=i()(q,(o={},(0,a.Z)(o,"".concat(q,"-no-wrap"),!1===C),(0,a.Z)(o,"".concat(q,"-").concat(D),D),(0,a.Z)(o,"".concat(q,"-").concat(U),U),(0,a.Z)(o,"".concat(q,"-rtl"),"rtl"===E),o),x),M={},W=null!=H[0]&&H[0]>0?-(H[0]/2):void 0,Y=null!=H[1]&&H[1]>0?-(H[1]/2):void 0;if(W&&(M.marginLeft=W,M.marginRight=W),z){var $=(0,l.Z)(H,2);M.rowGap=$[1]}else Y&&(M.marginTop=Y,M.marginBottom=Y);var G=(0,l.Z)(H,2),V=G[0],B=G[1],J=c.useMemo(function(){return{gutter:[V,B],wrap:C,supportFlexGap:z}},[V,B,C,z]);return c.createElement(p.Z.Provider,{value:J},c.createElement("div",(0,r.Z)({},k,{className:K,style:(0,r.Z)((0,r.Z)({},M),y),ref:t}),w))});t.Z=g},71230:function(e,t,n){"use strict";var r=n(92820);t.Z=r.Z},94594:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(87462),a=n(4942),s=n(50888),l=n(94184),o=n.n(l),i=n(97685),c=n(45987),u=n(67294),d=n(21770),f=n(15105),h=u.forwardRef(function(e,t){var n,r=e.prefixCls,s=void 0===r?"rc-switch":r,l=e.className,h=e.checked,p=e.defaultChecked,m=e.disabled,v=e.loadingIcon,g=e.checkedChildren,b=e.unCheckedChildren,x=e.onClick,y=e.onChange,w=e.onKeyDown,Z=(0,c.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),j=(0,d.Z)(!1,{value:h,defaultValue:p}),C=(0,i.Z)(j,2),k=C[0],O=C[1];function N(e,t){var n=k;return m||(O(n=e),null==y||y(n,t)),n}var E=o()(s,l,(n={},(0,a.Z)(n,"".concat(s,"-checked"),k),(0,a.Z)(n,"".concat(s,"-disabled"),m),n));return u.createElement("button",Object.assign({},Z,{type:"button",role:"switch","aria-checked":k,disabled:m,className:E,ref:t,onKeyDown:function(e){e.which===f.Z.LEFT?N(!1,e):e.which===f.Z.RIGHT&&N(!0,e),null==w||w(e)},onClick:function(e){var t=N(!k,e);null==x||x(t,e)}}),v,u.createElement("span",{className:"".concat(s,"-inner")},k?g:b))});h.displayName="Switch";var p=n(53124),m=n(98866),v=n(97647),g=n(68349),b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},x=u.forwardRef(function(e,t){var n,l=e.prefixCls,i=e.size,c=e.disabled,d=e.loading,f=e.className,x=b(e,["prefixCls","size","disabled","loading","className"]),y=u.useContext(p.E_),w=y.getPrefixCls,Z=y.direction,j=u.useContext(v.Z),C=u.useContext(m.Z),k=w("switch",l),O=u.createElement("div",{className:"".concat(k,"-handle")},d&&u.createElement(s.Z,{className:"".concat(k,"-loading-icon")})),N=o()((n={},(0,a.Z)(n,"".concat(k,"-small"),"small"===(i||j)),(0,a.Z)(n,"".concat(k,"-loading"),d),(0,a.Z)(n,"".concat(k,"-rtl"),"rtl"===Z),n),void 0===f?"":f);return u.createElement(g.Z,{insertExtraNode:!0},u.createElement(h,(0,r.Z)({},x,{prefixCls:k,className:N,disabled:(null!=c?c:C)||d,ref:t,loadingIcon:O})))});x.__ANT_SWITCH=!0;var y=x},20550:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(4942),a=n(87462),s=n(97685),l=n(97937),o=n(94184),i=n.n(o),c=n(98423),u=n(67294),d=n(53124),f=n(98787),h=n(68349),p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},v=RegExp("^(".concat(f.Y.join("|"),")(-inverse)?$")),g=RegExp("^(".concat(f.E.join("|"),")$")),b=u.forwardRef(function(e,t){var n,o=e.prefixCls,f=e.className,p=e.style,b=e.children,x=e.icon,y=e.color,w=e.onClose,Z=e.closeIcon,j=e.closable,C=m(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),k=u.useContext(d.E_),O=k.getPrefixCls,N=k.direction,E=u.useState(!0),P=(0,s.Z)(E,2),S=P[0],_=P[1];u.useEffect(function(){"visible"in C&&_(C.visible)},[C.visible]);var R=function(){return!!y&&(v.test(y)||g.test(y))},T=(0,a.Z)({backgroundColor:y&&!R()?y:void 0},p),I=R(),L=O("tag",o),F=i()(L,(n={},(0,r.Z)(n,"".concat(L,"-").concat(y),I),(0,r.Z)(n,"".concat(L,"-has-color"),y&&!I),(0,r.Z)(n,"".concat(L,"-hidden"),!S),(0,r.Z)(n,"".concat(L,"-rtl"),"rtl"===N),n),f),U=function(e){e.stopPropagation(),null==w||w(e),!e.defaultPrevented&&("visible"in C||_(!1))},D="onClick"in C||b&&"a"===b.type,z=(0,c.Z)(C,["visible"]),A=x||null,q=A?u.createElement(u.Fragment,null,A,u.createElement("span",null,b)):b,H=u.createElement("span",(0,a.Z)({},z,{ref:t,className:F,style:T}),q,void 0!==j&&j?Z?u.createElement("span",{className:"".concat(L,"-close-icon"),onClick:U},Z):u.createElement(l.Z,{className:"".concat(L,"-close-icon"),onClick:U}):null);return D?u.createElement(h.Z,null,H):H});b.CheckableTag=function(e){var t,n=e.prefixCls,s=e.className,l=e.checked,o=e.onChange,c=e.onClick,f=p(e,["prefixCls","className","checked","onChange","onClick"]),h=(0,u.useContext(d.E_).getPrefixCls)("tag",n),m=i()(h,(t={},(0,r.Z)(t,"".concat(h,"-checkable"),!0),(0,r.Z)(t,"".concat(h,"-checkable-checked"),l),t),s);return u.createElement("span",(0,a.Z)({},f,{className:m,onClick:function(e){null==o||o(!l),null==c||c(e)}}))};var x=b},18957:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-federation",function(){return n(37990)}])},48186:function(e,t,n){"use strict";n.d(t,{Q:function(){return u},Y:function(){return d}});var r=n(85893),a=n(67294),s=n(85818),l=n(20550),o=n(79139),i=n(73615);let{Title:c}=s.Z,u="#5a67d8",d=e=>{let{title:t,description:n,placeholder:s,maxLength:d,values:f,handleDeleteIndex:h,handleCreateString:p,submitStatus:m,continuousStatusMessage:v}=e,[g,b]=(0,a.useState)(""),x=e=>{let{value:t}=e;b(t)},y=()=>{let e=g.trim();p(e),b("")};return(0,r.jsxs)("div",{className:"edit-string-array-container",children:[(0,r.jsx)(c,{level:3,className:"section-title",children:t}),(0,r.jsx)("p",{className:"description",children:n}),(0,r.jsx)("div",{className:"edit-current-strings",children:null==f?void 0:f.map((e,t)=>{let n=()=>{h(t)};return(0,r.jsx)(l.Z,{closable:!0,onClose:n,color:u,children:e},"tag-".concat(e,"-").concat(t))})}),v&&(0,r.jsx)("div",{className:"continuous-status-section",children:(0,r.jsx)(i.E,{status:v})}),(0,r.jsx)("div",{className:"add-new-string-section",children:(0,r.jsx)(o.nv,{fieldName:"string-input",value:g,onChange:x,onPressEnter:y,maxLength:d,placeholder:s,status:m})})]})};d.defaultProps={maxLength:50,description:null,submitStatus:null,continuousStatusMessage:null}},6979:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(85893),a=n(67294),s=n(94594),l=n(41983),o=n(73615),i=n(90745),c=n(99519);let u=e=>{let{apiPath:t,checked:n,reversed:u=!1,configPath:d="",disabled:f=!1,fieldName:h,label:p,tip:m,useSubmit:v,onChange:g}=e,[b,x]=(0,a.useState)(null),y=null,w=(0,a.useContext)(c.aC),{setFieldInConfigState:Z}=w||{},j=()=>{x(null),clearTimeout(y),y=null},C=async e=>{if(v){x((0,l.kg)(l.Jk));let n=u?!e:e;await (0,i.Si)({apiPath:t,data:{value:n},onSuccess:()=>{Z({fieldName:h,value:n,path:d}),x((0,l.kg)(l.zv))},onError:e=>{x((0,l.kg)(l.Un,"There was an error: ".concat(e)))}}),y=setTimeout(j,i.sI)}g&&g(e)},k=null!==b&&b.type===l.Jk;return(0,r.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[p&&(0,r.jsx)("div",{className:"label-side",children:(0,r.jsx)("span",{className:"formfield-label",children:p})}),(0,r.jsxs)("div",{className:"input-side",children:[(0,r.jsxs)("div",{className:"input-group",children:[(0,r.jsx)(s.Z,{className:"switch field-".concat(h),loading:k,onChange:C,defaultChecked:n,checked:n,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:f}),(0,r.jsx)(o.E,{status:b})]}),(0,r.jsx)("p",{className:"field-tip",children:m})]})]})};u.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},37990:function(e,t,n){"use strict";n.r(t);var r=n(85893),a=n(85402),s=n(71577),l=n(85818),o=n(14670),i=n(71230),c=n(15746),u=n(67294),d=n(45697),f=n.n(d),h=n(79139),p=n(46551),m=n(6979),v=n(48186),g=n(90745),b=n(99519),x=n(41983),y=n(6960);let w=e=>{let{cancelPressed:t,okPressed:n}=e;return(0,r.jsxs)(a.Z,{width:"70%",title:"Enable Social Features",visible:!0,onCancel:t,footer:(0,r.jsxs)("div",{children:[(0,r.jsx)(s.Z,{onClick:t,children:"Do not enable"}),(0,r.jsx)(s.Z,{type:"primary",onClick:n,children:"Enable Social Features"})]}),children:[(0,r.jsx)(l.Z.Title,{level:3,children:"How do Owncast's social features work?"}),(0,r.jsxs)(l.Z.Paragraph,{children:["Owncast's social features are accomplished by having your server join The"," ",(0,r.jsx)("a",{href:"https://en.wikipedia.org/wiki/Fediverse",rel:"noopener noreferrer",target:"_blank",children:"Fediverse"}),", a decentralized, open, collection of independent servers, like yours."]}),"Please"," ",(0,r.jsx)("a",{href:"https://owncast.online/docs/social",rel:"noopener noreferrer",target:"_blank",children:"read more"})," ","about these features, the details behind them, and how they work.",(0,r.jsx)(l.Z.Paragraph,{}),(0,r.jsx)(l.Z.Title,{level:3,children:"What do you need to know?"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"These features are brand new. Given the variability of interfacing with the rest of the world, bugs are possible. Please report anything that you think isn't working quite right."}),(0,r.jsx)("li",{children:"You must always host your Owncast server with SSL using a https url."}),(0,r.jsx)("li",{children:"You should not change your server name URL or social username once people begin following you, as your server will be seen as a completely different user on the Fediverse, and the old user will disappear."}),(0,r.jsxs)("li",{children:["Turning on ",(0,r.jsx)("i",{children:"Private mode"})," will allow you to manually approve each follower and limit the visibility of your posts to followers only."]})]}),(0,r.jsx)(l.Z.Title,{level:3,children:"Learn more about The Fediverse"}),(0,r.jsxs)(l.Z.Paragraph,{children:["If these concepts are new you should discover more about what this functionality has to offer. Visit"," ",(0,r.jsx)("a",{href:"https://owncast.online/docs/social",rel:"noopener noreferrer",target:"_blank",children:"our documentation"})," ","to be pointed at some resources that will help get you started on The Fediverse."]})]})};w.propTypes={cancelPressed:f().func.isRequired,okPressed:f().func.isRequired};let Z=()=>{let{Title:e}=l.Z,[t,n]=(0,u.useState)(null),[a,s]=(0,u.useState)(!1),d=(0,u.useContext)(b.aC),{serverConfig:f,setFieldInConfigState:y}=d||{},[Z,j]=(0,u.useState)(null),{federation:C,yp:k,instanceDetails:O}=f,{enabled:N,isPrivate:E,username:P,goLiveMessage:S,showEngagement:_,blockedDomains:R}=C,{instanceUrl:T}=k,{nsfw:I}=O,L=e=>{let{fieldName:r,value:a}=e;n({...t,[r]:a})},F=e=>{e?s(!0):n({...t,enabled:!1})},U=()=>{let e=""!==t.instanceUrl,r=t.instanceUrl.startsWith("https://");e&&r||((0,g.Si)({apiPath:g.Kl.apiPath,data:{value:!1}}),n({...t,enabled:!1}))};function D(){j(null)}function z(){try{(0,g.Si)({apiPath:g.pE,data:{value:t.blockedDomains},onSuccess:()=>{y({fieldName:"forbiddenUsernames",value:t.forbiddenUsernames}),j(x.zv),setTimeout(D,g.sI)},onError:e=>{j((0,x.kg)(x.Un,e)),setTimeout(D,g.sI)}})}catch(e){console.error(e),j(x.Un)}}if((0,u.useEffect)(()=>{n({enabled:N,isPrivate:E,username:P,goLiveMessage:S,showEngagement:_,blockedDomains:R,nsfw:I,instanceUrl:k.instanceUrl})},[f,k]),!t)return null;let A=""!==T,q=T.startsWith("https://"),H=!q&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{message:"You must set your server URL before you can enable this feature.",type:"warning",showIcon:!0}),(0,r.jsx)("br",{}),(0,r.jsx)(p.$7,{fieldName:"instanceUrl",...g.yi,value:t.instanceUrl,initialValue:k.instanceUrl,type:h.xA,onChange:L,onSubmit:U,required:!0})]}),K=(0,r.jsx)(o.Z,{message:"Only Owncast instances available on the default SSL port 443 support this feature.",type:"warning",showIcon:!0}),M=T&&""!==new URL(T).port&&"443"!==new URL(T).port;return(0,r.jsxs)("div",{children:[(0,r.jsx)(e,{children:"Configure Social Features"}),(0,r.jsx)("p",{children:"Owncast provides the ability for people to follow and engage with your instance. It's a great way to promote alerting, sharing and engagement of your stream."}),(0,r.jsx)("p",{children:"Once enabled you'll alert your followers when you go live as well as gain the ability to compose custom posts to share any information you like."}),(0,r.jsx)("p",{children:(0,r.jsx)("a",{href:"https://owncast.online/docs/social",rel:"noopener noreferrer",target:"_blank",children:"Read more about the specifics of these social features."})}),(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(c.Z,{span:15,className:"form-module",style:{marginRight:"15px"},children:[H,M&&K,(0,r.jsx)(m.Z,{fieldName:"enabled",onChange:F,...g.Kl,checked:t.enabled,disabled:M||!A||!q}),(0,r.jsx)(m.Z,{fieldName:"isPrivate",...g.LC,checked:t.isPrivate,disabled:!N}),(0,r.jsx)(m.Z,{fieldName:"nsfw",useSubmit:!0,...g.B_,checked:t.nsfw,disabled:M||!A}),(0,r.jsx)(p.$7,{required:!0,fieldName:"username",type:h.Kx,...g.Xc,value:t.username,initialValue:P,onChange:L,disabled:!N}),(0,r.jsx)(p.$7,{fieldName:"goLiveMessage",...g.BF,type:h.Sk,value:t.goLiveMessage,initialValue:S,onChange:L,disabled:!N}),(0,r.jsx)(m.Z,{fieldName:"showEngagement",...g.FE,checked:t.showEngagement,disabled:!N})]}),(0,r.jsx)(c.Z,{span:8,className:"form-module",children:(0,r.jsx)(v.Y,{title:g.dR.label,placeholder:g.dR.placeholder,description:g.dR.tip,values:t.blockedDomains,handleDeleteIndex:function(e){t.blockedDomains.splice(e,1),z()},handleCreateString:function(e){let n;try{let r=new URL(e);n=r.host}catch(a){n=e}t.blockedDomains.push(n),L({fieldName:"blockedDomains",value:t.blockedDomains}),z()},submitStatus:(0,x.kg)(Z)})})]}),a&&(0,r.jsx)(w,{cancelPressed:function(){s(!1),n({...t,enabled:!1})},okPressed:function(){s(!1),n({...t,enabled:!0})}})]})};Z.getLayout=function(e){return(0,r.jsx)(y.l,{page:e})},t.default=Z}},function(e){e.O(0,[173,164,2138,31,4931,5402,2231,7118,5818,9915,8883,710,6960,9774,2888,179],function(){return e(e.s=18957)}),_N_E=e.O()}]);
//# sourceMappingURL=config-federation-b77fc76362bd8a45.js.map
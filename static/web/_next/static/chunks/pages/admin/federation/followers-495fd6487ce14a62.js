(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2476,1382],{63606:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(1413),a=n(67294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},o=n(42135),c=function(e,t){return a.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:i}))};c.displayName="CheckOutlined";var l=a.forwardRef(c)},81643:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=function(e){return e?"function"==typeof e?e():e:null}},24093:function(e,t,n){"use strict";n.d(t,{C:function(){return E}});var r=n(87462),a=n(4942),i=n(71002),o=n(97685),c=n(94184),l=n.n(c),s=n(48555),u=n(42550),d=n(67294),f=n(53124),m=n(25378),p=n(24308),v=d.createContext("default"),y=function(e){var t=e.children,n=e.size;return d.createElement(v.Consumer,null,function(e){return d.createElement(v.Provider,{value:n||e},t)})},g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},h=d.forwardRef(function(e,t){var n,c,y,h=d.useContext(v),x=d.useState(1),b=(0,o.Z)(x,2),w=b[0],j=b[1],E=d.useState(!1),Z=(0,o.Z)(E,2),k=Z[0],O=Z[1],C=d.useState(!0),N=(0,o.Z)(C,2),S=N[0],P=N[1],T=d.useRef(null),D=d.useRef(null),_=(0,u.sQ)(t,T),I=d.useContext(f.E_).getPrefixCls,z=function(){if(D.current&&T.current){var t=D.current.offsetWidth,n=T.current.offsetWidth;if(0!==t&&0!==n){var r=e.gap,a=void 0===r?4:r;2*a<n&&j(n-2*a<t?(n-2*a)/t:1)}}};d.useEffect(function(){O(!0)},[]),d.useEffect(function(){P(!0),j(1)},[e.src]),d.useEffect(function(){z()},[e.gap]);var R=e.prefixCls,F=e.shape,A=void 0===F?"circle":F,Q=e.size,L=void 0===Q?"default":Q,q=e.src,H=e.srcSet,W=e.icon,$=e.className,G=e.alt,M=e.draggable,B=e.children,X=e.crossOrigin,K=g(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children","crossOrigin"]),U="default"===L?h:L,Y=Object.keys("object"===(0,i.Z)(U)&&U||{}).some(function(e){return["xs","sm","md","lg","xl","xxl"].includes(e)}),V=(0,m.Z)(Y),J=d.useMemo(function(){if("object"!==(0,i.Z)(U))return{};var e=U[p.c4.find(function(e){return V[e]})];return e?{width:e,height:e,lineHeight:"".concat(e,"px"),fontSize:W?e/2:18}:{}},[V,U]),ee=I("avatar",R),et=l()((n={},(0,a.Z)(n,"".concat(ee,"-lg"),"large"===U),(0,a.Z)(n,"".concat(ee,"-sm"),"small"===U),n)),en=d.isValidElement(q),er=l()(ee,et,(c={},(0,a.Z)(c,"".concat(ee,"-").concat(A),!!A),(0,a.Z)(c,"".concat(ee,"-image"),en||q&&S),(0,a.Z)(c,"".concat(ee,"-icon"),!!W),c),$);if("string"==typeof q&&S)y=d.createElement("img",{src:q,draggable:M,srcSet:H,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&P(!1)},alt:G,crossOrigin:X});else if(en)y=q;else if(W)y=W;else if(k||1!==w){var ea="scale(".concat(w,") translateX(-50%)");y=d.createElement(s.default,{onResize:z},d.createElement("span",{className:"".concat(ee,"-string"),ref:D,style:(0,r.Z)((0,r.Z)({},"number"==typeof U?{lineHeight:"".concat(U,"px")}:{}),{msTransform:ea,WebkitTransform:ea,transform:ea})},B))}else y=d.createElement("span",{className:"".concat(ee,"-string"),style:{opacity:0},ref:D},B);return delete K.onError,delete K.gap,d.createElement("span",(0,r.Z)({},K,{style:(0,r.Z)((0,r.Z)((0,r.Z)({},"number"==typeof U?{width:U,height:U,lineHeight:"".concat(U,"px"),fontSize:W?U/2:18}:{}),J),K.style),className:er,ref:_}),y)}),x=n(50344),b=n(55241),w=n(96159),j=h;j.Group=function(e){var t=d.useContext(f.E_),n=t.getPrefixCls,r=t.direction,i=e.prefixCls,o=e.className,c=e.maxCount,s=e.maxStyle,u=e.size,m=n("avatar-group",i),p=l()(m,(0,a.Z)({},"".concat(m,"-rtl"),"rtl"===r),void 0===o?"":o),v=e.children,g=e.maxPopoverPlacement,j=e.maxPopoverTrigger,E=(0,x.Z)(v).map(function(e,t){return(0,w.Tm)(e,{key:"avatar-key-".concat(t)})}),Z=E.length;if(c&&c<Z){var k=E.slice(0,c),O=E.slice(c,Z);return k.push(d.createElement(b.Z,{key:"avatar-popover-key",content:O,trigger:void 0===j?"hover":j,placement:void 0===g?"top":g,overlayClassName:"".concat(m,"-popover")},d.createElement(h,{style:s},"+".concat(Z-c)))),d.createElement(y,{size:u},d.createElement("div",{className:p,style:e.style},k))}return d.createElement(y,{size:u},d.createElement("div",{className:p,style:e.style},E))};var E=j},55241:function(e,t,n){"use strict";var r=n(87462),a=n(67294),i=n(53124),o=n(94199),c=n(81643),l=n(33603),s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},u=function(e){var t=e.title,n=e.content,r=e.prefixCls;return t||n?a.createElement(a.Fragment,null,t&&a.createElement("div",{className:"".concat(r,"-title")},(0,c.Z)(t)),a.createElement("div",{className:"".concat(r,"-inner-content")},(0,c.Z)(n))):null},d=a.forwardRef(function(e,t){var n=e.prefixCls,c=e.title,d=e.content,f=e._overlay,m=e.placement,p=e.trigger,v=e.mouseEnterDelay,y=e.mouseLeaveDelay,g=e.overlayStyle,h=s(e,["prefixCls","title","content","_overlay","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),x=a.useContext(i.E_).getPrefixCls,b=x("popover",n),w=x();return a.createElement(o.Z,(0,r.Z)({placement:void 0===m?"top":m,trigger:void 0===p?"hover":p,mouseEnterDelay:void 0===v?.1:v,mouseLeaveDelay:void 0===y?.1:y,overlayStyle:void 0===g?{}:g},h,{prefixCls:b,ref:t,overlay:f||a.createElement(u,{prefixCls:b,title:c,content:d}),transitionName:(0,l.mL)(w,"zoom-big",h.transitionName)}))});t.Z=d},11382:function(e,t,n){"use strict";var r=n(87462),a=n(4942),i=n(97685),o=n(94184),c=n.n(o),l=n(23279),s=n.n(l),u=n(98423),d=n(67294),f=n(53124),m=n(96159),p=n(93355),v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};(0,p.b)("small","default","large");var y=null,g=function(e){var t=e.spinPrefixCls,n=e.spinning,o=void 0===n||n,l=e.delay,p=e.className,g=e.size,h=void 0===g?"default":g,x=e.tip,b=e.wrapperClassName,w=e.style,j=e.children,E=v(e,["spinPrefixCls","spinning","delay","className","size","tip","wrapperClassName","style","children"]),Z=d.useState(function(){return o&&(!o||!l||!!isNaN(Number(l)))}),k=(0,i.Z)(Z,2),O=k[0],C=k[1];return d.useEffect(function(){var e=s()(function(){C(o)},l);return e(),function(){var t;null===(t=null==e?void 0:e.cancel)||void 0===t||t.call(e)}},[l,o]),d.createElement(f.C,null,function(n){var i,o,l,s=n.direction,f=c()(t,(l={},(0,a.Z)(l,"".concat(t,"-sm"),"small"===h),(0,a.Z)(l,"".concat(t,"-lg"),"large"===h),(0,a.Z)(l,"".concat(t,"-spinning"),O),(0,a.Z)(l,"".concat(t,"-show-text"),!!x),(0,a.Z)(l,"".concat(t,"-rtl"),"rtl"===s),l),p),v=(0,u.Z)(E,["indicator","prefixCls"]),g=d.createElement("div",(0,r.Z)({},v,{style:w,className:f,"aria-live":"polite","aria-busy":O}),(i=e.indicator,o="".concat(t,"-dot"),null===i?null:(0,m.l$)(i)?(0,m.Tm)(i,{className:c()(i.props.className,o)}):(0,m.l$)(y)?(0,m.Tm)(y,{className:c()(y.props.className,o)}):d.createElement("span",{className:c()(o,"".concat(t,"-dot-spin"))},d.createElement("i",{className:"".concat(t,"-dot-item")}),d.createElement("i",{className:"".concat(t,"-dot-item")}),d.createElement("i",{className:"".concat(t,"-dot-item")}),d.createElement("i",{className:"".concat(t,"-dot-item")}))),x?d.createElement("div",{className:"".concat(t,"-text")},x):null);if(void 0!==j){var Z=c()("".concat(t,"-container"),(0,a.Z)({},"".concat(t,"-blur"),O));return d.createElement("div",(0,r.Z)({},v,{className:c()("".concat(t,"-nested-loading"),b)}),O&&d.createElement("div",{key:"loading"},g),d.createElement("div",{className:Z,key:"container"},j))}return g})},h=function(e){var t=e.prefixCls,n=(0,d.useContext(f.E_).getPrefixCls)("spin",t),a=(0,r.Z)((0,r.Z)({},e),{spinPrefixCls:n});return d.createElement(g,(0,r.Z)({},a))};h.setDefaultIndicator=function(e){y=e},t.Z=h},62705:function(e,t,n){var r=n(55639).Symbol;e.exports=r},44239:function(e,t,n){var r=n(62705),a=n(89607),i=n(2333),o=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":o&&o in Object(e)?a(e):i(e)}},27561:function(e,t,n){var r=n(67990),a=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(a,""):e}},31957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},89607:function(e,t,n){var r=n(62705),a=Object.prototype,i=a.hasOwnProperty,o=a.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(a){}var l=o.call(e);return r&&(t?e[c]=n:delete e[c]),l}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},55639:function(e,t,n){var r=n(31957),a="object"==typeof self&&self&&self.Object===Object&&self,i=r||a||Function("return this")();e.exports=i},67990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:function(e,t,n){var r=n(13218),a=n(7771),i=n(14841),o=Math.max,c=Math.min;e.exports=function(e,t,n){var l,s,u,d,f,m,p=0,v=!1,y=!1,g=!0;if("function"!=typeof e)throw TypeError("Expected a function");function h(t){var n=l,r=s;return l=s=void 0,p=t,d=e.apply(r,n)}function x(e){var n=e-m,r=e-p;return void 0===m||n>=t||n<0||y&&r>=u}function b(){var e,n,r,i=a();if(x(i))return w(i);f=setTimeout(b,(e=i-m,n=i-p,r=t-e,y?c(r,u-n):r))}function w(e){return(f=void 0,g&&l)?h(e):(l=s=void 0,d)}function j(){var e,n=a(),r=x(n);if(l=arguments,s=this,m=n,r){if(void 0===f)return p=e=m,f=setTimeout(b,t),v?h(e):d;if(y)return clearTimeout(f),f=setTimeout(b,t),h(m)}return void 0===f&&(f=setTimeout(b,t)),d}return t=i(t)||0,r(n)&&(v=!!n.leading,u=(y="maxWait"in n)?o(i(n.maxWait)||0,t):u,g="trailing"in n?!!n.trailing:g),j.cancel=function(){void 0!==f&&clearTimeout(f),p=0,l=m=s=f=void 0},j.flush=function(){return void 0===f?d:w(a())},j}},13218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},37005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},33448:function(e,t,n){var r=n(44239),a=n(37005);e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==r(e)}},7771:function(e,t,n){var r=n(55639);e.exports=function(){return r.Date.now()}},14841:function(e,t,n){var r=n(27561),a=n(13218),i=n(33448),o=0/0,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return o;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=l.test(e);return n||s.test(e)?u(e.slice(2),n?2:8):c.test(e)?o:+e}},89675:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/federation/followers",function(){return n(50080)}])},50080:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(85893),a=n(67294),i=n(24093),o=n(54398),c=n(71577),l=n(84381),s=n(58091),u=n(5152),d=n.n(u),f=n(99519),m=n(64777),p=n(70241),v=n(6960);let y=d()(()=>Promise.all([n.e(2074),n.e(6910)]).then(n.t.bind(n,66910,23)),{loadableGenerated:{webpack:()=>[66910]},ssr:!1}),g=d()(()=>Promise.all([n.e(2074),n.e(6139)]).then(n.t.bind(n,26139,23)),{loadableGenerated:{webpack:()=>[26139]},ssr:!1});function h(){let[e,t]=(0,a.useState)([]),[n,u]=(0,a.useState)([]),[d,v]=(0,a.useState)([]),[h,x]=(0,a.useState)(0),[b,w]=(0,a.useState)(0),j=(0,a.useContext)(f.aC),{serverConfig:E}=j||{},{federation:Z}=E,{isPrivate:k}=Z,O=async()=>{try{let e="".concat(m.HP,"?offset=").concat(50*b,"&limit=").concat(50),r=await (0,m.rQ)(e,{auth:!0}),{results:a,total:i}=r;(0,p.Qr)(a)?v([]):(x(i),v(a));let o=await (0,m.rQ)(m.E8,{auth:!0});(0,p.Qr)(o)?t([]):t(o);let c=await (0,m.rQ)(m.Y9,{auth:!0});(0,p.Qr)(n)?u([]):u(c)}catch(l){console.log("==== error",l)}};(0,a.useEffect)(()=>{O()},[]);let C=[{title:"",dataIndex:"image",key:"image",width:90,render:e=>(0,r.jsx)(i.C,{size:40,src:e||"/img/logo.svg"})},{title:"Name",dataIndex:"name",key:"name",render:(e,t)=>(0,r.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:t.name||t.username})},{title:"URL",dataIndex:"link",key:"link",render:(e,t)=>(0,r.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:t.link})}];function N(e,t){return(0,r.jsx)(o.Z,{dataSource:e,columns:t,size:"small",rowKey:e=>e.link,pagination:{pageSize:50,hideOnSinglePage:!0,showSizeChanger:!1,total:h},onChange:e=>{let t=e.current;w(t)}})}async function S(e){try{await (0,m.rQ)(m.kb,{auth:!0,method:"POST",data:{actorIRI:e.link,approved:!0}}),O()}catch(t){console.error(t)}}async function P(e){try{await (0,m.rQ)(m.kb,{auth:!0,method:"POST",data:{actorIRI:e.link,approved:!1}}),O()}catch(t){console.error(t)}}let T=[...C];T.unshift({title:"Approve",dataIndex:null,key:null,render:e=>(0,r.jsx)(c.Z,{type:"primary",icon:(0,r.jsx)(y,{}),onClick:()=>{S(e)}}),width:50},{title:"Reject",dataIndex:null,key:null,render:e=>(0,r.jsx)(c.Z,{type:"primary",danger:!0,icon:(0,r.jsx)(g,{}),onClick:()=>{P(e)}}),width:50}),T.push({title:"Requested",dataIndex:"timestamp",key:"requested",width:200,render:e=>{let t=new Date(e);return(0,r.jsx)(r.Fragment,{children:(0,s.Z)(t,"P")})},sorter:(e,t)=>new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime(),sortDirections:["descend","ascend"],defaultSortOrder:"descend"});let D=[...C];D.unshift({title:"Approve",dataIndex:null,key:null,render:e=>(0,r.jsx)(c.Z,{type:"primary",icon:(0,r.jsx)(y,{}),size:"large",onClick:()=>{S(e)}}),width:50}),D.push({title:"Requested",dataIndex:"timestamp",key:"requested",width:200,render:e=>{let t=new Date(e);return(0,r.jsx)(r.Fragment,{children:(0,s.Z)(t,"P")})},sorter:(e,t)=>new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime(),sortDirections:["descend","ascend"],defaultSortOrder:"descend"},{title:"Rejected/Blocked",dataIndex:"timestamp",key:"disabled_at",width:200,render:e=>{let t=new Date(e);return(0,r.jsx)(r.Fragment,{children:(0,s.Z)(t,"P")})},sorter:(e,t)=>new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime(),sortDirections:["descend","ascend"],defaultSortOrder:"descend"});let _=[...C];_.push({title:"Added",dataIndex:"timestamp",key:"timestamp",width:200,render:e=>{let t=new Date(e);return(0,r.jsx)(r.Fragment,{children:(0,s.Z)(t,"P")})},sorter:(e,t)=>new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime(),sortDirections:["descend","ascend"],defaultSortOrder:"descend"},{title:"Remove",dataIndex:null,key:null,render:e=>(0,r.jsx)(c.Z,{type:"primary",danger:!0,icon:(0,r.jsx)(g,{}),onClick:()=>{P(e)}}),width:50});let I=(0,r.jsxs)("span",{children:["Followers ",d.length>0&&"(".concat(d.length,")")]}),z=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"The following accounts get notified when you go live or send a post."}),N(d,_)," "]}),R=(0,r.jsxs)("span",{children:["Requests ",e.length>0&&"(".concat(e.length,")")]}),F=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["The following people are requesting to follow your Owncast server on the"," ",(0,r.jsx)("a",{href:"https://en.wikipedia.org/wiki/Fediverse",target:"_blank",rel:"noopener noreferrer",children:"Fediverse"})," ","and be alerted to when you go live. Each must be approved."]}),N(e,T)]}),A=(0,r.jsxs)("span",{children:["Blocked ",n.length>0&&"(".concat(n.length,")")]}),Q=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"The following people were either rejected or blocked by you. You can approve them as a follower."}),(0,r.jsx)("p",{children:N(n,D)})]});return(0,r.jsx)("div",{className:"followers-section",children:(0,r.jsx)(l.Z,{defaultActiveKey:"1",items:[{label:I,key:"1",children:z},k&&{label:R,key:"2",children:F},{label:A,key:"3",children:Q}]})})}h.getLayout=function(e){return(0,r.jsx)(v.l,{page:e})}},79370:function(e,t,n){"use strict";n.d(t,{G:function(){return o}});var r=n(98924),a=function(e){if((0,r.Z)()&&window.document.documentElement){var t=Array.isArray(e)?e:[e],n=window.document.documentElement;return t.some(function(e){return e in n.style})}return!1},i=function(e,t){if(!a(e))return!1;var n=document.createElement("div"),r=n.style[e];return n.style[e]=t,n.style[e]!==r};function o(e,t){return Array.isArray(e)||void 0===t?a(e):i(e,t)}}},function(e){e.O(0,[173,164,2138,31,4931,5402,2231,7118,9915,8883,6386,3698,3013,4398,8091,4381,710,6960,9774,2888,179],function(){return e(e.s=89675)}),_N_E=e.O()}]);
//# sourceMappingURL=followers-495fd6487ce14a62.js.map
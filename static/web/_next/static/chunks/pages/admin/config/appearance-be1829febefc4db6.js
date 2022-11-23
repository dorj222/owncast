(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9212],{15746:function(e,t,n){"use strict";var r=n(21584);t.Z=r.Z},54907:function(e,t,n){"use strict";n.d(t,{Z:function(){return A}});var r=n(87462),o=n(4942),a=n(18073),c=n(94184),i=n.n(c),s=n(74902),l=n(15671),d=n(43144),u=n(60136),p=n(33643),m=n(71002),f=n(50344),h=n(67294),v=n(96774),y=n.n(v),x=n(45987),Z=n(62874),g=n(97685),C=h.forwardRef(function(e,t){var n,r=e.prefixCls,a=e.forceRender,c=e.className,s=e.style,l=e.children,d=e.isActive,u=e.role,p=h.useState(d||a),m=(0,g.Z)(p,2),f=m[0],v=m[1];return(h.useEffect(function(){(a||d)&&v(!0)},[a,d]),f)?h.createElement("div",{ref:t,className:i()("".concat(r,"-content"),(n={},(0,o.Z)(n,"".concat(r,"-content-active"),d),(0,o.Z)(n,"".concat(r,"-content-inactive"),!d),n),c),style:s,role:u},h.createElement("div",{className:"".concat(r,"-content-box")},l)):null});C.displayName="PanelContent";var b=["className","id","style","prefixCls","headerClass","children","isActive","destroyInactivePanel","accordion","forceRender","openMotion","extra","collapsible"],k=function(e){(0,u.Z)(n,e);var t=(0,p.Z)(n);function n(){var e;(0,l.Z)(this,n);for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).onItemClick=function(){var t=e.props,n=t.onItemClick,r=t.panelKey;"function"==typeof n&&n(r)},e.handleKeyPress=function(t){("Enter"===t.key||13===t.keyCode||13===t.which)&&e.onItemClick()},e.renderIcon=function(){var t=e.props,n=t.showArrow,r=t.expandIcon,o=t.prefixCls,a=t.collapsible;if(!n)return null;var c="function"==typeof r?r(e.props):h.createElement("i",{className:"arrow"});return c&&h.createElement("div",{className:"".concat(o,"-expand-icon"),onClick:"header"===a||"icon"===a?e.onItemClick:null},c)},e.renderTitle=function(){var t=e.props,n=t.header,r=t.prefixCls,o=t.collapsible;return h.createElement("span",{className:"".concat(r,"-header-text"),onClick:"header"===o?e.onItemClick:null},n)},e}return(0,d.Z)(n,[{key:"shouldComponentUpdate",value:function(e){return!y()(this.props,e)}},{key:"render",value:function(){var e,t,n=this.props,a=n.className,c=n.id,s=n.style,l=n.prefixCls,d=n.headerClass,u=n.children,p=n.isActive,m=n.destroyInactivePanel,f=n.accordion,v=n.forceRender,y=n.openMotion,g=n.extra,k=n.collapsible,j=(0,x.Z)(n,b),E="disabled"===k,w="header"===k,N="icon"===k,S=i()((e={},(0,o.Z)(e,"".concat(l,"-item"),!0),(0,o.Z)(e,"".concat(l,"-item-active"),p),(0,o.Z)(e,"".concat(l,"-item-disabled"),E),e),a),P={className:i()("".concat(l,"-header"),(t={},(0,o.Z)(t,d,d),(0,o.Z)(t,"".concat(l,"-header-collapsible-only"),w),(0,o.Z)(t,"".concat(l,"-icon-collapsible-only"),N),t)),"aria-expanded":p,"aria-disabled":E,onKeyPress:this.handleKeyPress};return w||N||(P.onClick=this.onItemClick,P.role=f?"tab":"button",P.tabIndex=E?-1:0),delete j.header,delete j.panelKey,delete j.onItemClick,delete j.showArrow,delete j.expandIcon,h.createElement("div",(0,r.Z)({},j,{className:S,style:s,id:c}),h.createElement("div",P,this.renderIcon(),this.renderTitle(),null!=g&&"boolean"!=typeof g&&h.createElement("div",{className:"".concat(l,"-extra")},g)),h.createElement(Z.Z,(0,r.Z)({visible:p,leavedClassName:"".concat(l,"-content-hidden")},y,{forceRender:v,removeOnLeave:m}),function(e,t){var n=e.className,r=e.style;return h.createElement(C,{ref:t,prefixCls:l,className:n,style:r,isActive:p,forceRender:v,role:f?"tabpanel":null},u)}))}}]),n}(h.Component);function j(e){var t=e;if(!Array.isArray(t)){var n=(0,m.Z)(t);t="number"===n||"string"===n?[t]:[]}return t.map(function(e){return String(e)})}k.defaultProps={showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1};var E=function(e){(0,u.Z)(n,e);var t=(0,p.Z)(n);function n(e){(0,l.Z)(this,n),(r=t.call(this,e)).onClickItem=function(e){var t=r.state.activeKey;if(r.props.accordion)t=t[0]===e?[]:[e];else{var n=(t=(0,s.Z)(t)).indexOf(e);n>-1?t.splice(n,1):t.push(e)}r.setActiveKey(t)},r.getNewChild=function(e,t){if(!e)return null;var n=r.state.activeKey,o=r.props,a=o.prefixCls,c=o.openMotion,i=o.accordion,s=o.destroyInactivePanel,l=o.expandIcon,d=o.collapsible,u=e.key||String(t),p=e.props,m=p.header,f=p.headerClass,v=p.destroyInactivePanel,y=p.collapsible,x=!1;x=i?n[0]===u:n.indexOf(u)>-1;var Z=null!=y?y:d,g={key:u,panelKey:u,header:m,headerClass:f,isActive:x,prefixCls:a,destroyInactivePanel:null!=v?v:s,openMotion:c,accordion:i,children:e.props.children,onItemClick:"disabled"===Z?null:r.onClickItem,expandIcon:l,collapsible:Z};return"string"==typeof e.type?e:(Object.keys(g).forEach(function(e){void 0===g[e]&&delete g[e]}),h.cloneElement(e,g))},r.getItems=function(){var e=r.props.children;return(0,f.Z)(e).map(r.getNewChild)},r.setActiveKey=function(e){"activeKey"in r.props||r.setState({activeKey:e}),r.props.onChange(r.props.accordion?e[0]:e)};var r,o=e.activeKey,a=e.defaultActiveKey;return"activeKey"in e&&(a=o),r.state={activeKey:j(a)},r}return(0,d.Z)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!y()(this.props,e)||!y()(this.state,t)}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,r=t.className,a=t.style,c=t.accordion,s=i()((e={},(0,o.Z)(e,n,!0),(0,o.Z)(e,r,!!r),e));return h.createElement("div",{className:s,style:a,role:c?"tablist":null},this.getItems())}}],[{key:"getDerivedStateFromProps",value:function(e){var t={};return"activeKey"in e&&(t.activeKey=j(e.activeKey)),t}}]),n}(h.Component);E.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},E.Panel=k,E.Panel;var w=n(98423),N=n(53124),S=n(33603),P=n(96159),I=function(e){var t,n,c=h.useContext(N.E_),s=c.getPrefixCls,l=c.direction,d=e.prefixCls,u=e.className,p=e.bordered,m=e.ghost,v=e.expandIconPosition,y=void 0===v?"start":v,x=s("collapse",d),Z=h.useMemo(function(){return"left"===y?"start":"right"===y?"end":y},[y]),g=i()("".concat(x,"-icon-position-").concat(Z),(n={},(0,o.Z)(n,"".concat(x,"-borderless"),!(void 0===p||p)),(0,o.Z)(n,"".concat(x,"-rtl"),"rtl"===l),(0,o.Z)(n,"".concat(x,"-ghost"),!!m),n),void 0===u?"":u),C=(0,r.Z)((0,r.Z)({},S.ZP),{motionAppear:!1,leavedClassName:"".concat(x,"-content-hidden")});return h.createElement(E,(0,r.Z)({openMotion:C},e,{expandIcon:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.expandIcon,r=n?n(t):h.createElement(a.Z,{rotate:t.isActive?90:void 0});return(0,P.Tm)(r,function(){return{className:i()(r.props.className,"".concat(x,"-arrow"))}})},prefixCls:x,className:g}),(t=e.children,(0,f.Z)(t).map(function(e,t){var n;if(null===(n=e.props)||void 0===n?void 0:n.disabled){var o=e.key||String(t),a=e.props,c=a.disabled,i=a.collapsible,s=(0,r.Z)((0,r.Z)({},(0,w.Z)(e.props,["disabled"])),{key:o,collapsible:null!=i?i:c?"disabled":void 0});return(0,P.Tm)(e,s)}return e})))};I.Panel=function(e){var t=h.useContext(N.E_).getPrefixCls,n=e.prefixCls,a=e.className,c=e.showArrow,s=t("collapse",n),l=i()((0,o.Z)({},"".concat(s,"-no-arrow"),!(void 0===c||c)),void 0===a?"":a);return h.createElement(E.Panel,(0,r.Z)({},e,{prefixCls:s,className:l}))};var A=I},99134:function(e,t,n){"use strict";var r=(0,n(67294).createContext)({});t.Z=r},21584:function(e,t,n){"use strict";var r=n(4942),o=n(87462),a=n(71002),c=n(94184),i=n.n(c),s=n(67294),l=n(53124),d=n(99134),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},p=["xs","sm","md","lg","xl","xxl"],m=s.forwardRef(function(e,t){var n,c=s.useContext(l.E_),m=c.getPrefixCls,f=c.direction,h=s.useContext(d.Z),v=h.gutter,y=h.wrap,x=h.supportFlexGap,Z=e.prefixCls,g=e.span,C=e.order,b=e.offset,k=e.push,j=e.pull,E=e.className,w=e.children,N=e.flex,S=e.style,P=u(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),I=m("col",Z),A={};p.forEach(function(t){var n,c={},i=e[t];"number"==typeof i?c.span=i:"object"===(0,a.Z)(i)&&(c=i||{}),delete P[t],A=(0,o.Z)((0,o.Z)({},A),(n={},(0,r.Z)(n,"".concat(I,"-").concat(t,"-").concat(c.span),void 0!==c.span),(0,r.Z)(n,"".concat(I,"-").concat(t,"-order-").concat(c.order),c.order||0===c.order),(0,r.Z)(n,"".concat(I,"-").concat(t,"-offset-").concat(c.offset),c.offset||0===c.offset),(0,r.Z)(n,"".concat(I,"-").concat(t,"-push-").concat(c.push),c.push||0===c.push),(0,r.Z)(n,"".concat(I,"-").concat(t,"-pull-").concat(c.pull),c.pull||0===c.pull),(0,r.Z)(n,"".concat(I,"-rtl"),"rtl"===f),n))});var O=i()(I,(n={},(0,r.Z)(n,"".concat(I,"-").concat(g),void 0!==g),(0,r.Z)(n,"".concat(I,"-order-").concat(C),C),(0,r.Z)(n,"".concat(I,"-offset-").concat(b),b),(0,r.Z)(n,"".concat(I,"-push-").concat(k),k),(0,r.Z)(n,"".concat(I,"-pull-").concat(j),j),n),E,A),T={};if(v&&v[0]>0){var K=v[0]/2;T.paddingLeft=K,T.paddingRight=K}if(v&&v[1]>0&&!x){var _=v[1]/2;T.paddingTop=_,T.paddingBottom=_}return N&&(T.flex="number"==typeof N?"".concat(N," ").concat(N," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(N)?"0 0 ".concat(N):N,!1!==y||T.minWidth||(T.minWidth=0)),s.createElement("div",(0,o.Z)({},P,{style:(0,o.Z)((0,o.Z)({},T),S),className:O,ref:t}),w)});t.Z=m},92820:function(e,t,n){"use strict";var r=n(87462),o=n(4942),a=n(71002),c=n(97685),i=n(94184),s=n.n(i),l=n(67294),d=n(53124),u=n(98082),p=n(24308),m=n(93355),f=n(99134),h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function v(e,t){var n=l.useState("string"==typeof e?e:""),r=(0,c.Z)(n,2),o=r[0],i=r[1],s=function(){if("object"===(0,a.Z)(e))for(var n=0;n<p.c4.length;n++){var r=p.c4[n];if(t[r]){var o=e[r];if(void 0!==o){i(o);return}}}};return l.useEffect(function(){s()},[JSON.stringify(e),t]),o}(0,m.b)("top","middle","bottom","stretch"),(0,m.b)("start","end","center","space-around","space-between","space-evenly");var y=l.forwardRef(function(e,t){var n,i,m=e.prefixCls,y=e.justify,x=e.align,Z=e.className,g=e.style,C=e.children,b=e.gutter,k=void 0===b?0:b,j=e.wrap,E=h(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),w=l.useContext(d.E_),N=w.getPrefixCls,S=w.direction,P=l.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),I=(0,c.Z)(P,2),A=I[0],O=I[1],T=l.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),K=(0,c.Z)(T,2),_=K[0],R=K[1],U=v(x,_),z=v(y,_),M=(0,u.Z)(),L=l.useRef(k);l.useEffect(function(){var e=p.ZP.subscribe(function(e){R(e);var t=L.current||0;(!Array.isArray(t)&&"object"===(0,a.Z)(t)||Array.isArray(t)&&("object"===(0,a.Z)(t[0])||"object"===(0,a.Z)(t[1])))&&O(e)});return function(){return p.ZP.unsubscribe(e)}},[]);var B=N("row",m),F=(n=[void 0,void 0],(Array.isArray(k)?k:[k,void 0]).forEach(function(e,t){if("object"===(0,a.Z)(e))for(var r=0;r<p.c4.length;r++){var o=p.c4[r];if(A[o]&&void 0!==e[o]){n[t]=e[o];break}}else n[t]=e}),n),D=s()(B,(i={},(0,o.Z)(i,"".concat(B,"-no-wrap"),!1===j),(0,o.Z)(i,"".concat(B,"-").concat(z),z),(0,o.Z)(i,"".concat(B,"-").concat(U),U),(0,o.Z)(i,"".concat(B,"-rtl"),"rtl"===S),i),Z),G={},H=null!=F[0]&&F[0]>0?-(F[0]/2):void 0,J=null!=F[1]&&F[1]>0?-(F[1]/2):void 0;if(H&&(G.marginLeft=H,G.marginRight=H),M){var W=(0,c.Z)(F,2);G.rowGap=W[1]}else J&&(G.marginTop=J,G.marginBottom=J);var X=(0,c.Z)(F,2),$=X[0],V=X[1],q=l.useMemo(function(){return{gutter:[$,V],wrap:j,supportFlexGap:M}},[$,V,j,M]);return l.createElement(f.Z.Provider,{value:q},l.createElement("div",(0,r.Z)({},E,{className:D,style:(0,r.Z)((0,r.Z)({},G),g),ref:t}),C))});t.Z=y},71230:function(e,t,n){"use strict";var r=n(92820);t.Z=r.Z},21987:function(e,t,n){"use strict";var r=n(75263).default,o=n(64836).default;t.Z=void 0;var a=o(n(10434)),c=r(n(67294)),i=o(n(28460)),s=c.forwardRef(function(e,t){return c.createElement(i.default,(0,a.default)({ref:t},e,{component:"div"}))});t.Z=s},52859:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config/appearance",function(){return n(40409)}])},40409:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(85893),o=n(67294),a=n(54907),c=n(15746),i=n(26713),s=n(71230),l=n(71577),d=n(21987),u=n(11700),p=n(84485),m=n(87685),f=n(58909),h=n(61426),v=n(99519),y=n(90745),x=n(41983),Z=n(39664);let{Title:g}=p.Z,C=()=>{let[e,t]=(0,o.useState)("/* Enter custom CSS here */"),[n,a]=(0,o.useState)(null),[c,i]=(0,o.useState)(!1),s=(0,o.useContext)(v.aC),{serverConfig:d,setFieldInConfigState:u}=s||{},{instanceDetails:p}=d,{customStyles:C}=p,b=null,k=()=>{a(null),i(!1),clearTimeout(b),b=null};async function j(){a((0,x.kg)(x.Jk)),await (0,y.Si)({apiPath:y.d$,data:{value:e},onSuccess(t){u({fieldName:"customStyles",value:e,path:"instanceDetails"}),a((0,x.kg)(x.zv,t))},onError(e){a((0,x.kg)(x.Un,e))}}),b=setTimeout(k,y.sI)}(0,o.useEffect)(()=>{t(C)},[p]);let E=o.useCallback(e=>{t(e),e===C||c?e===C&&c&&i(!1):i(!0)},[]);return(0,r.jsxs)("div",{className:"edit-custom-css",children:[(0,r.jsx)(g,{level:3,className:"section-title",children:"Customize your page styling with CSS"}),(0,r.jsxs)("p",{className:"description",children:["Customize the look and feel of your Owncast instance by overriding the CSS styles of various components on the page. Refer to the"," ",(0,r.jsx)("a",{href:"https://owncast.online/docs/website/",rel:"noopener noreferrer",target:"_blank",children:"CSS & Components guide"}),"."]}),(0,r.jsx)("p",{className:"description",children:"Please input plain CSS text, as this will be directly injected onto your page during load."}),(0,r.jsx)(m.ZP,{value:e,placeholder:"/* Enter custom CSS here */",theme:f.F,height:"200px",extensions:[(0,h.css)()],onChange:E}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{className:"page-content-actions",children:[c&&(0,r.jsx)(l.Z,{type:"primary",onClick:j,children:"Save"}),(0,r.jsx)(Z.E,{status:n})]})]})};var b=n(94935),k=n.n(b);let{Panel:j}=a.Z,E="/appearance";function w(e){let{value:t,name:n,description:o,onChange:a}=e;return(0,r.jsxs)(c.Z,{span:3,children:[(0,r.jsx)("input",{type:"color",id:n,name:o,title:o,value:t,className:k().colorPicker,onChange:e=>a(n,e.target.value,o)}),(0,r.jsx)("div",{style:{padding:"2px"},children:o})]},n)}function N(){let e=(0,o.useContext)(v.aC),{serverConfig:t}=e||{},{instanceDetails:n}=t,{appearanceVariables:c}=n,p=[{name:"theme-color-users-0",description:""},{name:"theme-color-users-1",description:""},{name:"theme-color-users-2",description:""},{name:"theme-color-users-3",description:""},{name:"theme-color-users-4",description:""},{name:"theme-color-users-5",description:""},{name:"theme-color-users-6",description:""},{name:"theme-color-users-7",description:""}],m=[{name:"theme-color-palette-0",description:""},{name:"theme-color-palette-1",description:""},{name:"theme-color-palette-2",description:""},{name:"theme-color-palette-3",description:""},{name:"theme-color-palette-4",description:""},{name:"theme-color-palette-5",description:""},{name:"theme-color-palette-6",description:""},{name:"theme-color-palette-7",description:""},{name:"theme-color-palette-8",description:""},{name:"theme-color-palette-9",description:""},{name:"theme-color-palette-10",description:""},{name:"theme-color-palette-11",description:""},{name:"theme-color-palette-12",description:""}],f=[{name:"theme-color-background-main",description:"Background"},{name:"theme-color-action",description:"Action"},{name:"theme-color-action-hover",description:"Action Hover"},{name:"theme-color-components-chat-background",description:"Chat Background"},{name:"theme-color-components-chat-text",description:"Text: Chat"},{name:"theme-color-components-text-on-dark",description:"Text: Light"},{name:"theme-color-components-text-on-light",description:"Text: Dark"},{name:"theme-color-background-header",description:"Header/Footer"},{name:"theme-color-components-content-background",description:"Page Content"},{name:"theme-color-components-scrollbar-background",description:"Scrollbar Background"},{name:"theme-color-components-scrollbar-thumb",description:"Scrollbar Thumb"}],[h,g]=(0,o.useState)(),[b,k]=(0,o.useState)(null),N=()=>{k(null),clearTimeout(null)};(0,o.useEffect)(()=>{let e={};[...m,...f,...p].forEach(t=>{let n=getComputedStyle(document.documentElement).getPropertyValue("--".concat(t.name));e[t.name]={value:n.trim(),description:t.description}}),g(e)},[]),(0,o.useEffect)(()=>{if(!c||!h)return;let e=h;Object.keys(c).forEach(t=>{var n;e[t]={value:c[t],description:(null===(n=h[t])||void 0===n?void 0:n.description)||""}}),g(e)},[c]);let S=(e,t,n)=>{g({...h,[e]:{value:t,description:n}})},P=async()=>{g({}),await (0,y.Si)({apiPath:E,data:{value:{}},onSuccess(){k((0,x.kg)(x.zv,"Updated.")),setTimeout(N,y.sI)},onError(e){k((0,x.kg)(x.Un,e)),setTimeout(N,y.sI)}})},I=async()=>{let e={};Object.keys(h).forEach(t=>{e[t]=h[t].value}),await (0,y.Si)({apiPath:E,data:{value:e},onSuccess(){k((0,x.kg)(x.zv,"Updated.")),setTimeout(N,y.sI)},onError(e){k((0,x.kg)(x.Un,e)),setTimeout(N,y.sI)}})};return h?(0,r.jsxs)(i.Z,{direction:"vertical",children:[(0,r.jsx)(u.Z,{children:"Customize Appearance"}),(0,r.jsx)(d.Z,{children:"The following colors are used across the user interface."}),(0,r.jsx)("div",{children:(0,r.jsxs)(a.Z,{defaultActiveKey:["1"],children:[(0,r.jsxs)(j,{header:(0,r.jsx)(u.Z,{level:3,children:"Section Colors"}),children:[(0,r.jsx)("p",{children:"Certain sections of the interface can be customized by selecting new colors for them."}),(0,r.jsx)(s.Z,{gutter:[16,16],children:f.map(e=>{let{name:t}=e,n=h[t];return(0,r.jsx)(w,{value:n.value,name:t,description:n.description,onChange:S},t)})})]},"1"),(0,r.jsx)(j,{header:(0,r.jsx)(u.Z,{level:3,children:"Chat User Colors"}),children:(0,r.jsx)(s.Z,{gutter:[16,16],children:p.map(e=>{let{name:t}=e,n=h[t];return(0,r.jsx)(w,{value:n.value,name:t,description:n.description,onChange:S},t)})})},"2"),(0,r.jsx)(j,{header:(0,r.jsx)(u.Z,{level:3,children:"Theme Colors"}),children:(0,r.jsx)(s.Z,{gutter:[16,16],children:m.map(e=>{let{name:t}=e,n=h[t];return(0,r.jsx)(w,{value:n.value,name:t,description:n.description,onChange:S},t)})})},"3")]})}),(0,r.jsxs)(i.Z,{direction:"horizontal",children:[(0,r.jsx)(l.Z,{type:"primary",onClick:I,children:"Save Colors"}),(0,r.jsx)(l.Z,{type:"ghost",onClick:P,children:"Reset to Defaults"})]}),(0,r.jsx)(Z.E,{status:b}),(0,r.jsx)("div",{className:"form-module page-content-module",children:(0,r.jsx)(C,{})})]}):(0,r.jsx)("div",{children:"Loading..."})}},94935:function(e){e.exports={colorPicker:"appearance_colorPicker__UvGLE"}}},function(e){e.O(0,[5762,1082,1943,1938,9774,2888,179],function(){return e(e.s=52859)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9882],{48689:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return icons_DeleteOutlined}});var objectSpread2=__webpack_require__(1413),react=__webpack_require__(67294),asn_DeleteOutlined={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},AntdIcon=__webpack_require__(42135),DeleteOutlined_DeleteOutlined=function(props,ref){return react.createElement(AntdIcon.Z,(0,objectSpread2.Z)((0,objectSpread2.Z)({},props),{},{ref:ref,icon:asn_DeleteOutlined}))};DeleteOutlined_DeleteOutlined.displayName="DeleteOutlined";var icons_DeleteOutlined=react.forwardRef(DeleteOutlined_DeleteOutlined)},6226:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return es_col}});var defineProperty=__webpack_require__(4942),esm_extends=__webpack_require__(87462),esm_typeof=__webpack_require__(71002),classnames=__webpack_require__(94184),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__(67294),context=__webpack_require__(53124),RowContext=__webpack_require__(99134),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&0>e.indexOf(p)&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++)0>e.indexOf(p[i])&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]]);return t},sizes=["xs","sm","md","lg","xl","xxl"],es_col=react.forwardRef(function(props,ref){var _classNames,_React$useContext=react.useContext(context.E_),getPrefixCls=_React$useContext.getPrefixCls,direction=_React$useContext.direction,_React$useContext2=react.useContext(RowContext.Z),gutter=_React$useContext2.gutter,wrap=_React$useContext2.wrap,supportFlexGap=_React$useContext2.supportFlexGap,customizePrefixCls=props.prefixCls,span=props.span,order=props.order,offset=props.offset,push=props.push,pull=props.pull,className=props.className,children=props.children,flex=props.flex,style=props.style,others=__rest(props,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),prefixCls=getPrefixCls("col",customizePrefixCls),sizeClassObj={};sizes.forEach(function(size){var _extends2,sizeProps={},propSize=props[size];"number"==typeof propSize?sizeProps.span=propSize:"object"===(0,esm_typeof.Z)(propSize)&&(sizeProps=propSize||{}),delete others[size],sizeClassObj=(0,esm_extends.Z)((0,esm_extends.Z)({},sizeClassObj),(_extends2={},(0,defineProperty.Z)(_extends2,"".concat(prefixCls,"-").concat(size,"-").concat(sizeProps.span),void 0!==sizeProps.span),(0,defineProperty.Z)(_extends2,"".concat(prefixCls,"-").concat(size,"-order-").concat(sizeProps.order),sizeProps.order||0===sizeProps.order),(0,defineProperty.Z)(_extends2,"".concat(prefixCls,"-").concat(size,"-offset-").concat(sizeProps.offset),sizeProps.offset||0===sizeProps.offset),(0,defineProperty.Z)(_extends2,"".concat(prefixCls,"-").concat(size,"-push-").concat(sizeProps.push),sizeProps.push||0===sizeProps.push),(0,defineProperty.Z)(_extends2,"".concat(prefixCls,"-").concat(size,"-pull-").concat(sizeProps.pull),sizeProps.pull||0===sizeProps.pull),(0,defineProperty.Z)(_extends2,"".concat(prefixCls,"-rtl"),"rtl"===direction),_extends2))});var classes=classnames_default()(prefixCls,(_classNames={},(0,defineProperty.Z)(_classNames,"".concat(prefixCls,"-").concat(span),void 0!==span),(0,defineProperty.Z)(_classNames,"".concat(prefixCls,"-order-").concat(order),order),(0,defineProperty.Z)(_classNames,"".concat(prefixCls,"-offset-").concat(offset),offset),(0,defineProperty.Z)(_classNames,"".concat(prefixCls,"-push-").concat(push),push),(0,defineProperty.Z)(_classNames,"".concat(prefixCls,"-pull-").concat(pull),pull),_classNames),className,sizeClassObj),mergedStyle={};if(gutter&&gutter[0]>0){var horizontalGutter=gutter[0]/2;mergedStyle.paddingLeft=horizontalGutter,mergedStyle.paddingRight=horizontalGutter}if(gutter&&gutter[1]>0&&!supportFlexGap){var verticalGutter=gutter[1]/2;mergedStyle.paddingTop=verticalGutter,mergedStyle.paddingBottom=verticalGutter}return flex&&(mergedStyle.flex="number"==typeof flex?"".concat(flex," ").concat(flex," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)?"0 0 ".concat(flex):flex,!1!==wrap||mergedStyle.minWidth||(mergedStyle.minWidth=0)),react.createElement("div",(0,esm_extends.Z)({},others,{style:(0,esm_extends.Z)((0,esm_extends.Z)({},mergedStyle),style),className:classes,ref:ref}),children)})},99134:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var RowContext=(0,__webpack_require__(67294).createContext)({});__webpack_exports__.Z=RowContext},25968:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return es_row}});var esm_extends=__webpack_require__(87462),defineProperty=__webpack_require__(4942),esm_typeof=__webpack_require__(71002),slicedToArray=__webpack_require__(97685),classnames=__webpack_require__(94184),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__(67294),context=__webpack_require__(53124),useFlexGapSupport=__webpack_require__(98082),responsiveObserve=__webpack_require__(24308),type=__webpack_require__(93355),RowContext=__webpack_require__(99134),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&0>e.indexOf(p)&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++)0>e.indexOf(p[i])&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]]);return t};function useMergePropByScreen(oriProp,screen){var _React$useState=react.useState("string"==typeof oriProp?oriProp:""),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),prop=_React$useState2[0],setProp=_React$useState2[1],clacMergeAlignOrJustify=function(){if("object"===(0,esm_typeof.Z)(oriProp))for(var i=0;i<responsiveObserve.c4.length;i++){var breakpoint=responsiveObserve.c4[i];if(screen[breakpoint]){var curVal=oriProp[breakpoint];if(void 0!==curVal){setProp(curVal);return}}}};return react.useEffect(function(){clacMergeAlignOrJustify()},[JSON.stringify(oriProp),screen]),prop}(0,type.b)("top","middle","bottom","stretch"),(0,type.b)("start","end","center","space-around","space-between","space-evenly");var es_row=react.forwardRef(function(props,ref){var results,_classNames,customizePrefixCls=props.prefixCls,justify=props.justify,align=props.align,className=props.className,style=props.style,children=props.children,_props$gutter=props.gutter,gutter=void 0===_props$gutter?0:_props$gutter,wrap=props.wrap,others=__rest(props,["prefixCls","justify","align","className","style","children","gutter","wrap"]),_React$useContext=react.useContext(context.E_),getPrefixCls=_React$useContext.getPrefixCls,direction=_React$useContext.direction,_React$useState3=react.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),_React$useState4=(0,slicedToArray.Z)(_React$useState3,2),screens=_React$useState4[0],setScreens=_React$useState4[1],_React$useState5=react.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),_React$useState6=(0,slicedToArray.Z)(_React$useState5,2),curScreens=_React$useState6[0],setCurScreens=_React$useState6[1],mergeAlign=useMergePropByScreen(align,curScreens),mergeJustify=useMergePropByScreen(justify,curScreens),supportFlexGap=(0,useFlexGapSupport.Z)(),gutterRef=react.useRef(gutter);react.useEffect(function(){var token=responsiveObserve.ZP.subscribe(function(screen){setCurScreens(screen);var currentGutter=gutterRef.current||0;(!Array.isArray(currentGutter)&&"object"===(0,esm_typeof.Z)(currentGutter)||Array.isArray(currentGutter)&&("object"===(0,esm_typeof.Z)(currentGutter[0])||"object"===(0,esm_typeof.Z)(currentGutter[1])))&&setScreens(screen)});return function(){return responsiveObserve.ZP.unsubscribe(token)}},[]);var prefixCls=getPrefixCls("row",customizePrefixCls),gutters=(results=[void 0,void 0],(Array.isArray(gutter)?gutter:[gutter,void 0]).forEach(function(g,index){if("object"===(0,esm_typeof.Z)(g))for(var i=0;i<responsiveObserve.c4.length;i++){var breakpoint=responsiveObserve.c4[i];if(screens[breakpoint]&&void 0!==g[breakpoint]){results[index]=g[breakpoint];break}}else results[index]=g}),results),classes=classnames_default()(prefixCls,(_classNames={},(0,defineProperty.Z)(_classNames,"".concat(prefixCls,"-no-wrap"),!1===wrap),(0,defineProperty.Z)(_classNames,"".concat(prefixCls,"-").concat(mergeJustify),mergeJustify),(0,defineProperty.Z)(_classNames,"".concat(prefixCls,"-").concat(mergeAlign),mergeAlign),(0,defineProperty.Z)(_classNames,"".concat(prefixCls,"-rtl"),"rtl"===direction),_classNames),className),rowStyle={},horizontalGutter=null!=gutters[0]&&gutters[0]>0?-(gutters[0]/2):void 0,verticalGutter=null!=gutters[1]&&gutters[1]>0?-(gutters[1]/2):void 0;if(horizontalGutter&&(rowStyle.marginLeft=horizontalGutter,rowStyle.marginRight=horizontalGutter),supportFlexGap){var _gutters=(0,slicedToArray.Z)(gutters,2);rowStyle.rowGap=_gutters[1]}else verticalGutter&&(rowStyle.marginTop=verticalGutter,rowStyle.marginBottom=verticalGutter);var _gutters2=(0,slicedToArray.Z)(gutters,2),gutterH=_gutters2[0],gutterV=_gutters2[1],rowContext=react.useMemo(function(){return{gutter:[gutterH,gutterV],wrap:wrap,supportFlexGap:supportFlexGap}},[gutterH,gutterV,wrap,supportFlexGap]);return react.createElement(RowContext.Z.Provider,{value:rowContext},react.createElement("div",(0,esm_extends.Z)({},others,{className:classes,style:(0,esm_extends.Z)((0,esm_extends.Z)({},rowStyle),style),ref:ref}),children))})},20550:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return tag}});var defineProperty=__webpack_require__(4942),esm_extends=__webpack_require__(87462),slicedToArray=__webpack_require__(97685),CloseOutlined=__webpack_require__(97937),classnames=__webpack_require__(94184),classnames_default=__webpack_require__.n(classnames),omit=__webpack_require__(98423),react=__webpack_require__(67294),context=__webpack_require__(53124),colors=__webpack_require__(98787),wave=__webpack_require__(68349),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&0>e.indexOf(p)&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++)0>e.indexOf(p[i])&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]]);return t},tag_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&0>e.indexOf(p)&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++)0>e.indexOf(p[i])&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]]);return t},PresetColorRegex=RegExp("^(".concat(colors.Y.join("|"),")(-inverse)?$")),PresetStatusColorRegex=RegExp("^(".concat(colors.E.join("|"),")$")),Tag=react.forwardRef(function(_a,ref){var _classNames,customizePrefixCls=_a.prefixCls,className=_a.className,style=_a.style,children=_a.children,icon=_a.icon,color=_a.color,onClose=_a.onClose,closeIcon=_a.closeIcon,_a$closable=_a.closable,props=tag_rest(_a,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),_React$useContext=react.useContext(context.E_),getPrefixCls=_React$useContext.getPrefixCls,direction=_React$useContext.direction,_React$useState=react.useState(!0),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),visible=_React$useState2[0],setVisible=_React$useState2[1];react.useEffect(function(){"visible"in props&&setVisible(props.visible)},[props.visible]);var isPresetColor=function(){return!!color&&(PresetColorRegex.test(color)||PresetStatusColorRegex.test(color))},tagStyle=(0,esm_extends.Z)({backgroundColor:color&&!isPresetColor()?color:void 0},style),presetColor=isPresetColor(),prefixCls=getPrefixCls("tag",customizePrefixCls),tagClassName=classnames_default()(prefixCls,(_classNames={},(0,defineProperty.Z)(_classNames,"".concat(prefixCls,"-").concat(color),presetColor),(0,defineProperty.Z)(_classNames,"".concat(prefixCls,"-has-color"),color&&!presetColor),(0,defineProperty.Z)(_classNames,"".concat(prefixCls,"-hidden"),!visible),(0,defineProperty.Z)(_classNames,"".concat(prefixCls,"-rtl"),"rtl"===direction),_classNames),className),handleCloseClick=function(e){e.stopPropagation(),null==onClose||onClose(e),!e.defaultPrevented&&("visible"in props||setVisible(!1))},isNeedWave="onClick"in props||children&&"a"===children.type,tagProps=(0,omit.Z)(props,["visible"]),iconNode=icon||null,kids=iconNode?react.createElement(react.Fragment,null,iconNode,react.createElement("span",null,children)):children,tagNode=react.createElement("span",(0,esm_extends.Z)({},tagProps,{ref:ref,className:tagClassName,style:tagStyle}),kids,void 0!==_a$closable&&_a$closable?closeIcon?react.createElement("span",{className:"".concat(prefixCls,"-close-icon"),onClick:handleCloseClick},closeIcon):react.createElement(CloseOutlined.Z,{className:"".concat(prefixCls,"-close-icon"),onClick:handleCloseClick}):null);return isNeedWave?react.createElement(wave.Z,null,tagNode):tagNode});Tag.CheckableTag=function(_a){var _classNames,customizePrefixCls=_a.prefixCls,className=_a.className,checked=_a.checked,onChange=_a.onChange,onClick=_a.onClick,restProps=__rest(_a,["prefixCls","className","checked","onChange","onClick"]),prefixCls=(0,react.useContext(context.E_).getPrefixCls)("tag",customizePrefixCls),cls=classnames_default()(prefixCls,(_classNames={},(0,defineProperty.Z)(_classNames,"".concat(prefixCls,"-checkable"),!0),(0,defineProperty.Z)(_classNames,"".concat(prefixCls,"-checkable-checked"),checked),_classNames),className);return react.createElement("span",(0,esm_extends.Z)({},restProps,{className:cls,onClick:function(e){null==onChange||onChange(!checked),null==onClick||onClick(e)}}))};var tag=Tag},27561:function(module,__unused_webpack_exports,__webpack_require__){var trimmedEndIndex=__webpack_require__(67990),reTrimStart=/^\s+/;module.exports=function(string){return string?string.slice(0,trimmedEndIndex(string)+1).replace(reTrimStart,""):string}},67990:function(module){var reWhitespace=/\s/;module.exports=function(string){for(var index=string.length;index--&&reWhitespace.test(string.charAt(index)););return index}},23279:function(module,__unused_webpack_exports,__webpack_require__){var isObject=__webpack_require__(13218),now=__webpack_require__(7771),toNumber=__webpack_require__(14841),nativeMax=Math.max,nativeMin=Math.min;module.exports=function(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=!1,maxing=!1,trailing=!0;if("function"!=typeof func)throw TypeError("Expected a function");function invokeFunc(time){var args=lastArgs,thisArg=lastThis;return lastArgs=lastThis=void 0,lastInvokeTime=time,result=func.apply(thisArg,args)}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime;return void 0===lastCallTime||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&timeSinceLastInvoke>=maxWait}function timerExpired(){var timeSinceLastCall,timeSinceLastInvoke,timeWaiting,time=now();if(shouldInvoke(time))return trailingEdge(time);timerId=setTimeout(timerExpired,(timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime,timeWaiting=wait-timeSinceLastCall,maxing?nativeMin(timeWaiting,maxWait-timeSinceLastInvoke):timeWaiting))}function trailingEdge(time){return(timerId=void 0,trailing&&lastArgs)?invokeFunc(time):(lastArgs=lastThis=void 0,result)}function debounced(){var time,time1=now(),isInvoking=shouldInvoke(time1);if(lastArgs=arguments,lastThis=this,lastCallTime=time1,isInvoking){if(void 0===timerId)return lastInvokeTime=time=lastCallTime,timerId=setTimeout(timerExpired,wait),leading?invokeFunc(time):result;if(maxing)return clearTimeout(timerId),timerId=setTimeout(timerExpired,wait),invokeFunc(lastCallTime)}return void 0===timerId&&(timerId=setTimeout(timerExpired,wait)),result}return wait=toNumber(wait)||0,isObject(options)&&(leading=!!options.leading,maxWait=(maxing="maxWait"in options)?nativeMax(toNumber(options.maxWait)||0,wait):maxWait,trailing="trailing"in options?!!options.trailing:trailing),debounced.cancel=function(){void 0!==timerId&&clearTimeout(timerId),lastInvokeTime=0,lastArgs=lastCallTime=lastThis=timerId=void 0},debounced.flush=function(){return void 0===timerId?result:trailingEdge(now())},debounced}},33448:function(module,__unused_webpack_exports,__webpack_require__){var baseGetTag=__webpack_require__(44239),isObjectLike=__webpack_require__(37005);module.exports=function(value){return"symbol"==typeof value||isObjectLike(value)&&"[object Symbol]"==baseGetTag(value)}},7771:function(module,__unused_webpack_exports,__webpack_require__){var root=__webpack_require__(55639);module.exports=function(){return root.Date.now()}},14841:function(module,__unused_webpack_exports,__webpack_require__){var baseTrim=__webpack_require__(27561),isObject=__webpack_require__(13218),isSymbol=__webpack_require__(33448),NAN=0/0,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;module.exports=function(value){if("number"==typeof value)return value;if(isSymbol(value))return NAN;if(isObject(value)){var other="function"==typeof value.valueOf?value.valueOf():value;value=isObject(other)?other+"":other}if("string"!=typeof value)return 0===value?value:+value;value=baseTrim(value);var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value}},26562:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/access-tokens",function(){return __webpack_require__(23341)}])},23341:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67294),antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(84485),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(94199),antd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(20550),antd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(6226),antd__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(32808),antd__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(85402),antd__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(69677),antd__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(25968),antd__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(71577),antd__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(26713),antd__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(93626),_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(48689),date_fns_format__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(58091),_utils_apis__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(64777);let{Title,Paragraph}=antd__WEBPACK_IMPORTED_MODULE_3__.Z,availableScopes={CAN_SEND_SYSTEM_MESSAGES:{name:"System messages",description:"Can send official messages on behalf of the system.",color:"purple"},CAN_SEND_MESSAGES:{name:"User chat messages",description:"Can send chat messages on behalf of the owner of this token.",color:"green"},HAS_ADMIN_ACCESS:{name:"Has admin access",description:"Can perform administrative actions such as moderation, get server statuses, etc.",color:"red"}},NewTokenModal=props=>{let{onOk,onCancel,open}=props,[selectedScopes,setSelectedScopes]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),[name,setName]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),scopes=Object.keys(availableScopes).map(key=>({value:key,label:availableScopes[key].description})),okButtonProps={disabled:0===selectedScopes.length||""===name},checkboxes=scopes.map(singleEvent=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__.Z,{span:8,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__.Z,{value:singleEvent.value,children:singleEvent.label})},singleEvent.value));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_8__.Z,{title:"Create New Access token",open:open,onOk:function(){onOk(name,selectedScopes),setSelectedScopes([]),setName("")},onCancel:onCancel,okButtonProps:okButtonProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"The name will be displayed as the chat user when sending messages with this access token."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__.Z,{value:name,placeholder:"Name of bot, service, or integration",onChange:input=>setName(input.currentTarget.value)})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"Select the permissions this access token will have. It cannot be edited after it's created."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__.Z.Group,{style:{width:"100%"},value:selectedScopes,onChange:function(checkedValues){setSelectedScopes(checkedValues)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__.Z,{children:checkboxes})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__.Z,{type:"primary",onClick:function(){setSelectedScopes(Object.keys(availableScopes))},children:"Select all"})})]})},AccessTokens=()=>{let[tokens,setTokens]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),[isTokenModalOpen,setIsTokenModalOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);function handleError(error){console.error("error",error)}async function getAccessTokens(){try{let result=await (0,_utils_apis__WEBPACK_IMPORTED_MODULE_2__.rQ)(_utils_apis__WEBPACK_IMPORTED_MODULE_2__.ms);setTokens(result)}catch(error){handleError(error)}}async function handleDeleteToken(token){try{await (0,_utils_apis__WEBPACK_IMPORTED_MODULE_2__.rQ)(_utils_apis__WEBPACK_IMPORTED_MODULE_2__.Wr,{method:"POST",data:{token}}),getAccessTokens()}catch(error){handleError(error)}}async function handleSaveToken(name,scopes){try{let newToken=await (0,_utils_apis__WEBPACK_IMPORTED_MODULE_2__.rQ)(_utils_apis__WEBPACK_IMPORTED_MODULE_2__.IO,{method:"POST",data:{name,scopes}});setTokens(tokens.concat(newToken))}catch(error){handleError(error)}}(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{getAccessTokens()},[]);let showCreateTokenModal=()=>{setIsTokenModalOpen(!0)},handleTokenModalSaveButton=(name,scopes)=>{setIsTokenModalOpen(!1),handleSaveToken(name,scopes)},handleTokenModalCancel=()=>{setIsTokenModalOpen(!1)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Title,{children:"Access Tokens"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Paragraph,{children:"Access tokens are used to allow external, 3rd party tools to perform specific actions on your Owncast server. They should be kept secure and never included in client code, instead they should be kept on a server that you control."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Paragraph,{children:["Read more about how to use these tokens, with examples, at"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"https://owncast.online/docs/integrations/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"our documentation"}),"."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_15__.Z,{rowKey:"token",columns:[{title:"",key:"delete",render:(text,record)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_12__.Z,{size:"middle",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__.Z,{onClick:()=>handleDeleteToken(record.accessToken),icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__.Z,{})})})},{title:"Name",dataIndex:"displayName",key:"displayName"},{title:"Token",dataIndex:"accessToken",key:"accessToken",render:text=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__.Z.Password,{size:"small",bordered:!1,value:text})},{title:"Scopes",dataIndex:"scopes",key:"scopes",render:scopes=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:scopes.map(scope=>(function(scopeString){if(!scopeString||!availableScopes[scopeString])return null;let scope=availableScopes[scopeString];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__.Z,{title:scope.description,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__.Z,{color:scope.color,children:scope.name})},scopeString)})(scope))})},{title:"Last Used",dataIndex:"lastUsed",key:"lastUsed",render(lastUsed){if(!lastUsed)return"Never";let dateObject=new Date(lastUsed);return(0,date_fns_format__WEBPACK_IMPORTED_MODULE_14__.Z)(dateObject,"P p")}}],dataSource:tokens,pagination:!1}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__.Z,{type:"primary",onClick:showCreateTokenModal,children:"Create Access Token"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NewTokenModal,{open:isTokenModalOpen,onOk:handleTokenModalSaveButton,onCancel:handleTokenModalCancel})]})};__webpack_exports__.default=AccessTokens}},function(__webpack_require__){__webpack_require__.O(0,[8939,3903,4267,3626,8091,9774,2888,179],function(){return __webpack_require__(__webpack_require__.s=26562)}),_N_E=__webpack_require__.O()}]);
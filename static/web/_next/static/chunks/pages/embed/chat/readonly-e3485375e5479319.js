(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8399,1496],{27561:function(module,__unused_webpack_exports,__webpack_require__){var trimmedEndIndex=__webpack_require__(67990),reTrimStart=/^\s+/;module.exports=function(string){return string?string.slice(0,trimmedEndIndex(string)+1).replace(reTrimStart,""):string}},67990:function(module){var reWhitespace=/\s/;module.exports=function(string){for(var index=string.length;index--&&reWhitespace.test(string.charAt(index)););return index}},23279:function(module,__unused_webpack_exports,__webpack_require__){var isObject=__webpack_require__(13218),now=__webpack_require__(7771),toNumber=__webpack_require__(14841),nativeMax=Math.max,nativeMin=Math.min;module.exports=function(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=!1,maxing=!1,trailing=!0;if("function"!=typeof func)throw TypeError("Expected a function");function invokeFunc(time){var args=lastArgs,thisArg=lastThis;return lastArgs=lastThis=void 0,lastInvokeTime=time,result=func.apply(thisArg,args)}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime;return void 0===lastCallTime||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&timeSinceLastInvoke>=maxWait}function timerExpired(){var timeSinceLastCall,timeSinceLastInvoke,timeWaiting,time=now();if(shouldInvoke(time))return trailingEdge(time);timerId=setTimeout(timerExpired,(timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime,timeWaiting=wait-timeSinceLastCall,maxing?nativeMin(timeWaiting,maxWait-timeSinceLastInvoke):timeWaiting))}function trailingEdge(time){return(timerId=void 0,trailing&&lastArgs)?invokeFunc(time):(lastArgs=lastThis=void 0,result)}function debounced(){var time,time1=now(),isInvoking=shouldInvoke(time1);if(lastArgs=arguments,lastThis=this,lastCallTime=time1,isInvoking){if(void 0===timerId)return lastInvokeTime=time=lastCallTime,timerId=setTimeout(timerExpired,wait),leading?invokeFunc(time):result;if(maxing)return clearTimeout(timerId),timerId=setTimeout(timerExpired,wait),invokeFunc(lastCallTime)}return void 0===timerId&&(timerId=setTimeout(timerExpired,wait)),result}return wait=toNumber(wait)||0,isObject(options)&&(leading=!!options.leading,maxWait=(maxing="maxWait"in options)?nativeMax(toNumber(options.maxWait)||0,wait):maxWait,trailing="trailing"in options?!!options.trailing:trailing),debounced.cancel=function(){void 0!==timerId&&clearTimeout(timerId),lastInvokeTime=0,lastArgs=lastCallTime=lastThis=timerId=void 0},debounced.flush=function(){return void 0===timerId?result:trailingEdge(now())},debounced}},33448:function(module,__unused_webpack_exports,__webpack_require__){var baseGetTag=__webpack_require__(44239),isObjectLike=__webpack_require__(37005);module.exports=function(value){return"symbol"==typeof value||isObjectLike(value)&&"[object Symbol]"==baseGetTag(value)}},7771:function(module,__unused_webpack_exports,__webpack_require__){var root=__webpack_require__(55639);module.exports=function(){return root.Date.now()}},14841:function(module,__unused_webpack_exports,__webpack_require__){var baseTrim=__webpack_require__(27561),isObject=__webpack_require__(13218),isSymbol=__webpack_require__(33448),NAN=0/0,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;module.exports=function(value){if("number"==typeof value)return value;if(isSymbol(value))return NAN;if(isObject(value)){var other="function"==typeof value.valueOf?value.valueOf():value;value=isObject(other)?other+"":other}if("string"!=typeof value)return 0===value?value:+value;value=baseTrim(value);var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value}},88054:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/embed/chat/readonly",function(){return __webpack_require__(81484)}])},37645:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(dynamicOptions,options){let loadableFn=_loadable.default,loadableOptions=(null==options?void 0:options.suspense)?{}:{loading(param){let{error,isLoading,pastDelay}=param;return null}};if(dynamicOptions instanceof Promise?loadableOptions.loader=()=>dynamicOptions:"function"==typeof dynamicOptions?loadableOptions.loader=dynamicOptions:"object"==typeof dynamicOptions&&(loadableOptions=_extends({},loadableOptions,dynamicOptions)),(loadableOptions=_extends({},loadableOptions,options)).suspense&&(delete loadableOptions.ssr,delete loadableOptions.loading),loadableOptions.loadableGenerated&&delete(loadableOptions=_extends({},loadableOptions,loadableOptions.loadableGenerated)).loadableGenerated,"boolean"==typeof loadableOptions.ssr&&!loadableOptions.suspense){if(!loadableOptions.ssr)return delete loadableOptions.ssr,noSSR(loadableFn,loadableOptions);delete loadableOptions.ssr}return loadableFn(loadableOptions)},exports.noSSR=noSSR;var _extends=__webpack_require__(6495).Z,_interop_require_default=__webpack_require__(92648).Z,_loadable=(_interop_require_default(__webpack_require__(67294)),_interop_require_default(__webpack_require__(14588)));function noSSR(LoadableInitializer,loadableOptions){return delete loadableOptions.webpack,delete loadableOptions.modules,LoadableInitializer(loadableOptions)}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},33644:function(__unused_webpack_module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LoadableContext=void 0;var _react=(0,__webpack_require__(92648).Z)(__webpack_require__(67294));let LoadableContext=_react.default.createContext(null);exports.LoadableContext=LoadableContext},14588:function(__unused_webpack_module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends=__webpack_require__(6495).Z,_react=(0,__webpack_require__(91598).Z)(__webpack_require__(67294)),_loadableContext=__webpack_require__(33644);let ALL_INITIALIZERS=[],READY_INITIALIZERS=[],initialized=!1;function load(loader){let promise=loader(),state={loading:!0,loaded:null,error:null};return state.promise=promise.then(loaded=>(state.loading=!1,state.loaded=loaded,loaded)).catch(err=>{throw state.loading=!1,state.error=err,err}),state}class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:res,_opts:opts}=this;res.loading&&("number"==typeof opts.delay&&(0===opts.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},opts.delay)),"number"==typeof opts.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},opts.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(_err=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(partial){this._state=_extends({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},partial),this._callbacks.forEach(callback=>callback())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(callback){return this._callbacks.add(callback),()=>{this._callbacks.delete(callback)}}constructor(loadFn,opts){this._loadFn=loadFn,this._opts=opts,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function Loadable(opts){return function(loadFn,options){let opts=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},options);opts.suspense&&(opts.lazy=_react.default.lazy(opts.loader));let subscription=null;function init(){if(!subscription){let sub=new LoadableSubscription(loadFn,opts);subscription={getCurrentValue:sub.getCurrentValue.bind(sub),subscribe:sub.subscribe.bind(sub),retry:sub.retry.bind(sub),promise:sub.promise.bind(sub)}}return subscription.promise()}if(!initialized){let moduleIds=opts.webpack?opts.webpack():opts.modules;moduleIds&&READY_INITIALIZERS.push(ids=>{for(let moduleId of moduleIds)if(-1!==ids.indexOf(moduleId))return init()})}function useLoadableModule(){init();let context=_react.default.useContext(_loadableContext.LoadableContext);context&&Array.isArray(opts.modules)&&opts.modules.forEach(moduleName=>{context(moduleName)})}let LoadableComponent=opts.suspense?function(props,ref){return useLoadableModule(),_react.default.createElement(opts.lazy,_extends({},props,{ref}))}:function(props,ref){useLoadableModule();let state=_react.useSyncExternalStore(subscription.subscribe,subscription.getCurrentValue,subscription.getCurrentValue);return _react.default.useImperativeHandle(ref,()=>({retry:subscription.retry}),[]),_react.default.useMemo(()=>{var obj;return state.loading||state.error?_react.default.createElement(opts.loading,{isLoading:state.loading,pastDelay:state.pastDelay,timedOut:state.timedOut,error:state.error,retry:subscription.retry}):state.loaded?_react.default.createElement((obj=state.loaded)&&obj.__esModule?obj.default:obj,props):null},[props,state])};return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",_react.default.forwardRef(LoadableComponent)}(load,opts)}function flushInitializers(initializers,ids){let promises=[];for(;initializers.length;){let init=initializers.pop();promises.push(init(ids))}return Promise.all(promises).then(()=>{if(initializers.length)return flushInitializers(initializers,ids)})}Loadable.preloadAll=()=>new Promise((resolveInitializers,reject)=>{flushInitializers(ALL_INITIALIZERS).then(resolveInitializers,reject)}),Loadable.preloadReady=function(){let ids=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(resolvePreload=>{let res=()=>(initialized=!0,resolvePreload());flushInitializers(READY_INITIALIZERS,ids).then(res,res)})},window.__NEXT_PRELOADREADY=Loadable.preloadReady,exports.default=Loadable},81484:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return ReadOnlyChatEmbed}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85893),recoil__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4480),_components_chat_ChatContainer_ChatContainer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(94977),_components_stores_ClientConfigStore__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(77466);function ReadOnlyChatEmbed(){let currentUser=(0,recoil__WEBPACK_IMPORTED_MODULE_1__.sJ)(_components_stores_ClientConfigStore__WEBPACK_IMPORTED_MODULE_3__.db),messages=(0,recoil__WEBPACK_IMPORTED_MODULE_1__.sJ)(_components_stores_ClientConfigStore__WEBPACK_IMPORTED_MODULE_3__.pH);if(!currentUser)return null;let{id,displayName}=currentUser;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_stores_ClientConfigStore__WEBPACK_IMPORTED_MODULE_3__.me,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_chat_ChatContainer_ChatContainer__WEBPACK_IMPORTED_MODULE_2__.ChatContainer,{messages:messages,usernameToHighlight:displayName,chatUserId:id,isModerator:!1,showInput:!1,height:"100vh"})]})}},5152:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(37645)}},function(__webpack_require__){__webpack_require__.O(0,[1272,8700,6395,2852,7466,4977,9774,2888,179],function(){return __webpack_require__(__webpack_require__.s=88054)}),_N_E=__webpack_require__.O()}]);
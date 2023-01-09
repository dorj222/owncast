"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7066],{24019:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(1413),r=n(67294),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"}}]},name:"clock-circle",theme:"outlined"},i=n(42135),u=function(e,t){return r.createElement(i.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:o}))};u.displayName="ClockCircleOutlined";var s=r.forwardRef(u)},31326:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(1413),r=n(67294),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M396 512a112 112 0 10224 0 112 112 0 10-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"}}]},name:"eye",theme:"filled"},i=n(42135),u=function(e,t){return r.createElement(i.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:o}))};u.displayName="EyeFilled";var s=r.forwardRef(u)},27049:function(e,t,n){var a=n(87462),r=n(4942),o=n(94184),i=n.n(o),u=n(67294),s=n(53124),l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};t.Z=function(e){var t,n=u.useContext(s.E_),o=n.getPrefixCls,c=n.direction,d=e.prefixCls,f=e.type,h=void 0===f?"horizontal":f,m=e.orientation,g=void 0===m?"center":m,y=e.orientationMargin,v=e.className,p=e.children,b=e.dashed,w=e.plain,M=l(e,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),k=o("divider",d),Z=g.length>0?"-".concat(g):g,C=!!p,O="left"===g&&null!=y,P="right"===g&&null!=y,S=i()(k,"".concat(k,"-").concat(h),(t={},(0,r.Z)(t,"".concat(k,"-with-text"),C),(0,r.Z)(t,"".concat(k,"-with-text").concat(Z),C),(0,r.Z)(t,"".concat(k,"-dashed"),!!b),(0,r.Z)(t,"".concat(k,"-plain"),!!w),(0,r.Z)(t,"".concat(k,"-rtl"),"rtl"===c),(0,r.Z)(t,"".concat(k,"-no-default-orientation-margin-left"),O),(0,r.Z)(t,"".concat(k,"-no-default-orientation-margin-right"),P),t),v),E=(0,a.Z)((0,a.Z)({},O&&{marginLeft:y}),P&&{marginRight:y});return u.createElement("div",(0,a.Z)({className:S},M,{role:"separator"}),p&&"vertical"!==h&&u.createElement("span",{className:"".concat(k,"-inner-text"),style:E},p))}},86559:function(e,t,n){n.d(t,{Z:function(){return c}});var a,r={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function o(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var i={date:o({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:o({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:o({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},u={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function s(e){return function(t,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,o=null!=n&&n.width?String(n.width):r;a=e.formattingValues[o]||e.formattingValues[r]}else{var i=e.defaultWidth,u=null!=n&&n.width?String(n.width):e.defaultWidth;a=e.values[u]||e.values[i]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function l(e){return function(t){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(o);if(!i)return null;var u=i[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(s)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(s,function(e){return e.test(u)}):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(s,function(e){return e.test(u)});return n=e.valueCallback?e.valueCallback(l):l,{value:n=a.valueCallback?a.valueCallback(n):n,rest:t.slice(u.length)}}}var c={code:"en-US",formatDistance:function(e,t,n){var a,o=r[e];return(a="string"==typeof o?o:1===t?o.one:o.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix)?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:i,formatRelative:function(e,t,n,a){return u[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:s({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:s({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:s({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:s({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:s({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(a={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(a.matchPattern);if(!n)return null;var r=n[0],o=e.match(a.parsePattern);if(!o)return null;var i=a.valueCallback?a.valueCallback(o[0]):o[0];return{value:i=t.valueCallback?t.valueCallback(i):i,rest:e.slice(r.length)}}),era:l({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:l({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:l({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:l({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:l({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}}},84314:function(e,t,n){n.d(t,{j:function(){return r}});var a={};function r(){return a}},24262:function(e,t,n){n.d(t,{Z:function(){return a}});function a(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}},83946:function(e,t,n){n.d(t,{Z:function(){return a}});function a(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}},77349:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(83946),r=n(19013),o=n(13882);function i(e,t){(0,o.Z)(2,arguments);var n=(0,r.Z)(e),i=(0,a.Z)(t);return isNaN(i)?new Date(NaN):(i&&n.setDate(n.getDate()+i),n)}},11640:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(83946),r=n(19013),o=n(13882);function i(e,t){(0,o.Z)(2,arguments);var n=(0,r.Z)(e),i=(0,a.Z)(t);if(isNaN(i))return new Date(NaN);if(!i)return n;var u=n.getDate(),s=new Date(n.getTime());return(s.setMonth(n.getMonth()+i+1,0),u>=s.getDate())?s:(n.setFullYear(s.getFullYear(),s.getMonth(),u),n)}},75401:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(24262),r=n(19013),o=n(13882);function i(e){(0,o.Z)(1,arguments);var t=(0,r.Z)(e);return t.setHours(0,0,0,0),t}function u(e,t){(0,o.Z)(2,arguments);var n=i(e),r=i(t);return Math.round((n.getTime()-(0,a.Z)(n)-(r.getTime()-(0,a.Z)(r)))/864e5)}},68730:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(49474),r=n(77349),o=n(11640),i=n(19013),u=n(13882),s=n(83946);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if((0,u.Z)(2,arguments),!t||"object"!==l(t))return new Date(NaN);var n=t.years?(0,s.Z)(t.years):0,a=t.months?(0,s.Z)(t.months):0,c=t.weeks?(0,s.Z)(t.weeks):0,d=t.days?(0,s.Z)(t.days):0,f=t.hours?(0,s.Z)(t.hours):0,h=t.minutes?(0,s.Z)(t.minutes):0,m=t.seconds?(0,s.Z)(t.seconds):0,g=(0,i.Z)(e),y=a||n?(0,o.Z)(g,a+12*n):g,v=d||c?(0,r.Z)(y,d+7*c):y;return new Date(v.getTime()+1e3*(m+60*(h+60*f)))}var d=n(75401);function f(e,t){var n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return n<0?-1:n>0?1:n}var h=n(59910),m=n(93645),g=n(82161),y=n(11699);function v(e){(0,u.Z)(1,arguments);var t=(0,i.Z)(e.start),n=(0,i.Z)(e.end);if(isNaN(t.getTime()))throw RangeError("Start Date is invalid");if(isNaN(n.getTime()))throw RangeError("End Date is invalid");var r={};r.years=Math.abs(function(e,t){(0,u.Z)(2,arguments);var n=(0,i.Z)(e),r=(0,i.Z)(t),o=(0,a.Z)(n,r),s=Math.abs(function(e,t){(0,u.Z)(2,arguments);var n=(0,i.Z)(e),a=(0,i.Z)(t);return n.getFullYear()-a.getFullYear()}(n,r));n.setFullYear(1584),r.setFullYear(1584);var l=(0,a.Z)(n,r)===-o,c=o*(s-Number(l));return 0===c?0:c}(n,t));var o=(0,a.Z)(n,t),s=c(t,{years:o*r.years});r.months=Math.abs((0,g.Z)(n,s));var l=c(s,{months:o*r.months});r.days=Math.abs(function(e,t){(0,u.Z)(2,arguments);var n=(0,i.Z)(e),a=(0,i.Z)(t),r=f(n,a),o=Math.abs((0,d.Z)(n,a));n.setDate(n.getDate()-r*o);var s=Number(f(n,a)===-r),l=r*(o-s);return 0===l?0:l}(n,l));var v=c(l,{days:o*r.days});r.hours=Math.abs(function(e,t,n){(0,u.Z)(2,arguments);var a=(0,h.Z)(e,t)/36e5;return(0,m.u)(null==n?void 0:n.roundingMethod)(a)}(n,v));var p=c(v,{hours:o*r.hours});r.minutes=Math.abs(function(e,t,n){(0,u.Z)(2,arguments);var a=(0,h.Z)(e,t)/6e4;return(0,m.u)(null==n?void 0:n.roundingMethod)(a)}(n,p));var b=c(p,{minutes:o*r.minutes});return r.seconds=Math.abs((0,y.Z)(n,b)),r}},49218:function(e,t,n){n.d(t,{y1:function(){return x}});var a="undefined"!=typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>0;function r(e,t,n,a){e.addEventListener?e.addEventListener(t,n,a):e.attachEvent&&e.attachEvent("on".concat(t),function(){n(window.event)})}function o(e,t){for(var n=t.slice(0,t.length-1),a=0;a<n.length;a++)n[a]=e[n[a].toLowerCase()];return n}function i(e){"string"!=typeof e&&(e="");for(var t=(e=e.replace(/\s/g,"")).split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}for(var u={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":a?173:189,"=":a?61:187,";":a?59:186,"'":222,"[":219,"]":221,"\\":220},s={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,command:91},l={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},c={16:!1,18:!1,17:!1,91:!1},d={},f=1;f<20;f++)u["f".concat(f)]=111+f;var h=[],m=!1,g="all",y=[],v=function(e){return u[e.toLowerCase()]||s[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function p(e){g=e||"all"}function b(){return g||"all"}var w=function(e){var t=e.key,n=e.scope,a=e.method,r=e.splitKey,u=void 0===r?"+":r;i(t).forEach(function(e){var t=e.split(u),r=t.length,i=t[r-1],l="*"===i?"*":v(i);if(d[l]){n||(n=b());var c=r>1?o(s,t):[];d[l]=d[l].filter(function(e){return!((!a||e.method===a)&&e.scope===n&&function(e,t){for(var n=e.length>=t.length?e:t,a=e.length>=t.length?t:e,r=!0,o=0;o<n.length;o++)-1===a.indexOf(n[o])&&(r=!1);return r}(e.mods,c))})}})};function M(e,t,n,a){var r;if(t.element===a&&(t.scope===n||"all"===t.scope)){for(var o in r=t.mods.length>0,c)Object.prototype.hasOwnProperty.call(c,o)&&(!c[o]&&t.mods.indexOf(+o)>-1||c[o]&&-1===t.mods.indexOf(+o))&&(r=!1);(0!==t.mods.length||c[16]||c[18]||c[17]||c[91])&&!r&&"*"!==t.shortcut||!1!==t.method(e,t)||(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}function k(e,t){var n=d["*"],a=e.keyCode||e.which||e.charCode;if(Z.filter.call(this,e)){if((93===a||224===a)&&(a=91),-1===h.indexOf(a)&&229!==a&&h.push(a),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(t){var n=l[t];e[t]&&-1===h.indexOf(n)?h.push(n):!e[t]&&h.indexOf(n)>-1?h.splice(h.indexOf(n),1):"metaKey"===t&&e[t]&&3===h.length&&!(e.ctrlKey||e.shiftKey||e.altKey)&&(h=h.slice(h.indexOf(n)))}),a in c){for(var r in c[a]=!0,s)s[r]===a&&(Z[r]=!0);if(!n)return}for(var o in c)Object.prototype.hasOwnProperty.call(c,o)&&(c[o]=e[l[o]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(-1===h.indexOf(17)&&h.push(17),-1===h.indexOf(18)&&h.push(18),c[17]=!0,c[18]=!0);var i=b();if(n)for(var u=0;u<n.length;u++)n[u].scope===i&&("keydown"===e.type&&n[u].keydown||"keyup"===e.type&&n[u].keyup)&&M(e,n[u],i,t);if(a in d){for(var f=0;f<d[a].length;f++)if(("keydown"===e.type&&d[a][f].keydown||"keyup"===e.type&&d[a][f].keyup)&&d[a][f].key){for(var m=d[a][f],g=m.splitKey,y=m.key.split(g),p=[],w=0;w<y.length;w++)p.push(v(y[w]));p.sort().join("")===h.sort().join("")&&M(e,m,i,t)}}}}function Z(e,t,n){h=[];var a,u=i(e),l=[],f="all",g=document,p=0,b=!1,w=!0,M="+",C=!1;for(void 0===n&&"function"==typeof t&&(n=t),"[object Object]"===Object.prototype.toString.call(t)&&(t.scope&&(f=t.scope),t.element&&(g=t.element),t.keyup&&(b=t.keyup),void 0!==t.keydown&&(w=t.keydown),void 0!==t.capture&&(C=t.capture),"string"==typeof t.splitKey&&(M=t.splitKey)),"string"==typeof t&&(f=t);p<u.length;p++)e=u[p].split(M),l=[],e.length>1&&(l=o(s,e)),(e="*"===(e=e[e.length-1])?"*":v(e))in d||(d[e]=[]),d[e].push({keyup:b,keydown:w,scope:f,mods:l,shortcut:u[p],method:n,key:u[p],splitKey:M,element:g});void 0!==g&&(a=g,!(y.indexOf(a)>-1))&&window&&(y.push(g),r(g,"keydown",function(e){k(e,g)},C),m||(m=!0,r(window,"focus",function(){h=[]},C)),r(g,"keyup",function(e){k(e,g),function(e){var t=e.keyCode||e.which||e.charCode,n=h.indexOf(t);if(n>=0&&h.splice(n,1),e.key&&"meta"===e.key.toLowerCase()&&h.splice(0,h.length),(93===t||224===t)&&(t=91),t in c)for(var a in c[t]=!1,s)s[a]===t&&(Z[a]=!1)}(e)},C))}var C={setScope:p,getScope:b,deleteScope:function(e,t){var n,a;for(var r in e||(e=b()),d)if(Object.prototype.hasOwnProperty.call(d,r))for(a=0,n=d[r];a<n.length;)n[a].scope===e?n.splice(a,1):a++;b()===e&&p(t||"all")},getPressedKeyCodes:function(){return h.slice(0)},isPressed:function(e){return"string"==typeof e&&(e=v(e)),-1!==h.indexOf(e)},filter:function(e){var t=e.target||e.srcElement,n=t.tagName,a=!0;return(t.isContentEditable||("INPUT"===n||"TEXTAREA"===n||"SELECT"===n)&&!t.readOnly)&&(a=!1),a},trigger:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";Object.keys(d).forEach(function(n){var a=d[n].find(function(n){return n.scope===t&&n.shortcut===e});a&&a.method&&a.method()})},unbind:function(e){if(void 0===e)Object.keys(d).forEach(function(e){return delete d[e]});else if(Array.isArray(e))e.forEach(function(e){e.key&&w(e)});else if("object"==typeof e)e.key&&w(e);else if("string"==typeof e){for(var t=arguments.length,n=Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=n[0],o=n[1];"function"==typeof r&&(o=r,r=""),w({key:e,scope:r,method:o,splitKey:"+"})}},keyMap:u,modifier:s,modifierMap:l};for(var O in C)Object.prototype.hasOwnProperty.call(C,O)&&(Z[O]=C[O]);if("undefined"!=typeof window){var P=window.hotkeys;Z.noConflict=function(e){return e&&window.hotkeys===Z&&(window.hotkeys=P),Z},window.hotkeys=Z}var S=n(67294);Z.filter=function(){return!0};var E=function(e,t){var n=e.target,a=n&&n.tagName;return Boolean(a&&t&&t.includes(a))};function x(e,t,n,a){n instanceof Array&&(a=n,n=void 0);var r=n||{},o=r.enableOnTags,i=r.filter,u=r.keyup,s=r.keydown,l=r.filterPreventDefault,c=void 0===l||l,d=r.enabled,f=void 0===d||d,h=r.enableOnContentEditable,m=void 0!==h&&h,g=(0,S.useRef)(null),y=(0,S.useCallback)(function(e,n){var a,r;return i&&!i(e)?!c:!!E(e,["INPUT","TEXTAREA","SELECT"])&&!E(e,o)||null!=(a=e.target)&&!!a.isContentEditable&&!m||!!(null===g.current||document.activeElement===g.current||null!=(r=g.current)&&r.contains(document.activeElement))&&(t(e,n),!0)},a?[g,o,i].concat(a):[g,o,i]);return(0,S.useEffect)(function(){if(!f){Z.unbind(e,y);return}return u&&!0!==s&&(n.keydown=!1),Z(e,n||{},y),function(){return Z.unbind(e,y)}},[y,e,f]),g}Z.isPressed}}]);
//# sourceMappingURL=7066-a99d6b5fbd4f2056.js.map
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4977],{94977:function(e,t,s){"use strict";s.r(t),s.d(t,{ChatContainer:function(){return ex}});var a,n,r,o,i,l=s(85893),c=s(9764),d=s(67294),h=s(36531),u=s(91951),m=s(59760),g=s.n(m),x=s(86492),p=s.n(x),_=s(94184),C=s.n(_),f=s(94199),j=s(29158),v=s(4480),y=s(5152),N=s.n(y),M=s(50085),b=s.n(M),S=s(77278);function E(e){let t=new Date(e);if(Number.isNaN(t))return"";let s=(0,S.Xb)(e);if(s>=1){let a=t.toLocaleDateString("en-US",{dateStyle:"medium"});return"".concat(a," at ").concat(t.toLocaleTimeString())}return"".concat(t.toLocaleTimeString())}var T=s(48976),w=s.n(T);let k=e=>{let{badge:t,userColor:s}=e,a="var(--theme-user-colors-".concat(s,")");return(0,l.jsx)("span",{style:{color:a,borderColor:a},className:w().badge,children:t})};var O=s(77466);let D=N()(()=>Promise.all([s.e(8909),s.e(3903),s.e(4267),s.e(2206),s.e(8091),s.e(1769),s.e(4860)]).then(s.bind(s,94860)).then(e=>e.ChatModerationActionMenu),{loadableGenerated:{webpack:()=>[94860]}}),A=N()(()=>Promise.resolve().then(s.bind(s,47049)).then(e=>e.Highlight),{loadableGenerated:{webpack:()=>[47049]}}),B=e=>{let{children:t,user:s}=e,{displayName:a,createdAt:n}=s,r="".concat(a," first joined ").concat(E(n));return(0,l.jsx)(f.Z,{title:r,placement:"topLeft",mouseEnterDelay:1,children:t})},U=e=>{let{message:t,highlightString:s,showModeratorMenu:a,sentBySelf:n,sameUserAsLast:r,isAuthorModerator:o,isAuthorAuthenticated:i}=e,{id:c,body:h,user:u,timestamp:m}=t,{id:g,displayName:x,displayColor:_}=u,y=(0,v.sJ)(O.FI),N="var(--theme-color-users-".concat(_,")"),M="Sent ".concat(E(m)),[S,T]=(0,d.useState)(h),w=[];return o&&w.push((0,l.jsx)(k,{badge:"mod",userColor:_},"mod")),i&&w.push((0,l.jsx)(k,{badge:(0,l.jsx)(j.Z,{title:"authenticated"}),userColor:_},"auth")),(0,d.useEffect)(()=>{T(p().decode(h))},[t]),(0,l.jsx)("div",{className:C()(b().messagePadding,r&&b().messagePaddingCollapsed,"chat-message_user"),children:(0,l.jsxs)("div",{className:C()(b().root,{[b().ownMessage]:n}),style:{borderColor:N},children:[!r&&(0,l.jsx)(B,{user:u,children:(0,l.jsxs)("div",{className:b().user,style:{color:N},children:[(0,l.jsx)("span",{className:b().userName,children:x}),(0,l.jsx)("span",{children:w})]})}),(0,l.jsx)(f.Z,{title:M,mouseEnterDelay:1,children:(0,l.jsx)(A,{search:s,children:(0,l.jsx)("div",{className:b().message,dangerouslySetInnerHTML:{__html:S}})})}),a&&(0,l.jsx)("div",{className:b().modMenuWrapper,children:(0,l.jsx)(D,{messageID:c,accessToken:y,userID:g,userDisplayName:x})}),(0,l.jsx)("div",{className:b().background,style:{color:N}})]})})};var F=s(93045),L=s(27496),R=s(55241),P=s(77493),H=s(96391),I=s(26912),W=s.n(I);let G=N()(()=>Promise.all([s.e(7741),s.e(1559)]).then(s.bind(s,51559)).then(e=>e.EmojiPicker),{loadableGenerated:{webpack:()=>[51559]}}),Z=e=>{let{attributes:t,element:s,children:a}=e,n=(0,H.vt)(),r=(0,H.UE)();return(0,l.jsxs)("span",{...t,contentEditable:!1,children:[(0,l.jsx)("img",{alt:s.alt,src:s.src,title:s.name,style:{display:"inline",maxWidth:"50px",maxHeight:"20px",boxShadow:"".concat(n&&r?"0 0 0 3px #B4D5FF":"none")}}),a]})},V=e=>{let{isVoid:t}=e;return e.isVoid=e=>"image"===e.type||t(e),e.isInline=e=>"image"===e.type,e},Y=e=>{let t;if(P.xv.isText(e)){let s=e.text;return s}if(0===e.children.length)t=[{text:""}];else{var a;t=null===(a=e.children)||void 0===a?void 0:a.map(e=>Y(e)).join("")}switch(e.type){case"paragraph":return"<p>".concat(t,"</p>");case"image":return'<img src="'.concat(e.src,'" alt="').concat(e.alt,'" title="').concat(e.name,'" class="emoji"/>');default:return t}},J=e=>{if(P.xv.isText(e))return e.text.length;if("image"===e.type)return 5;let t=0;return e.children.forEach(e=>{t+=J(e)}),t},X=e=>{let{defaultText:t}=e,[s,a]=(0,d.useState)(!1),[n,r]=(0,d.useState)(null==t?void 0:t.length),o=(0,v.sJ)(O.Gt),i=(0,d.useMemo)(()=>(0,H.BU)(V((0,P.Jh)())),[]),c=()=>{if(!o){console.log("websocketService is not defined");return}let e=Y(i);o.send({type:u.C.CHAT,body:e}),P.YR.delete(i,{at:{anchor:P.ML.start(i,[]),focus:P.ML.end(i,[])}}),r(0)},h=(e,t,s)=>({type:"image",alt:e,src:t,name:s,children:[{text:""}]}),m=(e,t)=>{if(!e)return;let{selection:s}=i,a=h(t,e,t);if(P.YR.insertNodes(i,a,{select:!0}),s){var n;let[r,o]=P.ML.parent(i,null===(n=s.focus)||void 0===n?void 0:n.path);i.isVoid(r)||P.NB.string(r).length?P.YR.insertNodes(i,a,{at:P.y$.next(o),select:!0}):(P.YR.insertNodes(i,a,{at:o,select:!0}),P.ML.normalize(i,{force:!0}))}else P.YR.insertNodes(i,a,{select:!0})},g=e=>{H.F3.focus(i),P.YR.insertText(i,e)},x=(e,t)=>{H.F3.focus(i),m(t,e)},p=e=>{let t=J(i)+1;if("Enter"===e.key){e.preventDefault(),c();return}if("Backspace"===e.key){r(t-1);return}t+1>300&&e.preventDefault(),r(t+1)},_=e=>{let t=e.clipboardData.getData("text/plain"),{length:s}=t;n+s>300&&e.preventDefault()},f=e=>"image"===e.element.type?(0,l.jsx)(Z,{...e}):(0,l.jsx)("p",{...e});return(0,l.jsx)("div",{className:W().root,children:(0,l.jsxs)("div",{className:C()(W().inputWrap,n>=300&&W().maxCharacters),children:[(0,l.jsxs)(H.mH,{editor:i,value:[{type:"paragraph",children:[{text:t||""}]}],children:[(0,l.jsx)(H.CX,{className:"chat-text-input",onKeyDown:p,onPaste:_,renderElement:f,placeholder:"Send a message to chat",style:{width:"100%"},role:"textbox","aria-label":"Chat text input",autoFocus:!0}),(0,l.jsx)(R.Z,{content:(0,l.jsx)(G,{onEmojiSelect:g,onCustomEmojiSelect:x}),trigger:"click",onOpenChange:e=>a(e),open:s})]}),(0,l.jsxs)("div",{style:{display:"flex",paddingLeft:"5px"},children:[(0,l.jsx)("button",{type:"button",className:W().emojiButton,title:"Emoji picker button",onClick:()=>a(!s),children:(0,l.jsx)(F.Z,{})}),(0,l.jsx)("button",{type:"button",className:W().sendButton,title:"Send message Button",onClick:c,children:(0,l.jsx)(L.Z,{})})]})]})})};var z=s(93107),q=s.n(z);function K(){return(K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}var $=function(e){return d.createElement("svg",K({height:500,viewBox:"0 0 132.292 132.292",width:500,xmlns:"http://www.w3.org/2000/svg"},e),a||(a=d.createElement("linearGradient",{id:"moderator_svg__a",gradientUnits:"userSpaceOnUse",x1:432.851,x2:464.644,y1:49.977,y2:49.977},d.createElement("stop",{offset:0,stopColor:"#2087e2"}),d.createElement("stop",{offset:1,stopColor:"#b63fff"}))),n||(n=d.createElement("path",{d:"M438.672 34.08h20.151a5.82 5.82 45 0 1 5.82 5.821v20.151a5.82 5.82 135 0 1-5.82 5.821h-20.15a5.82 5.82 45 0 1-5.822-5.82V39.9a5.82 5.82 135 0 1 5.821-5.82z",fill:"url(#moderator_svg__a)",transform:"matrix(4.16112 0 0 4.16112 -1801.146 -141.814)"})),r||(r=d.createElement("path",{d:"M121.11 29.551c-6.93 47.444-30.074 104.618-77.642 79.674l25.83 23.067h38.772c13.377 0 24.22-10.845 24.22-24.222V40.864z",fill:"#1d1535",fillOpacity:.335})),o||(o=d.createElement("path",{d:"M66.775 13.257s-7.129 57.999-.63 99.312c6.565 41.724-81.568-74.394-49.619-79.203 31.949-4.809 50.249-20.11 50.249-20.11z",fill:"#e2e8f0",fillOpacity:.306})),i||(i=d.createElement("path",{d:"M435.995 42.072c6.797.447 12.753-4.806 12.753-4.806s5.955 5.253 12.752 4.806c-.581 12.745-7.495 20.586-12.752 20.628-5.188.042-12.172-7.883-12.753-20.628z",fill:"none",stroke:"#fff",strokeLinejoin:"round",strokeWidth:2,transform:"matrix(4.16112 0 0 4.16112 -1801.146 -141.814)"})))};let Q=()=>(0,l.jsxs)("div",{className:q().chatModerationNotification,children:[(0,l.jsx)($,{className:q().icon}),"You are now a moderator."]});var ee=s(47049),et=s(23421),es=s.n(et);let ea=e=>{let{message:{body:t,user:{displayName:s}},highlightString:a}=e;return(0,l.jsxs)("div",{className:C()([es().chatSystemMessage,"chat-message_system"]),children:[(0,l.jsx)("div",{className:es().user,children:(0,l.jsx)("span",{className:es().userName,children:s})}),(0,l.jsx)(ee.Highlight,{search:a,children:(0,l.jsx)("div",{className:es().message,dangerouslySetInnerHTML:{__html:t}})})]})};var en=s(55355),er=s(91044),eo=s.n(er);let ei=e=>{let{isAuthorModerator:t,userColor:s,displayName:a}=e;return(0,l.jsxs)("div",{className:eo().root,children:[(0,l.jsxs)("span",{style:{color:"var(--theme-color-users-".concat(s,")")},children:[(0,l.jsx)("span",{style:{padding:"0 10px"},children:(0,l.jsx)(en.Z,{})}),(0,l.jsx)("span",{style:{fontWeight:"bold"},children:a}),t&&(0,l.jsx)("span",{children:(0,l.jsx)(k,{badge:"mod",userColor:s})})]})," ","joined the chat."]})};var el=s(66017),ec=s(71577);let ed=e=>{let{chatContainerRef:t,messages:s}=e;return(0,l.jsx)("div",{className:g().toBottomWrap,children:(0,l.jsx)(ec.Z,{type:"default",style:{color:"currentColor"},icon:(0,l.jsx)(el.Z,{}),onClick:()=>t.current.scrollToIndex({index:s.length-1,behavior:"smooth"}),children:"Go to last message"})})};var eh=s(65302),eu=s.n(eh);let em=e=>{let{body:t}=e;return(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:t},className:eu().chatAction})};function eg(e){let{user:{scopes:t}}=e;return!!t&&0!==t.length&&t.includes("MODERATOR")}let ex=e=>{let{messages:t,usernameToHighlight:s,chatUserId:a,isModerator:n,showInput:r,height:o}=e,[i,m]=(0,d.useState)(!0),x=(0,d.useRef)(null),p=e=>{let{oldName:t,user:s}=e,{displayName:a,displayColor:n}=s,r="var(--theme-color-users-".concat(n,")");return(0,l.jsxs)("div",{className:g().nameChangeView,children:[(0,l.jsx)("div",{style:{marginRight:5,height:"max-content",margin:"auto 5px auto 0"},children:(0,l.jsx)(h.Z,{})}),(0,l.jsxs)("div",{className:g().nameChangeText,children:[(0,l.jsx)("span",{style:{color:r},children:t}),(0,l.jsx)("span",{className:g().plain,children:" is now known as "}),(0,l.jsx)("span",{style:{color:r},children:a})]})]})},_=e=>{let{user:{displayName:t,displayColor:s}}=e,a=eg(e);return(0,l.jsx)(ei,{displayName:t,userColor:s,isAuthorModerator:a})},C=e=>{let{body:t}=e;return(0,l.jsx)(em,{body:t})},f=e=>{let t=eg(e);return t?(0,l.jsx)(Q,{}):(0,l.jsx)("div",{style:{width:"1px",height:"1px"}})},j=(e,r)=>{switch(r.type){case u.C.CHAT:var o,i,c;return(0,l.jsx)(U,{message:r,showModeratorMenu:n,highlightString:s,sentBySelf:(null===(o=r.user)||void 0===o?void 0:o.id)===a,sameUserAsLast:function(e,t){if(e.length<2)return!1;let s=e[t];if(!s||!s.user)return!1;let{user:{id:a}}=s,n=e[t-1];if((null==n?void 0:n.type)!==u.C.CHAT||!(null==n?void 0:n.timestamp)||!s.timestamp)return!1;let r=new Date(null==n?void 0:n.timestamp).getTime(),o=new Date(s.timestamp).getTime();return!(o-r>12e4)&&a===(null==n?void 0:n.user.id)}(t,e),isAuthorModerator:null===(i=r.user.scopes)||void 0===i?void 0:i.includes("MODERATOR"),isAuthorAuthenticated:null===(c=r.user)||void 0===c?void 0:c.authenticated},r.id);case u.C.NAME_CHANGE:return p(r);case u.C.CONNECTED_USER_INFO:return f(r);case u.C.USER_JOINED:return _(r);case u.C.CHAT_ACTION:return C(r);case u.C.SYSTEM:return(0,l.jsx)(ea,{message:r,highlightString:s},r.id);default:return null}},v=(0,d.useMemo)(()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.OO,{style:{height:o},className:g().virtuoso,ref:x,data:t,itemContent:(e,t)=>j(e,t),followOutput:e=>!!e&&"smooth",alignToBottom:!0,atBottomThreshold:70,atBottomStateChange(e){m(e)},endReached:()=>m(!0)}),!i&&(0,l.jsx)(ed,{chatContainerRef:x,messages:t})]}),[t,s,a,n,i]);return(0,l.jsxs)("div",{id:"chat-container",className:g().chatContainer,children:[v,r&&(0,l.jsx)("div",{className:g().chatTextField,children:(0,l.jsx)(X,{})})]})};ex.defaultProps={showInput:!0,height:"auto"}},65302:function(e){e.exports={chatAction:"ChatActionMessage_chatAction__x9Xsg"}},59760:function(e){e.exports={toBottomWrap:"ChatContainer_toBottomWrap__3V5wa",nameChangeView:"ChatContainer_nameChangeView__ziyXN",nameChangeText:"ChatContainer_nameChangeText__yXG__",plain:"ChatContainer_plain__IPS19",chatContainer:"ChatContainer_chatContainer__O2lYN",virtuoso:"ChatContainer_virtuoso__OS9Kz",chatTextField:"ChatContainer_chatTextField__OqCGL"}},91044:function(e){e.exports={root:"ChatJoinMessage_root__vuVXa"}},93107:function(e){e.exports={chatModerationNotification:"ChatModeratorNotification_chatModerationNotification__kgFWe",icon:"ChatModeratorNotification_icon__7FdGg"}},23421:function(e){e.exports={chatSystemMessage:"ChatSystemMessage_chatSystemMessage__c6XEN",user:"ChatSystemMessage_user__6yHSJ",message:"ChatSystemMessage_message__ySq5g"}},26912:function(e){e.exports={root:"ChatTextField_root__4oUkJ",inputWrap:"ChatTextField_inputWrap__1mAjD",maxCharacters:"ChatTextField_maxCharacters__yGT4s",emojiButton:"ChatTextField_emojiButton__ON_Cu",sendButton:"ChatTextField_sendButton__MOmD4"}},48976:function(e){e.exports={badge:"ChatUserBadge_badge__1EdUp"}},50085:function(e){e.exports={root:"ChatUserMessage_root__79heB",user:"ChatUserMessage_user__xUEp9",message:"ChatUserMessage_message__MJ9LD",ownMessage:"ChatUserMessage_ownMessage__d28A3",background:"ChatUserMessage_background__Tfghp",modMenuWrapper:"ChatUserMessage_modMenuWrapper__7fblv",messagePadding:"ChatUserMessage_messagePadding__Xp1F6",messagePaddingCollapsed:"ChatUserMessage_messagePaddingCollapsed__qxN0E"}}}]);
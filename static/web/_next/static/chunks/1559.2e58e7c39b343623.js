"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1559],{51559:function(e,t,r){r.r(t),r.d(t,{EmojiPicker:function(){return s}});var n=r(85893),c=r(67294),o=r(57741);let s=e=>{let{onEmojiSelect:t,onCustomEmojiSelect:r}=e,[s,a]=(0,c.useState)([]),u=(0,c.useRef)(),i=async()=>{try{let e=await fetch("/api/emoji"),t=await e.json();a(t)}catch(r){console.error("cannot fetch custom emoji",r)}};return(0,c.useEffect)(()=>{i()},[]),(0,c.useEffect)(()=>{let e=s.map(e=>({emoji:e.name,label:e.name,url:e.url})),n=(0,o.wU)({rootElement:u.current,custom:e,initialCategory:"custom",showPreview:!1,showRecents:!0});n.addEventListener("emoji:select",e=>{e.url?r(e.name,e.url):t(e.emoji)})},[s]),(0,n.jsx)("div",{ref:u})}}}]);
//# sourceMappingURL=1559.2e58e7c39b343623.js.map
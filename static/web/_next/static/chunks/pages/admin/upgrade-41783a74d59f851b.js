(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9262],{70918:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/upgrade",function(){return t(97644)}])},97644:function(e,n,t){"use strict";t.r(n);var a=t(85893),r=t(67294),l=t(21364),s=t(84485),d=t(52206),i=t(64777);let{Title:c}=s.Z,u=e=>{let n=Object.values(e);return(0,a.jsx)(d.Z,{dataSource:n,columns:[{title:"Name",dataIndex:"name",key:"name",render:(e,n)=>(0,a.jsx)("a",{href:n.browser_download_url,children:e})},{title:"Size",dataIndex:"size",key:"size",render:e=>"".concat((e/1024/1024).toFixed(2)," MB")}],rowKey:e=>e.id,size:"large",pagination:!1})},o=()=>{let[e,n]=(0,r.useState)({html_url:"",name:"",created_at:null,body:"",assets:[]}),t=async()=>{try{let e=await (0,i.Kt)();n(e)}catch(t){console.log("==== error",t)}};return((0,r.useEffect)(()=>{t()},[]),e)?(0,a.jsxs)("div",{className:"upgrade-page",children:[(0,a.jsx)(c,{level:2,children:(0,a.jsx)("a",{href:e.html_url,children:e.name})}),(0,a.jsx)(c,{level:5,children:new Date(e.created_at).toDateString()}),(0,a.jsx)(l.D,{children:e.body}),(0,a.jsx)("h3",{children:"Downloads"}),(0,a.jsx)(u,{...e.assets})]}):null};n.default=o}},function(e){e.O(0,[8909,3903,4267,2206,2069,9774,2888,179],function(){return e(e.s=70918)}),_N_E=e.O()}]);
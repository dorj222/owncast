"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7213],{37213:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{mathematica:function(){return mathematica}});var Identifier="[a-zA-Z\\$][a-zA-Z0-9\\$]*",pFloat="(?:\\.\\d+|\\d+\\.\\d*|\\d+)",pPrecision="(?:`(?:`?"+pFloat+")?)",reBaseForm=RegExp("(?:(?:\\d+)(?:\\^\\^(?:\\.\\w+|\\w+\\.\\w*|\\w+)"+pPrecision+"?(?:\\*\\^[+-]?\\d+)?))"),reFloatForm=RegExp("(?:"+pFloat+pPrecision+"?(?:\\*\\^[+-]?\\d+)?)"),reIdInContext=RegExp("(?:`?)(?:"+Identifier+")(?:`(?:"+Identifier+"))*(?:`?)");function tokenBase(stream,state){var ch;return'"'===(ch=stream.next())?(state.tokenize=tokenString,state.tokenize(stream,state)):"("===ch&&stream.eat("*")?(state.commentLevel++,state.tokenize=tokenComment,state.tokenize(stream,state)):(stream.backUp(1),stream.match(reBaseForm,!0,!1)||stream.match(reFloatForm,!0,!1))?"number":stream.match(/(?:In|Out)\[[0-9]*\]/,!0,!1)?"atom":stream.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::usage)/,!0,!1)?"meta":stream.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::[a-zA-Z\$][a-zA-Z0-9\$]*):?/,!0,!1)?"string.special":stream.match(/([a-zA-Z\$][a-zA-Z0-9\$]*\s*:)(?:(?:[a-zA-Z\$][a-zA-Z0-9\$]*)|(?:[^:=>~@\^\&\*\)\[\]'\?,\|])).*/,!0,!1)||stream.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+[a-zA-Z\$][a-zA-Z0-9\$]*/,!0,!1)||stream.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+/,!0,!1)||stream.match(/_+[a-zA-Z\$][a-zA-Z0-9\$]*/,!0,!1)?"variableName.special":stream.match(/\\\[[a-zA-Z\$][a-zA-Z0-9\$]*\]/,!0,!1)?"character":stream.match(/(?:\[|\]|{|}|\(|\))/,!0,!1)?"bracket":stream.match(/(?:#[a-zA-Z\$][a-zA-Z0-9\$]*|#+[0-9]?)/,!0,!1)?"variableName.constant":stream.match(reIdInContext,!0,!1)?"keyword":stream.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%)/,!0,!1)?"operator":(stream.next(),"error")}function tokenString(stream,state){for(var next,end=!1,escaped=!1;null!=(next=stream.next());){if('"'===next&&!escaped){end=!0;break}escaped=!escaped&&"\\"===next}return end&&!escaped&&(state.tokenize=tokenBase),"string"}function tokenComment(stream,state){for(var prev,next;state.commentLevel>0&&null!=(next=stream.next());)"("===prev&&"*"===next&&state.commentLevel++,"*"===prev&&")"===next&&state.commentLevel--,prev=next;return state.commentLevel<=0&&(state.tokenize=tokenBase),"comment"}let mathematica={name:"mathematica",startState:function(){return{tokenize:tokenBase,commentLevel:0}},token:function(stream,state){return stream.eatSpace()?null:state.tokenize(stream,state)},languageData:{commentTokens:{block:{open:"(*",close:"*)"}}}}}}]);
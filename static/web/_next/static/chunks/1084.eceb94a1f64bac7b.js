"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1084],{41084:function(e,n,t){t.r(n),t.d(n,{jinja2:function(){return l}});var i=["and","as","block","endblock","by","cycle","debug","else","elif","extends","filter","endfilter","firstof","do","for","endfor","if","endif","ifchanged","endifchanged","ifequal","endifequal","ifnotequal","set","raw","endraw","endifnotequal","in","include","load","not","now","or","parsed","regroup","reversed","spaceless","call","endcall","macro","endmacro","endspaceless","ssi","templatetag","openblock","closeblock","openvariable","closevariable","without","context","openbrace","closebrace","opencomment","closecomment","widthratio","url","with","endwith","get_current_language","trans","endtrans","noop","blocktrans","endblocktrans","get_available_languages","get_current_language_bidi","pluralize","autoescape","endautoescape"],a=/^[+\-*&%=<>!?|~^]/,r=/^[:\[\(\{]/,o=["true","false"],c=/^(\d[+\-\*\/])?\d+(\.\d+)?/;function s(e,n){var t=e.peek();if(n.incomment)return e.skipTo("#}")?(e.eatWhile(/\#|}/),n.incomment=!1):e.skipToEnd(),"comment";if(n.intag){if(n.operator){if(n.operator=!1,e.match(o))return"atom";if(e.match(c))return"number"}if(n.sign){if(n.sign=!1,e.match(o))return"atom";if(e.match(c))return"number"}if(n.instring)return t==n.instring&&(n.instring=!1),e.next(),"string";if("'"==t||'"'==t)return n.instring=t,e.next(),"string";if(n.inbraces>0&&")"==t)e.next(),n.inbraces--;else if("("==t)e.next(),n.inbraces++;else if(n.inbrackets>0&&"]"==t)e.next(),n.inbrackets--;else if("["==t)e.next(),n.inbrackets++;else if(!n.lineTag&&(e.match(n.intag+"}")||e.eat("-")&&e.match(n.intag+"}")))return n.intag=!1,"tag";else if(e.match(a))return n.operator=!0,"operator";else if(e.match(r))n.sign=!0;else{if(1==e.column()&&n.lineTag&&e.match(i))return"keyword";if(e.eat(" ")||e.sol()){if(e.match(i))return"keyword";if(e.match(o))return"atom";if(e.match(c))return"number";e.sol()&&e.next()}else e.next()}return"variable"}if(e.eat("{")){if(e.eat("#"))return n.incomment=!0,e.skipTo("#}")?(e.eatWhile(/\#|}/),n.incomment=!1):e.skipToEnd(),"comment";if(t=e.eat(/\{|%/))return n.intag=t,n.inbraces=0,n.inbrackets=0,"{"==t&&(n.intag="}"),e.eat("-"),"tag"}else if(e.eat("#")){if("#"==e.peek())return e.skipToEnd(),"comment";if(!e.eol())return n.intag=!0,n.lineTag=!0,n.inbraces=0,n.inbrackets=0,"tag"}e.next()}i=RegExp("(("+i.join(")|(")+"))\\b"),o=RegExp("(("+o.join(")|(")+"))\\b");let l={name:"jinja2",startState:function(){return{tokenize:s,inbrackets:0,inbraces:0}},token:function(e,n){var t=n.tokenize(e,n);return e.eol()&&n.lineTag&&!n.instring&&0==n.inbraces&&0==n.inbrackets&&(n.intag=!1,n.lineTag=!1),t},languageData:{commentTokens:{block:{open:"{#",close:"#}",line:"##"}}}}}}]);
//# sourceMappingURL=1084.eceb94a1f64bac7b.js.map
(this.webpackJsonpsecret=this.webpackJsonpsecret||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(3),r=n.n(s),o=(n(9),n(1)),l=function(e){var t=Object(a.useState)(60),n=Object(o.a)(t,2),s=n[0],r=n[1];return Object(a.useEffect)((function(){if(s&&e.step.withTimer){var t=setTimeout((function(){r(s-1)}),1e3);return function(){return clearTimeout(t)}}})),c.a.createElement("div",{className:"content"},c.a.createElement("label",{htmlFor:"welcomepage-input",className:"content_label"},e.step.textContent),c.a.createElement("input",{onKeyDown:function(t){e.step.withTimer&&s?r(2*s):e.handleKeyDown(t)},id:"welcomepage-input",type:"text",className:"content_input"}),e.step.link&&c.a.createElement("p",null,c.a.createElement("a",{href:e.step.link,target:"_blank",rel:"noopener noreferrer"},"\u041a\u043b\u0438\u043a")),e.step.image&&c.a.createElement("p",null,c.a.createElement("img",{src:e.step.image,alt:"\u041a\u0430\u043a\u043e\u0439-\u0442\u043e \u043c\u0435\u043c\u043d\u044b\u0439 \u043a\u043b\u043e\u0443\u043d"})),e.step.withTimer&&c.a.createElement("p",null,s))},i=(n(10),[[9,7,5,6,1],[4,6,5,6,7],[5,"keyNumber1","keyNumber2",7,6],[4,5,6,8,5],[6,8,4,1,9]]),u=2,m=8,p=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),s=n[0],r=n[1],l=Object(a.useState)(""),p=Object(o.a)(l,2),b=p[0],h=p[1],E=Object(a.useState)(""),f=Object(o.a)(E,2),g=f[0],w=f[1];function d(e,t,n){return c.a.createElement("div",{key:"cell".concat(n),className:"table_cell"},c.a.createElement("input",{onChange:t,value:e,type:"text",className:"cell_input"}))}function N(e){h(e.currentTarget.value)}function k(e){w(e.currentTarget.value)}return c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"table"},i.map((function(e,t){return c.a.createElement("div",{key:"row".concat(t),className:"table_row"},e.map((function(e,t){return"string"===typeof e?"keyNumber1"===e?d(b,N,t):"keyNumber2"===e?d(g,k,t):"":c.a.createElement("div",{key:"cell".concat(t),className:"table_cell"},e)})))}))),s?c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u0422\u0432\u043e\u0439 \u043f\u043e\u0434\u0430\u0440\u043e\u043a \u0431\u0435\u043b\u043a\u0430 \u0441\u043f\u0440\u044f\u0442\u0430\u043b\u0430 \u0432 \u0412\u0435\u043d\u0435\u0446\u0438\u0438"),c.a.createElement("button",{onClick:e.goToNextStep,className:"button success_button"},"\u0412\u043f\u0435\u0440\u0435\u0434")):c.a.createElement("button",{onClick:function(){var e;e=g,Number(b)===u&&Number(e)===m?r(!0):(h(""),w(""))},className:"button checking_button"},"\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c"))},b=function(e){return c.a.createElement(c.a.Fragment,null,e.isSuccess?c.a.createElement("div",{className:"buttonBlock success"},c.a.createElement("span",{className:"success_text"},e.successText),c.a.createElement("button",{onClick:e.goNext,className:"button success_button"},e.successButtonText||"\u0414\u0430\u043b\u0435\u0435")):c.a.createElement("div",{className:"buttonBlock checking"},c.a.createElement("input",{onKeyDown:e.checkOnEnter,onChange:e.handleChange,type:"text",className:"checking_input",value:e.inputValue}),c.a.createElement("button",{onClick:e.checkAnswer,className:"button checking_button"},e.checkButtonText||"\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c")))},h=[{name:"\u3053\u308c\u306f\u4eba\u3005\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u304b\uff1f \u3053\u308c\u306f\u4eba\u3088\u308a\u3082\u60aa\u3044\u3067\u3059\u3002 \u3053\u308c\u3089\u306f\u8857\u3067\u6700\u9ad8\u306e\u4eba\u3067\u3059",positions:"[8,9,12]"},{name:"\u79c1\u306e\u6e05\u5ec9\u6f54\u767d\u3001\u6642\u9593\u5185\u306b\u88cf\u5207\u308b\u3053\u3068\u306f\u88cf\u5207\u308b\u3053\u3068\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002 \u3053\u308c\u306f\u4e88\u898b\u53ef\u80fd\u3067\u3059\uff01",positions:"[1,2,3]"},{name:"\u3042\u308b\u4eba\u304c\u96c6\u3081\u305f\u3082\u306e\u306f\u3001\u5225\u306e\u4eba\u304c\u5e38\u306b\u4f5c\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059",positions:"[2,5,6,8]"},{name:"\u77e5\u7684\u306a\u9854\u306f\u307e\u3060\u77e5\u6027\u306e\u5146\u5019\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002 \u4e16\u754c\u306e\u3059\u3079\u3066\u306e\u30ca\u30f3\u30bb\u30f3\u30b9\u306f\u3001\u3053\u306e\u8868\u73fe\u3092\u9854\u306b\u8a17\u3057\u3066\u3044\u307e\u3059\u3002.. \u7b11\u9854\u306e\u7d33\u58eb\u3001\u7b11\u9854",positions:"[5,15]"},{name:"\u611b\u3057\u3066\u308b.. \u6df1\u304f \u6df1\u3044\u3068\u3053\u308d\u3067",positions:"[1,10,13]"},{name:"\u76d7\u3093\u3060\u3001\u98f2\u3093\u3060\u3001\u5211\u52d9\u6240\u306b\uff01 \u30ed\u30de\u30f3\u30b9!",positions:"[6, 15]"},{name:"\u4f8b\u3048\u3070\u3001\u30ed\u30f3\u30c9\u30f3\u3067\u306f\u3001\u72ac\u306f\u7537\u306e\u53cb\u4eba\u3067\u3059\u3002 \u305d\u3057\u3066\u3001\u79c1\u305f\u3061\u306e\u5bb6\u306e\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u306f\u7537\u306e\u53cb\u4eba\u3067\u3059",positions:"[3,4,6,11,16,17]"}],E=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),s=n[0],r=n[1],l=Object(a.useState)(""),i=Object(o.a)(l,2),u=i[0],m=i[1],p=function(){"\u30ab\u30fc\u30e9"===u&&r(!0),m("")};return c.a.createElement("div",{className:"content"},h.map((function(e,t){return c.a.createElement("p",{className:"film",key:"film".concat(t)},e.name,c.a.createElement("br",null),c.a.createElement("span",{className:"film_addition"},e.positions))})),c.a.createElement(b,{isSuccess:s,successText:"\u6587\u5b57\u3002",inputValue:u,handleChange:function(e){m(e.currentTarget.value)},successButtonText:"\u3055\u3089\u306b",checkButtonText:"\u78ba\u8a8d",checkAnswer:p,goNext:e.goToNextStep,checkOnEnter:function(e){13===e.keyCode&&p()}}))},f=["\u041f\u043e\u043b\u044f\u043a \u043d\u0430 \u041f\u043e\u043b\u044f\u043d\u0435 \u0421\u0438\u0434\u0435\u043b","\u0414\u043e\u0440\u043e\u0433\u0430 - \u041c\u0438\u043c\u043e\u043b\u0435\u0442\u043d\u0430\u044f \u0420\u0435\u0434\u044c\u043a\u0430-\u0414\u0438\u043d\u043e\u0437\u0430\u0432\u0440","\u041f\u043e\u0434\u043e\u0440\u043e\u0436\u043d\u0438\u043a \u0421\u0438\u043d\u0438\u0446\u0430 \u0414\u043e\u0435\u043b\u0430","\u041c\u0438\u043d\u0443\u0442\u043d\u044b\u0439 \u041f\u0435\u0440\u0435\u0435\u0437\u0434 \u0432 \u041e\u0434\u0438\u043d\u0446\u043e\u0432\u043e","\u0421\u0438\u0434\u043e\u0440\u0435\u043d\u043a\u043e \u041a\u043e\u043b\u044f\u0441\u043a\u0443 \u0423\u043c\u0438\u0440\u043e\u0442\u0432\u043e\u0440\u0438\u043b","\u041f\u043e\u0440\u0435\u0431\u0440\u0438\u043a-\u0414\u0438\u0432\u0430\u043d \u0417\u0430\u043c\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043b \u0420\u0435\u043b\u044c\u0441\u044b-\u041f\u0440\u0438\u0434\u0438\u0440\u043a\u0438","\u0414\u043e\u0440\u043e\u0440\u043e \u041f\u043e\u0434\u043e\u0440\u0432\u0430\u043b \u041f\u043e\u043d\u0442\u0438\u0441\u0438\u043e\u043d","\u0417\u0435\u043c\u043b\u044f\u043d\u0438\u043d \u041f\u043e\u043c\u0438\u0433\u0430\u043b \u0421\u043c\u0438\u0442\u0443","\u0421\u043e\u043b\u0435\u043d\u044c\u044f \u0423\u043c\u0438\u043d\u0430\u0435\u0442 \u0420\u0435\u0431\u0440\u0430\u043d\u0442","\u0414\u043c\u0438\u0442\u0440\u0438\u0439 + \u041c\u0438\u0445\u0430\u0438\u043b = \u0420\u0435\u0439\u0434 \u043d\u0430 \u0414\u0438\u043e\u043d\u0438\u0441\u0430","\u041f\u043e\u0434\u043e\u0448\u0435\u043b, \u041f\u043e\u0441\u0438\u0434\u0435\u043b, \u0432\u043e\u0442 \u041f\u043e\u043b\u044f\u043a!"],g=/aladdin|\u0430\u043b\u0430\u0434\u0434\u0438\u043d/i,w=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),s=n[0],r=n[1],l=Object(a.useState)(""),i=Object(o.a)(l,2),u=i[0],m=i[1],p=function(){g.test(u)&&r(!0),m("")};return c.a.createElement("div",{className:"content"},f.map((function(e,t){return c.a.createElement("p",{className:"line",key:"line".concat(t)},e)})),c.a.createElement(b,{isSuccess:s,inputValue:u,successText:"\u041f\u043e\u0434\u0430\u0440\u043e\u043a \u0431\u043b\u0438\u0436\u0435, \u0447\u0435\u043c \u0442\u044b \u0434\u0443\u043c\u0430\u043b\u0430",handleChange:function(e){m(e.currentTarget.value)},checkAnswer:p,goNext:e.goToNextStep,checkOnEnter:function(e){13===e.keyCode&&p()}}))},d=["\u042f\u043f\u043e\u043d\u0441\u043a\u0438\u0439 \u0430\u0441\u0442\u0440\u043e\u043d\u043e\u043c Masahiro Koishikawa \u043e\u0442\u043a\u0440\u044b\u043b \u043d\u043e\u0432\u044b\u0439 \u0430\u0441\u0442\u0435\u0440\u043e\u0438\u0434 5751 Zao","\u0421\u0435\u043a\u0441\u0442\u0438\u043b\u0438\u0439, 29 \u0434\u043d\u0435\u0439","\u0418 \u043c\u0430\u0440\u0433\u0430\u043d\u0435\u0446, \u0438 \u043a\u0430\u0434\u0440, \u0438 \u0412\u0441\u0435\u043b\u0435\u043d\u043d\u0430\u044f","\u041c\u0430\u043b\u0430\u044f \u041f\u0438\u0440\u043e\u0433\u043e\u0432\u0441\u043a\u0430\u044f \u0443\u043b., 8, \u041c\u043e\u0441\u043a\u0432\u0430, 119435 [The-]","\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u0421\u0435\u0440\u043f\u0443\u0445\u043e\u0432\u0441\u043a\u0430\u044f \u0443\u043b., 14/13, \u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 1, 3 \u044d\u0442\u0430\u0436. \u043e\u0444\u0438\u0441 38, \u041c\u043e\u0441\u043a\u0432\u0430, 115093 [?-forma]","\u0421\u0443\u0449\u0435\u0432\u0441\u043a\u0430\u044f \u0443\u043b., 19 \u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 4, \u041c\u043e\u0441\u043a\u0432\u0430, 127055 [Pho ? Quoc Su]","2-\u0439 \u0414\u043e\u043d\u0441\u043a\u043e\u0439 \u043f\u0440\u043e\u0435\u0437\u0434, 10\u04414 [?302.ru]"],N=/\u043a\u0443\u043d\u0438\u0446\u0430|\u044e\u043b(\u044c\u043a\u0430|\u0451\u043a|\u044f\u043a\u0430|\u0451\u043d\u043e\u043a|\u044f|\u0438\u044f)/i,k=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),s=n[0],r=n[1],l=Object(a.useState)(""),i=Object(o.a)(l,2),u=i[0],m=i[1],p=function(){N.test(u)&&r(!0),m("")};return c.a.createElement("div",{className:"content"},d.map((function(e,t){return c.a.createElement("p",{className:"line",key:"line".concat(t)},e)})),c.a.createElement(b,{isSuccess:s,inputValue:u,successText:"\u041f\u043e\u0434\u0430\u0440\u043e\u043a \u0441\u044a\u0435\u043b \u041a\u0442\u0443\u043b\u0445\u0443",handleChange:function(e){m(e.currentTarget.value)},checkAnswer:p,goNext:e.goToNextStep,checkOnEnter:function(e){13===e.keyCode&&p()}}))},x=[{textContent:"\u0413\u043e\u0442\u043e\u0432\u044b \u043d\u0430\u0447\u0430\u0442\u044c?",answer:/\u0434\u0430/i},{textContent:"\u041f\u0440\u044f\u043c\u043e \u0441\u0435\u0439\u0447\u0430\u0441?",answer:/\u0434\u0430/i},{textContent:"\u0422\u043e\u0447\u043d\u043e?",answer:/\u0434\u0430/i},{textContent:"\u041e\u0442\u043b\u0438\u0447\u043d\u043e. \u041f\u0435\u0440\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435 - \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432 \u043e\u043a\u043d\u043e 1 \u0447\u0430\u0441",answer:/.+/},{textContent:"\u041e \u0447\u0435\u043c \u043c\u044b \u0437\u0430\u0431\u044b\u043b\u0438?",answer:/(\u043e\s)?\u0442\u0435\u0440\u043f\u0435\u043d\u0438(\u0438|\u0435)/i,link:"https://www.youtube.com/watch?v=K82vpN3PKK0"},{textContent:"\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u043c: \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043f\u0438\u0448\u0438, \u043f\u043e\u043a\u0430 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 0",answer:/.+/i,withTimer:!0},{textContent:"\u041f\u043e\u0434\u043e\u0436\u0434\u0430\u043b\u0438 \u0438 \u0431\u0443\u0434\u0435\u0442. \u0418 \u0442\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u0430: \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c \u043d\u0435 \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c, \u0432 \u043a\u043e\u0434\u0435 \u043d\u0435 \u0440\u044b\u0442\u044c\u0441\u044f. \u041f\u043e\u043d\u044f\u0442\u043d\u043e?",answer:/\u0434\u0430|\u0442\u0430\u043a \u0442\u043e\u0447\u043d\u043e|\u0445\u043e\u0440\u043e\u0448\u043e|\u043e\u043a/i},{textContent:"\u041f\u043e\u0435\u0445\u0430\u043b\u0438. \u041e\u0439, \u0430 \u044d\u0442\u043e \u043a\u0442\u043e?",answer:/\u043f\u0438\u043f\u043e|pepe|peepo(-|\s)?\u043a\u043b\u043e\u0443\u043d|clown/i,image:"https://s.tcdn.co/c7b/1c0/c7b1c0ac-92db-49d1-8d62-e527476ccd96/1.png"},{textContent:".\u043c\u043e\u0442\u0435\u0432\u0442\u043e \u0438\u043d\u0438\u0447\u043e\u043f ,\u0442\u0441\u043a\u0435\u0442 \u043b\u0430\u043c\u043e\u043b\u0441 \u043e\u0442-\u043e\u0442\u043a \u044f\u0441\u0442\u0435\u0436\u0430\u041a",answer:/\u044e\u043d\u0438\u0447|\u043f\u043e\u0447\u0438\u043d\u0438\u043b(\u0430)?/i},{textContent:"\u0421\u043f\u0430\u0441\u0438\u0431\u043e! \u041f\u0438\u043f\u043e \u043b\u044e\u0431\u0438\u0442 \u0448\u0443\u0442\u0438\u0442\u044c, \u043d\u043e \u043e\u043d \u043d\u0435 \u0437\u043b\u043e\u0431\u043d\u044b\u0439, \u043a\u0430\u043a \u0442\u043e\u0442 \u043c\u0430\u0433 \u0438\u0437 \u0413\u0430\u0440\u0440\u0438 \u041f\u043e\u0442\u0442\u0435\u0440\u0430",answer:/\u0432\u043e\u043b\u0430\u043d(-|\s)\u0434\u0435(-|\s)\u043c\u043e\u0440\u0442/i},{textContent:"\u041e\u0439, \u0438\u0437\u0432\u0438\u043d\u0438, \u044f \u043e\u0442\u0445\u043e\u0434\u0438\u043b, \u043a\u0442\u043e \u0442\u0430\u043c \u0431\u044b\u043b?",answer:/\u0432\u043e\u043b\u0430\u043d(-|\s)\u0434\u0435(-|\s)\u043c\u043e\u0440\u0442/i},{textContent:"\u041a\u0442\u043e \u043a\u0442\u043e?",answer:/\u0432\u043e\u043b\u0430\u043d(-|\s)\u0434\u0435(-|\s)\u043c\u043e\u0440\u0442/i},{textContent:"\u0422\u044b \u043d\u0430\u043f\u0438\u0441\u0430\u043b \u0441 \u043e\u0448\u0438\u0431\u043a\u043e\u0439",answer:/\u0432\u043e\u043b\u0430\u043d(-|\s)\u0434\u0435(-|\s)\u043c\u043e\u0440\u0442/i},{textContent:"\u041e\u043f\u044f\u0442\u044c. \u0411\u0443\u0434\u044c, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u044c\u043d\u0435\u0435. \u0418\u0441\u043f\u0440\u0430\u0432\u044c",answer:/\u0432\u043e\u043b\u0430\u043d(-|\s)\u0434\u0435(-|\s)\u043c\u043e\u0440\u0442/i},{textContent:"\u0425\u043c...\u0430 \u0442\u0435\u043f\u0435\u0440\u044c \u0432 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435\u043c \u0441\u043b\u043e\u0432\u0435",answer:/\u0432\u043e\u043b\u0430\u043d(-|\s)\u0434\u0435(-|\s)\u043c\u043e\u0440\u0442/i},{textContent:"\u041b\u0430\u0434\u043d\u043e, \u043b\u0430\u0434\u043d\u043e. 4 \u0437\u0430\u0433\u0430\u0434\u043a\u0438, \u0432\u0441\u0435 \u0442\u0430\u043a\u043e\u0435. \u041f\u043e\u0435\u0445\u0430\u043b\u0438?",answer:/\u0434\u0430|\u0433\u043e|\u043d\u0430\u043a\u043e\u043d\u0435\u0446-\u0442\u043e|\u043f\u043e\u0435\u0445\u0430\u043b\u0438/i},{textContent:"\u041f.\u0421. \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043e\u043a \u043d\u0435 \u0431\u0443\u0434\u0435\u0442, \u0434\u0430\u0436\u0435 \u043e\u0448\u0438\u0431\u043a\u0438 \u043d\u0435 \u043f\u043e\u043a\u0430\u0436\u0443\u0442",answer:/.+/i}],v=x.length-1,C=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(0),i=Object(o.a)(r,2),u=i[0],m=i[1],b=function(e){13===e.keyCode&&(x[u].answer.test(e.currentTarget.value)&&(u===v?s(n+1):m(u+1)),e.currentTarget.value="")},h=function(){s(n+1)};return c.a.createElement("div",{className:"App"},function(e){switch(e){case 0:return c.a.createElement(l,{step:x[u],handleKeyDown:b});case 1:return c.a.createElement(p,{goToNextStep:h});case 2:return c.a.createElement(w,{goToNextStep:h});case 3:return c.a.createElement(E,{goToNextStep:h});case 4:return c.a.createElement(k,{goToNextStep:h});default:return c.a.createElement("div",null,c.a.createElement("img",{src:"https://thumbs.gfycat.com/YearlyAliveKilldeer-size_restricted.gif",alt:"victory"}))}}(n))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.2e5a7726.chunk.js.map
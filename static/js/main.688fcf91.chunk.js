(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(6),o=n.n(r),s=(n(12),n(3)),i=(n(13),n.p+"static/media/money.c7672de2.svg"),l=n.p+"static/media/ham.9f8d8d58.svg",h=n(0),j=function(e){var t=e.setDis;return Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("img",{className:"logo",src:i,alt:"logo"}),Object(h.jsx)("img",{onClick:function(){t(!0),document.body.classList.add("body-over")},className:"ham",src:l,alt:"ham"})]})},d=n(1),u=function(e){var t=e.info,n=e.setInfo,a=e.rate,c=e.setRate,r=e.setCard,o=e.forMoney,s=e.money,i=(e.moneyCard,function(e){return console.log(s+s*a.week/100),console.log(a.perSave),1==e?s+s*a.week/100:2==e?s+s*a.month/100:3==e?s+s*a.year/100:void 0});return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"cur-cont",children:[t.show?"":Object(h.jsx)("span",{className:"min-btn",onClick:function(){console.log("s"),t.rateShow?n(Object(d.a)(Object(d.a)({},t),{},{rateShow:!1})):n(Object(d.a)(Object(d.a)({},t),{},{rateShow:!0}))},children:t.rateShow?"-":"+"}),Object(h.jsx)("h3",{children:"Rate and Currency"}),Object(h.jsxs)("div",{className:"cur-allcont ".concat(t.rateShow?"rate-show":""),children:[Object(h.jsxs)("div",{className:"decimal",children:[Object(h.jsx)("input",{type:"checkbox",onChange:function(){a.useDec?c(Object(d.a)(Object(d.a)({},a),{},{useDec:!1})):c(Object(d.a)(Object(d.a)({},a),{},{useDec:!0}))},checked:!!a.useDec}),Object(h.jsx)("label",{htmlFor:"dec",children:"Use Decimal"})]}),Object(h.jsx)("span",{className:"rate-title",children:"rate % :"}),Object(h.jsxs)("div",{className:"rate-cont",children:[Object(h.jsx)("label",{htmlFor:"cur-week",children:"Weekly:"}),Object(h.jsx)("input",{type:"number",max:"100",placeholder:"rate %",value:a.week,onChange:function(e){return c(Object(d.a)(Object(d.a)({},a),{},{week:parseFloat(e.target.value)}))}}),Object(h.jsx)("span",{children:"%"}),Object(h.jsx)("label",{htmlFor:"cur-month",children:"Monthly:"}),Object(h.jsx)("input",{type:"number",max:"100",placeholder:"rate %",value:a.month,onChange:function(e){return c(Object(d.a)(Object(d.a)({},a),{},{month:parseFloat(e.target.value)}))}}),Object(h.jsx)("span",{children:"%"}),Object(h.jsxs)("div",{className:"rate-adjust",children:[Object(h.jsx)("label",{htmlFor:"cur-year",children:"Yearly:"}),Object(h.jsx)("input",{type:"number",max:"100",placeholder:"rate %",value:a.year,onChange:function(e){return c(Object(d.a)(Object(d.a)({},a),{},{year:parseFloat(e.target.value)}))}}),Object(h.jsx)("span",{children:"%"})]})]}),Object(h.jsxs)("div",{className:"currency-cont",children:[Object(h.jsxs)("select",{name:"currency",id:"currency",onChange:function(e){return c(Object(d.a)(Object(d.a)({},a),{},{currency:e.target.value+" "}))},children:[Object(h.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select Currency"}),Object(h.jsx)("option",{value:"$",children:"$ US Dollar"}),Object(h.jsx)("option",{value:"Rp",children:"Rp Rupiah"}),Object(h.jsx)("option",{value:"$",children:"$ Singapore Dollar"}),Object(h.jsx)("option",{value:"Rm",children:"Rm Malaysia Ringgit"})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("select",{name:"currency",id:"currency",onChange:function(e){return c(Object(d.a)(Object(d.a)({},a),{},{perSave:e.target.value}))},className:"persave",value:a.perSave,children:[Object(h.jsx)("option",{value:0,disabled:!0,selected:!0,children:"Select per Saving"}),Object(h.jsx)("option",{value:1,children:"per Day"}),Object(h.jsx)("option",{value:2,children:"per Week"}),Object(h.jsx)("option",{value:3,children:"per Month"}),Object(h.jsx)("option",{value:4,children:"per Year"})]})]}),Object(h.jsx)("button",{type:"submit",onClick:function(){n(Object(d.a)(Object(d.a)({},t),{},{moneyShow:!0})),r({dec:a.useDec,format:o,weekx:1==a.perSave?7*i(1):2==a.perSave?i(1):0,monthx:1==a.perSave?30*i(2):2==a.perSave?4*i(2):3==a.perSave?i(2):0,yearx:1==a.perSave?365*i(3):2==a.perSave?52*i(3):3==a.perSave?12*i(3):i(3),weeky:1==a.perSave?i(1)/7:2==a.perSave?i(1):0,monthy:1==a.perSave?i(2)/30:2==a.perSave?i(2)/4:3==a.perSave?i(2):0,yeary:1==a.perSave?i(3)/365:2==a.perSave?i(3)/52:3==a.perSave?i(3)/12:4==a.perSave?i(3):0,wRate:a.week,mRate:a.month,yRate:a.year,sumWeek:1,sumMonth:1,sumYear:1,perSave:a.perSave})},children:"Generate"})]})]})})},b=n(4),m=n.p+"static/media/plus-white.1a8d3b8a.svg",y=n.p+"static/media/minus-white.2332f173.svg",p=function(e){var t=e.info,n=e.setInfo,a=e.rate,c=(e.setRate,e.money,e.forMoney,e.setCard,e.moneyCard),r=e.totalDate,o=e.setDate,s=function(e){return e.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},i=function(e){return Math.ceil(e).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},l=function(e){o(Object(d.a)(Object(d.a)({},r),{},Object(b.a)({},e,r[e]+1)))},j=function(e){r[e]>1&&o(Object(d.a)(Object(d.a)({},r),{},Object(b.a)({},e,r[e]-1)))},u=function(e){return 1==e?"/ Per Day":2==e?"/ Per Week":3==e?"/ Per Month":4==e?"/ Per Year":""};return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"money-cont",children:[Object(h.jsxs)("div",{className:"per-money  ".concat(t.moneyShow?"":"header-radius"),children:[""===c.format?"":Object(h.jsx)("h1",{onClick:function(){console.log("s"),t.moneyShow?n(Object(d.a)(Object(d.a)({},t),{},{moneyShow:!1})):n(Object(d.a)(Object(d.a)({},t),{},{moneyShow:!0}))},children:t.moneyShow?"-":"+"}),Object(h.jsx)("h3",{children:"".concat(1==t.id?"Target Money :  "+c.format:2==t.id?"Per Saving :  "+c.format:"Target Money / PerSaving")})]}),Object(h.jsxs)("div",{className:"total-money ".concat(t.moneyShow?"displaymoney":""),children:[a.perSave<=2?Object(h.jsxs)("div",{className:"weekly",children:[Object(h.jsx)("img",{src:m,alt:"",onClick:function(){return l("weeks")}}),Object(h.jsx)("img",{src:y,alt:"",onClick:function(){return j("weeks")}}),Object(h.jsx)("span",{children:r.weeks}),1==t.id?Object(h.jsxs)("p",{children:["Week  : ",a.currency+(c.dec?s(c.weeky/r.weeks):i(c.weeky/r.weeks))," ",u(c.perSave)," "]}):2==t.id?Object(h.jsxs)("p",{children:["Week  : ",a.currency+(c.dec?s(c.weekx*r.weeks):i(c.weekx*r.weeks))," ",u(c.perSave)]}):""]}):"",a.perSave<=3?Object(h.jsxs)("div",{className:"monthly",children:[Object(h.jsx)("img",{src:m,alt:"",onClick:function(){return l("months")}}),Object(h.jsx)("img",{src:y,alt:"",onClick:function(){return j("months")}}),Object(h.jsx)("span",{children:r.months}),1==t.id?Object(h.jsxs)("p",{children:["Month  : ",a.currency+(c.dec?s(c.monthy/r.months):i(c.monthy/r.months))," ",u(c.perSave)]}):2==t.id?Object(h.jsxs)("p",{children:["Month   : ",a.currency+(c.dec?s(c.monthx*r.months):i(c.monthx*r.months))," ",u(c.perSave)]}):""]}):"",Object(h.jsxs)("div",{className:"yearly",children:[Object(h.jsx)("img",{src:m,alt:"",onClick:function(){return l("years")}}),Object(h.jsx)("img",{src:y,alt:"",onClick:function(){return j("years")}}),Object(h.jsx)("span",{children:r.years}),1==t.id?Object(h.jsxs)("p",{children:["Year   : ",a.currency+(c.dec?s(c.yeary/r.years):i(c.yeary/r.years))," ",u(c.perSave)]}):2==t.id?Object(h.jsxs)("p",{children:["Year  : ",a.currency+(c.dec?s(c.yearx*r.years):i(c.yearx*r.years))," ",u(c.perSave)]}):""]}),Object(h.jsx)("div",{className:"applied-rate",children:Object(h.jsxs)("p",{children:["Apllied Rate : W : ",c.wRate,"% M : ",c.mRate,"% Y : ",c.yRate,"%"]})})]})]})})},O=n(7),v=function(e){var t=e.info,n=e.setShow,a=e.setMoney,c=(e.money,e.rate),r=e.setFormat;return Object(h.jsxs)("div",{className:"inputsaving",children:[Object(h.jsx)(O.a,{thousandSeparator:!0,prefix:c.currency,decimalSeparator:".",placeholder:t.place,isNumericString:!1,onValueChange:function(e){var t=e.formattedValue,n=e.value;e.floatValue;a(parseInt(n)),r(t)}}),Object(h.jsx)("button",{className:"money-close",onClick:n,children:"X"})]})},x=n.p+"static/media/shuffle.24d8bc70.png",f=function(e){var t=e.random,n=e.setRandom;return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"quote-cont",children:[Object(h.jsx)("p",{children:["Never spend your money before tou have earned it -Thomas Jefferson","It's good to have money can but,but it's good,too,to check up\n        once in awhile and make sure that you haven't lost the things\n        that money can't buy - George Lorimer","There us gigantic difference between earning a great deal\n        of money and being rich - Marlene Dietrich","Money-is usually attracted,not persued - Jim Rhon","If we command our wealth, we shall be rich and free.\n        if our wealth command us,we are poor indeed - Edmund Burke","A Simple fact that is hard to learn is that the time to save\n        money is when you have some- Joe Moore","Don't tell me where your priorities are. show me where you\n        spend your money and i'll tell you what they are - James W.Frick","If you would be wealthy, think of saving as well as getting \n        -Benjamin Franklin","Many folks think they aren\u2019t good at earning money, \n        when what they don\u2019t know is how to use it \u2014 Frank A. Clark","Many people take no care of their money till they come nearly to the end of it, \n        and others do just the same with their time.\u201d \u2014Johann Wolfgang von Goethe","Money is only a tool. It will take you wherever you wish, \n        but it will not replace you as the driver.\u201d \u2014Ayn Rand","Money is a terrible master but an excellent servant.\u201d \u2014P.T. Barnum","It\u2019s not how much money you make, but how much money you keep,\n        how hard it works for you, and how many generations you keep it for.\u201d\n        \u2014Robert Kiyosaki","A wise person should have money in their head, but not in their heart.\u201d \n        \u2014Jonathan Swift","The quickest way to double your money is to fold it \n        in half and put it in your back pocket.\u201d \u2014Will Rogers","Money is a guarantee that we may have what we want in the future. \n        Though we need nothing at the moment it insures the possibility\n         of satisfying a new desire when it arises.\u201d \u2014Aristotle"][t]}),Object(h.jsx)("img",{src:x,onClick:function(){return n(Math.floor(14*Math.random()))}})]})})},w=function(e){var t=e.displayInfo,n=e.setDis;return Object(h.jsxs)("div",{className:"info-cont ".concat(t?"info-display":""),children:[Object(h.jsx)("span",{onClick:function(){n(!1),document.body.classList.remove("body-over")},children:"x"}),Object(h.jsx)("p",{className:"info-header",children:"go to my website to see my other project"}),Object(h.jsx)("a",{href:"https://orykevin.github.io",children:"orykevin.com"}),Object(h.jsx)("p",{className:"info-footer",children:"created by Ory Kevin"})]})},g=function(e){var t=e.displayInfo,n=e.setDis,c=Object(a.useState)({id:0,show:!0,place:"",rateShow:!1,moneyShow:!1}),r=Object(s.a)(c,2),o=r[0],i=r[1],l=Object(a.useState)(0),j=Object(s.a)(l,2),b=j[0],m=j[1],y=Object(a.useState)(""),O=Object(s.a)(y,2),x=O[0],g=O[1],S=Object(a.useState)({dec:!1,format:"",weekx:1,monthx:2,yearx:3,wRate:0,mRate:0,yRate:0,weeky:1,monthy:2,yeary:3,sumWeek:1,sumMonth:1,sumYear:1}),k=Object(s.a)(S,2),C=k[0],M=k[1],N=Object(a.useState)({useDec:!1,week:0,month:0,year:0,currency:" ",perSave:0,selected:!0}),R=Object(s.a)(N,2),D=R[0],F=R[1],I=Object(a.useState)({weeks:1,months:1,years:1}),W=Object(s.a)(I,2),T=W[0],P=W[1],J=Object(a.useState)(Math.floor(18*Math.random())),Y=Object(s.a)(J,2),A=Y[0],B=Y[1],L=function(e){i(0===e?Object(d.a)(Object(d.a)({},o),{},{place:"input your target saving",show:!1,rateShow:!0,id:e+1}):Object(d.a)(Object(d.a)({},o),{},{place:"input your per saving",show:!1,rateShow:!0,id:e+1}))};return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(w,{displayInfo:t,setDis:n}),Object(h.jsx)("h1",{className:"h1-title",children:"Save Money Counter"}),Object(h.jsx)("div",{className:"btn-cont",children:o.show?Object(h.jsxs)("div",{className:"choose-btn",children:[Object(h.jsx)("button",{id:"test",onClick:function(){return L(0)},children:"Set Target Saving"}),Object(h.jsx)("button",{onClick:function(){return L(1)},children:"Set per Saving"})]}):Object(h.jsx)(v,{info:o,setShow:function(){i(Object(d.a)(Object(d.a)({},o),{},{place:"",show:!0,id:0,rateShow:!1,moneyShow:!1})),m(0),g(""),M(Object(d.a)(Object(d.a)({},C),{},{format:"",dec:!1})),F({useDec:!1,week:0,month:0,year:0,currency:" ",perSave:0}),P({weeks:1,months:1,years:1})},setInfo:i,money:b,setMoney:m,rate:D,setFormat:g})}),Object(h.jsx)(u,{info:o,rate:D,setRate:F,setInfo:i,setCard:M,forMoney:x,money:b,moneyCard:C}),Object(h.jsx)(p,{info:o,rate:D,setRate:F,setInfo:i,money:b,forMoney:x,setCard:M,moneyCard:C,totalDate:T,setDate:P}),Object(h.jsx)(f,{random:A,setRandom:B})]})})};var S=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(j,{setDis:c}),Object(h.jsx)(g,{setDis:c,displayInfo:n})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root")),k()}},[[15,1,2]]]);
//# sourceMappingURL=main.688fcf91.chunk.js.map
(this["webpackJsonprandom-lottery-numbers-generator"]=this["webpackJsonprandom-lottery-numbers-generator"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(4),r=n.n(s),a=(n(9),n(2)),o=(n(10),n(0));function i(e){var t=Object(c.useState)(e.reload),n=Object(a.a)(t,2),s=n[0];n[1];console.log(s);return Object(o.jsx)("div",{className:"sixnumbers",children:function(){for(var e=[];e.length<6;){var t=Math.ceil(49*Math.random());-1===e.indexOf(t)&&e.push(t)}return e.push(Math.ceil(10*Math.random())),e.map((function(e){return Object(o.jsx)("div",{className:"number",children:e},Math.random())}))}()})}var l=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(!0),l=Object(a.a)(r,2),u=l[0],j=l[1];return Object(o.jsxs)("div",{className:"LuckyNumbers",children:[Object(o.jsx)("h1",{className:"title-2",children:"Lotto 6 / 49"}),n?Object(o.jsx)(i,{reload:u}):"",Object(o.jsxs)("div",{className:"buttons",children:[Object(o.jsx)("button",{onClick:function(){return window.location.reload()},children:"Reset"}),Object(o.jsx)("button",{onClick:function(){n?j(!u):s(!0)},children:"Show me the lucky numbers"})]})]})};function u(e){var t=Object(c.useState)(e.reload),n=Object(a.a)(t,2),s=n[0];n[1];console.log(s);return Object(o.jsx)("div",{className:"euronumbers",children:function(){var e=[];for(console.log(e);e.length<5;){var t=Math.ceil(50*Math.random());-1===e.indexOf(t)&&e.push(t)}for(console.log(e);e.length<7;){var n=Math.ceil(10*Math.random());-1===e.indexOf(n)&&e.push(n)}return console.log(e),e.map((function(e){return Object(o.jsx)("div",{className:"number",children:e},Math.random())}))}()})}var j=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(!0),i=Object(a.a)(r,2),l=i[0],j=i[1];return Object(o.jsxs)("div",{className:"LuckyNumbers",children:[Object(o.jsx)("h1",{className:"title-2",children:"Eurojackpot"}),n?Object(o.jsx)(u,{reload:l}):"",Object(o.jsxs)("div",{className:"buttons",children:[Object(o.jsx)("button",{onClick:function(){return window.location.reload()},children:"Reset"}),Object(o.jsx)("button",{onClick:function(){n?j(!l):s(!0)},children:"Show me the lucky numbers"})]})]})};var b=function(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(!0),i=Object(a.a)(r,2),u=i[0],b=i[1],d=function(e){"six"===e.target.id?(s("six"),b(!1)):(s("euro"),b(!1))};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{className:"title",children:"Random lottery numbers generator"}),u?Object(o.jsxs)("div",{className:"start",children:[Object(o.jsx)("button",{id:"six",className:"choicebtn",onClick:d}),Object(o.jsx)("button",{id:"euro",className:"choicebtn",onClick:d})]}):"","euro"===n?Object(o.jsx)(j,{}):"six"===n?Object(o.jsx)(l,{}):""]})};r.a.render(Object(o.jsx)(b,{}),document.getElementById("root"))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.f83d05c0.chunk.js.map
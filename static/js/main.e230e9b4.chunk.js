(this["webpackJsonpreact-assignment"]=this["webpackJsonpreact-assignment"]||[]).push([[0],{102:function(e,t){},104:function(e,t){},138:function(e,t){},139:function(e,t){},141:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=141},143:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t);var s=n(2),c=n(27),a=n.n(c),r=(n(72),n(73),n(20)),i=n(61),o=n(62),j=n(13),l=n(36),b=n(1),u=[{title:"Users",path:"/users",icon:Object(b.jsx)(l.b,{}),cName:"nav-text"},{title:"Posts",path:"/posts",icon:Object(b.jsx)(l.a,{}),cName:"nav-text"}],d=(n(75),n(0));function O(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],a=function(){return c(!n)};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(d.b.Provider,{value:{color:"#fff"},children:[Object(b.jsx)("div",{className:"navbar",children:Object(b.jsx)(j.b,{to:"#",className:"menu-bars",children:Object(b.jsx)(i.a,{onClick:a})})}),Object(b.jsx)("nav",{className:n?"nav-menu active":"nav-menu",children:Object(b.jsxs)("ul",{className:"nav-menu-items",onClick:a,children:[Object(b.jsx)("li",{className:"navbar-toggle",children:Object(b.jsx)(j.b,{to:"#",className:"menu-bars",children:Object(b.jsx)(o.a,{})})}),u.map((function(e,t){return Object(b.jsx)("li",{className:e.cName,children:Object(b.jsxs)(j.b,{to:e.path,children:[e.icon,Object(b.jsx)("span",{children:e.title})]})},t)}))]})})]})})}var h=n(3),m=n(28),x=n.n(m);var f=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){console.log("Hello"),x.a.fetchUrl("https://jsonplaceholder.typicode.com/users",(function(e,t,n){c(JSON.parse(n))}))}),[]),Object(b.jsxs)("div",{className:"dashboard",children:[Object(b.jsx)(O,{}),Object(b.jsx)("h1",{children:"Users"}),Object(b.jsx)("ul",{children:n.map((function(e){return Object(b.jsxs)("li",{children:[e.id," ",Object(b.jsx)("br",{}),e.name," ",Object(b.jsx)("br",{}),e.username," ",Object(b.jsx)("br",{}),e.email," ",Object(b.jsx)("br",{}),e.website," ",Object(b.jsx)("br",{})]},e.id)}))})]})};var p=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){console.log("Hello"),x.a.fetchUrl("https://jsonplaceholder.typicode.com/posts",(function(e,t,n){c(JSON.parse(n))}))}),[]),Object(b.jsxs)("div",{className:"dashboard",children:[Object(b.jsx)(O,{}),Object(b.jsx)("h1",{children:"Posts"}),Object(b.jsx)("ul",{children:n.map((function(e){return Object(b.jsxs)("li",{children:[e.userId," ",Object(b.jsx)("br",{}),e.id," ",Object(b.jsx)("br",{}),e.title," ",Object(b.jsx)("br",{}),e.body," ",Object(b.jsx)("br",{})]},e.id)}))})]})},g=n(66),v=n(63),N=n(64),w=n(67),C=n(65),P=(n(143),function(e){Object(w.a)(n,e);var t=Object(C.a)(n);function n(e){var s;return Object(v.a)(this,n),(s=t.call(this,e)).handleFormChange=function(e){var t=Object(g.a)({},s.state.loginParams),n=e.target.value;t[e.target.name]=n,s.setState({loginParams:t})},s.login=function(e){var t=s.state.loginParams.user_id,n=s.state.loginParams.user_password;"admin"===t&&"12345"===n&&(localStorage.setItem("token","T"),s.setState({islogged:!0})),e.preventDefault()},s.state={islogged:!1,loginParams:{user_id:"",user_password:""}},s}return Object(N.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("form",{onSubmit:this.login,className:"form-signin",children:[Object(b.jsx)("h1",{className:"h3 ",children:"Login form"}),Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("input",{type:"text",name:"user_id",onChange:this.handleFormChange,placeholder:"Enter Username"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"password",name:"user_password",onChange:this.handleFormChange,placeholder:"Enter Password"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"submit",children:Object(b.jsx)(j.b,{to:"/users",children:"Login"})})]})}),Object(b.jsx)("p",{children:'user_id === "admin" && user_password === "12345"'})]})})}}]),n}(s.Component));var F=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(j.a,{children:Object(b.jsxs)(h.c,{children:[Object(b.jsx)(h.a,{path:"/",exact:!0,component:P}),Object(b.jsx)(h.a,{path:"/users",exact:!0,component:f}),Object(b.jsx)(h.a,{path:"/posts",exact:!0,component:p})]})})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,145)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))};a.a.render(Object(b.jsx)(F,{}),document.getElementById("root")),S()},72:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){},84:function(e,t){},86:function(e,t){}},[[144,1,2]]]);
//# sourceMappingURL=main.e230e9b4.chunk.js.map
(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{23:function(e,t,c){},28:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(9),a=(c(23),c(13)),i=c(1),d=c(4),o=(c(24),c(25),c(26),c(27),c(28),c(12)),s=c(7),u=c(10),j=c(11),l=function(){function e(){Object(u.a)(this,e)}return Object(j.a)(e,[{key:"getProductsSmall",value:function(){return fetch("data/data.json").then((function(e){return e.json()})).then((function(e){return e.data}))}}]),e}(),f=c(3),h=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1],a=new l;Object(n.useEffect)((function(){a.getProductsSmall().then((function(e){return r(e)}))}),[]);var i=function(e){return Object(f.jsx)("img",{src:"images/product/".concat(e.image),onError:function(e){return e.target.src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"},alt:e.image,className:"product-image"})},u=[{field:"code",header:"First Name"},{field:"name",header:"Last Name"},{field:"category",header:"DOB"},{field:"quantity",header:"Designation"},{field:"image",header:"Photo"},{field:"price",header:"Experience"}].map((function(e,t){return"image"===e.field?Object(f.jsx)(s.a,{header:"Image",body:i}):Object(f.jsx)(s.a,{field:e.field,header:e.header},e.field)}));return Object(f.jsx)("div",{children:Object(f.jsx)("div",{className:"card",children:Object(f.jsx)(o.a,{value:c,responsiveLayout:"scroll",children:u})})})};function b(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(a.a,{children:Object(f.jsx)(i.c,{children:Object(f.jsx)(i.a,{exact:!0,path:"/",element:Object(f.jsx)(h,{})})})})})}var m=document.getElementById("root");Object(r.createRoot)(m).render(Object(f.jsx)(n.StrictMode,{children:Object(f.jsx)(b,{})}))}},[[30,1,2]]]);
//# sourceMappingURL=main.f5b7d5c8.chunk.js.map
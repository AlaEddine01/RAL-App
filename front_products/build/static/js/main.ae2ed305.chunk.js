(this.webpackJsonpfront_products=this.webpackJsonpfront_products||[]).push([[0],{45:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(16),i=n.n(a),s=(n(44),n(45),n(11)),o=n.n(s),j=n(13),u=n(8),l=n(88),d=n(89),b=n(90),h=n(91),O=n(92),p=n(86),f=n(87),x=n(4),m=n.n(x),g=n(14),v=n.n(g),C=n(17),y=n(15),w=n(76),N=n(77),P=n(78),k=n(79),T=n(80),I=n(81),S=n(1);var _=function(e){var t=e.getAllItems,n=Object(c.useState)({item:"",price:""}),r=Object(u.a)(n,2),a=r[0],i=r[1],s=Object(c.useState)({status:"",message:""}),l=Object(u.a)(s,2),d=l[0],b=l[1],h=function(e){e.preventDefault();var t=e.target,n=t.name,c=t.value;i((function(e){return Object(y.a)(Object(y.a)({},e),{},Object(C.a)({},n,c))}))},O=function(){var e=Object(j.a)(o.a.mark((function e(n){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c={item:a.item.replace(/(^\w{1})|(\s+\w{1})/g,(function(e){return e.toUpperCase()})),price:a.price},e.next=4,v.a.post("/addItem",c).then((function(e){200===e.status&&(t(),i({item:"",price:""}))})).catch((function(e){b({status:e.response.status,message:e.response.data})}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)("div",{className:"rowContainer",children:[Object(S.jsx)("h4",{children:"Add A New Product"}),""!==d.message?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(w.a,{color:"danger",children:["".concat(d.message,":"),Object(S.jsx)("br",{}),"Item: ".concat(a.item),Object(S.jsx)("br",{}),"Price: ".concat(a.price)]}),Object(S.jsx)(N.a,{onClick:function(e){b({message:"",status:""}),i({item:"",price:""})},children:"OK"})]}):Object(S.jsxs)(P.a,{children:[Object(S.jsxs)(k.a,{children:[Object(S.jsx)(T.a,{for:"item",children:"Item"}),Object(S.jsx)(I.a,{type:"text",id:"item",placeholder:"Item",name:"item",onChange:h,value:a.item.replace(/(^\w{1})|(\s+\w{1})/g,(function(e){return e.toUpperCase()}))})]}),Object(S.jsxs)(k.a,{children:[Object(S.jsx)(T.a,{for:"price",children:"Price"}),Object(S.jsx)(I.a,{type:"number",id:"price",placeholder:"Price",name:"price",onChange:h,value:a.price})]}),Object(S.jsx)(N.a,{color:"success",disabled:""===a.item||""===a.price,onClick:O,children:"Add New Product"})]})]})},D=n(82);var F=function(e){var t=e.addToCart,n=e.deleteProduct,r=e.filteredProducts,a=e.handleSearchName,i=e.filteredProduct,s=e.cart,o=Object(c.useState)(0),j=Object(u.a)(o,2),l=j[0],d=j[1];return Object(S.jsxs)("div",{className:"rowContainer",children:[Object(S.jsx)(I.a,{className:"form-control",onChange:function(e){return a(e.target.value)},placeholder:"Search...",value:i}),Object(S.jsx)(T.a,{for:"Quantity",children:"Quantity"}),Object(S.jsx)(I.a,{placeholder:"Quantity",type:"number",id:"Quantity",onFocus:function(e){e.preventDefault(),d("")},min:1,step:"1",value:l,onChange:function(e){return function(e){e.preventDefault(),d(e.target.value)}(e)}}),Object(S.jsxs)(D.a,{striped:!0,children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"#"}),Object(S.jsx)("th",{children:"Product Name"}),Object(S.jsx)("th",{children:"Unit Price"}),Object(S.jsx)("th",{}),Object(S.jsx)("th",{})]})}),Object(S.jsx)("tbody",{children:r.map((function(e,c){return Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{scope:"row",children:c+1}),Object(S.jsx)("td",{children:e.item}),Object(S.jsx)("td",{children:new Intl.NumberFormat("ar-TN").format(e.price)}),Object(S.jsx)("td",{children:Object(S.jsx)(N.a,{color:"primary",disabled:"0"===l||0===l||""===l||!!s.find((function(t){return t.item===e.item})),onClick:function(n){t(e._id,l),d("")},children:"Add"})}),Object(S.jsx)("td",{children:Object(S.jsx)(N.a,{color:"danger",onClick:function(){return n(e._id)},children:"delete"})})]},e._id)}))})]})]})},q=n(35),U=n(36),A=n(39),Q=n(38),B=n(94),E=n(83),M=n(84),J=n(85),L=function(e){var t=e.modal,n=e.toggle,r=e.itemToChange,a=e.cart,i=e.editCart;Object(c.useEffect)((function(){b(r)}),[t,r]);var s=Object(c.useState)(r),l=Object(u.a)(s,2),d=l[0],b=l[1],h=Object(c.useState)(!1),O=Object(u.a)(h,2),p=O[0],f=O[1],x=function(e){e.preventDefault();var t=e.target,n=t.name,c=t.value;b((function(e){return Object(y.a)(Object(y.a)({},e),{},Object(C.a)({},n,c))}))},m=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={item:d.item.replace(/(^\w{1})|(\s+\w{1})/g,(function(e){return e.toUpperCase()})),price:d.price},e.next=3,v.a.put("/Update_Product/".concat(d._id),t).then((function(e){200===e.status&&alert("Product edited in DB")}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e={item:d.item.replace(/(^\w{1})|(\s+\w{1})/g,(function(e){return e.toUpperCase()})),price:d.price,quantity:d.quantity,_id:d._id},t=a.map((function(t){return t._id===d._id?Object(y.a)(Object(y.a)({},a),e):t}));i(t)};return Object(S.jsxs)(B.a,{isOpen:t,children:[Object(S.jsx)(E.a,{toggle:n,children:"Edit Item"}),Object(S.jsxs)(M.a,{children:[Object(S.jsx)(T.a,{for:"item",children:"Item"}),Object(S.jsx)(I.a,{type:"text",name:"item",id:"item",value:d.item,onChange:x}),Object(S.jsx)(T.a,{for:"price",children:"Price"}),Object(S.jsx)(I.a,{type:"number",name:"price",id:"price",value:d.price,onChange:x}),Object(S.jsx)(T.a,{for:"quantity",children:"Quantity"}),Object(S.jsx)(I.a,{type:"number",name:"quantity",id:"quantity",value:d.quantity,onChange:x})]}),Object(S.jsxs)(J.a,{children:[Object(S.jsx)(I.a,{type:"checkbox",defaultChecked:p,onChange:function(e){f(!p)}}),"Change Product In DB",Object(S.jsx)(N.a,{color:"primary",disabled:d===r,onClick:function(e){return p?(g(),m(),f(!1)):g()},children:"Save"})," ",Object(S.jsx)(N.a,{color:"secondary",onClick:n,children:"Close"}),Object(S.jsx)(N.a,{color:"danger",onClick:function(e){return function(){var e=a.filter((function(e){return e._id!==d._id}));i(e)}()},children:"Delete"})]})]})},R=function(e){Object(A.a)(n,e);var t=Object(Q.a)(n);function n(){var e;Object(q.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={modal:!1,itemToChange:"",clientName:""},e.toggle=function(){e.setState({modal:!e.state.modal})},e.setItemToChange=function(t){return e.setState({itemToChange:t})},e.getTotal=function(){for(var t=0,n=0;n<e.props.cart.length;n++)t+=e.props.cart[n].price*e.props.cart[n].quantity;return t},e}return Object(U.a)(n,[{key:"render",value:function(){var e=this;return Object(S.jsx)("div",{children:Object(S.jsxs)("div",{className:"rowContainer",children:[Object(S.jsxs)(p.a,{children:[Object(S.jsx)(f.a,{children:Object(S.jsx)(I.a,{style:{textDecoration:"none",border:"none"},placeholder:"Name",value:this.props.clientName.replace(/(^\w{1})|(\s+\w{1})/g,(function(e){return e.toUpperCase()})),onChange:this.props.handleClientName})}),Object(S.jsx)(f.a,{style:{display:"flex",justifyContent:"flex-end"},children:this.props.dateForNow})]}),Object(S.jsxs)(D.a,{striped:!0,children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"#"}),Object(S.jsx)("th",{children:"Quantity"}),Object(S.jsx)("th",{children:"Product Name"}),Object(S.jsx)("th",{children:"Unit Price"}),Object(S.jsx)("th",{children:"Total"})]})}),Object(S.jsx)("tbody",{children:this.props.cart.map((function(t,n){return Object(S.jsxs)("tr",{style:{cursor:"pointer"},onClick:function(n){e.setItemToChange(t),e.toggle()},children:[Object(S.jsx)("th",{scope:"row",children:n+1}),Object(S.jsx)("td",{children:t.quantity}),Object(S.jsx)("td",{children:t.item}),Object(S.jsx)("td",{children:new Intl.NumberFormat("ar-TN").format(t.price)}),Object(S.jsx)("td",{children:new Intl.NumberFormat("ar-TN").format(t.price*t.quantity)}),Object(S.jsx)(L,{modal:e.state.modal,toggle:e.toggle,itemToChange:e.state.itemToChange,cart:e.props.cart,editCart:e.props.editCart})]},t._id)}))})]}),Object(S.jsxs)(p.a,{style:{backgroundColor:"burlywood",height:"2rem"},children:[Object(S.jsxs)(f.a,{xs:"6",children:[this.props.cart.length," ",this.props.cart.length<=1?Object(S.jsx)("span",{children:"Product"}):Object(S.jsx)("span",{children:"Products"})]}),Object(S.jsxs)(f.a,{xs:"6",style:{display:"flex",justifyContent:"flex-end"},children:["Total= ",new Intl.NumberFormat("ar-TN").format(this.getTotal())]})]})]})})}}]),n}(c.Component),z=n(37),H=function(){var e=Object(c.useRef)(),t=Object(z.useReactToPrint)({content:function(){return e.current},pageStyle:"size: 302.36px 188.98px"}),n=Object(c.useState)("1"),r=Object(u.a)(n,2),a=r[0],i=r[1],s=Object(c.useState)(""),x=Object(u.a)(s,2),g=x[0],C=x[1],y=function(e){a!==e&&i(e)},w=Object(c.useState)([]),N=Object(u.a)(w,2),P=N[0],k=N[1],T=function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/get").then((function(e){k(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=Object(c.useState)([]),D=Object(u.a)(I,2),q=D[0],U=D[1],A=Object(c.useState)(""),Q=Object(u.a)(A,2),B=Q[0],E=Q[1];Object(c.useEffect)((function(){T(),G()}),[]);var M=function(){var e=Object(j.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/display_Product/".concat(t)).then((function(e){var t=e.data,c={quantity:n},r=Object.assign(t,c);U(q.concat(r)),E("")})).catch((function(e){console.error(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),J=function(){var e=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete("/Delete_Product/".concat(t)).then((function(e){200===e.status&&T()}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=Object(c.useState)(""),H=Object(u.a)(L,2),K=H[0],Y=H[1],G=function(){var e=new Date,t=e.getDate(),n=e.getMonth()+1,c=e.getFullYear(),r=e.getHours(),a=e.getMinutes(),i=e.getSeconds();t<10&&(t="0"+t),n<10&&(n="0"+n),r<10&&(r="0"+r),a<10&&(a="0"+a),i<10&&(i="0"+i),Y(e=t+"/"+n+"/"+c+"-"+r+":"+a+":"+i)};setInterval(G,1e3);var V;return V=P.filter((function(e){return e.item.toUpperCase().includes(B.toUpperCase())})),Object(S.jsxs)("div",{children:[Object(S.jsxs)(l.a,{tabs:!0,children:[Object(S.jsx)(d.a,{children:Object(S.jsx)(b.a,{className:m()({active:"1"===a}),onClick:function(){y("1")},children:"Cart"})}),Object(S.jsx)(d.a,{children:Object(S.jsx)(b.a,{className:m()({active:"2"===a}),onClick:function(){y("2")},children:"Add To Cart"})}),Object(S.jsx)(d.a,{children:Object(S.jsx)(b.a,{className:m()({active:"3"===a}),onClick:function(){y("3")},children:"New Product"})})]}),Object(S.jsxs)(h.a,{activeTab:a,children:[Object(S.jsx)(O.a,{tabId:"1",children:Object(S.jsx)(p.a,{children:Object(S.jsxs)(f.a,{sm:"12",children:[Object(S.jsx)(R,{cart:q,ref:e,editCart:function(e){U(e)},clientName:g,handleClientName:function(e){e.preventDefault(),C(e.target.value)},dateForNow:K}),Object(S.jsx)("button",{disabled:""===g,onClick:t,children:"Print this out!"})]})})}),Object(S.jsx)(O.a,{tabId:"2",children:Object(S.jsx)(p.a,{children:Object(S.jsx)(f.a,{sm:"12",children:Object(S.jsx)(F,{filteredProducts:V,cart:q,addToCart:M,deleteProduct:J,handleSearchName:function(e){E(e)},filteredProduct:B})})})}),Object(S.jsx)(O.a,{tabId:"3",children:Object(S.jsx)(p.a,{children:Object(S.jsx)(_,{getAllItems:T})})})]})]})},K=n(93);var Y=function(){return Object(S.jsx)(K.a,{children:Object(S.jsx)(H,{})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,95)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(Y,{})}),document.getElementById("root")),G()}},[[75,1,2]]]);
//# sourceMappingURL=main.ae2ed305.chunk.js.map
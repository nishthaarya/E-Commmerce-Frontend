(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{13:function(e,t,c){e.exports={empty:"Cart_empty__3jwJA",full:"Cart_full__-h70b",cartpage:"Cart_cartpage__sfoiN",cartitem:"Cart_cartitem__1OEuQ",itemright:"Cart_itemright__3Qkol",itemname:"Cart_itemname__25lb7",itemprice:"Cart_itemprice__1cjFC",imgleft:"Cart_imgleft__1FVKT",right:"Cart_right__3NIaq",select:"Cart_select__32SWi",delete:"Cart_delete__K8NHW",total:"Cart_total__2eGro",checkout:"Cart_checkout__tJwXN"}},14:function(e,t,c){e.exports={fullbox:"Login_fullbox__2iXo3",container:"Login_container__1k2bk",row:"Login_row__2JDHn",err:"Login_err__vgD_4",col:"Login_col__fXdQI",inputbox:"Login_inputbox__BVahY",text:"Login_text__2Bzyz",line:"Login_line__37hfK",submit:"Login_submit__2_x5r",forgot:"Login_forgot__2lDV2"}},24:function(e,t,c){e.exports={navbar:"NavBar_navbar__18-NA",logo:"NavBar_logo__1wBSX",links:"NavBar_links__2r8q1",lines:"NavBar_lines__2XzA7"}},3:function(e,t,c){e.exports={fullbox:"Checkout_fullbox__3v8jU",right:"Checkout_right__HLNUW",container:"Checkout_container__3T5QU",txt:"Checkout_txt__ux_cJ",row:"Checkout_row__1qQ5x",err:"Checkout_err__1IlGM",col:"Checkout_col__3-_gJ",inputbox:"Checkout_inputbox__k7q_T",text:"Checkout_text__2RdnX",line:"Checkout_line__3fH41",submit:"Checkout_submit__y7e8K"}},49:function(e,t,c){e.exports={backdrop:"BackDrop_backdrop__1Y9H1"}},51:function(e,t,c){e.exports={full:"Confirm_full__29qLS"}},59:function(e,t,c){},8:function(e,t,c){e.exports={full:"Contact_full__3cIsD",container:"Contact_container__47MkX",row:"Contact_row__1jIWg",err:"Contact_err__28B7s",col:"Contact_col__3G77-",inputbox:"Contact_inputbox__21p1P",text:"Contact_text__2mZEw",line:"Contact_line__2CNAk",submit:"Contact_submit__1X2EM"}},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),s=c.n(n),r=c(21),i=c.n(r),o=(c(59),c(12)),l=c(2),j=c(10),u=c(28),b=c.n(u),d=c(33),O=c(15),h=c.n(O),x=c(5),m="ADD_TO_CART",p="REMOVE_FROM_CART",v="RESET_CART",_=function(e,t){return function(c,a){c({type:m,payload:{_id:e._id,name:e.name,images:e.images,price:e.price,inStock:e.inStock,qty:t}}),localStorage.setItem("cart",JSON.stringify(a().cart.cart))}},f=c(13),g=c.n(f),N=c(25),C=function(e){var t=e.item,c=Object(x.b)(),n=function(e){console.log(e,"Remove cart"),c(function(e){return function(t,c){t({type:p,payload:e}),localStorage.setItem("cart",JSON.stringify(c().cart.cart))}}(e))};return Object(a.jsxs)("div",{className:g.a.cartitem,children:[Object(a.jsx)("div",{className:g.a.itemleft,children:Object(a.jsx)("img",{src:t.images[0],className:g.a.imgleft})}),Object(a.jsxs)("div",{className:g.a.itemright,children:[Object(a.jsxs)("div",{className:g.a.itemname,children:[" ",t.name," "]}),Object(a.jsxs)("div",{className:g.a.itemprice,children:["$",t.price," "]}),Object(a.jsx)("select",{className:g.a.select,value:t.qty,onChange:function(e){return a=t,n=e.target.value,void c(_(a,n));var a,n},children:Object(N.a)(Array(t.inStock).keys()).map((function(e){return Object(a.jsxs)("option",{value:e+1,children:[" ",e+1," "]})}))}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{onClick:function(e){return n(t._id)},className:g.a.delete,children:"Remove Item"})]})]})},k=c(4),S=function(){var e=Object(x.b)(),t=(Object(x.c)((function(e){return e.auth.email})),Object(x.c)((function(e){return e.cart}))),c=(t.cartItems,Object(j.g)()),n=Object(x.c)((function(e){return e.auth.isAuth})),s=function(){var t=Object(d.a)(b.a.mark((function t(a){var s,r,i,o,l;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!n){t.next=13;break}return r="".concat(s="https://e-commerce-w.herokuapp.com/","order"),t.next=6,h.a.get(r);case 6:i=t.sent,o=i.data,l={name:"PinkkTreat Razorpay",description:"Integration of RazorPay",order_id:o.id,handler:function(){var t=Object(d.a)(b.a.mark((function t(a){var n,r,i,o;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=a.razorpay_payment_id,r="".concat(s,"capture/").concat(n),t.next=5,h.a.post(r,{});case 5:i=t.sent,o=JSON.parse(i.data),o.captured&&(console.log("Successfully captured the payment"),e((console.log("action"),{type:v,payload:[]})),c.push("/confirm")),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("Error, could not capture payment",t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}(),theme:{color:"pink"}},new window.Razorpay(l).open(),t.next=14;break;case 13:Object(k.c)("Please login or register to checkout.",{autoClose:4e3,position:k.c.POSITION.TOP_CENTER,transition:k.b});case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:g.a.full,children:[Object(a.jsx)(k.a,{}),Object(a.jsx)("div",{className:g.a.cartpage,children:0===t.cart.length?Object(a.jsxs)("div",{className:g.a.empty,children:[" ",Object(a.jsxs)("div",{children:["Your cart is empty! ",Object(a.jsx)(o.b,{to:"/",children:"Go back"})]})," "]}):t.cart.map((function(e){return Object(a.jsx)(C,{item:e})}))}),Object(a.jsxs)("div",{className:g.a.right,children:[Object(a.jsxs)("div",{className:g.a.info,children:[Object(a.jsxs)("div",{className:g.a.total,children:[" Subtotal: ",t.cart.reduce((function(e,t){return t.price*t.qty+e}),0).toFixed(2)," $ "]}),Object(a.jsxs)("div",{className:g.a.total,children:[" Items: ",t.cart.reduce((function(e,t){return Number(t.qty)+e}),0)]})]}),Object(a.jsx)("button",{onClick:s,className:g.a.checkout,children:"Proceed to checkout"})]})]})},w=(c(84),function(e){var t=e.item,c=Object(j.g)(),s=Object(n.useState)(t.images[0]),r=Object(l.a)(s,2),i=r[0],o=r[1];return Object(a.jsx)("div",{className:"card",children:Object(a.jsxs)("div",{className:"box",children:[Object(a.jsx)("div",{className:"top",children:Object(a.jsx)("img",{className:"image123",src:i,onMouseOver:function(){console.log("img"),o(t.images[1])},onMouseOut:function(){o(t.images[0])}})}),Object(a.jsxs)("div",{className:"bottom",children:[Object(a.jsxs)("h2",{children:[" ",t.name," "]}),Object(a.jsxs)("h3",{children:[" $ ",t.price," "]}),Object(a.jsx)("button",{onClick:function(e){return function(e){c.push("/products/".concat(e))}(t._id)},className:"btn123",children:"View Product"})]})]})})});c(85);var y="GET_PRODUCTS_REQ",T="GET_PRODUCTS_SUCCESS",E="GET_PRODUCTS_FAIL",R="GET_PRODUCTS_DETAILS_REQ",q="GET_PRODUCTS_DETAILS_SUCCESS",I="GET_PRODUCTS_DETAILS_FAIL",P="GET_PRODUCTS_DETAILS_RESET",A=function(){return function(e){e({type:y}),h.a.get("https://e-commerce-w.herokuapp.com/api/products").then((function(t){return e((c=t.data,{type:T,payload:c}));var c})).catch((function(t){return e(function(e){return{type:E,payload:e}}(t))}))}},L=function(e){return function(t){t({type:R}),h.a.get("https://e-commerce-w.herokuapp.com/api/products/".concat(e)).then((function(e){return t((c=e.data,{type:q,payload:c}));var c})).catch((function(e){return t(function(e){return{type:I,payload:e}}(e))}))}},D=function(){var e=Object(x.b)(),t=Object(x.c)((function(e){return e.products})),c=t.products,s=t.loading,r=t.error;return Object(n.useEffect)((function(){e(A())}),[e]),Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"container123",children:s?Object(a.jsx)("h1",{children:" Loading! "}):r?Object(a.jsx)("h2",{children:"Error!"}):c.map((function(e){return Object(a.jsx)("div",{className:"home",children:Object(a.jsx)("div",{className:"products",children:Object(a.jsx)(w,{item:e})})},e._id)}))})})},G=c(24),U=c.n(G),B=function(e){var t=e.click,c=Object(j.g)(),n=Object(x.c)((function(e){return e.cart})),s=Object(x.c)((function(e){return e.auth.isAuth}));return Object(a.jsxs)("div",{className:U.a.navbar,children:[Object(a.jsx)("div",{className:U.a.logo,children:Object(a.jsx)("h2",{onClick:function(){c.push("/")},children:" PinkkTreat "})}),Object(a.jsxs)("ul",{className:U.a.links,children:[Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/",children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/login",children:s?"Account":"Login"})}),Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/contact",children:"Contact"})}),Object(a.jsx)("li",{className:U.a.cartlink,children:Object(a.jsxs)(o.b,{to:"/cart",children:[Object(a.jsx)("i",{className:"fas fa-shopping-cart"}),Object(a.jsxs)("span",{children:["Cart",Object(a.jsxs)("span",{className:U.a.cart_badge,children:[" ",n.cart.reduce((function(e,t){return Number(t.qty)+e}),0)," "]})]})]})})]}),Object(a.jsxs)("div",{className:U.a.lines,onClick:t,children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]})]})},M=c(49),F=c.n(M),J=function(e){var t=e.show,c=e.click;return t&&Object(a.jsx)("div",{className:F.a.backdrop,onClick:c})},X=(c(86),function(e){var t=e.show,c=e.click,n=["sidebar"],s=Object(x.c)((function(e){return e.cart}));return t&&n.push("show"),t&&Object(a.jsx)("div",{className:n.join(" "),children:Object(a.jsxs)("ul",{className:"links",children:[Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/",onClick:c,children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/login",onClick:c,children:"Login"})}),Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"faq",onClick:c,children:"FAQ"})}),Object(a.jsx)("li",{children:Object(a.jsxs)(o.b,{to:"/cart",onClick:c,children:[Object(a.jsx)("i",{className:"fas fa-shopping-cart"}),Object(a.jsxs)("span",{children:["Cart",Object(a.jsxs)("span",{children:[" ",s.cart.reduce((function(e,t){return Number(t.qty)+e}),0)," "]})]})]})})]})})}),H=(c(87),c(37)),Q=function(e){var t=e.match,c=e.history,s=Object(j.h)().id,r=Object(n.useState)(1),i=Object(l.a)(r,2),o=i[0],u=i[1],b=Object(x.b)(),d=Object(x.c)((function(e){return e.productDetails})),O=function(e){var t=Object(n.useState)(!0),c=Object(l.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(null),i=Object(l.a)(r,2),o=i[0],j=i[1],u=Object(n.useState)(!1),b=Object(l.a)(u,2),d=b[0],O=b[1];return Object(n.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){j(e),s(!1)})).catch((function(e){O(!0),s(!1)}))}),[e]),{loading:a,data:o,error:d}}("https://e-commerce-w.herokuapp.com/api/products/".concat(s)),h=O.loading,m=O.error,p=O.data;d.loading=h,d.error=m,d.product=p,Object(n.useEffect)((function(){b(L(t.params.id))}),[b,t]);var v=Object(n.useState)(0),f=Object(l.a)(v,2),g=f[0],C=f[1],k=p?p.images.length:0;return Object(a.jsx)("div",{children:h?Object(a.jsx)("h2",{children:"  Loading... "}):m?Object(a.jsx)("h2",{children:" Error! "}):Object(a.jsxs)("div",{className:"fullbox",children:[Object(a.jsxs)("div",{className:"left",children:[Object(a.jsxs)("div",{className:"leftimgs",children:[Object(a.jsx)("img",{src:p.images[0],onMouseOver:function(){return C(0)}}),Object(a.jsx)("img",{src:p.images[1],onMouseOver:function(){return C(1)}}),Object(a.jsx)("img",{src:p.images[2],onMouseOver:function(){return C(2)}})]}),Object(a.jsx)(H.a,{className:"left-arrow",onClick:function(){C(0===g?k-1:g-1)}}),Object(a.jsx)(H.b,{className:"right-arrow",onClick:function(){C(g===k-1?0:g+1)}}),p.images.map((function(e,t){return Object(a.jsx)("div",{className:t===g?"slide active":"slide",children:t===g&&Object(a.jsx)("img",{src:e,className:"image"})},t)}))]}),Object(a.jsxs)("div",{className:"right",children:[Object(a.jsxs)("div",{className:"title",children:[" ",p.name," "]}),Object(a.jsx)("div",{className:"reviews",children:" \u2605\u2605\u2605\u2605\u2605 "}),Object(a.jsxs)("div",{className:"price",children:[" $",p.price," "]}),Object(a.jsx)("div",{className:"select",children:Object(a.jsx)("select",{value:o,onChange:function(e){return u(e.target.value)},children:Object(N.a)(Array(p.inStock).keys()).map((function(e){return Object(a.jsxs)("option",{value:e+1,children:[" ",e+1," "]})}))})}),Object(a.jsx)("div",{onClick:function(){b(_(p,o)),c.push("/cart")},className:"btn1234",children:"Add To Bag"}),Object(a.jsx)("div",{className:"line"}),Object(a.jsxs)("div",{className:"desc",children:[" ",p.description," "]}),Object(a.jsx)("div",{className:"line"}),Object(a.jsxs)("div",{className:"stock",children:[" In Stock: ",p.inStock," "]}),Object(a.jsx)("div",{className:"color",children:"Colors:"}),Object(a.jsxs)("div",{className:"colors",children:[Object(a.jsx)("div",{style:{backgroundColor:p.colors[0],color:p.colors[0]},className:"clr"}),p.colors[1]&&Object(a.jsx)("div",{style:{backgroundColor:p.colors[1],color:p.colors[1]},className:"clr",children:" "}),p.colors[2]&&Object(a.jsx)("div",{style:{backgroundColor:p.colors[2],color:p.colors[2]},className:"clr",children:" "})]})]})]})})},z=c(11),W=c(8),V=c.n(W),Y=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),i=Object(l.a)(r,2),o=i[0],j=i[1],u=Object(n.useState)(""),b=Object(l.a)(u,2),d=b[0],O=b[1],x=Object(n.useState)(""),m=Object(l.a)(x,2),p=m[0],v=m[1],_=Object(n.useState)(!1),f=Object(l.a)(_,2),g=f[0],N=f[1];return Object(a.jsx)("div",{className:V.a.full,children:Object(a.jsxs)("div",{className:V.a.container,children:[Object(a.jsx)("h2",{children:"Contact Us!"}),g&&Object(a.jsx)("div",{className:V.a.err,children:" Please fill in all the fields. "}),Object(a.jsx)("div",{className:V.a.row,children:Object(a.jsx)("div",{className:V.a.col,children:Object(a.jsxs)("div",{className:V.a.inputbox,children:[Object(a.jsx)("input",Object(z.a)({required:!0,value:c,onChange:function(e){return s(e.target.value)}},"required",!0)),Object(a.jsx)("span",{className:V.a.text,children:"Name"}),Object(a.jsx)("span",{className:V.a.line})]})})}),Object(a.jsx)("div",{className:V.a.row,children:Object(a.jsx)("div",{className:V.a.col,children:Object(a.jsxs)("div",{className:V.a.inputbox,children:[Object(a.jsx)("input",Object(z.a)({required:!0,value:o,onChange:function(e){return j(e.target.value)}},"required",!0)),Object(a.jsx)("span",{className:V.a.text,children:"Email"}),Object(a.jsx)("span",{className:V.a.line})]})})}),Object(a.jsx)("div",{className:V.a.row,children:Object(a.jsx)("div",{className:V.a.col,children:Object(a.jsxs)("div",{className:V.a.inputbox,children:[Object(a.jsx)("input",Object(z.a)({required:!0,value:d,onChange:function(e){return O(e.target.value)}},"required",!0)),Object(a.jsx)("span",{className:V.a.text,children:"Subject"}),Object(a.jsx)("span",{className:V.a.line})]})})}),Object(a.jsx)("div",{className:V.a.row,children:Object(a.jsx)("div",{className:V.a.col,children:Object(a.jsxs)("div",{className:V.a.inputbox,children:[Object(a.jsx)("textarea",Object(z.a)({required:!0,value:p,onChange:function(e){return v(e.target.value)}},"required",!0)),Object(a.jsx)("span",{className:V.a.text,children:"Message"}),Object(a.jsx)("span",{className:V.a.line})]})})}),Object(a.jsx)("div",{className:V.a.row,children:Object(a.jsx)("div",{className:V.a.col,children:Object(a.jsx)("button",{onClick:function(e){if(e.preventDefault(),""===c||""===o||""===d||""===p)N(!0);else{var t={method:"post",url:"https://e-commerce-w.herokuapp.com//email",headers:{"Content-Type":"application/json"},data:{name:c,email:o,subject:d,message:p}};h()(t).then((function(e){return alert("Done")})).catch((function(e){return console.log(e)})),alert("Done"),N(!1),s(""),j(""),O(""),v("")}},className:V.a.submit,children:"Submit"})})})]})})},K=c(14),$=c.n(K),Z=(c(47),"LOGIN_SUCCESS"),ee="LOGOUT_REQ",te=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),i=Object(l.a)(r,2),o=i[0],u=i[1],b=Object(j.g)(),d=Object(x.b)(),O=Object(x.c)((function(e){return e.auth.isAuth}));return Object(a.jsxs)("div",{className:$.a.fullbox,children:[Object(a.jsx)(k.a,{}),Object(a.jsxs)("div",{className:$.a.container,children:[Object(a.jsx)("h2",{children:"Sign in"}),Object(a.jsx)("div",{className:$.a.row,children:Object(a.jsx)("div",{className:$.a.col,children:Object(a.jsxs)("div",{className:$.a.inputbox,children:[Object(a.jsx)("input",Object(z.a)({required:!0,value:c,onChange:function(e){return s(e.target.value)}},"required",!0)),Object(a.jsx)("span",{className:$.a.text,children:"Email"}),Object(a.jsx)("span",{className:$.a.line})]})})}),Object(a.jsx)("div",{className:$.a.row,children:Object(a.jsx)("div",{className:$.a.col,children:Object(a.jsxs)("div",{className:$.a.inputbox,children:[Object(a.jsx)("input",Object(z.a)({required:!0,type:"password",value:o,onChange:function(e){return u(e.target.value)}},"required",!0)),Object(a.jsx)("span",{className:$.a.text,children:"Password"}),Object(a.jsx)("span",{className:$.a.line})]})})}),Object(a.jsx)("div",{className:$.a.row,children:Object(a.jsxs)("div",{className:$.a.col,children:[Object(a.jsxs)("div",{className:$.a.forgot,children:[" Not a registered user? ",Object(a.jsx)("div",{onClick:function(){b.push("/register")},className:$.a.click,children:" Register now. "})," "]}),Object(a.jsx)("button",{onClick:function(e){if(e.preventDefault(),c.length<6&&Object(k.c)("Email is invalid.",{autoClose:4e3,position:k.c.POSITION.TOP_CENTER,transition:k.b}),o.length<6)Object(k.c)("Password is invalid.",{autoClose:4e3,position:k.c.POSITION.TOP_CENTER,transition:k.b});else{var t={method:"post",url:"https://e-commerce-w.herokuapp.com/api/user/login",headers:{"Content-Type":"application/json"},data:{email:c,password:o}};h()(t).then((function(e){d(function(e,t){return{type:Z,payload:{token:e,email:t}}}(e.data))})).catch((function(e){Object(k.c)("".concat(e.response.data),{autoClose:4e3,position:k.c.POSITION.TOP_CENTER,transition:k.b})}))}},className:$.a.submit,children:"Login"})]})})]}),O&&Object(a.jsx)(j.a,{to:"/profile"})]})},ce=c(9),ae=c.n(ce),ne=c(50),se=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),i=Object(l.a)(r,2),o=i[0],u=i[1],b=Object(n.useState)(""),d=Object(l.a)(b,2),O=d[0],x=d[1],m=Object(n.useState)(!1),p=Object(l.a)(m,2),v=(p[0],p[1],Object(n.useState)("")),_=Object(l.a)(v,2),f=_[0],g=(_[1],Object(j.g)());return Object(a.jsx)("div",{className:ae.a.fullbox,children:Object(a.jsxs)("div",{className:ae.a.container,children:[Object(a.jsx)(k.a,{className:ae.a.toast}),Object(a.jsx)("h2",{children:"Sign up"}),f&&Object(a.jsxs)("div",{children:[" ",f," "]}),Object(a.jsx)("div",{className:ae.a.row,children:Object(a.jsx)("div",{className:ae.a.col,children:Object(a.jsxs)("div",{className:ae.a.inputbox,children:[Object(a.jsx)("input",Object(z.a)({required:!0,value:c,onChange:function(e){return s(e.target.value)}},"required",!0)),Object(a.jsx)("span",{className:ae.a.text,children:"Name"}),Object(a.jsx)("span",{className:ae.a.line})]})})}),Object(a.jsx)("div",{className:ae.a.row,children:Object(a.jsx)("div",{className:ae.a.col,children:Object(a.jsxs)("div",{className:ae.a.inputbox,children:[Object(a.jsx)("input",Object(z.a)({required:!0,value:o,onChange:function(e){return u(e.target.value)}},"required",!0)),Object(a.jsx)("span",{className:ae.a.text,children:"Email"}),Object(a.jsx)("span",{className:ae.a.line})]})})}),Object(a.jsx)("div",{className:ae.a.row,children:Object(a.jsx)("div",{className:ae.a.col,children:Object(a.jsxs)("div",{className:ae.a.inputbox,children:[Object(a.jsx)("input",Object(z.a)({required:!0,type:"password",value:O,onChange:function(e){return x(e.target.value)}},"required",!0)),Object(a.jsx)("span",{className:ae.a.text,children:"Password"}),Object(a.jsx)("span",{className:ae.a.line})]})})}),Object(a.jsx)("div",{className:ae.a.row,children:Object(a.jsxs)("div",{className:ae.a.col,children:[Object(a.jsxs)("div",{className:ae.a.forgot,children:[" Already a customer? ",Object(a.jsx)("div",{onClick:function(){g.push("/login"),alert.show("Hello")},className:ae.a.click,children:" Login here. "})," "]}),Object(a.jsx)("button",{onClick:function(e){e.preventDefault();var t=ne.validate(o);if(c.length<3)Object(k.c)("Please enter your full name.",{autoClose:4e3,position:k.c.POSITION.TOP_CENTER,transition:k.b});else if(O.length<6)Object(k.c)("Password needs to be at least 6 characters.",{autoClose:4e3,position:k.c.POSITION.TOP_CENTER,transition:k.b});else if(t){var a={method:"post",url:"https://e-commerce-w.herokuapp.com/api/user/register",headers:{"Content-Type":"application/json"},data:{name:c,email:o,password:O}};h()(a).then((function(e){Object(k.c)("Successfully registered!",{autoClose:4e3,position:k.c.POSITION.TOP_CENTER,transition:k.b}),g.push("/login")})).catch((function(e){Object(k.c)("Email already exists. Please login.",{autoClose:4e3,position:k.c.POSITION.TOP_CENTER,transition:k.b})}))}else Object(k.c)("Email is invalid.",{autoClose:4e3,position:k.c.POSITION.TOP_CENTER,transition:k.b})},className:ae.a.submit,children:"Register"})]})})]})})};c(88);var re=function(){var e=Object(x.c)((function(e){return e.auth.token})),t=Object(x.c)((function(e){return e.auth.isAuth})),c=Object(n.useState)(""),s=Object(l.a)(c,2),r=s[0],i=s[1],o=Object(n.useState)(""),u=Object(l.a)(o,2),b=u[0],d=u[1],O=Object(x.b)();return Object(n.useEffect)((function(){var t={method:"get",url:"https://e-commerce-w.herokuapp.com/api/user/details",headers:{Authorization:"Bearer "+e}};h()(t).then((function(e){i(e.data.user.name),d(e.data.user.email)})).catch((function(e){console.log(e)}))})),Object(a.jsxs)("div",{children:[t?Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Profile"}),Object(a.jsxs)("h2",{children:[" Welcome, ",r," "]}),Object(a.jsxs)("h3",{children:[" Email: ",b," "]})]}):Object(a.jsx)(j.a,{to:"/login"}),Object(a.jsx)("button",{onClick:function(){console.log("logging out"),O({type:ee,payload:!1})},children:" Logout "})]})},ie=c(51),oe=c.n(ie),le=function(){return Object(a.jsx)("div",{className:oe.a.full,children:Object(a.jsx)("div",{children:Object(a.jsx)("h1",{style:{color:"white"},children:" Your order has been placed! "})})})},je=c(3),ue=c.n(je),be=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),i=Object(l.a)(r,2),o=i[0],j=i[1],u=Object(n.useState)(""),b=Object(l.a)(u,2),d=b[0],O=b[1],h=Object(n.useState)(""),m=Object(l.a)(h,2),p=m[0],v=m[1],_=Object(n.useState)(""),f=Object(l.a)(_,2),g=(f[0],f[1],Object(n.useState)("")),N=Object(l.a)(g,2),C=N[0],k=N[1],S=Object(n.useState)(""),w=Object(l.a)(S,2),y=w[0],T=w[1];Object(x.c)((function(e){return e.cart})).cartItems;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:ue.a.fullbox,children:[Object(a.jsxs)("div",{className:ue.a.container,children:[Object(a.jsx)("h2",{children:" Shipping Details "}),Object(a.jsx)("div",{className:ue.a.txt,children:" All fields are required unless mentioned otherwise. "}),Object(a.jsx)("div",{className:ue.a.row,children:Object(a.jsx)("div",{className:ue.a.col,children:Object(a.jsxs)("div",{className:ue.a.inputbox,children:[Object(a.jsx)("input",Object(z.a)({required:!0,value:c,onChange:function(e){return s(e.target.value)}},"required",!0)),Object(a.jsx)("span",{className:ue.a.text,children:"Name"}),Object(a.jsx)("span",{className:ue.a.line})]})})}),Object(a.jsx)("div",{className:ue.a.row,children:Object(a.jsx)("div",{className:ue.a.col,children:Object(a.jsxs)("div",{className:ue.a.inputbox,children:[Object(a.jsx)("input",Object(z.a)({required:!0,value:o,onChange:function(e){return j(e.target.value)}},"required",!0)),Object(a.jsx)("span",{className:ue.a.text,children:"Email"}),Object(a.jsx)("span",{className:ue.a.line})]})})}),Object(a.jsx)("div",{className:ue.a.row,children:Object(a.jsx)("div",{className:ue.a.col,children:Object(a.jsxs)("div",{className:ue.a.inputbox,children:[Object(a.jsx)("input",Object(z.a)({required:!0,value:d,onChange:function(e){return O(e.target.value)}},"required",!0)),Object(a.jsx)("span",{className:ue.a.text,children:"Mobile"}),Object(a.jsx)("span",{className:ue.a.line})]})})}),Object(a.jsx)("div",{className:ue.a.row,children:Object(a.jsx)("div",{className:ue.a.col,children:Object(a.jsxs)("div",{className:ue.a.inputbox,children:[Object(a.jsx)("input",Object(z.a)({required:!0,value:p,onChange:function(e){return v(e.target.value)}},"required",!0)),Object(a.jsx)("span",{className:ue.a.text,children:"Address"}),Object(a.jsx)("span",{className:ue.a.line})]})})}),Object(a.jsx)("div",{className:ue.a.row,children:Object(a.jsx)("div",{className:ue.a.col,children:Object(a.jsxs)("div",{className:ue.a.inputbox,children:[Object(a.jsx)("input",Object(z.a)({required:!0,value:C,onChange:function(e){return k(e.target.value)}},"required",!0)),Object(a.jsx)("span",{className:ue.a.text,children:"State"}),Object(a.jsx)("span",{className:ue.a.line})]})})}),Object(a.jsx)("div",{className:ue.a.row,children:Object(a.jsx)("div",{className:ue.a.col,children:Object(a.jsxs)("div",{className:ue.a.inputbox,children:[Object(a.jsx)("input",Object(z.a)({required:!0,value:y,onChange:function(e){return T(e.target.value)}},"required",!0)),Object(a.jsx)("span",{className:ue.a.text,children:"Country"}),Object(a.jsx)("span",{className:ue.a.line})]})})}),Object(a.jsx)("div",{className:ue.a.row,children:Object(a.jsxs)("div",{className:ue.a.col,children:[Object(a.jsxs)("div",{className:ue.a.forgot,children:[" Not a registered user? ",Object(a.jsx)("div",{className:ue.a.click,children:" Register now. "})," "]}),Object(a.jsx)("button",{className:ue.a.submit,children:"Login"})]})})]}),Object(a.jsx)("div",{className:ue.a.right})]}),")"]})},de=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)(B,{click:function(){return s(!0)}}),Object(a.jsx)(J,{show:c,click:function(){return s(!1)}}),Object(a.jsx)(X,{show:c,click:function(){return s(!1)}}),Object(a.jsxs)(j.d,{children:[Object(a.jsx)(j.b,{exact:!0,path:"/",component:D}),Object(a.jsx)(j.b,{exact:!0,path:"/products/:id",component:Q}),Object(a.jsx)(j.b,{exact:!0,path:"/contact",component:Y}),Object(a.jsx)(j.b,{exact:!0,path:"/cart",component:S}),Object(a.jsx)(j.b,{exact:!0,path:"/login",component:te}),Object(a.jsx)(j.b,{exact:!0,path:"/register",component:se}),Object(a.jsx)(j.b,{exact:!0,path:"/profile",component:re}),Object(a.jsx)(j.b,{exact:!0,path:"/confirm",component:le}),Object(a.jsx)(j.b,{exact:!0,path:"/checkout",component:be})]})]})};var Oe=function(){return Object(a.jsx)(o.a,{children:Object(a.jsx)(de,{})})},he=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,92)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))},xe=c(23),me=c(52),pe=c(53),ve=c(6),_e={cart:[]},fe={products:[],loading:!1,error:!1},ge={token:"",loading:!1,error:null,isAuth:!1,email:""},Ne=Object(xe.combineReducers)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;switch(console.log("reducer"),c){case m:var n=a,s=e.cart.find((function(e){return e._id===n._id}));return s?Object(ve.a)(Object(ve.a)({},e),{},{cart:e.cart.map((function(e){return e._id===s._id?n:e}))}):Object(ve.a)(Object(ve.a)({},e),{},{cart:[].concat(Object(N.a)(e.cart),[n])});case p:return Object(ve.a)(Object(ve.a)({},e),{},{cart:e.cart.filter((function(e){return e._id!==a}))});case v:return console.log(e,"remove"),Object(ve.a)(Object(ve.a)({},e),{},{cart:a});default:return e}},products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;switch(c){case y:return Object(ve.a)(Object(ve.a)({},e),{},{loading:!0,products:[]});case T:return Object(ve.a)(Object(ve.a)({},e),{},{loading:!1,products:a});case E:return Object(ve.a)(Object(ve.a)({},e),{},{loading:!1,error:!0});default:return e}},productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{item:{}},t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;switch(c){case R:return Object(ve.a)(Object(ve.a)({},e),{},{loading:!0});case q:return Object(ve.a)(Object(ve.a)({},e),{},{item:a});case I:return Object(ve.a)(Object(ve.a)({},e),{},{error:!0});case P:return Object(ve.a)(Object(ve.a)({},e),{},{item:{}});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;switch(console.log("reducer",e,c,a),c){case Z:return Object(ve.a)(Object(ve.a)({},e),{},{loading:!1,error:null,token:a.token,isAuth:!0,email:a.email});case ee:return Object(ve.a)(Object(ve.a)({},e),{},{isAuth:!1,token:"",email:""});default:return e}}}),Ce={cart:{cart:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]}},ke=Object(xe.createStore)(Ne,Ce,Object(pe.composeWithDevTools)(Object(xe.applyMiddleware)(me.a)));i.a.render(Object(a.jsxs)(x.a,{store:ke,children:[Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(Oe,{})}),","]}),document.getElementById("root")),he()},9:function(e,t,c){e.exports={fullbox:"Register_fullbox__Fd4i3",container:"Register_container__2wXCs",row:"Register_row__12RyX",err:"Register_err__ePNCu",col:"Register_col__2lWZC",inputbox:"Register_inputbox__D8hLy",text:"Register_text__2SYtI",line:"Register_line__uAtwi",submit:"Register_submit__3iXHG",forgot:"Register_forgot__GBEVW"}}},[[89,1,2]]]);
//# sourceMappingURL=main.455acb54.chunk.js.map
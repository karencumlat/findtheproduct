(this.webpackJsonpfindtheproduct=this.webpackJsonpfindtheproduct||[]).push([[0],{29:function(n,e,t){},34:function(n,e,t){},35:function(n,e,t){},36:function(n,e,t){"use strict";t.r(e);var c=t(2),i=t.n(c),o=t(21),a=t.n(o),r=(t(29),t(7)),s=t(14);t(37),t(30);s.a.apps.length?s.a.app():s.a.initializeApp({apiKey:"AIzaSyBeVBGkX0XS5Rt8x4oFgY4VW1T9gfoeKbg",authDomain:"findtheproduct-d3a4d.firebaseapp.com",projectId:"findtheproduct-d3a4d"});var l,d,u,j,b,h,m,f=s.a,O=t(1),x=Object(c.createContext)(),p=function(n){var e=n.children,t=Object(c.useState)(null),i=Object(r.a)(t,2),o=i[0],a=i[1],s=Object(c.useState)(!0),l=Object(r.a)(s,2),d=l[0],u=l[1];return Object(c.useEffect)((function(){f.auth().onAuthStateChanged((function(n){a(n),u(!1)}))}),[]),d?Object(O.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"80vh"},children:Object(O.jsx)("h1",{children:"Loading..."})}):Object(O.jsx)(x.Provider,{value:{currentUser:o},children:e})},g=t(39),v=t(9),y=["Aisle 1","Aisle 2","Aisle 3","Aisle 4","Aisle 5","Aisle 6","Aisle 7","Aisle 8","Aisle 9","Bakery","Deli","Canteen","Salad/Juice","Produce","Sushi","Seafood","Meat","Dairy","Patisserie"],k=t(5),C=t(4),w="#24a148",F="#161616",S="#FFFFFF",N="#F4F4F4",A="#6F6F6F",I=C.b.div(l||(l=Object(k.a)(["\n  .product-tile--item {\n    padding: 0.5em 1em;\n    display: flex;\n    margin: 0.5em 0;\n    align-items: center;\n\n    .product-tile--name {\n      flex: 2;\n      text-transform: capitalize;\n      display: flex;\n      flex-direction: column;\n\n      span {\n        font-size: 0.75em;\n        color: ",";\n      }\n    }\n  }\n\n  .add-new-item {\n    width: 100%;\n    position: sticky;\n    bottom: 0;\n    padding: 0 0 1.5em;\n    background-color: ",";\n    border: none;\n  }\n"])),A,S),W=(C.b.div(d||(d=Object(k.a)(["\n  background: ",";\n  width: 90%;\n  top: 50%;\n  transform: translate(0, -50%);\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n\n  .modal--close-btn {\n    position: absolute;\n    top: 0.25em;\n    right: 0.25em;\n    padding: 0;\n    font-size: 2em;\n  }\n\n  h3 {\n    margin: 1em;\n  }\n\n  > input {\n    margin: 1em;\n  }\n\n  .modal-btn {\n    display: flex;\n    width: 100%;\n    margin: 1em 0 0 0;\n    > btn {\n      flex: 1;\n    }\n  }\n"])),S),t(12)),z=C.b.button(u||(u=Object(k.a)(["\n  padding: 0.5em;\n  width: ",";\n  ",";\n\n  ",";\n\n  ",";\n\n  ",";\n"])),(function(n){return n.fullWidth?"100%":"auto"}),(function(n){return n.primary&&Object(C.a)(j||(j=Object(k.a)(["\n      background: ",";\n      color: ",";\n    "])),w,S)}),(function(n){return n.secondary&&Object(C.a)(b||(b=Object(k.a)(["\n      background: ",";\n      color: ",";\n    "])),F,S)}),(function(n){return n.tertiary&&Object(C.a)(h||(h=Object(k.a)(["\n      background: ",";\n      border: "," 1px solid;\n      color: ",";\n\n      &:hover {\n        background: ",";\n        color: ",";\n        border-color: ",";\n      }\n    "])),S,F,F,w,S,w)}),(function(n){return n.ghost&&Object(C.a)(m||(m=Object(k.a)(["\n      color: ",";\n\n      &:hover {\n        color: ",";\n      }\n    "])),F,w)}));var B,E=function(n){var e=n.onClick,t=n.children;return Object(O.jsx)(z,Object(W.a)(Object(W.a)({onClick:e},n),{},{children:t}))},L=C.b.div(B||(B=Object(k.a)(["\n  background: ",";\n  width: 90%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n\n  .modal--close-btn {\n    position: absolute;\n    top: 0.5em;\n    right: 0.5em;\n    padding: 0;\n    font-size: 2em;\n  }\n\n  h3 {\n    margin: 1em;\n  }\n\n  .modal-content {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .modal-content > * {\n    flex: 1;\n    margin: 1em;\n  }\n\n  .modal-btn {\n    display: flex;\n    width: 100%;\n    margin: 1em 0 0 0;\n    > btn {\n      flex: 1;\n    }\n  }\n"])),S);var T,P,U,V,D,J=function(n){var e=n.onClose,t=n.heading,c=n.onSave,i=n.children,o=n.primaryBtn,a=n.secondaryBtn;return Object(O.jsxs)(L,Object(W.a)(Object(W.a)({},n),{},{children:[Object(O.jsx)("h3",{children:t}),Object(O.jsx)(E,{onClick:e,ghost:!0,className:"modal--close-btn",children:Object(O.jsx)(v.c,{})}),Object(O.jsx)("div",{className:"modal-content",children:i}),Object(O.jsxs)("div",{className:"modal-btn",children:[Object(O.jsx)(E,{onClick:e,secondary:!0,fullWidth:!0,children:a||"Cancel"}),Object(O.jsx)(E,{onClick:c,primary:!0,fullWidth:!0,children:o||"Save"})]})]}))},R=C.b.div(T||(T=Object(k.a)(["\n  display: flex;\n  flex-direction: row;\n"]))),K=C.b.span(P||(P=Object(k.a)(["\n  position: absolute;\n  right: 0.5em;\n  top: 0.3em;\n  font-size: 1.5em;\n  color: #272d36;\n"]))),M=C.b.div(U||(U=Object(k.a)(["\n  position: absolute;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\n  width: 100%;\n  height: 255px;\n  overflow-y: scroll;\n"]))),X=C.b.div((function(n){Object.assign({},n);return Object(C.a)(V||(V=Object(k.a)(["\n    position: relative;\n    ","\n    ","\n    ","\n  "])),K,R,M)})),q=C.b.button(D||(D=Object(k.a)(["\n  width: 100%;\n  padding: 0.5em 0.5em 0.5em 1em;\n  text-align: left;\n  border-bottom: 1px solid #e1e2e2;\n  text-transform: capitalize;\n  background-color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content:flex-start;\n}\n\n&:active {\n  background-color: red;\n}\n\n&:hover {\n  background-color: #e1e2e2;\n}\n\n\n"])));var G,Y=function(n){var e=n.option,t=n.children,c=n.onClick;return Object(O.jsx)(q,{onClick:c,value:e.id,children:t||e})};C.b.i(G||(G=Object(k.a)(["\n  color: ",";\n  font-size: 1.2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 0.25em;\n"])),w);var H,Q=function(n){var e=n.options,t=n.onClick,i=Object(c.useState)(!1),o=Object(r.a)(i,2),a=(o[0],o[1],Object(c.useState)(!1)),s=Object(r.a)(a,2),l=(s[0],s[1]);return e.length<1?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(Y,{option:"No results found..."}),Object(O.jsxs)(Y,{onClick:function(){return l(!1)},children:[Object(O.jsx)("i",{className:"add-new-item--icon",children:Object(O.jsx)(v.a,{})})," ","Add New Item"]})]}):Object(O.jsx)(O.Fragment,{children:e.map((function(n){return Object(O.jsxs)(Y,{onClick:t,option:n,sub:n.aisle,children:[n.item," (",n.aisle,")"]},n.item)}))})},Z=C.b.input(H||(H=Object(k.a)(["\n  border: none;\n  width: ",";\n\n  padding: 1em;\n  background-color: ",";\n  border-bottom: "," 1px solid;\n\n  &:focus {\n    outline: "," 2px solid;\n    border: none;\n  }\n"])),(function(n){return n.fullWidth?"100%":"auto"}),N,F,w);var $=function(n){var e=n.type,t=n.placeholder,c=n.onChange,i=n.value,o=n.onFocus;return Object(O.jsx)(Z,Object(W.a)({type:e,placeholder:t,value:i,onChange:c,onFocus:o},n))};var _,nn=function(n){var e=n.items,t=n.onClick,i=(Object(c.useRef)(),Object(c.useState)("")),o=Object(r.a)(i,2),a=o[0],s=o[1],l=Object(c.useState)(!1),d=Object(r.a)(l,2),u=d[0],j=d[1];return Object(O.jsxs)(X,{children:[Object(O.jsxs)(R,{children:[Object(O.jsx)($,{type:"text",placeholder:"find the product...",className:"search-box",value:a,onChange:function(n){s(n.target.value)},onFocus:function(){j(!0)},fullWidth:!0}),Object(O.jsx)(K,{children:u?Object(O.jsx)("button",{onClick:function(){s(""),j(!1)},children:Object(O.jsx)(v.f,{})}):Object(O.jsx)(v.h,{})})]}),!0===u?Object(O.jsx)(M,{children:Object(O.jsx)(Q,{options:e.filter((function(n){return n.item.toLowerCase().includes(a.toLowerCase())})),onClick:t})}):null]})},en=C.b.select(_||(_=Object(k.a)(["\n  padding: 0.75em;\n  outline: none;\n  color: ",";\n  border: none;\n  border-bottom: "," 1px solid;\n  text-transform: capitalize;\n  background: ",";\n  border-radius: 0;\n\n  &:focus {\n    outline: "," 2px solid;\n    border: none;\n  }\n"])),F,F,N,w);var tn,cn=function(n){var e=n.options,t=n.onChange,c=n.selectedItem;return console.log(c),e.length<1?"":Object(O.jsx)(en,{onChange:t,children:e.sort().map((function(n){return n===c?Object(O.jsx)("option",{value:n,selected:!0,children:n},n):Object(O.jsx)("option",{value:n,children:n},n)}))})},on=C.b.div(tn||(tn=Object(k.a)(["\n  background-color: ",";\n"])),N);var an=function(n){var e=n.children;return Object(O.jsx)(on,Object(W.a)(Object(W.a)({},n),{},{children:e}))};t(34);var rn=function(n){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),i=t[0],o=t[1],a=n.title;return Object(O.jsxs)("span",{className:"checkbox",onClick:function(){return o(!i)},children:[Object(O.jsx)("i",{className:"checkbox-icon",children:i?Object(O.jsx)("i",{className:"checked",children:Object(O.jsx)(v.b,{})}):Object(O.jsx)(v.e,{})}),Object(O.jsx)("input",{type:"checkbox",checked:i,onChange:function(){return o(!i)}}),Object(O.jsx)("label",{className:i?"checkbox-label strike":"checkbox-label",children:a})]})};var sn,ln=function(){var n=Object(c.useContext)(x).currentUser,e=(n&&n.uid,n?n.email:null),t=Object(c.useState)([]),i=Object(r.a)(t,2),o=i[0],a=i[1],s=Object(c.useState)([]),l=Object(r.a)(s,2),d=l[0],u=l[1],j=Object(c.useState)(!1),b=Object(r.a)(j,2),h=b[0],m=b[1],p=Object(c.useState)(""),k=Object(r.a)(p,2),C=k[0],w=k[1],F=Object(c.useState)(""),S=Object(r.a)(F,2),N=S[0],A=S[1],W=Object(c.useState)(!1),z=Object(r.a)(W,2),B=z[0],L=z[1],T=Object(c.useState)({}),P=Object(r.a)(T,2),U=P[0],V=P[1],D=Object(c.useState)(!1),R=Object(r.a)(D,2),K=R[0],M=R[1],X=f.firestore().collection("products"),q=f.firestore().collection("shoppinglist");return Object(c.useEffect)((function(){m(!0),X.orderBy("aisle","asc").onSnapshot((function(n){var e=[];n.forEach((function(n){e.push(n.data())})),a(e),m(!1)})),m(!0),q.orderBy("aisle","asc").onSnapshot((function(n){var e=[];n.forEach((function(n){e.push(n.data())})),u(e),m(!1)})),console.log(C)}),[]),Object(O.jsx)(O.Fragment,{children:"karencumlat@gmail.com"===e?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(nn,{items:o}),!0===B?Object(O.jsxs)(J,{heading:"Add New Item",onClose:function(){L(!1),A(null)},onSave:function(){return function(){var e=n?n.uid:"unknown",t=n?n.email:"unknown",c={aisle:C,item:N,id:Object(g.a)(),owner:e,ownerEmail:t,createdAt:f.firestore.FieldValue.serverTimestamp(),lastUpdate:f.firestore.FieldValue.serverTimestamp()};X.doc(c.id).set(c).catch((function(n){console.error(n)}))}()},primaryBtn:"Add",children:[Object(O.jsx)($,{placeholder:"Item name",type:"text",value:N,onChange:function(n){return A(n.target.value)}}),Object(O.jsx)(cn,{options:y,onChange:function(n){return w(n.target.value)}})]}):"",!0===K?Object(O.jsxs)(J,{heading:"Edit item",onClose:function(){M(!1),A(null)},onSave:function(){return function(n){var e={item:N,aisle:C,lastUpdate:f.firestore.FieldValue.serverTimestamp()};m(),X.doc(n.id).update(e).catch((function(n){console.error(n)}))}(U)},children:[Object(O.jsx)($,{placeholder:"Item name",type:"text",value:N,onChange:function(n){return A(n.target.value)}}),Object(O.jsx)(cn,{selectedItem:C,options:y,onChange:function(n){return w(n.target.value)}})]}):"",Object(O.jsx)("hr",{}),h?Object(O.jsx)("h1",{children:"Loading..."}):null,Object(O.jsxs)(I,{children:[o.map((function(n){return Object(O.jsxs)(an,{className:"product-tile--item",children:[Object(O.jsxs)("div",{className:"product-tile--name",children:[n.item,Object(O.jsx)("span",{children:n.aisle})]}),Object(O.jsxs)("span",{className:"product-tile-buttons",children:[Object(O.jsx)(E,{onClick:function(){V(n),A(n.item),w(n.aisle),M(!0)},ghost:!0,children:Object(O.jsx)(v.g,{})}),Object(O.jsx)(E,{onClick:function(){return function(n){X.doc(n.id).delete().catch((function(n){console.error(n)}))}(n)},ghost:!0,children:Object(O.jsx)(v.i,{})})]})]},n.id)})),Object(O.jsx)("span",{className:"add-new-item",children:Object(O.jsx)(E,{primary:!0,fullWidth:!0,onClick:function(){return L(!0)},children:"Add New Item"})})," "]})]}):null!==n?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(nn,{items:o,onClick:function(e){var t=e.target.value;console.log(t);var c=o.filter((function(n){return n.id===t})),i=n?n.uid:"unknown",a=n?n.email:"unknown",r={aisle:c[0].aisle,item:c[0].item,id:c[0].id,owner:i,ownerEmail:a,createdAt:f.firestore.FieldValue.serverTimestamp(),lastUpdate:f.firestore.FieldValue.serverTimestamp()};q.doc(r.id).set(r).catch((function(n){console.error(n)}))}}),Object(O.jsx)("hr",{}),h?Object(O.jsx)("h1",{children:"Loading..."}):null,Object(O.jsx)(I,{children:d.map((function(n){return Object(O.jsxs)(an,{className:"product-tile--item",children:[Object(O.jsx)(rn,{title:"".concat(n.item,"(").concat(n.aisle,")")}),Object(O.jsx)("span",{className:"product-tile-buttons",children:Object(O.jsx)(E,{onClick:function(){return function(n){q.doc(n.id).delete().catch((function(n){console.error(n)}))}(n)},ghost:!0,children:Object(O.jsx)(v.i,{})})})]},n.id)}))})]}):""})},dn=C.b.div(sn||(sn=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 4em;\n\n  .authy-form {\n    width: 100%;\n\n    .authy-form--input > * {\n      margin: 0 0 1rem 0;\n    }\n\n    h3 {\n      margin-bottom: 0;\n    }\n\n    .authy-form--image {\n      margin: 0 0 1rem 0;\n    }\n\n    .authy--illustration {\n      width: 80%;\n      margin: 20% auto;\n      display: block;\n    }\n\n    .authy--login-btn {\n      margin: 1rem 0 0 0;\n    }\n\n    .authy-or {\n      display: flex;\n      justify-content: center;\n      margin: 0;\n    }\n  }\n  .authy-success {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n\n    h1 {\n      flex: 1;\n    }\n\n    button {\n      padding: 0;\n    }\n  }\n\n  .authy--logout-btn {\n    ","\n    ","\n    ","\n    font-size: 2em;\n  }\n"])),"","","");var un=function(){var n=Object(c.useState)(""),e=Object(r.a)(n,2),t=e[0],i=e[1],o=Object(c.useState)(""),a=Object(r.a)(o,2),s=a[0],l=a[1],d=Object(c.useState)(!1),u=Object(r.a)(d,2),j=(u[0],u[1]),b=Object(c.useContext)(x).currentUser,h=b?b.email:"",m=function(){i(""),l("")};return Object(O.jsx)(dn,{children:""===h?Object(O.jsxs)("div",{className:"authy-form",children:[Object(O.jsxs)("div",{className:"authy-form--image",children:[Object(O.jsx)("img",{src:"/findtheproduct/images/homescreen.svg",alt:"watermelon illustration",className:"authy--illustration"}),Object(O.jsx)("h3",{children:"Find the product."}),Object(O.jsx)("p",{children:"Find items quicks through the aisles."})]}),Object(O.jsxs)("div",{className:"authy-form--input",children:[Object(O.jsx)($,{type:"email",value:t,onChange:function(n){return i(n.target.value)},placeholder:"email",fullWidth:!0}),Object(O.jsx)($,{type:"password",value:s,onChange:function(n){return l(n.target.value)},placeholder:"password",fullWidth:!0}),Object(O.jsx)(E,{onClick:function(){f.auth().signInWithEmailAndPassword(t,s).then((function(){j(!0),m()})).catch((function(n){console.error(n),j(!1)}))},primary:!0,fullWidth:!0,className:"authy--login-btn",children:"Login"}),Object(O.jsx)("span",{className:"authy-or",children:"or"}),Object(O.jsx)(E,{onClick:function(){f.auth().createUserWithEmailAndPassword(t,s).then((function(){m()})).catch((function(n){console.error(n)}))},tertiary:!0,fullWidth:!0,children:"Register"})]})]}):Object(O.jsxs)("div",{className:"authy-success",children:[Object(O.jsx)("h1",{children:"find the product"}),Object(O.jsx)(E,{onClick:function(){f.auth().signOut(),j(!1)},className:"authy--logout-btn",ghost:!0,children:Object(O.jsx)(v.d,{})})]})})};t(35);var jn=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(p,{children:[Object(O.jsx)(un,{}),Object(O.jsx)(ln,{})]})})},bn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(e){var t=e.getCLS,c=e.getFID,i=e.getFCP,o=e.getLCP,a=e.getTTFB;t(n),c(n),i(n),o(n),a(n)}))};a.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(jn,{})}),document.getElementById("root")),bn()}},[[36,1,2]]]);
//# sourceMappingURL=main.c8fe67ec.chunk.js.map
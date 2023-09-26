"use strict";(self.webpackChunkbanda=self.webpackChunkbanda||[]).push([[733],{9116:function(e,t,c){c.d(t,{Z:function(){return _}});var o=c(2791),r=c(4164),n="BasicModalWindow_basicModalWindow__47AT0",s="BasicModalWindow_modal__vIbV3",a="BasicModalWindow_closeSvg__TTZDm",d="BasicModalWindow_colorSvg__w6AAD",l="BasicModalWindow_overflowHidden__vob+T",i=c(6647),u=c(184),_=function(e){var t=e.children,c=e.isOpenModalToggle,_=e.className,m=e.innerClasses;(0,o.useEffect)((function(){return document.body.classList.add("".concat(l)),function(){document.body.classList.remove("".concat(l))}}),[]),(0,o.useEffect)((function(){var e=function(e){"Escape"===e.code&&c()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[c]);var h=(0,u.jsx)("div",{className:"".concat(n," ").concat(_||""),onClick:function(e){e.currentTarget===e.target&&c()},children:(0,u.jsxs)("div",{className:"".concat(s," ").concat(m||""),children:[(0,u.jsx)("button",{className:a,onClick:function(){return c()},children:(0,u.jsx)("svg",{className:d,width:"20",height:"20",children:(0,u.jsx)("use",{href:i.Z+"#close-icon"})})}),t]})});return(0,r.createPortal)(h,document.querySelector("#modal-root"))}},5700:function(e,t,c){c.d(t,{Z:function(){return n}});var o="Container_container__VVOCq",r=c(184),n=function(e){var t=e.children,c=e.className,n=void 0===c?"":c;return(0,r.jsx)("div",{className:"".concat(o," ").concat(n),children:t})}},9794:function(e,t,c){c.d(t,{Z:function(){return o.Z}});var o=c(5700)},1337:function(e,t,c){c.d(t,{Z:function(){return n}});c(2791);var o="TitlePage_titleContainer__7nesO",r=c(184);var n=function(e){var t=e.title;return(0,r.jsx)("div",{className:o,children:(0,r.jsx)("h1",{children:t})})}},8586:function(e,t,c){c.d(t,{Z:function(){return o.Z}});var o=c(1337)},8751:function(e,t,c){c.d(t,{i:function(){return d}});var o=c(9434),r=function(e){return e.products.list},n=function(e){return e.products.categories},s=function(e){return e.products.filter},a=function(e){return e.products.isLoading},d=function(){return{categoriesProducts:(0,o.v9)(n),filterProduct:(0,o.v9)(s),IsLoading:(0,o.v9)(a),selectProductsList:(0,o.v9)(r)}}},6980:function(e,t,c){c.r(t),c.d(t,{default:function(){return fe}});var o=c(2791),r="Products_backGround__WhbPh",n="Products_wrapper__aniuN",s=c(1413),a=c(9439),d=c(6647),l=c(1135),i=c(9434),u=c(2936),_=c(8751),m=c(4723),h="ProductsFilter_products_filter_search__QzdTm",p="ProductsFilter_products_filter_btn__jhlI4",f="ProductsFilter_products_filter_btn_close__bzEUJ",x="ProductsFilter_products_filter_btn_search__u3C8V",v="ProductsFilter_products_filter_btn_close_icon__J59h0",j="ProductsFilter_products_filter_btn_search_icon__PWTKB",N="ProductsFilter_products_filter_label__EuXcx",b="ProductsFilter_products_filter__I9We2",g="ProductsFilter_products_filter_select_type__DQ4fx",w="ProductsFilter_products_filter_select_categories__qU8jc",S="ProductsFilter_products_filter_select__Ltbmq",P={control:function(e){return(0,s.Z)((0,s.Z)({},e),{},{backgroundColor:"trasparent",height:"52px",appearance:"none",WebkitAppearance:"none",MozAppearance:"none"})},option:function(e,t){t.isFocused;var c=t.isSelected;return(0,s.Z)((0,s.Z)({},e),{},{backgroundColor:"rgba(28, 28, 28, 1)",color:c?"var(--accent-bright-color)":"var(--main-text-color)",padding:"14px"})},menu:function(e){return(0,s.Z)((0,s.Z)({},e),{},{backgroundColor:"rgba(28, 28, 28, 1)"})},singleValue:function(e){return(0,s.Z)((0,s.Z)({},e),{},{color:"var(--main-text-color)"})},indicatorSeparator:function(e){return(0,s.Z)((0,s.Z)({},e),{},{backgroundColor:"transparent"})},dropdownIndicator:function(e){return(0,s.Z)((0,s.Z)({},e),{},{color:"var(--main-text-color)"})},container:function(e){return(0,s.Z)((0,s.Z)({},e),{},{border:"1px solid var(--transparent-medium-2)",borderRadius:"12px",outline:"none"})},menuList:function(e){return(0,s.Z)((0,s.Z)({},e),{},{borderRadius:"12px","::-webkit-scrollbar":{display:"none"},overflowY:"scroll"})}},Z=c(184),M=[{value:"all",label:"All"},{value:"recommended",label:"Recommended "},{value:"notRecommended",label:"Not recommended"}];var W=function(){var e=(0,i.I0)(),t=(0,_.i)().categoriesProducts.categories,c=null===t||void 0===t?void 0:t.map((function(e){return{value:e,label:(t=e,t.slice(0,1).toUpperCase()+t.slice(1))};var t}));(0,o.useEffect)((function(){e((0,u.Z)())}),[e]);var r=(0,o.useState)(!1),n=(0,a.Z)(r,2),W=n[0],y=n[1],C=(0,o.useState)(""),A=(0,a.Z)(C,2),T=A[0],k=A[1],I=(0,o.useState)(""),L=(0,a.Z)(I,2),F=L[0],R=L[1],B=(0,o.useState)(M[0]),D=(0,a.Z)(B,2),E=D[0],V=D[1];return(0,Z.jsxs)("ul",{className:b,children:[(0,Z.jsx)("li",{children:(0,Z.jsxs)("label",{className:N,children:[(0,Z.jsx)("input",{value:T,onChange:function(t){var c=t.target.value;y(c.length>0),k(c),e((0,m.uD)({search:c,category:F.value,recommended:E.value}))},name:"productSearch",type:"text",className:h,placeholder:"Search"}),(0,Z.jsx)("button",{onClick:function(){k(""),e((0,m.uD)({search:"",category:F.value,recommended:E.value})),y(!1)},style:{display:W?"block":"none"},className:"".concat(f," ").concat(p),type:"button",children:(0,Z.jsx)("svg",{className:v,children:(0,Z.jsx)("use",{href:d.Z+"#close-icon"})})}),(0,Z.jsx)("button",{className:"".concat(x," ").concat(p),type:"button",children:(0,Z.jsx)("svg",{className:j,children:(0,Z.jsx)("use",{href:d.Z+"#search-icon"})})})]})}),(0,Z.jsx)("li",{children:(0,Z.jsx)(l.ZP,{value:F,onChange:function(t){R(t),e((0,m.uD)({category:t.value,search:T,recommended:E.value}))},styles:P,className:"\n          ".concat(S,"\n          ").concat(w,"\n          "),theme:function(e){return(0,s.Z)((0,s.Z)({},e),{},{colors:(0,s.Z)((0,s.Z)({},e.colors),{},{primary50:"var(--transparent-medium-4)",primary:"transparent",neutral40:"var(--main-text-color)",neutral20:"transparent",neutral30:"transparent",neutral50:"var(--main-text-color)"})})},options:c||[]})}),(0,Z.jsx)("li",{children:(0,Z.jsx)(l.ZP,{onChange:function(t){V(t),e((0,m.uD)({recommended:t.value,search:T,category:F.value}))},value:E,styles:P,className:"".concat(S," ").concat(g),theme:function(e){return(0,s.Z)((0,s.Z)({},e),{},{colors:(0,s.Z)((0,s.Z)({},e.colors),{},{primary50:"rgba(255, 255, 255, 0.10)",primary:"transparent",neutral40:"var(--main-text-color)",neutral20:"transparent",neutral30:"transparent",neutral50:"var(--main-text-color)",neutral80:"var(--main-text-color)"})})},options:M})})]})},y=c(9794),C="ProductsList_productsList__2+0aX",A="Productsitem_productsCardDiet__USXa2",T="Productsitem_productsCardDietText__VnKMO",k="Productsitem_productsCardStatus__AhLMw",I="Productsitem_productsCardInfo__Yw0R4",L="Productsitem_productsCardInfoItem__fy7md",F="Productsitem_productsCardInfoValue__TF+6N",R="Productsitem_productsCardTitle__2Vb6K",B="Productsitem_productsCardBtnAdd__8Plai",D="Productsitem_productsStatusRecommendedTextTrue__duPaQ",E="Productsitem_productsStatusRecommendedTextFalse__A3peu",V="Productsitem_productsCardStatusCont__BNNQm",z="Productsitem_productsCard__Vb79L",K=c(9421),O=function(e){var t=e.el,c=e.openModalToggle,o=(0,K.a)().user.bodyParams.blood;return(0,Z.jsxs)("li",{className:z,children:[(0,Z.jsxs)("div",{className:k,children:[(0,Z.jsx)("span",{className:A,children:(0,Z.jsx)("p",{className:T,children:"diet"})}),(0,Z.jsxs)("div",{className:V,children:[(0,Z.jsx)("p",{className:t.groupBloodNotAllowed[o]?D:E,children:t.groupBloodNotAllowed[o]?"Recommended":"Not recommended"}),(0,Z.jsx)("button",{onClick:function(){c(t)},className:B,type:"button",children:"Add"})]})]}),(0,Z.jsx)("h4",{className:R,children:t.title}),(0,Z.jsxs)("ul",{className:I,children:[(0,Z.jsxs)("li",{className:L,children:["Calories:",(0,Z.jsx)("p",{className:F,children:t.calories})]}),(0,Z.jsxs)("li",{className:L,children:["Category:",(0,Z.jsx)("p",{className:F,children:t.category})]}),(0,Z.jsxs)("li",{className:L,children:["Weight:",(0,Z.jsx)("p",{className:F,children:t.weight})]})]})]})},U="SearchNotResult_products_SearchNotResult__9G1oD",Y="SearchNotResult_products_SearchNotResult_text__-WNzn",G="SearchNotResult_products_SearchNotResult_orangeText__f9vjP",Q="SearchNotResult_products_SearchNotResult_orangeText_block__tz1eD",q=function(){return(0,Z.jsxs)("div",{className:U,children:[(0,Z.jsxs)("p",{className:Y,children:[(0,Z.jsx)("span",{className:G,children:"Sorry, no results were found"})," ","for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),(0,Z.jsx)("p",{className:"".concat(G," ").concat(Q),children:"Try changing the search parameters."})]})},J=c(9116),X={SuccessModalWindow:"AddProductSuccess_SuccessModalWindow__LfFGZ",SuccessModalWindowWrap:"AddProductSuccess_SuccessModalWindowWrap__grJEK",SuccessModalWindowImg:"AddProductSuccess_SuccessModalWindowImg__sG-6B",SuccessModalWindowTitle:"AddProductSuccess_SuccessModalWindowTitle__LT61K",SuccessModalWindowTxt:"AddProductSuccess_SuccessModalWindowTxt__kYwhl",SuccessModalWindowSub:"AddProductSuccess_SuccessModalWindowSub__V3uOZ",SuccessModalWindowBtn:"AddProductSuccess_SuccessModalWindowBtn__dZ7G3",arrowIcon:"AddProductSuccess_arrowIcon__NawFs"},H=c.p+"static/media/avocado.707ba2df7d845097c563.png",$=c(1087),ee=function(e){var t=e.calories,c=e.closeModal;return(0,Z.jsx)("div",{className:X.SuccessModalWindow,children:(0,Z.jsxs)("div",{className:X.SuccessModalWindowWrap,children:[(0,Z.jsxs)("div",{className:"".concat(X.SuccessModalWindow," ").concat(X.boxImage),children:[(0,Z.jsx)("img",{className:X.SuccessModalWindowImg,src:H,alt:"avocado"}),(0,Z.jsx)("p",{className:X.SuccessModalWindowTitle,children:"Well done"}),(0,Z.jsxs)("p",{className:X.SuccessModalWindowTxt,children:["Calories:",(0,Z.jsx)("span",{className:X.SuccessModalWindowSub,children:t})]})]}),(0,Z.jsx)($.rU,{to:"/products",onClick:c,children:(0,Z.jsx)("button",{className:X.SuccessModalWindowBtn,children:"Next product"})}),(0,Z.jsx)($.rU,{to:"/diary",onClick:c,children:(0,Z.jsxs)("p",{className:X.SuccessModalWindowTxt,children:["To the diary",(0,Z.jsx)("svg",{className:X.arrowIcon,children:(0,Z.jsx)("use",{href:d.Z+"#arrow-icon",children:" "})})]})})]})})},te="AddProductModalWindow_modal__Bzeda",ce="AddProductModalWindow_form__rbWjT",oe="AddProductModalWindow_titleCalories__8gYvK",re="AddProductModalWindow_calories__AzQxn",ne="AddProductModalWindow_inputTitle__Wvrhi",se="AddProductModalWindow_inputQuantity__kGHzK",ae="AddProductModalWindow_btn__eK1zY",de="AddProductModalWindow_btnAdd__1DYsk",le="AddProductModalWindow_btnCancel__b7bJg",ie="AddProductModalWindow_input__JqM2+",ue=c(5119),_e=c(9085),me=(c(5462),function(e){var t=e.eldata,c=e.onClick,r=e.closeModal,n=(0,i.I0)(),d=t.title,l=t.calories,u=t._id,_=(0,o.useState)(""),m=(0,a.Z)(_,2),h=m[0],p=m[1],f=Math.round(h*l/100),x=(new Date).toISOString();return(0,Z.jsx)("div",{className:te,children:(0,Z.jsxs)("form",{className:ce,children:[(0,Z.jsxs)("div",{className:ie,children:[(0,Z.jsx)("label",{children:(0,Z.jsx)("input",{className:ne,type:"text",value:d,disabled:!0})}),(0,Z.jsx)("label",{children:(0,Z.jsx)("input",{className:se,placeholder:"grams",type:"number",value:h,onChange:function(e){return p(Number(e.target.value))}})})]}),(0,Z.jsx)("br",{}),(0,Z.jsx)("p",{children:(0,Z.jsxs)("span",{className:re,children:[(0,Z.jsx)("span",{className:oe,children:"Calories:"}),f]})}),(0,Z.jsx)("br",{}),(0,Z.jsxs)("div",{className:ae,children:[(0,Z.jsx)("button",{className:de,type:"button",onClick:function(){f?n((0,ue.Lm)((0,s.Z)((0,s.Z)({date:x,productId:u,weight:h},t),{},{caloriesEaten:f}))).then((function(){c(f)})).catch((function(e){(0,_e.Am)(e.message)})):_e.Am.error("Must be greater than 0")},children:"Add to diary"}),(0,Z.jsx)("button",{className:le,type:"button",onClick:r,children:"Cancel"})]})]})})}),he=function(){var e=(0,i.I0)(),t=(0,_.i)(),c=t.filterProduct,r=t.selectProductsList,n=(0,K.a)().user.bodyParams.blood,d=(0,o.useState)(null),l=(0,a.Z)(d,2),m=l[0],h=l[1],p=function(e,t){var c=t.category,o=t.recommended,r=t.search?t.search.toLowerCase():void 0,n=c?e.filter((function(e){return e.category===c})):e,s="recommended"===o?n.filter((function(e){return e.recommended})):"notRecommended"===o?n.filter((function(e){return!e.recommended})):n;return r?s.filter((function(e){return e.title.toLowerCase().includes(r)})):s}(null===r||void 0===r?void 0:r.map((function(e){return(0,s.Z)((0,s.Z)({},e),{},{recommended:e.groupBloodNotAllowed[n]})})),c);(0,o.useEffect)((function(){e((0,u.U)())}),[e]);var f=function(e){h(e)},x=function(){h(null)};return(0,Z.jsxs)(Z.Fragment,{children:[m&&(0,Z.jsx)(J.Z,{isOpenModalToggle:x,children:"object"===typeof m?(0,Z.jsx)(me,{eldata:m,closeModal:x,onClick:f}):(0,Z.jsx)(ee,{closeModal:x,calories:m})}),(null===p||void 0===p?void 0:p.length)>0?(0,Z.jsx)("ul",{className:C,children:p&&p.map((function(e){return(0,Z.jsx)(O,{el:e,openModalToggle:f},e._id)}))}):(0,Z.jsx)(q,{})]})},pe=c(8586);var fe=function(){return(0,Z.jsx)("section",{className:r,children:(0,Z.jsxs)(y.Z,{children:[(0,Z.jsxs)("div",{className:n,children:[(0,Z.jsx)(pe.Z,{title:"Products"}),(0,Z.jsx)(W,{})]}),(0,Z.jsx)(he,{})]})})}}}]);
//# sourceMappingURL=733.20715aa8.chunk.js.map
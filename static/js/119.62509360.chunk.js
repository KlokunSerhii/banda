"use strict";(self.webpackChunkbanda=self.webpackChunkbanda||[]).push([[119],{9119:function(e,n,i){i.r(n),i.d(n,{default:function(){return w}});var t=i(3433),r=i(9439),s=i(2791),c="ExercisesItem_exercisesContainer__wNcQ8",a="ExercisesItem_text_container__xIP4R",o="ExercisesItem_text_name__B1bP2",u="ExercisesItem_text__WVYaN",l=i(184);var p=function(e){var n=e.item,i=n.filter,t=n.name,r=n.imgURL;return(0,l.jsx)("li",{className:c,style:{backgroundImage:"url(".concat(r,")")},children:(0,l.jsxs)("div",{className:a,children:[(0,l.jsx)("p",{className:o,children:t}),(0,l.jsx)("p",{className:u,children:i})]})})},d={exercisesList:"ExercisesList_exercisesList__PSLFV",loader:"ExercisesList_loader__eroCD"},x=i(9434),f=i(2507),g=i(9382),m=i(7689),b=i(1087),h=i(9170),v=i(2639);(0,i(5038).z2)();var w=function(){var e=(0,g.th)(),n=e.categories,i=e.exercise,c=e.isLoading,a=n.list,o=(0,x.I0)(),u=(0,m.UO)().category,w=i.page,_=(0,h.ac)("only screen and (min-width : 768px) and (max-width : 1439px)"),L=(0,s.useState)(_?9:10),j=(0,r.Z)(L,2),k=j[0],E=j[1];(0,s.useEffect)((function(){E(_?9:10)}),[_]),(0,s.useEffect)((function(){var e="".concat(u,"?limit=1000&page=").concat(w);o((0,f.L)(e))}),[o,u,w]),(0,s.useEffect)((function(){var e=document.querySelector("#items-swiper");if(e){Object.assign(e,{injectStyles:["\n        .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {\n          bottom: var(--swiper-pagination-bottom,32px);\n        }\n        .swiper-pagination-bullet {\n          background-color: var(--transparent-light-2);\n          box-sizing: border-box;\n          width: 14px;\n          height: 14px;\n          padding: 2px;\n        }\n        .swiper-pagination-bullet-active {\n          background: var(--accent-bright-color);\n          background-clip: content-box;\n          border: 1px solid var(--accent-bright-color);\n        }\n        "]}),e.initialize()}}));var N=(0,s.useCallback)((function(){for(var e=(0,t.Z)(a),n=[];e.length;)n.push(e.splice(0,k));return n}),[a,k]);return c?(0,l.jsx)(v.Z,{className:d.loader}):(0,l.jsx)("swiper-container",{id:"items-swiper",init:"false","space-between":"100",pagination:"true","pagination-clickable":"true",className:d.swiper,children:N().map((function(e,n){return(0,l.jsx)("swiper-slide",{children:(0,l.jsx)("ul",{className:d.exercisesList,children:e.map((function(e){return(0,l.jsx)(b.OL,{to:e.title.name,children:(0,l.jsx)(p,{item:e.title})},e.title._id)}))})},n+e[0].title.name)}))})}},9382:function(e,n,i){i.d(n,{aC:function(){return t.a},th:function(){return u}});var t=i(9421),r=(i(8751),i(9434)),s=function(e){return e.exercises},c=function(e){return e.exercises.exerciseList},a=function(e){return e.exercises.isLoading},o=function(e){return e.exercises.categories},u=function(){return{categories:(0,r.v9)(o),exercise:(0,r.v9)(s),exerciseList:(0,r.v9)(c),isLoading:(0,r.v9)(a)}}},8751:function(e,n,i){i.d(n,{i:function(){return o}});var t=i(9434),r=function(e){return e.products.list},s=function(e){return e.products.categories},c=function(e){return e.products.filter},a=function(e){return e.products.isLoading},o=function(){return{categoriesProducts:(0,t.v9)(s),filterProduct:(0,t.v9)(c),IsLoading:(0,t.v9)(a),selectProductsList:(0,t.v9)(r)}}}}]);
//# sourceMappingURL=119.62509360.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{784:function(e,r,t){t.d(r,{FN:function(){return d},_S:function(){return f},h$:function(){return o},nw:function(){return i},w7:function(){return p}});var n=t(861),a=t(757),c=t.n(a),u=t(263),s=u.Z.create({baseURL:"https://api.themoviedb.org/3/"}),i=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("trending/movie/day",{params:{api_key:"81d5139447ae9c7175710aacae6d5810"}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/".concat("search/movie"),{params:{api_key:"81d5139447ae9c7175710aacae6d5810",query:r}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r),{params:{api_key:"81d5139447ae9c7175710aacae6d5810"}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r,"/credits"),{params:{api_key:"81d5139447ae9c7175710aacae6d5810"}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r,"/reviews"),{params:{api_key:"81d5139447ae9c7175710aacae6d5810"}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},168:function(e,r,t){t.r(r),t.d(r,{default:function(){return o}});var n=t(439),a=t(784),c=t(791),u=t(689),s="Reviews_list__okdpy",i=t(184),o=function(){var e=(0,u.UO)().moviesId,r=(0,c.useState)([]),t=(0,n.Z)(r,2),o=t[0],p=t[1];return(0,c.useEffect)((function(){(0,a.FN)(e).then((function(e){var r=e.results;p(r)})).catch((function(e){var r=e.message;console.log(r)}))}),[e]),(0,i.jsx)(i.Fragment,{children:o.length?(0,i.jsx)("ul",{className:s,children:o.map((function(e){var r=e.content,t=e.author,n=e.id;return(0,i.jsxs)("li",{children:[(0,i.jsxs)("h3",{children:["Author: ",t]}),(0,i.jsx)("p",{children:r})]},n)}))}):(0,i.jsx)("p",{children:"We don't have any reviews for this movie"})})}}}]);
//# sourceMappingURL=168.18122489.chunk.js.map
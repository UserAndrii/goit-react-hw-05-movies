"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[286],{277:function(n,e,t){t.d(e,{Hx:function(){return d},PQ:function(){return f},bI:function(){return s},eP:function(){return p},wr:function(){return o}});var r=t(5861),a=t(7757),c=t.n(a),u=t(1243),i="58645e23389326a2e8ed75695b9e1b79";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/all/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:i,language:"en-US",page:1,include_adult:!1,query:e}),n.next=3,u.Z.get("/search/movie?".concat(t));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"?api_key=").concat(i,"&language=en-US'"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:i,language:"en-US",page:1}),n.next=3,u.Z.get("/movie/".concat(e,"/reviews?").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},2401:function(n,e,t){t.d(e,{Z:function(){return d}});var r,a,c,u=t(168),i=t(6444),o=i.ZP.div(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),s=(i.ZP.p(a||(a=(0,u.Z)(["\n  font-size: 15px;\n  line-height: 1.2;\n  color: #000000;\n"]))),i.ZP.img(c||(c=(0,u.Z)(["\n  max-width: 100%;\n  object-fit: cover;\n"])))),p=t.p+"static/media/oops-error.80c7a3c746d6696da24a.jpg",f=t(184),d=function(n){var e=n.title,t=void 0===e?"Sorry, there are no results for this query.":e;return(0,f.jsxs)(o,{children:[(0,f.jsx)("p",{children:t}),(0,f.jsx)(s,{src:p,alt:"Something went wrong"})]})}},4604:function(n,e,t){t.d(e,{Z:function(){return r.Z}});var r=t(2401)},6244:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,a,c,u,i,o=t(5861),s=t(9439),p=t(7757),f=t.n(p),d=t(2791),l=t(7689),h=t(277),v=t(168),g=t(6444),x=g.ZP.div(r||(r=(0,v.Z)(["\n  padding: 15px 20px;\n"]))),m=g.ZP.ul(a||(a=(0,v.Z)(["\n  display: grid;\n  gap: 20px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 20px 0;\n  list-style: none;\n"]))),Z=g.ZP.li(c||(c=(0,v.Z)(["\n  padding-bottom: 10px;\n  border-bottom: 1px solid coral;\n"]))),w=g.ZP.h4(u||(u=(0,v.Z)(["\n  margin: 0;\n"]))),y=g.ZP.p(i||(i=(0,v.Z)(["\n  margin: 10px 0 0 0;\n"]))),b=t(4604),k=t(184),j=function(){var n=(0,l.UO)().movieId,e=(0,d.useState)([]),t=(0,s.Z)(e,2),r=t[0],a=t[1],c=(0,d.useState)(!1),u=(0,s.Z)(c,2),i=u[0],p=u[1];return(0,d.useEffect)((function(){p(!1);var e=function(){var e=(0,o.Z)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.Hx)(n);case 3:0===(t=e.sent).length&&p(!0),a(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),p(!0),console.error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,k.jsxs)(x,{children:[r.length>0&&(0,k.jsx)(m,{children:r.map((function(n){var e=n.id,t=n.author,r=n.content;return(0,k.jsxs)(Z,{children:[(0,k.jsxs)(w,{children:["Author: ",t]}),(0,k.jsx)(y,{children:r})]},e)}))}),i&&(0,k.jsx)(b.Z,{title:"Sorry, we don't have any reviews for this movie"})]})}}}]);
//# sourceMappingURL=286.930962fa.chunk.js.map
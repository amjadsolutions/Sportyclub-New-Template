(window.webpackJsonp=window.webpackJsonp||[]).push([[617],{3342:function(t,e,l){"use strict";l.r(e);var o=l(5),n=(l(36),l(19),l(42),l(45),l(21),l(17),l(24),l(18),l(56),l(79),{name:"detail",components:{FootballDetailDefault:function(){return Promise.all([l.e(45),l.e(0),l.e(60),l.e(54),l.e(470)]).then(l.bind(null,3271))},FootballDetailBoot:function(){return Promise.all([l.e(45),l.e(60),l.e(518)]).then(l.bind(null,3402))}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var l,o,n,r,c,d,m,h,f,v,_,x,D,p,w,C,k,F;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d=t.error,m=t.store,h=t.route,f=t.params,t.redirect,v=t.res,_=f.matchId,f.tab,x=f.name,D=m.state.lang,p=h.fullPath.includes("?")?h.fullPath.split("?")[0].split("/"):h.fullPath.split("/"),w=["overview","chat","stats","lineups","h2h","odds","standings","knockout"].indexOf(p[p.length-1])>-1?p[p.length-1]:"overview",m.commit("proModuleMutation","football"),m.commit("football/detail/set_matchId",_),m.commit("football/detail/set_name",x),m.commit("football/detail/set_header_tab",w),m.commit("football/detail/set_firstRender",w),"overview"!==w){e.next=12;break}return e.next=12,m.dispatch("football/detail/FETCH_DETAIL",{match_id:_,tab:"h2h",lang:D,tz:m.state.timezone,h2h:1});case 12:return e.next=14,m.dispatch("football/detail/FETCH_DETAIL",{match_id:_,tab:w,lang:D,tz:m.state.timezone});case 14:if(410!=(null===(l=m.state["football/detail"])||void 0===l||null===(o=l.WebMatchData)||void 0===o?void 0:o.code)){e.next=19;break}return m.commit("set_page_is410",!0),e.abrupt("return",d({statusCode:410,message:"410 Gone"}));case 19:m.commit("set_page_is410",!1);case 20:return 3==(null===(n=m.state["football/detail"])||void 0===n||null===(r=n.WebMatchData)||void 0===r||null===(c=r.match)||void 0===c?void 0:c.matchStatus)?(null===(C=m.state["football/detail"])||void 0===C||null===(k=C.WebMatchData)||void 0===k||null===(F=k.match)||void 0===F?void 0:F.matchTime)<(new Date).getTime()/1e3-86400?v.setHeader("Cache-Control","public, max-age=864000, s-maxage=864000"):v.setHeader("Cache-Control","public, max-age=86400, s-maxage=86400"):v.setHeader("Cache-Control","public, max-age=10, s-maxage=10"),e.abrupt("return",{});case 22:case"end":return e.stop()}}),e)})))()}}),r=l(14),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.isboot?"FootballDetailBoot":"FootballDetailDefault",{tag:"component"})}),[],!1,null,null,null);e.default=component.exports}}]);
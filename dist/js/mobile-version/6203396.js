(window.webpackJsonp=window.webpackJsonp||[]).push([[478,558],{1607:function(t,e,n){},1630:function(t,e,n){"use strict";n(1607)},1634:function(t,e,n){"use strict";n.r(e);var c={props:["lists"],name:"FigureLegends"},o=(n(1630),n(14)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clearfix-row fs-12",staticStyle:{"padding-bottom":".2rem"}},t._l(t.lists,(function(e){return n("div",{directives:[{name:"show",rawName:"v-show",value:""!==e.label,expression:"item.label!==''"}],key:e.label+e.type,staticStyle:{width:"33.3%",float:"left","margin-top":"0.2rem",height:"0.4rem"}},[n("div",{staticClass:"w100 flex align-center"},[n("svg",{staticStyle:{width:"0.37rem",margin:"0 0.18rem"},attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#"+e.iconName}})]),t._v(" "),e.label?n("span",{staticClass:"text w-o-h"},[t._v(t._s(e.has_fy?e.label:t.$t("map_football['"+e.label+"']")))]):t._e()])])})),0)}),[],!1,null,"71eeebe1",null);e.default=component.exports},1683:function(t,e,n){t.exports=n.p+"img/corner.53c5be1.png"},1801:function(t,e,n){},1806:function(t,e,n){},1807:function(t,e,n){},1913:function(t,e,n){"use strict";n(1801)},1917:function(t,e,n){"use strict";n(1806)},1918:function(t,e,n){"use strict";n(1807)},2304:function(t,e,n){"use strict";n.r(e);n(23),n(28),n(40),n(41);var c=n(11),o=n(5),r=(n(21),n(18),n(79),n(30),n(112),n(19),n(45),n(51),n(113),n(55),n(59),n(22),n(36),n(20)),l=n(1634),m=(n(207),{props:{homeDangers:{default:{}},awayDangers:{default:{}},homeEventMap:{default:{}},awayEventMap:{default:{}}},data:function(){return{}},mounted:function(){},methods:{diyHeight:function(t,e,n){return{"margin-left":[0,15,30,45,60,75,90,120].indexOf(n)>-1?"1px":0,width:"calc(100% / ".concat(this.matchTimeLen,")"),height:t+"rem",background:1==e?"#2196F3":"#FFBA5A"}},formatIcon:function(t){return 1==t?"#icongoal":2==t?"#iconCorner":3==t?"#iconyellowcard1":4==t?"#iconredcard1":8==t?"#iconPenalty":9==t?"#iconsubstitution":16==t?"#iconPenaltySaved":17==t?"#iconown-goal":15==t?"#icontwoyellow-red":void 0},eventStype:function(time){return{left:"calc(".concat(Number(time)," *  calc(100% - 7px) / ").concat(this.matchTimeLen,")")}},columnLinePos:function(t,e){return{left:"calc(".concat(t," *  calc(100% - 7px) / ").concat(this.matchTimeLen,")"),"margin-left":e+"px"}}},computed:{matchTimeLen:function(){var t=this,e=Object.values(this.homeDangers).length||1,n=0,c=0;Object.keys(this.homeEventMap).map((function(e,i){i==Object.keys(t.homeEventMap).length-1&&(n=t.homeEventMap[e].minute)})),Object.keys(this.awayEventMap).map((function(e,i){i==Object.keys(t.awayEventMap).length-1&&(c=t.awayEventMap[e].minute)}));var o=Math.max.apply(null,[n,c]);return e<o?o<90?90:o:e<90?90:e},renderValue:function(){var t=Math.max.apply(null,Object.values(this.homeDangers)),e=Math.max.apply(null,Object.values(this.awayDangers)),n=t>e?t:e;return{home:Object.values(this.homeDangers).map((function(t){return 0==n?0:1.045*t/n*(2/3)})),away:Object.values(this.awayDangers).map((function(t){return 0==n?0:1.045*t/n*(2/3)}))}}}}),h=(n(1913),n(14)),v=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dangerBox"},[n("div",{staticClass:"contentBox"},[n("div",{staticClass:"w100",staticStyle:{height:"50%",position:"relative"}},[t._m(0),t._v(" "),n("div",{staticClass:"w100 h100 flex",staticStyle:{position:"absolute"}},[n("div",{staticClass:"w100 flex h100",staticStyle:{transform:"rotateX(180deg)"}},t._l(t.renderValue.home,(function(e,c){return n("div",{key:"home_"+c,staticClass:"diyDiv",style:t.diyHeight(e,1,c),attrs:{id:"home_"+c}})})),0)])]),t._v(" "),n("div",{staticClass:"w100",staticStyle:{height:"50%",position:"relative"}},[t._m(1),t._v(" "),n("div",{staticClass:"w100 h100 flex",staticStyle:{position:"absolute"}},[n("div",{staticClass:"w100 flex h100"},t._l(t.renderValue.away,(function(e,c){return n("div",{key:"away_"+c,staticClass:"diyDiv",style:t.diyHeight(e,2,c),attrs:{id:"away_"+c}})})),0)])]),t._v(" "),n("div",{staticClass:"w100 h100 columnLineBox",staticStyle:{position:"absolute"}},[n("div",{staticClass:"yValue",style:t.columnLinePos(0,0)}),t._v(" "),n("div",{staticClass:"yValue",style:t.columnLinePos(15,1)}),t._v(" "),n("div",{staticClass:"yValue",style:t.columnLinePos(30,2)}),t._v(" "),n("div",{staticClass:"yValue",style:t.columnLinePos(45,3)}),t._v(" "),n("div",{staticClass:"yValue",style:t.columnLinePos(60,4)}),t._v(" "),n("div",{staticClass:"yValue",style:t.columnLinePos(75,5)}),t._v(" "),n("div",{staticClass:"yValue",style:t.columnLinePos(90,6)}),t._v(" "),n("span",{staticClass:"yText",style:t.columnLinePos(0,0)},[t._v("0'")]),t._v(" "),n("span",{staticClass:"yText",style:t.columnLinePos(15,-7)},[t._v("15'")]),t._v(" "),n("span",{staticClass:"yText",style:t.columnLinePos(30,-6)},[t._v("30'")]),t._v(" "),n("span",{staticClass:"yText",style:t.columnLinePos(45,-5)},[t._v("45'")]),t._v(" "),n("span",{staticClass:"yText",style:t.columnLinePos(60,-4)},[t._v("60'")]),t._v(" "),n("span",{staticClass:"yText",style:t.columnLinePos(75,-3)},[t._v("75'")]),t._v(" "),n("span",{staticClass:"yText",style:t.columnLinePos(90,-2)},[t._v("90'")])]),t._v(" "),n("div",{staticClass:"w100 h100 eventBox flex",staticStyle:{position:"absolute","flex-direction":"column"}},[n("div",{staticClass:"w100",staticStyle:{height:"50%",position:"relative"}},t._l(t.homeEventMap,(function(e,c,o){return n("svg",{key:"home"+e.type+o,staticClass:"icon fs-12",staticStyle:{position:"absolute"},style:t.eventStype(e.time-1),attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":""+t.formatIcon(e.type)}})])})),0),t._v(" "),n("div",{staticClass:"w100",staticStyle:{height:"50%",position:"relative"}},t._l(t.awayEventMap,(function(e,c,o){return n("svg",{key:"away"+e.type+o,staticClass:"icon fs-12",staticStyle:{position:"absolute",bottom:"0"},style:t.eventStype(e.time-1),attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":""+t.formatIcon(e.type)}})])})),0)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w100 h100 flex",staticStyle:{position:"absolute","flex-direction":"column"}},[n("div",{staticClass:"flex-1"}),t._v(" "),n("div",{staticClass:"flex-1 w100",staticStyle:{background:"#ecf7fd"}}),t._v(" "),n("div",{staticClass:"flex-1 w100",staticStyle:{background:"#d2e9fe"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w100 h100 flex",staticStyle:{position:"absolute","flex-direction":"column"}},[n("div",{staticClass:"flex-1",staticStyle:{background:"#fff2df"}}),t._v(" "),n("div",{staticClass:"flex-1 w100",staticStyle:{background:"#fffaf3"}}),t._v(" "),n("div",{staticClass:"flex-1 w100"})])}],!1,null,"cc371cae",null).exports,d=n(12),y=n(3),_=n(1833),f=n(1847),w=n(1615),C={data:function(){return{records:[],statsList:[{id:[25],label:"Possession"},{id:[21,22],label:"Shots"},{id:[21],label:"Shots on Target"},{id:[23],label:"Attacks"},{id:[24],label:"Dangerous Attacks"},{id:[6],label:"Free Kicks"},{id:[2],label:"Corners"},{id:[3],label:"Yellow Cards"},{id:[4],label:"Red Cards"}],stats:{}}},computed:{homeTeam:function(){return this.$store.state.seoH2h.matchInfo.homeTeam}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.getDetailStats)({lang:t.$store.state.lang,match_id:t.$store.state.seoH2h.matchInfo.id});case 2:n=e.sent,t.stats=n;case 4:case"end":return e.stop()}}),e)})))()},methods:{visible:function(t,e){var n=e.items,c=!0;return!!n&&(t.forEach((function(t){n[t]||(c=!1)})),c)},formatStats:function(t,e,n){if(this.stats.items){var c=this,o=0,r=0;return t.forEach((function(t){o+=+c.stats.items[t][e],r+=+c.stats.items[t].home+ +c.stats.items[t].away})),n?0==r?0:parseInt(o/r*100):o}return""}}},x=(n(1917),Object(h.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w100 records"},t._l(t.statsList,(function(e){return n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible(e.id,t.stats),expression:"visible(item.id, stats)"}],key:e.label,staticClass:"w100 recordBox"},[n("div",{staticClass:"record_home"},[n("span",{staticClass:"textPad",class:{home_1:t.formatStats(e.id,"home")>t.formatStats(e.id,"away")}},[t._v(t._s(t.formatStats(e.id,"home")))])]),t._v(" "),n("div",{staticClass:"flex-1 text-center w-o-h"},[t._v(t._s(t.$t("map_football['"+e.label+"']")))]),t._v(" "),n("div",{staticClass:"record_away"},[n("span",{staticClass:"textPad",class:{away_1:t.formatStats(e.id,"home")<t.formatStats(e.id,"away")}},[t._v(t._s(t.formatStats(e.id,"away")))])])])})),0)}),[],!1,null,"7b50fdce",null).exports);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function T(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}n(1547);var P={name:"odds",props:{f_status:{},isseoLive:{default:!1,type:Boolean},isbeforeStart:{default:!1,type:Boolean}},components:{FigureLegends:l.default,MatchDanger:v,h2h:_.a,OverviewOdds:w.a,recordStanding:x},data:function(){return{getTrendInterval:null,lists:[{type:1,label:"Goals",iconName:"icongoal"},{type:8,label:"Penalty",iconName:"iconPenalty"},{type:16,label:"Penalty missed",iconName:"iconPenaltySaved"},{type:17,label:"Own Goal",iconName:"iconown-goal"},{type:2,label:"Corner",iconName:"iconCorner"},{type:15,label:"Second yellow",iconName:"icontwoyellow-red"},{type:9,label:"Substitution",iconName:"iconsubstitution"},{type:9,label:"Injured Substitution",iconName:"iconInjuryreplace"},{type:3,label:"",iconName:"iconyellowcard"},{type:4,label:"",iconName:"iconredcard"}],circleShow:!1,decBoxShow:!1,oddsStatus:[{time:null,status:-1},{time:null,status:-1},{time:null,status:-1}],endDate:""}},beforeMount:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("overview"===(n=t).firstRender){e.next=8;break}if(t.hasprefetchLoad.overview){e.next=5;break}return e.next=5,n.FETCH_DETAIL({match_id:t.isseoLive?null===(c=t.$store.state.seoH2h)||void 0===c?void 0:c.matchInfo.id:t.matchId,tab:"overview",lang:n.lang,tz:n.timezone});case 5:if(t.isseoLive){e.next=8;break}return e.next=8,n.FETCH_DETAIL({match_id:n.matchId,tab:"h2h",lang:n.lang,tz:n.timezone,h2h:1,allow:!0,prefetch:!0});case 8:n.circleShow=!0;case 9:case"end":return e.stop()}}),e)})))()},computed:T(T(T({},Object(r.e)(["lang","timezone","locale"])),Object(r.e)("football/detail",["ODDS_DETAIL_DATA","header_tab","firstRender","name","matchId","overviewH2hMaps","WebMatchData","hasprefetchLoad"])),{},{homeTeamTitle:function(){try{return this.WebMatchData.match.homeTeam.name}catch(t){return"-"}},awayTeamTitle:function(){try{return this.WebMatchData.match.awayTeam.name}catch(t){return"-"}},overview_venue:function(){try{var t=this.WebMatchData.match.venue.name.indexOf(",");return t>-1?[this.WebMatchData.match.venue.name.substring(0,t),this.WebMatchData.match.venue.name.substring(t)]:[this.WebMatchData.match.venue.name,""]}catch(t){return!1}},match:function(){var t;return this.isseoLive?null===(t=this.$store.state.seoH2h)||void 0===t?void 0:t.matchInfo:this.WebMatchData.match||{}},stats:function(){var t={};try{t=this.$store.state["football/detail"].stats,t.items||(t={items:{}})}catch(t){}return t},incidents:function(){try{return this.$store.state["football/detail"].incidents.items.filter((function(t){return[11,12,26,27,1,8,16,17,2,15,9,3,4].indexOf(t.type)>-1}))}catch(t){return!1}},attacks_home:{get:function(){try{return this.stats.items[23]?Number(this.stats.items[23].home):0}catch(t){return 0}},set:function(){}},attacks_away:{get:function(){try{return this.stats.items[23]?Number(this.stats.items[23].away):0}catch(t){return 0}},set:function(){}},attacks_circle:{get:function(){return this.attacks_home+this.attacks_away==0?50:100*this.attacks_home/(this.attacks_home+this.attacks_away)},set:function(){}},dangerous_home:{get:function(){try{return Number(this.stats.items[24].home)}catch(t){return 0}},set:function(){}},dangerous_away:{get:function(){try{return Number(this.stats.items[24].away)}catch(t){return 0}},set:function(){}},dangerous_circle:{get:function(){return this.dangerous_home+this.dangerous_away==0?50:100*this.dangerous_home/(this.dangerous_home+this.dangerous_away)},set:function(){}},possession_home:{get:function(){try{return Number(this.stats.items[25].home)}catch(t){return 0}},set:function(){}},possession_away:{get:function(){try{return Number(this.stats.items[25].away)}catch(t){return 0}},set:function(){}},possession_circle:{get:function(){return this.possession_home+this.possession_away==0?50:100*this.possession_home/(this.possession_home+this.possession_away)},set:function(){}},matchTrendData:function(){return this.$store.state["football/detail"].matchTrendData.trend},home_awayDangers:function(){try{var t={home:{},away:{}},e=this.matchTrendData.items[0].values;return e.length>0?(e.map((function(e){void 0===e.value?(t.home[e.minute]=0,t.away[e.minute]=0):e.value>0?(t.home[e.minute]=Math.abs(e.value),t.away[e.minute]=0):(t.away[e.minute]=Math.abs(e.value),t.home[e.minute]=0)})),t):{home:{},away:{}}}catch(t){return{home:{},away:{}}}},eventMap:function(){var t={},e={},n=[1,2,3,4,8,9,15,16,17];try{this.$store.state["football/detail"].matchTrendData.incidents.items.map((function(c){c.time&&n.indexOf(c.type)>-1&&1==c.belong?t[c.time]=c:c.time&&n.indexOf(c.type)>-1&&2==c.belong&&(e[c.time]=c)}))}catch(t){return{home:{},away:{}}}return{home:t,away:e}},matchStatus:function(){return this.WebMatchData.match?this.WebMatchData.match.matchStatus:{}},bestPlayers:function(){var t=this;try{var e=this.WebMatchData.bestPlayers;if(0==e.length)return!1;var n={home:{},away:{}};return e.map((function(e){e.team.id==t.WebMatchData.match.homeTeam.id?n.home={name:e.name,rating:e.rating?Number(e.rating).toFixed(1):"-",logo:e.logo,slug:e.slug,id:e.id}:e.team.id==t.WebMatchData.match.awayTeam.id&&(n.away={name:e.name,rating:e.rating?Number(e.rating).toFixed(1):"-",logo:e.logo,slug:e.slug,id:e.id})})),n}catch(t){return!1}},referee:function(){try{return this.WebMatchData.match.referee}catch(t){return!1}},intro:function(){if("{}"==JSON.stringify(this.match))return!1;var t=this,e=t.isNull(t.match,"homeTeam.name")||"-",n=t.isNull(t.match,"awayTeam.name")||"-",c=t.$dayjs(1e3*t.isNull(t.match,"matchTime")),o=c.format("YYYY/MM/DD"),r=c.format("HH:mm:ss"),l=t.isNull(t.match,"competition.name")||"-",m=[];if("aa"!=t.locale)try{m=[t.$i18n.path("match-".concat(t.match.homeTeam.slug,"-").concat(t.match.awayTeam.slug,"/").concat(t.match.id),!0),t.$i18n.path("team-".concat(t.match.homeTeam.slug,"/").concat(t.match.homeTeam.id),!0),t.$i18n.path("team-".concat(t.match.awayTeam.slug,"/").concat(t.match.awayTeam.id),!0),t.$i18n.path("",!0)]}catch(t){}return Object(f.a)({lang:t.locale,home:e,away:n,date:o,matchTime:r,competition:l,hrefs:m})},staticList:function(){if("{}"==JSON.stringify(this.match))return[];var t=this,e=t.sortby([t.isNull(t.match,"homeTeam")||{},t.isNull(t.match,"awayTeam")||{}],"slug","","asc");return[{title:"".concat(t.isNull(t.match,"competition.name")," ").concat(t.$t("map_common['stats']")),list:[{text:"".concat(t.isNull(t.match,"competition.name")," ").concat(t.$t("map_common['Schedule']")),href:t.$i18n.path("tournament-".concat(t.isNull(t.match,"competition.slug")||"","/").concat(t.isNull(t.match,"competition.id"),"/matches"),!0)},{text:"".concat(t.isNull(t.match,"homeTeam.name")," ").concat(t.$t("map_common['Schedule']")),href:t.$i18n.path("team-".concat(t.isNull(t.match,"homeTeam.slug"),"/").concat(t.isNull(t.match,"homeTeam.id"),"/matches"),!0)},{text:"".concat(t.isNull(t.match,"awayTeam.name")," ").concat(t.$t("map_common['Schedule']")),href:t.$i18n.path("team-".concat(t.isNull(t.match,"awayTeam.slug"),"/").concat(t.isNull(t.match,"awayTeam.id"),"/matches"),!0)},{text:"".concat(t.isNull(t.match,"homeTeam.name")," vs ").concat(t.isNull(t.match,"awayTeam.name")," ").concat(t.$t("map_common['head to head']")),href:"https://m.aiscore.com/head-to-head/soccer-".concat(e[0].slug,"-vs-").concat(e[1].slug)}]}]}}),mounted:function(){this.endDate=y.a.formatUTC(1e3*(y.a.calculateTimezone(this.timezone)+this.match.matchTime+6300));var t=this;t.getTrendInterval=setInterval((function(){t.getTrend()}),6e4),window.footballOverView=t},methods:T(T(T({},Object(r.b)("football/detail",["FETCH_DETAIL"])),Object(r.d)("football/detail",["set_header_tab","matchTrendDataChange","UpdataLiveOdds"])),{},{getTrend:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,c,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(2!=(n=t).matchStatus){e.next=6;break}return e.next=4,Object(d.matchTrend)({match_id:t.isseoLive?null===(c=t.$store.state.seoH2h)||void 0===c||null===(o=c.matchInfo)||void 0===o?void 0:o.id:n.$route.params.matchId,lang:n.$languageMap[n.$i18n.locale]});case 4:data=e.sent,n.matchTrendDataChange(data);case 6:case"end":return e.stop()}}),e)})))()},formatRateColor:function(t){return y.a.myformatRateColor(t)},statsProcess:function(t,e){try{return this.stats.items["On Target"==t?21:22]?this.stats.items["On Target"==t?21:22][e]:0}catch(t){return 0}},iconFont:function(t,e){for(var i=0;i<this.lists.length;i++){if(9==t)return e?"#iconInjuryreplace":"#iconsubstitution";if(this.lists[i].type==t)return"#"+this.lists[i].iconName}return""},routeToLineUp:function(){location.href=this.addispure(location.href+"/lineups")},formatTime:function(t){return y.a.DateZoneTrnf(this.$store.state.timezone,new Date(1e3*t))},formatTitle:function(t){return 11==t?"HT":12==t?"FT":"26"==t?"ET":"27"==t?"PEN":void 0},visible:function(t,e){var n=e.items,c=!0;return!!n&&(t.forEach((function(t){n[t]||(c=!1)})),c)},formatStats:function(t,e,n){var c=this,o=0,r=0;return t.forEach((function(t){o+=+c.stats.items[t][e],r+=+c.stats.items[t].home+ +c.stats.items[t].away})),n?0==r?0:parseInt(o/r*100):o},ppNew:function(t){var e="On Target"==t?21:22;try{return this.stats.items[e]?this.stats.items[e].home+this.stats.items[e].away==0?50:100*this.stats.items[e].home/(Number(this.stats.items[e].home)+Number(this.stats.items[e].away)):50}catch(t){return 50}},getPath:function(t){var e=this;return e.$i18n.path("match-".concat(e.name,"/").concat(e.matchId).concat("overview"===t?"":"/"+t),!0)},changeOddStatus:function(t,e){var n=this.oddsStatus[t];n&&(n.status=e,clearTimeout(n.time),n.time=setTimeout((function(){n.status=-1}),5e3))}}),beforeDestroy:function(){clearInterval(this.getTrendInterval);try{this.instance.client.end()}catch(t){}}},k=(n(1918),Object(h.a)(P,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"overview-panel"},[t.match.homeTeam&&t.match.awayTeam?c("div",{staticClass:"dangerTitle flex justify-between"},[c("div",{staticClass:"w100 dangerTitleInner"},[c("a",{staticClass:"w-o-h",staticStyle:{"border-left":"0.05rem solid #2196F3","padding-left":"0.21rem",color:"#666"},attrs:{href:t.pageRoute({type:"team",id:t.match.homeTeam.id,name:t.match.homeTeam.slug})}},[t._v(t._s(t.homeTeamTitle)+"\n      ")])]),t._v(" "),c("div",{staticClass:"w100 dangerTitleInner",staticStyle:{"justify-content":"flex-end"}},[c("a",{staticClass:"w-o-h",staticStyle:{"border-right":"0.05rem solid #FFBA5A","padding-right":"0.21rem",color:"#666"},attrs:{href:t.pageRoute({type:"team",id:t.match.awayTeam.id,name:t.match.awayTeam.slug})}},[t._v(t._s(t.awayTeamTitle))])])]):t._e(),t._v(" "),t.matchTrendData&&"{}"!=JSON.stringify(t.home_awayDangers.home)?c("MatchDanger",{attrs:{homeDangers:t.home_awayDangers.home,awayDangers:t.home_awayDangers.away,homeEventMap:t.eventMap.home,awayEventMap:t.eventMap.away}}):t._e(),t._v(" "),c("div",{directives:[{name:"show",rawName:"v-show",value:t.circleShow&&!t.isbeforeStart,expression:"circleShow && !isbeforeStart"}],staticClass:"chart",style:t.matchTrendData&&"{}"!=JSON.stringify(t.home_awayDangers.home)?{}:{"margin-top":0}},[c("div",{staticClass:"w100"},[c("van-row",[c("van-col",{attrs:{span:"8"}},[c("div",{staticClass:"circleTitle"},[t._v(t._s(t.$t("map_football.Attacks")))]),t._v(" "),c("div",{staticClass:"flex justify-center"},[c("span",{staticClass:"circleText",staticStyle:{color:"#2196F3"}},[t._v(t._s(t.attacks_home))]),t._v(" "),c("van-circle",{staticClass:"mycircle",staticStyle:{width:"0.93rem",height:"auto"},attrs:{color:"#2196F3","layer-color":"#FFBA5A",clockwise:!1,"stroke-width":"70"},model:{value:t.attacks_circle,callback:function(e){t.attacks_circle=e},expression:"attacks_circle"}}),t._v(" "),c("span",{staticClass:"circleText",staticStyle:{color:"#FFBA5A"}},[t._v(t._s(t.attacks_away))])],1)]),t._v(" "),c("van-col",{attrs:{span:"8"}},[c("div",{staticClass:"circleTitle"},[t._v("\n            "+t._s(t.$t("map_football['Dangerous Attacks']"))+"\n          ")]),t._v(" "),c("div",{staticClass:"flex justify-center"},[c("span",{staticClass:"circleText",staticStyle:{color:"#2196F3"}},[t._v(t._s(t.dangerous_home))]),t._v(" "),c("van-circle",{staticClass:"mycircle",staticStyle:{width:"0.93rem",height:"auto"},attrs:{color:"#2196F3","layer-color":"#FFBA5A",clockwise:!1,"stroke-width":"70"},model:{value:t.dangerous_circle,callback:function(e){t.dangerous_circle=e},expression:"dangerous_circle"}}),t._v(" "),c("span",{staticClass:"circleText",staticStyle:{color:"#FFBA5A"}},[t._v(t._s(t.dangerous_away))])],1)]),t._v(" "),c("van-col",{attrs:{span:"8"}},[c("div",{staticClass:"circleTitle"},[t._v(t._s(t.$t("map_football.Possession")))]),t._v(" "),c("div",{staticClass:"flex justify-center"},[c("span",{staticClass:"circleText",staticStyle:{color:"#2196F3"}},[t._v(t._s(t.possession_home))]),t._v(" "),c("van-circle",{staticClass:"mycircle",staticStyle:{width:"0.93rem",height:"auto"},attrs:{color:"#2196F3","layer-color":"#FFBA5A","stroke-width":"70",clockwise:!1},model:{value:t.possession_circle,callback:function(e){t.possession_circle=e},expression:"possession_circle"}}),t._v(" "),c("span",{staticClass:"circleText",staticStyle:{color:"#FFBA5A"}},[t._v(t._s(t.possession_away))])],1)])],1),t._v(" "),c("van-row",{staticStyle:{"margin-top":"0.21rem"},attrs:{type:"flex"}},[c("van-col",{attrs:{span:"24"}},t._l(["On Target","Off Target"],(function(e){return c("div",{key:e.label,staticClass:"w100 fs-12"},[void 0!==t.stats.items?c("div",{staticStyle:{width:"100%","margin-bottom":"0.21rem"}},[c("div",{staticClass:"text-center itemLabel fs-12",staticStyle:{color:"#666"}},[t._v("\n                "+t._s(e?t.$t("map_football['"+e+"']"):"-")+"\n              ")]),t._v(" "),c("div",{staticClass:"w100 flex align-center",staticStyle:{height:"0.2rem"}},[c("div",{staticClass:"flex align-center justify-center",staticStyle:{width:"2.5rem",padding:"0 0.2rem"}},["On Target"==e?c("div",{staticClass:"w100 flex justify-around align-center"},[c("myImg",{staticClass:"imgw37",attrs:{src:n(1683)}}),t._v(" "),c("i",{staticClass:"icon iconfont iconredcard1",staticStyle:{color:"#E43434"}}),t._v(" "),c("i",{staticClass:"icon iconfont iconyellowcard1",staticStyle:{color:"#FEBD33"}})],1):c("div",{staticClass:"w100 flex justify-around align-center"},[c("span",[t._v(t._s(t.stats.items[2]?t.stats.items[2].home:0))]),t._v(" "),c("span",[t._v(t._s(t.stats.items[4]?t.stats.items[4].home:0))]),t._v(" "),c("span",[t._v(t._s(t.stats.items[3]?t.stats.items[3].home:0))])])]),t._v(" "),c("div",{staticClass:"text-center",staticStyle:{color:"#333",width:"0.5rem"}},[t._v("\n                  "+t._s(t.statsProcess(e,"home"))+"\n                ")]),t._v(" "),c("van-progress",{staticClass:"flex-1",staticStyle:{margin:"0 0.1rem 0 0.2rem"},attrs:{color:"#409EFF","track-color":"#FFBA5A",percentage:t.ppNew(e),"show-pivot":!1}}),t._v(" "),c("div",{staticClass:"text-center",staticStyle:{color:"#333",width:"0.5rem"}},[t._v("\n                  "+t._s(t.statsProcess(e,"away"))+"\n                ")]),t._v(" "),c("div",{staticClass:"flex align-center justify-center",staticStyle:{width:"2.5rem",padding:"0 0.2rem"}},["On Target"==e?c("div",{staticClass:"w100 flex justify-around align-center"},[c("i",{staticClass:"icon iconfont iconyellowcard1",staticStyle:{color:"#FEBD33"}}),t._v(" "),c("i",{staticClass:"icon iconfont iconredcard1",staticStyle:{color:"#E43434"}}),t._v(" "),c("myImg",{staticClass:"imgw37",attrs:{src:n(1683)}})],1):c("div",{staticClass:"w100 flex justify-around align-center"},[c("span",[t._v(t._s(t.stats.items[3]?t.stats.items[3].away:0))]),t._v(" "),c("span",[t._v(t._s(t.stats.items[4]?t.stats.items[4].away:0))]),t._v(" "),c("span",[t._v(t._s(t.stats.items[2]?t.stats.items[2].away:0))])])])],1)]):t._e()])})),0)],1)],1)]),t._v(" "),t.isseoLive&&t.isbeforeStart?c("div",{staticClass:"w100 isbeforetext"},[t._v("\n     "+t._s(t.$t("map_common.Explore stats").replace("{home}",t.match.homeTeam.name).replace("{away}",t.match.awayTeam.name))+"\n  ")]):t._e(),t._v(" "),t.isseoLive&&!t.isbeforeStart?c("recordStanding",{staticStyle:{"margin-top":"0.21rem"}}):t._e(),t._v(" "),!t.isseoLive&&t.bestPlayers?c("div",{staticClass:"w100 playerRating"},[c("van-row",{staticClass:"h100 rTop"},[c("van-col",{staticClass:"h100",attrs:{span:"9"}},[c("div",{staticClass:"flex align-center justify-center h100"},[c("myImg",{staticClass:"pts_img",attrs:{src:t._f("getLogo")(t.bestPlayers.home.logo,"player","0.75rem"),alt:t.bestPlayers.home.name},on:{click:function(e){return t.pageRoute({type:"player",id:t.bestPlayers.home.id,name:t.bestPlayers.home.slug||t.bestPlayers.home.name,isClick:!0})}}}),t._v(" "),c("div",{staticClass:"flex ptsBox",staticStyle:{"margin-left":"0.2rem"}},[c("div",{staticClass:"star",staticStyle:{position:"absolute",left:"-0.5rem",top:"-0.1rem"},style:{background:t.formatRateColor(t.bestPlayers.home.rating)}},[c("i",{staticClass:"icon iconfont iconstar",staticStyle:{"font-size":"0.32rem",transform:"scale(0.9)"}}),t._v(" "),c("span",[t._v(t._s(t.bestPlayers.home.rating))])]),t._v(" "),c("a",{staticClass:"pts_name van-ellipsis",staticStyle:{width:"1.8rem"},attrs:{href:t.pageRoute({type:"player",id:t.bestPlayers.home.id,name:t.bestPlayers.home.slug||t.bestPlayers.home.name})}},[t._v(t._s(t.bestPlayers.home.name))])])],1)]),t._v(" "),c("van-col",{staticClass:"h100 routeToBox flex justify-center align-center",staticStyle:{"flex-direction":"column"},attrs:{span:"6"},on:{click:t.routeToLineUp}},[c("div",{staticClass:"van-ellipsis"},[t._v("\n          "+t._s(t.$t("map_football['Player Rating']"))+"\n        ")]),t._v(" "),c("div",{staticClass:"goL"},[t._v(">")])]),t._v(" "),c("van-col",{staticClass:"h100",attrs:{span:"9"}},[c("div",{staticClass:"flex align-center justify-center h100"},[c("div",{staticClass:"flex ptsBox",staticStyle:{"margin-right":"0.2rem"}},[c("div",{staticClass:"star",staticStyle:{position:"absolute",right:"-0.5rem",top:"-0.1rem","z-index":"10"},style:{background:t.formatRateColor(t.bestPlayers.away.rating)}},[c("i",{staticClass:"icon iconfont iconstar",staticStyle:{"font-size":"0.32rem",transform:"scale(0.9)"}}),t._v(" "),c("span",[t._v(t._s(t.bestPlayers.away.rating))])]),t._v(" "),c("a",{staticClass:"pts_name van-ellipsis",staticStyle:{width:"1.8rem","text-align":"right"},attrs:{href:t.pageRoute({type:"player",id:t.bestPlayers.away.id,name:t.bestPlayers.away.slug||t.bestPlayers.away.name})}},[t._v(t._s(t.bestPlayers.away.name))])]),t._v(" "),c("myImg",{staticClass:"pts_img",attrs:{src:t._f("getLogo")(t.bestPlayers.away.logo,"player","0.75rem"),alt:t.bestPlayers.away.name},on:{click:function(e){return t.pageRoute({type:"player",id:t.bestPlayers.away.id,name:t.bestPlayers.away.slug||t.bestPlayers.away.name,isClick:!0})}}})],1)])],1)],1):t._e(),t._v(" "),t.isseoLive?c("div",{staticClass:"title1",attrs:{id:"Commentary"}},[t._v(t._s(t.$t("map_common.Commentary")))]):t._e(),t._v(" "),t.isseoLive&&t.isbeforeStart?c("div",{staticClass:"w100 isbeforetext"},[t._v("\n      "+t._s(t.$t("map_common.updating match commentary").replace("{home}",t.match.homeTeam.name).replace("{away}",t.match.awayTeam.name))+"\n  ")]):t._e(),t._v(" "),(t.isseoLive&&!t.isbeforeStart||!t.isseoLive)&&t.incidents&&0!=t.incidents.length?c("div",{staticClass:"w100 matchPbp",style:t.isseoLive?{"margin-top":0}:{}},t._l(t.incidents,(function(e,i){return c("div",{key:e.time+i,staticClass:"w100",staticStyle:{"margin-top":"0.1rem"}},[e.type&&[11,12,26,27].indexOf(e.type)>-1?c("div",{staticClass:"matchStatus"},[t._v("\n        "+t._s(t.formatTitle(e.type))+" "+t._s(e.homeScore||0)+"-"+t._s(e.awayScore||0)+"\n      ")]):c("div",{staticClass:"content"},[1==e.belong?c("div",{staticClass:"home w100 h100 flex"},[c("div",{staticClass:"time",staticStyle:{"text-align":"left"}},[t._v(t._s(8==e.type?"PEN":e.time+"'"))]),t._v(" "),c("svg",{staticClass:"icon fs-14",staticStyle:{"margin-left":"0.1rem"},attrs:{"aria-hidden":"true"}},[c("use",{attrs:{"xlink:href":t.iconFont(e.type,e.isInjury)}})]),t._v(" "),1==e.type||17==e.type||8==e.type?c("span",{staticClass:"identScore",staticStyle:{"margin-right":"0.2rem"}},[t._v(t._s(e.homeScore||0)+"-"+t._s(e.awayScore||0))]):t._e(),t._v(" "),1==e.type?c("div",[c("div",[t._v(t._s(e.player?e.player.name:""))]),t._v(" "),(e.assist2?e.assist2.name:e.assist1&&e.assist1.name)?c("div",{staticStyle:{color:"#999","line-height":"0.32rem"}},[t._v("\n              "+t._s(t.$t("map_football.Assist"))+":"+t._s(e.assist2?e.assist2.name:e.assist1?e.assist1.name:"")+"\n            ")]):t._e()]):9==e.type?c("div",[c("div",[t._v("\n              "+t._s(t.$t("map_football.In"))+":"+t._s(e.inPlayer?e.inPlayer.name:"")+"\n            ")]),t._v(" "),c("div",{staticStyle:{color:"#999","line-height":"0.32rem"}},[t._v("\n              "+t._s(t.$t("map_football.Out"))+":"+t._s(e.outPlayer?e.outPlayer.name:"")+"\n            ")])]):c("div",[t._v(t._s(e.player?e.player.name:""))])]):2==e.belong?c("div",{staticClass:"away w100 h100",staticStyle:{"justify-content":"flex-end"}},[1==e.type?c("div",[c("div",{staticClass:"text-right"},[t._v("\n              "+t._s(e.player?e.player.name:"")+"\n            ")]),t._v(" "),(e.assist2?e.assist2.name:e.assist1&&e.assist1.name)?c("div",{staticClass:"text-right",staticStyle:{color:"#999","line-height":"0.32rem"}},[t._v("\n              "+t._s(t.$t("map_football.Assist"))+":"+t._s(e.assist2?e.assist2.name:e.assist1?e.assist1.name:"")+"\n            ")]):t._e()]):9==e.type?c("div",[c("div",{staticClass:"text-right"},[t._v("\n              "+t._s(t.$t("map_football.In"))+":"+t._s(e.inPlayer?e.inPlayer.name:"")+"\n            ")]),t._v(" "),c("div",{staticClass:"text-right",staticStyle:{color:"#999","line-height":"0.32rem"}},[t._v("\n              "+t._s(t.$t("map_football.Out"))+":"+t._s(e.outPlayer?e.outPlayer.name:"")+"\n            ")])]):c("div",[t._v(t._s(e.player?e.player.name:""))]),t._v(" "),1==e.type||17==e.type||8==e.type?c("span",{staticClass:"identScore",staticStyle:{"margin-left":"0.2rem"}},[t._v(t._s(e.homeScore||0)+"-"+t._s(e.awayScore||0))]):t._e(),t._v(" "),c("svg",{staticClass:"icon fs-14",staticStyle:{"margin-right":"0.1rem"},attrs:{"aria-hidden":"true"}},[c("use",{attrs:{"xlink:href":t.iconFont(e.type,e.isInjury)}})]),t._v(" "),c("div",{staticClass:"time",staticStyle:{"text-align":"right"}},[t._v(t._s(8==e.type?"PEN":e.time+"'"))])]):t._e()])])})),0):t._e(),t._v(" "),!t.isseoLive||t.isbeforeStart||t.incidents&&t.incidents.length?t._e():c("noData",{staticStyle:{background:"#ffffff"}}),t._v(" "),t.referee&&!t.isseoLive?c("div",{staticClass:"w100 venue"},[c("div",{staticClass:"title"},[t._v(t._s(t.$t("map_football.Referee")))]),t._v(" "),c("div",{staticClass:"des"},[c("div",{staticClass:"des_key"},[c("myImg",{staticClass:"imgw75",attrs:{src:t._f("getLogo")(t.referee.logo,"player","0.75rem"),alt:t.referee.name}}),t._v(" "),c("div",{staticClass:"Trafford w-o-h",staticStyle:{"max-width":"5rem"}},[t._v("\n          "+t._s(t.referee.name)+"\n        ")])],1),t._v(" "),c("div",{staticClass:"des_value flex align-center"},[c("span",{staticClass:"venText"},[t._v(t._s(t.referee.yellowCardsPerGame?t.referee.yellowCardsPerGame.toFixed(2):"-"))]),t._v(" "),c("svg",{staticClass:"icon fs-14",staticStyle:{margin:"0 0.2rem",width:"0.5rem",height:"0.5rem"},attrs:{"aria-hidden":"true"}},[c("use",{attrs:{"xlink:href":"#iconredandyellow1"}})]),t._v(" "),c("span",{staticClass:"venText"},[t._v(t._s(t.referee.redCardsPerGame?t.referee.redCardsPerGame.toFixed(2):"-"))])])])]):t._e(),t._v(" "),!t.isseoLive&&t.overview_venue&&t.overview_venue[0]?c("div",{staticClass:"w100 venue",attrs:{itemprop:"location",itemscope:"",itemtype:"http://schema.org/Place"}},[c("div",{staticClass:"title"},[t._v(t._s(t.$t("map_football.Venue")))]),t._v(" "),c("div",{staticClass:"des"},[c("div",{staticClass:"des_key"},[c("span",{staticClass:"icon iconfont iconchangguan myIcon"}),t._v(" "),c("span",{staticClass:"Trafford",attrs:{itemprop:"name"}},[t._v(t._s(t.overview_venue[0]))]),t._v(" "),c("meta",{attrs:{itemprop:"address",content:""+t.venueData(t.WebMatchData)}})]),t._v(" "),c("div",{staticClass:"des_value"},[t._v(t._s(t.overview_venue[1]))])])]):t._e(),t._v(" "),t.isseoLive||t.isquickApp||!t.overviewH2hMaps.compId?t._e():c("h2h",{attrs:{h2hMaps:t.overviewH2hMaps,titleHref:t.getPath("h2h")}}),t._v(" "),t.isseoLive?t._e():c("OverviewOdds",{attrs:{type:"overview"}}),t._v(" "),t.isseoLive||t.isquickApp||"{}"===JSON.stringify(t.WebMatchData)?t._e():c("div",{staticClass:"title-box"},[c("span",{staticClass:"text"},[t._v(t._s(t.$t("map_common['info']")))])]),t._v(" "),t.isseoLive||t.isquickApp||"{}"===JSON.stringify(t.WebMatchData)?t._e():c("div",{staticClass:"info-box",attrs:{itemscope:"",itemtype:"http://schema.org/SportsEvent"}},[c("meta",{attrs:{itemprop:"url",content:"https://m.aiscore.com"+t.$route.fullPath}}),t._v(" "),c("meta",{attrs:{itemprop:"homeTeam",content:t.match.homeTeam.name}}),t._v(" "),c("meta",{attrs:{itemprop:"awayTeam",content:t.match.awayTeam.name}}),t._v(" "),c("meta",{attrs:{itemprop:"endDate",content:t.endDate}}),t._v(" "),c("meta",{attrs:{itemprop:"eventStatus",content:"https://schema.org/EventScheduled"}}),t._v(" "),c("ul",{staticClass:"ul-box"},[c("li",[c("span",{staticClass:"name"},[t._v(t._s(t.$t("map_common['Name']"))+":")]),t._v(" "),c("span",{staticClass:"text",attrs:{itemprop:"name"}},[t._v("\n          "+t._s(t.match.homeTeam?t.match.homeTeam.name:"")+"\n          vs\n          "+t._s(t.match.awayTeam?t.match.awayTeam.name:"")+"\n        ")])]),t._v(" "),c("li",[c("span",{staticClass:"name"},[t._v(t._s(t.$t("map_common['Date']"))+":")]),t._v(" "),c("span",{staticClass:"text",attrs:{itemprop:"startDate"}},[t._v("\n          "+t._s(t.$dayjs(1e3*t.match.matchTime).format("YYYY/MM/DD"))+"\n        ")])]),t._v(" "),c("li",[c("span",{staticClass:"name"},[t._v(t._s(t.$t("map_football['Time']"))+":")]),t._v(" "),c("span",{staticClass:"text"},[t._v(t._s(t.$dayjs(1e3*t.match.matchTime).format("HH:mm:ss")))])]),t._v(" "),c("li",{attrs:{itemprop:"location",itemscope:"",itemtype:"http://schema.org/Place"}},[c("span",{staticClass:"name"},[t._v(t._s(t.$t("map_football['Stadium']"))+":")]),t._v(" "),c("span",{staticClass:"text",attrs:{itemprop:"name address"}},[t._v("\n          "+t._s(t.isNull(t.match,"venue.name")||"-")+"\n        ")])])]),t._v(" "),t.intro?c("div",{staticClass:"dec-box",class:{show:t.decBoxShow},attrs:{itemprop:"description"}},[c("div",{staticClass:"text",domProps:{innerHTML:t._s(t.intro)}}),t._v(" "),c("div",{staticClass:"clearfix-row text-right"},[c("span",{staticClass:"more",on:{click:function(e){t.decBoxShow=!t.decBoxShow}}},[t._v("\n          "+t._s(t.$t("map_common['"+(t.decBoxShow?"Hide":"Show more")+"']"))+"\n        ")])])]):t._e()]),t._v(" "),t.isseoLive||t.isquickApp||!t.staticList.length?t._e():c("div",{staticClass:"static-link-box"},[t._l(t.staticList,(function(e,n){return[c("div",{staticClass:"title"},[t._v("\n        "+t._s(e.title)+"\n      ")]),t._v(" "),c("ul",{staticClass:"list"},t._l(e.list,(function(e,n){return c("li",[c("a",{staticClass:"link",attrs:{href:t.addispure(e.href)}},[t._v("\n            "+t._s(e.text)+"\n          ")])])})),0)]}))],2),t._v(" "),!t.isseoLive&&t.matchTrendData&&"{}"!=JSON.stringify(t.home_awayDangers.home)||t.incidents&&0!=t.incidents.length?c("FigureLegends",{style:t.isseoLive?{background:"#ffffff"}:{},attrs:{lists:t.lists}}):t._e()],1)}),[],!1,null,"22540cb9",null));e.default=k.exports}}]);
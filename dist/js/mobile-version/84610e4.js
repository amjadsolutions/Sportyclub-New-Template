(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1547:function(t,e,o){(function(e){o(22);var n=o(200).Root.fromJSON(o(201)).lookup("onescore.app.v1.Push"),c=o(1571).connect;t.exports.Client=function(t){var e=this;for(var i in e.options={id:"",proto:!0,host:"wss://mq.aiscore.com",port:"443",route:"mqtt",topic:"",initCallback:"",message:""},t)e.options[i]=t[i];return e.init(),e},t.exports.Client.prototype={client:"",init:function(){var t=this;t.client=c(t.options.host+":"+t.options.port+"/"+t.options.route),Array.isArray(t.options.topic)?t.options.topic.forEach((function(e){t.client.subscribe(e)})):t.client.subscribe(t.options.topic),t.client.on("message",(function(o,c){try{var d,l=e.from(c,"utf8");d=t.options&&t.options.proto?n.decode(l):l,t.options.message&&t.options.message(d)}catch(t){}}))}}}).call(this,o(328).Buffer)},1572:function(t,e){},1573:function(t,e){},1574:function(t,e){},1575:function(t,e){},1576:function(t,e){},1577:function(t,e){},1676:function(t,e,o){t.exports=o.p+"img/time.a54da04.png"},2040:function(t,e,o){},2509:function(t,e,o){"use strict";o(2040)},3232:function(t,e,o){"use strict";o.r(e);o(28),o(40),o(41);var n=o(5),c=o(11),d=(o(36),o(18),o(79),o(30),o(51),o(112),o(113),o(55),o(23),o(59),o(17),o(24),o(22),o(202),o(19),o(42),o(45),o(7)),l=o(20),r=o(12),f=o(3),v=o(1547),h=o.n(v);function T(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?T(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):T(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={name:"odds",data:function(){return{activeTab:"",oddsTypeData:[],isShowModal:!1,copyOddsListData:{},allData:[],companyName:"",winkTime:!0,mqtt:null,updateCid:"",wColor:"",dColor:"",lColor:"",timeObj:null}},props:["type"],computed:m(m({},Object(l.e)(["oddsListData","oddsType","advsData"])),{},{oddsTypeText:function(){var t="",e="",o="";return"football"===this.proModule?"eu"===this.activeTab?(t="1",e="X",o="2"):"asia"===this.activeTab?o=this.$t("map_newTranslate['Asian Handicap']"):"bs"===this.activeTab?(t=this.$t("map_football['Goals']"),e=this.$t("map_football['Over']"),o=this.$t("map_football['Under']")):"corner"===this.activeTab&&(t=this.$t("map_football['Corners']"),e=this.$t("map_newTranslate['Over']"),o=this.$t("map_newTranslate['Under']")):"eu"===this.activeTab?o=this.oddsText().eu:"asia"===this.activeTab?o=this.oddsText().asia:"bs"===this.activeTab&&(o=this.oddsText().bs),{text1:t,text2:e,text3:o}},matchStatus:function(){var t;return null===(t=this.match.match)||void 0===t?void 0:t.matchStatus},match:function(){return"football"===this.proModule?this.$store.state["football/detail"].WebMatchData:this.$store.state["".concat(this.proModule)]["".concat(this.proModule,"DetailMatchData")]},isShowOdds:function(){if("football"===this.proModule){if("asia"===this.activeTab)return!1}else if("eu"===this.activeTab||"asia"===this.activeTab)return!1;return!0},ballIcon:function(){var t,e=this;return null===(t=d.ballTypes.filter((function(t){return t.proModule===e.proModule}))[0])||void 0===t?void 0:t.icon},oddListDataArray:function(){var t,e=this;return null===(t=this.copyOddsListData.companies)||void 0===t||t.map((function(t,o,n){var c,d,l,r,f=(null===(c=e.copyOddsListData.eu)||void 0===c?void 0:c.filter((function(e){return e.company.id===t.id}))[0])||!1,v=(null===(d=e.copyOddsListData.asia)||void 0===d?void 0:d.filter((function(e){return e.company.id===t.id}))[0])||!1,h=(null===(l=e.copyOddsListData.bs)||void 0===l?void 0:l.filter((function(e){return e.company.id===t.id}))[0])||!1,T=(null===(r=e.copyOddsListData.corner)||void 0===r?void 0:r.filter((function(e){return e.company.id===t.id}))[0])||!1;n[o].oddData={eu:{f:f&&f.f.odd?f.f.odd:[],l:f&&f.l.odd?f.l.odd:[],s:f&&f.s.odd?f.s.odd:[]},asia:{f:v&&v.f.odd?v.f.odd:[],l:v&&v.l.odd?v.l.odd:[],s:v&&v.s.odd?v.s.odd:[]},bs:{f:h&&h.f.odd?h.f.odd:[],l:h&&h.l.odd?h.l.odd:[],s:h&&h.s.odd?h.s.odd:[]},corner:{f:T&&T.f.odd?T.f.odd:[],l:T&&T.l.odd?T.l.odd:[],s:T&&T.s.odd?T.s.odd:[]}}})),this.copyOddsListData.companies},oddTableData:function(){var t=this,e=[];return this.allData.length&&this.oddsType&&this.allData.map((function(o,n,c){var d="",l="",r="";if(n!==c.length-1){var v=[+c[n+1].w,+c[n+1].d,+c[n+1].l],h=[+c[n].w,+c[n].d,+c[n].l];h[0]>v[0]?d="#5DB400":h[0]<v[0]&&(d="#E62F2B"),h[1]>v[1]?l="#5DB400":h[1]<v[1]&&(l="#E62F2B"),h[2]>v[2]?r="#5DB400":h[2]<v[2]&&(r="#E62F2B")}var data=t.oddsTypeFn([o.w,o.d,o.l]),T={time:1!==o.statusId&&o.statusId?o.time:f.a.localizationData(1e3*o.updateTime),scores:1!==o.statusId&&o.statusId?o.score:"",close:Number(o.close)};if("eu"===t.activeTab)T[1]={val:(+data[0]).toFixed(2),color:d},"football"===t.proModule&&(T.X={val:(+data[1]).toFixed(2),color:l}),T[2]={val:(+data[2]).toFixed(2),color:r};else if("asia"===t.activeTab){var m="".concat(0==+data[1]?"":+data[1]>0?"-":"+").concat(t.handicap(+data[1])),_="".concat(0==+data[1]?"":+data[1]>0?"+":"-").concat(t.handicap(+data[1]));T.home={val:(+data[0]).toFixed(2),handicap:m,color:d},T.away={val:(+data[2]).toFixed(2),handicap:_,color:r}}else"bs"!==t.activeTab&&"corner"!==t.activeTab||("bs"===t.activeTab?T.Goals={val:t.handicap(+data[1])}:T.Corners={val:t.handicap(+data[1])},T.Over={val:(+data[0]).toFixed(2),color:d},T.Under={val:(+data[2]).toFixed(2),color:r});e.push(T)})),e}}),methods:{changeActiveTab:function(t){this.activeTab=t,this.updateCid="",this.wColor="",this.dColor="",this.lColor=""},historyOdd:function(t,e){var o=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(r.oddsDetail)({match_id:o.match.match.id,odds_type:o.activeTab,cid:t});case 2:c=n.sent,o.isWinkTime(),o.allData=[],Object.keys(c).length&&(o.allData=c.oddsDetail[0].details,o.companyName=e,o.isShowModal=!0);case 6:case"end":return n.stop()}}),n)})))()},handicap:function(t){return f.a.handicap(Math.abs(+t))},oddsTypeFn:function(data){var t=f.a.deepClone(data),e=this.activeTab;return"football"===this.proModule||"basketball"===this.proModule?("corner"===e&&(t[0]="".concat(+t[0]-1),t[2]="".concat(+t[2]-1)),"eu"!==e&&t.length&&"Hk"!==this.oddsType&&(t[0]="".concat(+t[0]+1),t[2]="".concat(+t[2]+1))):"HK"!==this.oddsType||"asia"!==e&&"bs"!==e||(t[0]="".concat(+t[0]-1),t[2]="".concat(+t[2]-1)),"Am"===this.oddsType&&t.length&&(t=f.a.oddsConvert(t,e)),t},isWinkTime:function(){var t=this;this.winkTime=!0,this.timeObj&&(clearTimeout(this.timeObj),this.timeObj=null),this.timeObj=setTimeout((function(){t.winkTime=!1}),5e3)},skipPage:function(link){link&&window.open(link,"_blank")},initMqtt:function(){var t=this;this.mqtt=new h.a.Client({topic:["/sports/match/".concat(t.match.match.id,"/odd")],message:function(e){try{if(e&&e.odds){var o=e.odds[0].items;if(o&&o.length)for(var i=0;i<o.length;i++)for(var n in t.copyOddsListData)if(o[i].oddsType===n){for(var c=0;c<t.copyOddsListData[n].length;c++)if(o[i].companyIds.includes(t.copyOddsListData[n][c].company.id)){t.updateCid=t.copyOddsListData[n][c].company.id;var d=t.copyOddsListData[n][c].s.odd;+o[i].odd[0]>d[0]?t.wColor="#5DB400":+o[i].odd[0]<d[0]&&(t.wColor="#E62F2B"),+o[i].odd[2]>d[2]?t.lColor="#5DB400":+o[i].odd[2]<d[2]&&(t.lColor="#E62F2B"),"football"===t.proModule&&"eu"===o[i].oddsType&&(+o[i].odd[1]>d[1]?t.dColor="#5DB400":+o[i].odd[1]<d[1]&&(t.dColor="#E62F2B")),t.copyOddsListData[n][c].s.odd=o[i].odd;break}break}}}catch(t){}}})},getAdConfig:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,c,d,time,l,v,h,T;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=f.a.deepClone(t.advsData),t.copyOddsListData=f.a.deepClone(t.oddsListData),n=[],o.companies&&(null===(c=t.copyOddsListData.companies)||void 0===c||c.forEach((function(t,e,c){for(var i=0;i<o.companies.length;i++)if(t.id===o.companies[i].id){c[e].logo=o.companies[i].logo,c[e].link=o.companies[i].link,c[e].adName=o.companies[i].adName,2===o.companies[i].jumpType&&n.push(o.companies[i].id);break}}))),!n.length){e.next=18;break}if(d=JSON.parse(localStorage.getItem("m_advsCompany")),time=(new Date).getTime(),l={},d&&!(time-d.time>12e4)){e.next=16;break}return e.next=11,Object(r.getAdsMatch)({lang:t.$store.state.lang,country_id:t.advsData.countryId,match_id:t.$route.params.matchId,ad_ids:"",company_ids:JSON.stringify(n)});case 11:l=e.sent,v={time:(new Date).getTime(),data:l},localStorage.setItem("m_advsCompany",JSON.stringify(v)),e.next=17;break;case 16:l=d.data;case 17:l.companies&&(T={},l.companies.map((function(t){T[t.id]=t})),null===(h=t.copyOddsListData.companies)||void 0===h||h.forEach((function(t,e,o){T[t.id]&&(o[e].link=T[t.id].link)})));case 18:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.$store.dispatch("getoddsList",{match_id:t.match.match.id}),t.$store.dispatch("getAdsData")]);case 2:o=["eu","asia","bs","corner"],i=0;case 4:if(!(i<o.length)){e.next=11;break}if(!t.oddsListData[o[i]]){e.next=8;break}return t.activeTab=o[i],e.abrupt("break",11);case 8:i++,e.next=4;break;case 11:t.getAdConfig(),2===t.matchStatus&&t.initMqtt();case 13:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){try{this.mqtt&&(this.mqtt.client.end(),this.mqtt=null)}catch(t){}}},y=(o(2509),o(14)),component=Object(y.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"oddsBox"},[t.$route.name.includes("odd")?n("div",{staticClass:"oddTypesBox mt-8"},[t.oddsListData.eu?n("span",{class:{activeTab:"eu"===t.activeTab},on:{click:function(e){return t.changeActiveTab("eu")}}},[t._v("\n            "+t._s("football"===t.proModule?"1 X 2":t.oddsText().eu)+"\n        ")]):t._e(),t._v(" "),t.oddsListData.asia&&"football"===t.proModule||t.oddsText().asia?n("span",{class:{activeTab:"asia"===t.activeTab,"ml-8":t.oddsListData.eu},on:{click:function(e){return t.changeActiveTab("asia")}}},[t._v("\n            "+t._s("football"===t.proModule?t.$t("map_newTranslate.Asian Handicap"):t.oddsText().asia)+"\n        ")]):t._e(),t._v(" "),t.oddsListData.bs&&"football"===t.proModule||t.oddsText().bs?n("span",{class:{activeTab:"bs"===t.activeTab,"ml-8":t.oddsListData.asia},on:{click:function(e){return t.changeActiveTab("bs")}}},[t._v("\n            "+t._s("football"===t.proModule?t.$t("map_newTranslate.Total Goals"):t.oddsText().bs)+"\n        ")]):t._e(),t._v(" "),t.oddsListData.corner&&"football"===t.proModule?n("span",{class:{activeTab:"corner"===t.activeTab,"ml-8":t.oddsListData.bs},on:{click:function(e){return t.changeActiveTab("corner")}}},[t._v("\n            "+t._s(t.$t("map_newTranslate.Total Corners"))+"\n        ")]):t._e()]):t._e(),t._v(" "),t.$route.name.includes("odd")?n("p",{staticClass:"selectOdds"},[n("van-checkbox-group",{attrs:{direction:"horizontal"},model:{value:t.oddsTypeData,callback:function(e){t.oddsTypeData=e},expression:"oddsTypeData"}},[n("van-checkbox",{attrs:{name:"f","icon-size":"16px"}},[t._v(t._s(t.$t("map_newTranslate.Opening Odds")))]),t._v(" "),2===t.matchStatus?n("van-checkbox",{attrs:{name:"l","icon-size":"16px"}},[t._v(t._s(t.$t("map_newTranslate.Pre-match Odds")))]):t._e()],1)],1):t._e(),t._v(" "),n("div",{staticClass:"oddsContent"},[n("p",{staticClass:"oddsType flex"},[n("span",{staticClass:"placeholder"}),t._v(" "),t.oddsTypeText.text1?n("span",{staticClass:"oddsItem flex-1 justify-center align-center"},[t._v("\n                "+t._s(t.oddsTypeText.text1)+"\n            ")]):t._e(),t._v(" "),t.oddsTypeText.text2?n("span",{staticClass:"oddsItem flex-1 justify-center align-center"},[t._v("\n                "+t._s(t.oddsTypeText.text2)+"\n            ")]):t._e(),t._v(" "),t.oddsTypeText.text3?n("span",{staticClass:"oddsItem flex-1 justify-center align-center"},[t._v("\n                "+t._s(t.oddsTypeText.text3)+"\n            ")]):t._e(),t._v(" "),t.$route.name.includes("odd")?n("span",{staticClass:"placeholder2"}):t._e()]),t._v(" "),t._l(t.oddListDataArray,(function(e,o){return n("div",{key:o,staticClass:"oddsBox flex"},[n("div",{staticClass:"oddsBoxLeft flex justify-center align-center"},[n("img",{staticClass:"companyLogo",attrs:{src:"https://img1.aiscore.com/other/"+e.logo,alt:"#"},on:{click:function(o){return t.skipPage(e.link)}}})]),t._v(" "),n("div",{staticClass:"oddsBoxContent flex-1"},t._l(["f","l","s"],(function(o,c){return n("div",{directives:[{name:"show",rawName:"v-show",value:2===t.matchStatus?2===c||t.oddsTypeData.includes(o):1===c||t.oddsTypeData.includes(o),expression:"matchStatus === 2 ? (index2 === 2 ? true : oddsTypeData.includes(item2)) : (index2 === 1 ? true : oddsTypeData.includes(item2))"}],key:c,staticClass:"oddsItem flex flex-1",class:{borderB:"s"!==o&&t.oddsTypeData.includes(o),border1:"f"===o,border2:"l"===o,border3:"s"===o}},[0==+e.oddData[t.activeTab][o][3]?n("span",{staticClass:"flex flex-1 justify-center align-center borderR"},["eu"!==t.activeTab?n("span",{staticClass:"handicap flex justify-center align-center",class:{handicapRight:"asia"===t.activeTab,"flex-1":"asia"===t.activeTab,"justify-end":"asia"===t.activeTab}},[t._v("\n                            "+t._s(0==+e.oddData[t.activeTab][o][1]||"bs"===t.activeTab||"corner"===t.activeTab?"":+e.oddData[t.activeTab][o][1]>0?"-":"+")+t._s(t.handicap(e.oddData[t.activeTab][o][1]))+"\n                        ")]):t._e(),t._v(" "),"eu"===t.activeTab||"asia"===t.activeTab?n("span",{staticClass:"flex justify-center align-center",class:{"flex-1":"asia"===t.activeTab,"justify-start":"asia"===t.activeTab},style:{color:"s"===o&&t.updateCid===e.id&&2===t.matchStatus?t.wColor:""}},[t._v("\n                            "+t._s(t.oddToFixed2(t.oddsTypeFn(e.oddData[t.activeTab][o])[0]))+"\n                        ")]):t._e()]):1==+e.oddData[t.activeTab][o][3]?n("span",{staticClass:"flex flex-1 justify-center align-center borderR"},[n("i",{staticClass:"iconfont icon-suo"})]):n("span",{staticClass:"flex flex-1 justify-center align-center borderR noOdd"},[t._v("-")]),t._v(" "),t.isShowOdds&&0==+e.oddData[t.activeTab][o][3]?n("span",{staticClass:"flex flex-1 justify-center align-center borderR",style:{color:"s"===o&&t.updateCid===e.id&&2===t.matchStatus?t.dColor:""}},[t._v("\n                        "+t._s(t.oddToFixed2(t.oddsTypeFn(e.oddData[t.activeTab][o])["eu"===t.activeTab||"asia"===t.activeTab?1:0]))+"\n                    ")]):t.isShowOdds&&1==+e.oddData[t.activeTab][o][3]?n("span",{staticClass:"flex flex-1 justify-center align-center borderR"},[n("i",{staticClass:"iconfont icon-suo"})]):t.isShowOdds?n("span",{staticClass:"flex flex-1 justify-center align-center borderR noOdd"},[t._v("-")]):t._e(),t._v(" "),0==+e.oddData[t.activeTab][o][3]?n("span",{staticClass:"flex flex-1 justify-center align-center"},["asia"===t.activeTab?n("span",{staticClass:"handicap flex justify-center align-center",class:{handicapRight:"asia"===t.activeTab,"flex-1":"asia"===t.activeTab,"justify-end":"asia"===t.activeTab}},[t._v("\n                            "+t._s(0==+e.oddData[t.activeTab][o][1]||"bs"===t.activeTab||"corner"===t.activeTab?"":+e.oddData[t.activeTab][o][1]>0?"+":"-")+t._s(t.handicap(e.oddData[t.activeTab][o][1]))+"\n                        ")]):t._e(),t._v(" "),n("span",{staticClass:"flex justify-center align-center",class:{"flex-1":"asia"===t.activeTab,"justify-start":"asia"===t.activeTab},style:{color:"s"===o&&t.updateCid===e.id&&2===t.matchStatus?t.lColor:""}},[t._v("\n                            "+t._s(t.oddToFixed2(t.oddsTypeFn(e.oddData[t.activeTab][o])[2]))+"\n                        ")])]):1==+e.oddData[t.activeTab][o][3]?n("span",{staticClass:"flex flex-1 justify-center align-center"},[n("i",{staticClass:"iconfont icon-suo"})]):n("span",{staticClass:"flex flex-1 justify-center align-center noOdd"},[t._v("-")])])})),0),t._v(" "),t.$route.name.includes("odd")?n("div",{staticClass:"oddsBoxRight flex justify-center align-center",on:{click:function(o){return t.historyOdd(e.id,e.name)}}},[n("i",{staticClass:"iconfont icon-youjiantou"})]):t._e()])})),t._v(" "),n("p",{staticClass:"hint"},[t._v(t._s(t.oddsListData.text))]),t._v(" "),n("p",{staticClass:"oddsTypeText mt-12"},[n("span",{staticClass:"openingBox"},[n("span",{staticClass:"chunk opening"}),t._v(" "),n("span",[t._v(t._s(t.$t("map_newTranslate.Opening odds")))])]),t._v(" "),n("span",{staticClass:"openingBox mt-8"},[n("span",{staticClass:"chunk pre-match"}),t._v(" "),n("span",[t._v(t._s(t.$t("map_newTranslate.Pre-match odds")))])]),t._v(" "),2===t.matchStatus?n("span",{staticClass:"openingBox mt-8"},[n("span",{staticClass:"chunk in-play"}),t._v(" "),n("span",[t._v(t._s(t.$t("map_newTranslate.In-play odds")))])]):t._e()]),t._v(" "),n("van-popup",{style:{"z-index":1e3,width:"100%!important",height:"100%",left:0,"margin-bottom":0},attrs:{"safe-area-inset-bottom":!0,position:"bottom"},on:{"click-overlay":function(e){t.isShowModal=!1}},model:{value:t.isShowModal,callback:function(e){t.isShowModal=e},expression:"isShowModal"}},[n("div",{staticClass:"wrapper",on:{click:function(t){t.stopPropagation()}}},[n("p",{staticClass:"top flex"},[n("span",{staticClass:"flex-1 left"},[t._v(t._s(t.companyName))]),t._v(" "),n("span",{staticClass:"flex-1 right",on:{click:function(e){t.isShowModal=!1}}},[n("i",{staticClass:"iconfont icon-guanbi"})])]),t._v(" "),n("p",{staticClass:"header flex"},[n("span",{staticClass:"flex justify-center align-center icon"},[n("img",{attrs:{src:o(1676),alt:"#"}})]),t._v(" "),n("span",{staticClass:"flex justify-center align-center icon"},[n("i",{staticClass:"iconfont",class:t.ballIcon})]),t._v(" "),t.oddsTypeText.text1?n("span",{staticClass:"flex flex-1 justify-center align-center"},[t._v("\n                        "+t._s(t.oddsTypeText.text1)+"\n                    ")]):t._e(),t._v(" "),t.oddsTypeText.text2?n("span",{staticClass:"flex flex-1 justify-center align-center"},[t._v("\n                        "+t._s(t.oddsTypeText.text2)+"\n                    ")]):t._e(),t._v(" "),t.oddsTypeText.text3?n("span",{staticClass:"flex flex-1 justify-center align-center"},[t._v("\n                        "+t._s(t.oddsTypeText.text3)+"\n                    ")]):t._e()]),t._v(" "),n("ul",{staticClass:"oddContent"},t._l(t.oddTableData,(function(e,o){return n("li",{key:o,staticClass:"flex"},[n("span",{staticClass:"flex justify-center align-center icon firstSpan",class:{date:!e.scores,redColor:e.scores}},[t._v("\n                            "+t._s(e.time)+"\n                        ")]),t._v(" "),e.scores?n("span",{staticClass:"flex justify-center align-center icon redColor firstSpan"},[t._v("\n                            "+t._s(e.scores)+"\n                        ")]):t._e(),t._v(" "),n("span",{staticClass:"flex flex-1 justify-center align-center oddsBox firstSpan"},[0===e.close?n("span",{staticClass:"flex justify-center align-center notBorderB",class:{"flex-1":"asia"===t.activeTab}},["eu"!==t.activeTab?n("span",{staticClass:"handicap flex justify-center align-center notBorderR notBorderB",class:{handicapRight:"asia"===t.activeTab,"flex-1":"asia"===t.activeTab,"justify-end":"asia"===t.activeTab}},[t._v("\n                                      "+t._s("asia"===t.activeTab?e.home.handicap:"bs"===t.activeTab?e.Goals.val:e.Corners.val)+"\n                                 ")]):t._e(),t._v(" "),"eu"===t.activeTab||"asia"===t.activeTab?n("span",{staticClass:"flex justify-center align-center notBorderB",class:{"flex-1":"asia"===t.activeTab,"justify-start":"asia"===t.activeTab},style:{color:"eu"===t.activeTab?e[1].color:e.home.color}},[t._v("\n                                      "+t._s("eu"===t.activeTab?e[1].val:e.home.val)+"\n                                 ")]):t._e()]):n("i",{staticClass:"iconfont icon-suo"}),t._v(" "),2===t.matchStatus&&0===e.close&&("eu"===t.activeTab||"asia"===t.activeTab)&&("eu"===t.activeTab?e[1].color:e.home.color)&&t.winkTime&&0===o?n("i",{staticClass:"iconfont Twinkle",class:"#5DB400"===("eu"===t.activeTab?e[1].color:e.home.color)?"icon-xiajiang":"icon-shangsheng"}):t._e()]),t._v(" "),t.isShowOdds?n("span",{staticClass:"flex flex-1 justify-center align-center oddsBox firstSpan"},[0===e.close?n("span",{staticClass:"flex justify-center align-center notBorderB",style:{color:"eu"===t.activeTab?e.X.color:"asia"===t.activeTab?e.home.color:e.Over.color}},[t._v("\n                                 "+t._s("eu"===t.activeTab?e.X.val:"asia"===t.activeTab?e.home.val:e.Over.val)+"\n                            ")]):n("i",{staticClass:"iconfont icon-suo"}),t._v(" "),2===t.matchStatus&&0===e.close&&("eu"===t.activeTab?e.X.color:"asia"===t.activeTab?e.home.color:e.Over.color)&&t.winkTime&&t.isShowOdds&&0===o?n("i",{staticClass:"iconfont Twinkle",class:"#5DB400"===("eu"===t.activeTab?e.X.color:"asia"===t.activeTab?e.home.color:e.Over.color)?"icon-xiajiang":"icon-shangsheng"}):t._e()]):t._e(),t._v(" "),n("span",{staticClass:"flex flex-1 justify-center align-center oddsBox firstSpan"},[0===e.close?n("span",{staticClass:"flex justify-center align-center notBorderB",class:{"flex-1":"asia"===t.activeTab}},["asia"===t.activeTab?n("span",{staticClass:"handicap flex justify-center align-center notBorderR notBorderB",class:{handicapRight:"asia"===t.activeTab,"flex-1":"asia"===t.activeTab,"justify-end":"asia"===t.activeTab}},[t._v("\n                                   "+t._s(e.away.handicap)+"\n                                ")]):t._e(),t._v(" "),n("span",{staticClass:"flex justify-center align-center notBorderB",class:{"flex-1":"asia"===t.activeTab,"justify-start":"asia"===t.activeTab},style:{color:"eu"===t.activeTab?e[2].color:"asia"===t.activeTab?e.away.color:e.Under.color}},[t._v("\n                                     "+t._s("eu"===t.activeTab?e[2].val:"asia"===t.activeTab?e.away.val:e.Under.val)+"\n                                ")])]):n("i",{staticClass:"iconfont icon-suo"}),t._v(" "),2===t.matchStatus&&0===e.close&&("eu"===t.activeTab?e[2].color:"asia"===t.activeTab?e.away.color:e.Under.color)&&t.winkTime&&0===o?n("i",{staticClass:"iconfont Twinkle",class:"#5DB400"===("eu"===t.activeTab?e[2].color:"asia"===t.activeTab?e.away.color:e.Under.color)?"icon-xiajiang":"icon-shangsheng"}):t._e()])])})),0)])])],2)])}),[],!1,null,"0e07873a",null);e.default=component.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f894a6d"],{1:function(t,e){},"23b0":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-container"},[o("el-tabs",{model:{value:t.tabName,callback:function(e){t.tabName=e},expression:"tabName"}},[o("el-tab-pane",{attrs:{label:t.$t("trade.assets"),name:"account"}},[o("el-table",{attrs:{data:t.account.assets,"element-loading-text":"Loading",border:"",fit:"",size:"mini","row-key":t.rowKey,"highlight-current-row":""}},[o("el-table-column",{attrs:{label:t.$t("assets.asset"),align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.asset)+" ")]}}])}),o("el-table-column",{attrs:{label:t.$t("assets.walletBalance"),align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.walletBalance)+" ")]}}])}),o("el-table-column",{attrs:{label:t.$t("assets.unrealizedProfit"),align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.unrealizedProfit)+" ")]}}])}),o("el-table-column",{attrs:{label:t.$t("assets.marginBalance"),align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.marginBalance)+" ")]}}])}),o("el-table-column",{attrs:{label:t.$t("assets.availableBalance"),align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.availableBalance)+" ")]}}])}),o("el-table-column",{attrs:{label:t.$t("assets.maxWithdrawAmount"),align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.maxWithdrawAmount)+" ")]}}])}),o("el-table-column",{attrs:{label:t.$t("assets.updateTime"),align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.parseTime(e.row.updateTime))+" ")]}}])})],1)],1),o("el-tab-pane",{attrs:{label:t.$t("trade.position"),name:"position"}},[o("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"10px"}},[o("div",{staticStyle:{display:"flex","flex-flow":"row wrap",gap:"10px"}},[o("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:t.$t("trade.coin"),size:"small"},model:{value:t.search.symbol,callback:function(e){t.$set(t.search,"symbol",e)},expression:"search.symbol"}}),o("el-button",{attrs:{type:"success",size:"mini"},on:{click:t.searchFuturesPositions}},[t._v(" "+t._s(t.$t("table.search"))+" ")])],1),o("div",{staticStyle:{display:"flex","flex-flow":"row wrap",gap:"10px","align-items":"center"}},[o("el-select",{staticStyle:{width:"80px"},attrs:{size:"small"},on:{change:t.changeRefreshInterval},model:{value:t.interval,callback:function(e){t.interval=e},expression:"interval"}},t._l(30,(function(t){return o("el-option",{key:t,attrs:{label:t+"s",value:t}})})),1),o("span",[t._v(t._s(t.$t("table.refreshInterval")))])],1)]),o("el-table",{attrs:{data:t.positions,"element-loading-text":"Loading",border:"",fit:"",size:"mini","row-key":t.rowKey,"expand-row-keys":t.expandKeys,"highlight-current-row":""},on:{"sort-change":t.sortChange,"expand-change":t.expandChange}},[o("el-table-column",{attrs:{label:t.$t("position.symbol"),align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.symbol)+" ")]}}])}),o("el-table-column",{attrs:{label:t.$t("position.positionAmt"),align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.positionAmt)+" ")]}}])}),o("el-table-column",{attrs:{label:t.$t("position.entryPrice"),align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.entryPrice)+" ")]}}])}),o("el-table-column",{attrs:{label:t.$t("position.markPrice"),align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.markPrice)+" ")]}}])}),o("el-table-column",{attrs:{label:t.$t("position.liquidationPrice"),align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.liquidationPrice)+" ")]}}])}),o("el-table-column",{attrs:{label:t.$t("position.unrealizedProfit"),align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.nowProfit<0?o("span",{staticStyle:{color:"red"}},[t._v(t._s(e.row.unRealizedProfit))]):o("span",{staticStyle:{color:"green"}},[t._v(t._s(e.row.unRealizedProfit))])]}}])}),o("el-table-column",{attrs:{label:t.$t("position.nowProfit"),align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.nowProfit<0?o("span",{staticStyle:{color:"red"}},[t._v(t._s(e.row.nowProfit))]):o("span",{staticStyle:{color:"green"}},[t._v(t._s(e.row.nowProfit))])]}}])}),o("el-table-column",{attrs:{label:t.$t("position.leverage"),align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.leverage)+" ")]}}])}),o("el-table-column",{attrs:{label:t.$t("position.positionSide"),align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.$t("positionSide."+e.row.positionSide))+" ")]}}])}),o("el-table-column",{attrs:{label:t.$t("position.isolated"),align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.isolated?t.$t("position.isolated"):t.$t("position.crossed"))+" ")]}}])})],1)],1),o("el-tab-pane",{attrs:{label:t.$t("trade.openOrder"),name:"openOrder"}},[o("el-table",{attrs:{data:t.openOrders,"element-loading-text":"Loading",border:"",fit:"",size:"mini","row-key":t.rowKey,"highlight-current-row":""}},[o("el-table-column",{attrs:{label:t.$t("order.symbol"),align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.symbol)+" ")]}}])}),o("el-table-column",{attrs:{label:t.$t("order.price"),align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.price)+" ")]}}])}),o("el-table-column",{attrs:{label:t.$t("order.origQty"),align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.origQty)+" ")]}}])}),o("el-table-column",{attrs:{label:t.$t("order.executedQty"),align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.executedQty)+" ")]}}])}),o("el-table-column",{attrs:{label:t.$t("order.side"),align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.$t("side."+e.row.side))+" ")]}}])}),o("el-table-column",{attrs:{label:t.$t("order.positionSide"),align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.$t("positionSide."+e.row.positionSide))+" ")]}}])}),o("el-table-column",{attrs:{label:t.$t("assets.updateTime"),align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.parseTime(e.row.updateTime))+" ")]}}])})],1)],1)],1)],1)},r=[],a=o("8204"),s=o("dd36"),l=o("fee1"),i=(o("3dd5"),o("d987"),o("4cc3"),o("8b03"),o("16dd"),o("374d"),o("90c8"),o("8d8a"),o("6de1"),o("1a71"),o("2465")),c=o("ed08"),u=o("1888"),f={data:function(){return{tabName:"position",account:{assets:[],positions:[]},positions:[],openOrders:[],search:{symbol:""},sort:"+",rowKey:function(t){return t.positionSide?t.symbol+t.positionSide:t.symbol},expandKeys:[],timeId:null,interval:30}},computed:{allProfit:function(){var t=this.list.reduce((function(t,e){return t+e.nowProfit}),0);return Object(u["a"])(t,2)}},watch:{tabName:function(t){this.fetchData(t)}},created:function(){var t=this;return Object(l["a"])(Object(s["a"])().mark((function e(){return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.interval=localStorage.getItem("accountRefreshInterval")||30,e.next=3,t.fetchData();case 3:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){clearInterval(this.timeId)},methods:{parseTime:c["c"],changeRefreshInterval:function(t){localStorage.setItem("accountRefreshInterval",t),clearInterval(this.timeId),this.fetchData()},round:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Object(u["a"])(t,e)},expandChange:function(t,e){this.expandKeys=e.map((function(t){return t.symbol}))},sortChange:function(t){var e=t.order;this.sort="ascending"===e?"+":"-",this.fetchData()},fetchData:function(){var t=arguments,e=this;return Object(l["a"])(Object(s["a"])().mark((function o(){var n;return Object(s["a"])().wrap((function(o){while(1)switch(o.prev=o.next){case 0:n=t.length>0&&void 0!==t[0]?t[0]:null,n||(n=e.tabName),"account"===n?e.getFuturesAccount():"position"===n?e.getFuturesPositions():"openOrder"===n&&e.getFuturesOpenOrders(),e.timeId=setInterval((function(){"account"===n?e.getFuturesAccount():"position"===n?e.getFuturesPositions():"openOrder"===n&&e.getFuturesOpenOrders()}),1e3*e.interval);case 4:case"end":return o.stop()}}),o)})))()},getFuturesAccount:function(){var t=this;return Object(l["a"])(Object(s["a"])().mark((function e(){var o,n,r,a,l,c;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["g"])();case 2:o=e.sent,n=o.data,r=n.assets,a=void 0===r?[]:r,l=n.positions,c=void 0===l?[]:l,t.account={assets:a,positions:c};case 9:case"end":return e.stop()}}),e)})))()},searchFuturesPositions:function(){var t=this;return Object(l["a"])(Object(s["a"])().mark((function e(){var o;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:o=t.positions.filter((function(e){var o=!0;return t.search.symbol&&(console.log(e.symbol,t.search.symbol),o=o&&!e.symbol.includes(t.search.symbol)),o})),t.positions=o;case 2:case"end":return e.stop()}}),e)})))()},getFuturesPositions:function(){var t=this;return Object(l["a"])(Object(s["a"])().mark((function e(){var o,n,r;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["i"])();case 2:o=e.sent,n=o.data.positions,r=void 0===n?null:n,t.positions=r.map((function(e){var o=Math.Abs(e.positionAmt),n=Number(e.unRealizedProfit),r=Number(e.leverage),s=Number(e.entryPrice),l=n/(o*s)*r*100;return Object(a["a"])(Object(a["a"])({},e),{},{unRealizedProfit:t.round(n,2),nowProfit:t.round(l,6)})})),t.search={symbol:""};case 7:case"end":return e.stop()}}),e)})))()},getFuturesOpenOrders:function(){var t=this;return Object(l["a"])(Object(s["a"])().mark((function e(){var o,n;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["h"])();case 2:o=e.sent,n=o.data.openOrders,t.openOrders=n||[];case 5:case"end":return e.stop()}}),e)})))()}}},d=f,p=o("9bf6"),b=Object(p["a"])(d,n,r,!1,null,null,null);e["default"]=b.exports},2465:function(t,e,o){"use strict";o.d(e,"f",(function(){return r})),o.d(e,"k",(function(){return a})),o.d(e,"a",(function(){return s})),o.d(e,"c",(function(){return l})),o.d(e,"d",(function(){return i})),o.d(e,"b",(function(){return c})),o.d(e,"e",(function(){return u})),o.d(e,"j",(function(){return f})),o.d(e,"l",(function(){return d})),o.d(e,"m",(function(){return p})),o.d(e,"g",(function(){return b})),o.d(e,"i",(function(){return w})),o.d(e,"h",(function(){return h}));var n=o("b775");function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["a"])({url:"/features",method:"get",params:t})}function a(t,e){return Object(n["a"])({url:"/features/".concat(t),method:"put",data:e})}function s(t){return Object(n["a"])({url:"/features",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/features/".concat(t),method:"delete"})}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return Object(n["a"])({url:"/features/enable/".concat(t),method:"put"})}function c(t){return Object(n["a"])({url:"/features/batch",method:"put",data:t})}function u(){return Object(n["a"])({url:"/config",method:"get"})}function f(t){return Object(n["a"])({url:"/config",method:"put",data:t})}function d(){return Object(n["a"])({url:"/start",method:"post"})}function p(){return Object(n["a"])({url:"/stop",method:"post"})}function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["a"])({url:"/futures/account",method:"get",params:t})}function w(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["a"])({url:"/futures/positions",method:"get",params:t})}function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["a"])({url:"/futures/open-orders",method:"get",params:t})}}}]);
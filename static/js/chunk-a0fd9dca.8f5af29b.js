(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0fd9dca"],{1:function(e,t){},2465:function(e,t,l){"use strict";l.d(t,"f",(function(){return n})),l.d(t,"k",(function(){return o})),l.d(t,"a",(function(){return r})),l.d(t,"c",(function(){return i})),l.d(t,"d",(function(){return s})),l.d(t,"b",(function(){return c})),l.d(t,"e",(function(){return u})),l.d(t,"j",(function(){return d})),l.d(t,"l",(function(){return b})),l.d(t,"m",(function(){return p})),l.d(t,"g",(function(){return f})),l.d(t,"i",(function(){return m})),l.d(t,"h",(function(){return g}));var a=l("b775");function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["a"])({url:"/features",method:"get",params:e})}function o(e,t){return Object(a["a"])({url:"/features/".concat(e),method:"put",data:t})}function r(e){return Object(a["a"])({url:"/features",method:"post",data:e})}function i(e){return Object(a["a"])({url:"/features/".concat(e),method:"delete"})}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return Object(a["a"])({url:"/features/enable/".concat(e),method:"put"})}function c(e){return Object(a["a"])({url:"/features/batch",method:"put",data:e})}function u(){return Object(a["a"])({url:"/config",method:"get"})}function d(e){return Object(a["a"])({url:"/config",method:"put",data:e})}function b(){return Object(a["a"])({url:"/start",method:"post"})}function p(){return Object(a["a"])({url:"/stop",method:"post"})}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["a"])({url:"/futures/account",method:"get",params:e})}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["a"])({url:"/futures/positions",method:"get",params:e})}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["a"])({url:"/futures/open-orders",method:"get",params:e})}},"40a4":function(e,t,l){var a=l("38e0"),n=l("7b26"),o=l("87ef"),r=n("JSON","stringify"),i=/[\uD800-\uDFFF]/g,s=/^[\uD800-\uDBFF]$/,c=/^[\uDC00-\uDFFF]$/,u=function(e,t,l){var a=l.charAt(t-1),n=l.charAt(t+1);return s.test(e)&&!c.test(n)||c.test(e)&&!s.test(a)?"\\u"+e.charCodeAt(0).toString(16):e},d=o((function(){return'"\\udf06\\ud834"'!==r("\udf06\ud834")||'"\\udead"'!==r("\udead")}));r&&a({target:"JSON",stat:!0,forced:d},{stringify:function(e,t,l){var a=r.apply(null,arguments);return"string"==typeof a?a.replace(i,u):a}})},b5ef:function(e,t,l){"use strict";l.d(t,"a",(function(){return n}));l("1a06"),l("d987"),l("6de1");function a(e,t){if(null==e)return{};var l={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(t.includes(a))continue;l[a]=e[a]}return l}function n(e,t){if(null==e)return{};var l,n,o=a(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.includes(l)||{}.propertyIsEnumerable.call(e,l)&&(o[l]=e[l])}return o}},e6c4:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"app-container"},[l("div",{staticStyle:{"margin-bottom":"10px",display:"flex","justify-content":"space-between","align-items":"center"}},[l("div",{staticStyle:{display:"flex","flex-flow":"row wrap",gap:"10px",width:"75%"}},[l("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(t){return e.openDialog()}}},[e._v(" "+e._s(e.$t("table.add"))+" ")]),l("el-button",{attrs:{type:"success",size:"mini",loading:e.serviceLoading},on:{click:function(t){return e.enableAll(1)}}},[e._v(" "+e._s(e.$t("table.enableAllCoins"))+" ")]),l("el-button",{attrs:{type:"danger",size:"mini",loading:e.serviceLoading},on:{click:function(t){return e.enableAll(0)}}},[e._v(" "+e._s(e.$t("table.disableAllCoins"))+" ")]),l("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(t){e.dialogFormVisible2=!0}}},[e._v(" "+e._s(e.$t("table.editBatch"))+" ")]),l("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(t){return e.$router.push({name:"futuresAccount"})}}},[e._v(" "+e._s(e.$t("route.futuresAccount"))+" ")])],1),l("div",{staticStyle:{width:"25%","text-align":"right"}},[e._v(" "+e._s(e.$t("table.totalCount"))+": "+e._s(e.list.length)+" ")])]),l("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"10px"}},[l("div",{staticStyle:{display:"flex","flex-flow":"row wrap",gap:"10px"}},[l("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:e.$t("trade.coin"),size:"small"},model:{value:e.search.symbol,callback:function(t){e.$set(e.search,"symbol",t)},expression:"search.symbol"}}),l("el-select",{staticStyle:{width:"150px"},attrs:{size:"small",placeholder:"status"},model:{value:e.search.enable,callback:function(t){e.$set(e.search,"enable",t)},expression:"search.enable"}},[l("el-option",{attrs:{label:e.$t("table.all"),value:""}}),l("el-option",{attrs:{label:e.$t("table.open"),value:"1"}}),l("el-option",{attrs:{label:e.$t("table.close"),value:"0"}})],1),l("el-select",{staticStyle:{width:"150px"},attrs:{size:"small",placeholder:"margin_type"},model:{value:e.search.margin_type,callback:function(t){e.$set(e.search,"margin_type",t)},expression:"search.margin_type"}},[l("el-option",{attrs:{label:e.$t("table.all"),value:""}}),l("el-option",{attrs:{label:e.$t("trade.ISOLATED"),value:"ISOLATED"}}),l("el-option",{attrs:{label:e.$t("trade.CROSSED"),value:"CROSSED"}})],1),l("el-button",{attrs:{type:"success",size:"mini"},on:{click:e.fetchData}},[e._v(" "+e._s(e.$t("table.search"))+" ")])],1),l("div",{staticStyle:{display:"flex","flex-flow":"row wrap",gap:"10px","align-items":"center"}},[l("el-select",{staticStyle:{width:"80px"},attrs:{size:"small"},on:{change:e.changeRefreshInterval},model:{value:e.interval,callback:function(t){e.interval=t},expression:"interval"}},e._l(30,(function(e){return l("el-option",{key:e,attrs:{label:e+"s",value:e}})})),1),l("span",[e._v(e._s(e.$t("table.refreshInterval")))])],1)]),l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"",size:"mini","row-key":e.rowKey,"expand-row-keys":e.expandKeys,"highlight-current-row":""},on:{"sort-change":e.sortChange,"expand-change":e.expandChange}},[l("el-table-column",{attrs:{label:e.$t("trade.coin"),align:"center","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.symbol)+" ")]}}])}),l("el-table-column",{attrs:{label:e.$t("trade.strategyType"),align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-select",{attrs:{size:"small"},on:{change:function(l){return e.edit(t.row)}},model:{value:t.row.strategy_type,callback:function(l){e.$set(t.row,"strategy_type",l)},expression:"scope.row.strategy_type"}},[l("el-option",{attrs:{label:e.$t("strategyType.global"),value:"global"}}),l("el-option",{attrs:{label:e.$t("strategyType.custom"),value:"custom"}}),l("el-option",{attrs:{label:e.$t("strategyType.line1"),value:"line1"}}),l("el-option",{attrs:{label:e.$t("strategyType.line2"),value:"line2"}}),l("el-option",{attrs:{label:e.$t("strategyType.line3"),value:"line3"}}),l("el-option",{attrs:{label:e.$t("strategyType.line4"),value:"line4"}}),l("el-option",{attrs:{label:e.$t("strategyType.line5"),value:"line5"}}),l("el-option",{attrs:{label:e.$t("strategyType.line6"),value:"line6"}}),l("el-option",{attrs:{label:e.$t("strategyType.line7"),value:"line7"}})],1)]}}])}),l("el-table-column",{attrs:{label:e.$t("trade.technology"),align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(l){return e.openTechnologyDialog(t.row)}}},[e._v(" "+e._s(e.$t("trade.technology"))+" ")])]}}])}),l("el-table-column",{attrs:{label:e.$t("trade.strategy"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(l){return e.openStrategyDialog(t.row)}}},[e._v(" "+e._s(e.$t("trade.strategy"))+" ")])]}}])}),l("el-table-column",{attrs:{label:e.$t("trade.nowPrice"),align:"center","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.round(t.row.close,10))+" ")]}}])}),l("el-table-column",{attrs:{label:"24h↑↓",align:"center","show-overflow-tooltip":"",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.percentChange<0?l("span",{staticStyle:{color:"red"}},[e._v(e._s(t.row.percentChange)+"%↓ ")]):l("span",{staticStyle:{color:"green"}},[e._v(e._s(t.row.percentChange)+"%↑ ")])]}}])}),l("el-table-column",{attrs:{label:e.$t("trade.marginType"),align:"center",width:"130"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-select",{attrs:{size:"small"},on:{change:function(l){return e.edit(t.row)}},model:{value:t.row.marginType,callback:function(l){e.$set(t.row,"marginType",l)},expression:"scope.row.marginType"}},[l("el-option",{attrs:{label:e.$t("trade.ISOLATED"),value:"ISOLATED"}}),l("el-option",{attrs:{label:e.$t("trade.CROSSED"),value:"CROSSED"}})],1)]}}])}),l("el-table-column",{attrs:{label:e.$t("trade.usdt"),align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{staticClass:"edit-input",attrs:{size:"small"},on:{blur:function(l){return e.edit(t.row)}},model:{value:t.row.usdt,callback:function(l){e.$set(t.row,"usdt",l)},expression:"scope.row.usdt"}})]}}])}),l("el-table-column",{attrs:{label:e.$t("trade.leverage"),align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{staticClass:"edit-input",attrs:{size:"small"},on:{blur:function(l){return e.edit(t.row)}},model:{value:t.row.leverage,callback:function(l){e.$set(t.row,"leverage",l)},expression:"scope.row.leverage"}})]}}])}),l("el-table-column",{attrs:{label:e.$t("trade.profitRate"),align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{staticClass:"edit-input",attrs:{size:"small"},on:{blur:function(l){return e.edit(t.row)}},model:{value:t.row.profit,callback:function(l){e.$set(t.row,"profit",l)},expression:"scope.row.profit"}})]}}])}),l("el-table-column",{attrs:{label:e.$t("trade.lossRate"),align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{staticClass:"edit-input",attrs:{size:"small"},on:{blur:function(l){return e.edit(t.row)}},model:{value:t.row.loss,callback:function(l){e.$set(t.row,"loss",l)},expression:"scope.row.loss"}})]}}])}),l("el-table-column",{attrs:{label:e.$t("trade.enable"),align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[l("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},on:{change:function(t){return e.isChangeBuy(t,a)}},model:{value:a.enable,callback:function(t){e.$set(a,"enable",t)},expression:"row.enable"}})]}}])}),l("el-table-column",{attrs:{label:e.$t("table.actions"),align:"center",width:"80","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[l("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.del(a)}}},[e._v(e._s(e.$t("table.delete"))+" ")])]}}])})],1),l("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[l("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{model:e.info,"label-position":"left","label-width":"100px"}},[l("el-form-item",{attrs:{label:e.$t("trade.coin"),prop:"symbol"}},[l("el-input",{model:{value:e.info.symbol,callback:function(t){e.$set(e.info,"symbol",t)},expression:"info.symbol"}})],1)],1),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),l("el-button",{attrs:{type:"primary",loading:e.dialogLoading},on:{click:function(t){return e.addCoin(e.info)}}},[e._v(e._s(e.$t("table.confirm")))])],1)],1),l("el-dialog",{attrs:{title:e.dialogTitle2,visible:e.dialogFormVisible2},on:{"update:visible":function(t){e.dialogFormVisible2=t}}},[l("el-form",{ref:"dataForm2",staticStyle:{width:"400px","margin-left":"50px"},attrs:{model:e.batchInfo,"label-position":"left","label-width":"100px"}},[l("el-form-item",{attrs:{label:e.$t("trade.strategyType"),prop:"strategyType"}},[l("el-select",{attrs:{size:"small"},model:{value:e.batchInfo.strategyType,callback:function(t){e.$set(e.batchInfo,"strategyType",t)},expression:"batchInfo.strategyType"}},[l("el-option",{attrs:{label:e.$t("strategyType.global"),value:"global"}}),l("el-option",{attrs:{label:e.$t("strategyType.custom"),value:"custom"}}),l("el-option",{attrs:{label:e.$t("strategyType.line1"),value:"line1"}}),l("el-option",{attrs:{label:e.$t("strategyType.line2"),value:"line2"}}),l("el-option",{attrs:{label:e.$t("strategyType.line3"),value:"line3"}}),l("el-option",{attrs:{label:e.$t("strategyType.line4"),value:"line4"}}),l("el-option",{attrs:{label:e.$t("strategyType.line5"),value:"line5"}}),l("el-option",{attrs:{label:e.$t("strategyType.line6"),value:"line6"}}),l("el-option",{attrs:{label:e.$t("strategyType.line7"),value:"line7"}})],1)],1),l("el-form-item",{attrs:{label:e.$t("trade.marginType"),prop:"marginType"}},[l("el-select",{attrs:{size:"small"},model:{value:e.batchInfo.marginType,callback:function(t){e.$set(e.batchInfo,"marginType",t)},expression:"batchInfo.marginType"}},[l("el-option",{attrs:{label:e.$t("trade.ISOLATED"),value:"ISOLATED"}}),l("el-option",{attrs:{label:e.$t("trade.CROSSED"),value:"CROSSED"}})],1)],1),l("el-form-item",{attrs:{label:e.$t("trade.usdt"),prop:"usdt"}},[l("el-input",{model:{value:e.batchInfo.usdt,callback:function(t){e.$set(e.batchInfo,"usdt",t)},expression:"batchInfo.usdt"}})],1),l("el-form-item",{attrs:{label:e.$t("trade.leverage"),prop:"leverage"}},[l("el-input",{model:{value:e.batchInfo.leverage,callback:function(t){e.$set(e.batchInfo,"leverage",t)},expression:"batchInfo.leverage"}})],1),l("el-form-item",{attrs:{label:e.$t("trade.profitRate"),prop:"profit"}},[l("el-input",{model:{value:e.batchInfo.profit,callback:function(t){e.$set(e.batchInfo,"profit",t)},expression:"batchInfo.profit"}})],1),l("el-form-item",{attrs:{label:e.$t("trade.lossRate"),prop:"loss"}},[l("el-input",{model:{value:e.batchInfo.loss,callback:function(t){e.$set(e.batchInfo,"loss",t)},expression:"batchInfo.loss"}})],1)],1),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.dialogFormVisible2=!1}}},[e._v(e._s(e.$t("table.cancel")))]),l("el-button",{attrs:{type:"primary",loading:e.dialogLoading2},on:{click:function(t){return e.batchEdit(e.batchInfo)}}},[e._v(e._s(e.$t("table.confirm")))])],1)],1),l("el-dialog",{attrs:{title:e.dialogTechnologyTitle,visible:e.dialogTechnologyVisible},on:{"update:visible":function(t){e.dialogTechnologyVisible=t}}},[l("el-tabs",{attrs:{value:"ma"}},[l("el-tab-pane",{attrs:{label:"ma",name:"ma"}},[l("div",[l("el-button",{attrs:{type:"primary"},on:{click:e.addMa}},[e._v(e._s(e.$t("table.add")))])],1),l("el-table",{staticStyle:{"margin-top":"10px"},attrs:{data:e.technology.ma,border:"",fit:"",size:"mini","highlight-current-row":""}},[l("el-table-column",{attrs:{label:e.$t("technology.name"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:t.row.name,callback:function(l){e.$set(t.row,"name",l)},expression:"scope.row.name"}})]}}])}),l("el-table-column",{attrs:{label:e.$t("technology.klineInterval"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-select",{attrs:{size:"small"},model:{value:t.row.kline_interval,callback:function(l){e.$set(t.row,"kline_interval",l)},expression:"scope.row.kline_interval"}},e._l(e.klineInterval,(function(e){return l("el-option",{key:e,attrs:{label:e,value:e}})})),1)]}}])}),l("el-table-column",{attrs:{label:e.$t("technology.period"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{staticClass:"edit-input",attrs:{type:"number",size:"small"},model:{value:t.row.period,callback:function(l){e.$set(t.row,"period",l)},expression:"scope.row.period"}})]}}])}),l("el-table-column",{attrs:{label:e.$t("technology.enable"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},model:{value:t.row.enable,callback:function(l){e.$set(t.row,"enable",l)},expression:"scope.row.enable"}})]}}])}),l("el-table-column",{attrs:{label:e.$t("table.actions"),align:"center",width:"100","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(l){return e.delMa(t)}}},[e._v(e._s(e.$t("table.delete"))+" ")])]}}])})],1)],1),l("el-tab-pane",{attrs:{label:"ema",name:"ema"}},[l("div",[l("el-button",{attrs:{type:"primary"},on:{click:e.addEma}},[e._v(e._s(e.$t("table.add")))])],1),l("el-table",{staticStyle:{"margin-top":"10px"},attrs:{data:e.technology.ema,border:"",fit:"",size:"mini","highlight-current-row":""}},[l("el-table-column",{attrs:{label:e.$t("technology.name"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:t.row.name,callback:function(l){e.$set(t.row,"name",l)},expression:"scope.row.name"}})]}}])}),l("el-table-column",{attrs:{label:e.$t("technology.klineInterval"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-select",{attrs:{size:"small"},model:{value:t.row.kline_interval,callback:function(l){e.$set(t.row,"kline_interval",l)},expression:"scope.row.kline_interval"}},e._l(e.klineInterval,(function(e){return l("el-option",{key:e,attrs:{label:e,value:e}})})),1)]}}])}),l("el-table-column",{attrs:{label:e.$t("technology.period"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{staticClass:"edit-input",attrs:{type:"number",size:"small"},model:{value:t.row.period,callback:function(l){e.$set(t.row,"period",l)},expression:"scope.row.period"}})]}}])}),l("el-table-column",{attrs:{label:e.$t("technology.enable"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},model:{value:t.row.enable,callback:function(l){e.$set(t.row,"enable",l)},expression:"scope.row.enable"}})]}}])}),l("el-table-column",{attrs:{label:e.$t("table.actions"),align:"center",width:"100","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(l){return e.delEma(t)}}},[e._v(e._s(e.$t("table.delete"))+" ")])]}}])})],1)],1),l("el-tab-pane",{attrs:{label:"rsi",name:"rsi"}},[l("div",[l("el-button",{attrs:{type:"primary"},on:{click:e.addRsi}},[e._v(e._s(e.$t("table.add")))])],1),l("el-table",{staticStyle:{"margin-top":"10px"},attrs:{data:e.technology.rsi,border:"",fit:"",size:"mini","highlight-current-row":""}},[l("el-table-column",{attrs:{label:e.$t("technology.name"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:t.row.name,callback:function(l){e.$set(t.row,"name",l)},expression:"scope.row.name"}})]}}])}),l("el-table-column",{attrs:{label:e.$t("technology.klineInterval"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-select",{attrs:{size:"small"},model:{value:t.row.kline_interval,callback:function(l){e.$set(t.row,"kline_interval",l)},expression:"scope.row.kline_interval"}},e._l(e.klineInterval,(function(e){return l("el-option",{key:e,attrs:{label:e,value:e}})})),1)]}}])}),l("el-table-column",{attrs:{label:e.$t("technology.period"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{staticClass:"edit-input",attrs:{type:"number",size:"small"},model:{value:t.row.period,callback:function(l){e.$set(t.row,"period",l)},expression:"scope.row.period"}})]}}])}),l("el-table-column",{attrs:{label:e.$t("technology.enable"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},model:{value:t.row.enable,callback:function(l){e.$set(t.row,"enable",l)},expression:"scope.row.enable"}})]}}])}),l("el-table-column",{attrs:{label:e.$t("table.actions"),align:"center",width:"100","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(l){return e.delRsi(t)}}},[e._v(e._s(e.$t("table.delete"))+" ")])]}}])})],1)],1),l("el-tab-pane",{attrs:{label:"kc",name:"kc"}},[l("div",[l("el-button",{attrs:{type:"primary"},on:{click:e.addKc}},[e._v(e._s(e.$t("table.add")))])],1),l("el-table",{staticStyle:{"margin-top":"10px"},attrs:{data:e.technology.kc,border:"",fit:"",size:"mini","highlight-current-row":""}},[l("el-table-column",{attrs:{label:e.$t("technology.name"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:t.row.name,callback:function(l){e.$set(t.row,"name",l)},expression:"scope.row.name"}})]}}])}),l("el-table-column",{attrs:{label:e.$t("technology.klineInterval"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-select",{attrs:{size:"small"},model:{value:t.row.kline_interval,callback:function(l){e.$set(t.row,"kline_interval",l)},expression:"scope.row.kline_interval"}},e._l(e.klineInterval,(function(e){return l("el-option",{key:e,attrs:{label:e,value:e}})})),1)]}}])}),l("el-table-column",{attrs:{label:e.$t("technology.period"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{staticClass:"edit-input",attrs:{type:"number",size:"small"},model:{value:t.row.period,callback:function(l){e.$set(t.row,"period",l)},expression:"scope.row.period"}})]}}])}),l("el-table-column",{attrs:{label:e.$t("technology.multiplier"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{staticClass:"edit-input",attrs:{type:"number",size:"small"},model:{value:t.row.multiplier,callback:function(l){e.$set(t.row,"multiplier",l)},expression:"scope.row.multiplier"}})]}}])}),l("el-table-column",{attrs:{label:e.$t("technology.enable"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},model:{value:t.row.enable,callback:function(l){e.$set(t.row,"enable",l)},expression:"scope.row.enable"}})]}}])}),l("el-table-column",{attrs:{label:e.$t("table.actions"),align:"center",width:"100","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(l){return e.delKc(t)}}},[e._v(e._s(e.$t("table.delete"))+" ")])]}}])})],1)],1),l("el-tab-pane",{attrs:{label:"boll",name:"boll"}},[l("div",[l("el-button",{attrs:{type:"primary"},on:{click:e.addBoll}},[e._v(e._s(e.$t("table.add")))])],1),l("el-table",{staticStyle:{"margin-top":"10px"},attrs:{data:e.technology.boll,border:"",fit:"",size:"mini","highlight-current-row":""}},[l("el-table-column",{attrs:{label:e.$t("technology.name"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:t.row.name,callback:function(l){e.$set(t.row,"name",l)},expression:"scope.row.name"}})]}}])}),l("el-table-column",{attrs:{label:e.$t("technology.klineInterval"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-select",{attrs:{size:"small"},model:{value:t.row.kline_interval,callback:function(l){e.$set(t.row,"kline_interval",l)},expression:"scope.row.kline_interval"}},e._l(e.klineInterval,(function(e){return l("el-option",{key:e,attrs:{label:e,value:e}})})),1)]}}])}),l("el-table-column",{attrs:{label:e.$t("technology.period"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{staticClass:"edit-input",attrs:{type:"number",size:"small"},model:{value:t.row.period,callback:function(l){e.$set(t.row,"period",l)},expression:"scope.row.period"}})]}}])}),l("el-table-column",{attrs:{label:e.$t("technology.std_dev_multiplier"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{staticClass:"edit-input",attrs:{type:"number",size:"small"},model:{value:t.row.std_dev_multiplier,callback:function(l){e.$set(t.row,"std_dev_multiplier",l)},expression:"scope.row.std_dev_multiplier"}})]}}])}),l("el-table-column",{attrs:{label:e.$t("technology.enable"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},model:{value:t.row.enable,callback:function(l){e.$set(t.row,"enable",l)},expression:"scope.row.enable"}})]}}])}),l("el-table-column",{attrs:{label:e.$t("table.actions"),align:"center",width:"100","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(l){return e.delBoll(t)}}},[e._v(e._s(e.$t("table.delete"))+" ")])]}}])})],1)],1)],1),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.dialogTechnologyVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),l("el-button",{attrs:{type:"primary",loading:e.dialogLoading},on:{click:function(t){return e.confirmTechnology()}}},[e._v(e._s(e.$t("table.confirm")))])],1)],1),l("el-dialog",{attrs:{title:e.dialogStrategyTitle,visible:e.dialogStrategyVisible,width:"75%"},on:{"update:visible":function(t){e.dialogStrategyVisible=t}}},[l("div",[l("el-button",{attrs:{type:"primary"},on:{click:e.addStrategy}},[e._v(e._s(e.$t("table.add")))])],1),l("el-table",{staticStyle:{"margin-top":"10px"},attrs:{data:e.strategy,border:"",fit:"",size:"mini","highlight-current-row":""}},[l("el-table-column",{attrs:{label:e.$t("strategy.name"),align:"center",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:t.row.name,callback:function(l){e.$set(t.row,"name",l)},expression:"scope.row.name"}})]}}])}),l("el-table-column",{attrs:{label:e.$t("strategy.code"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{staticClass:"edit-input",attrs:{type:"textarea",rows:6,size:"small"},model:{value:t.row.code,callback:function(l){e.$set(t.row,"code",l)},expression:"scope.row.code"}})]}}])}),l("el-table-column",{attrs:{label:e.$t("strategy.type"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-select",{attrs:{size:"small"},model:{value:t.row.type,callback:function(l){e.$set(t.row,"type",l)},expression:"scope.row.type"}},[l("el-option",{attrs:{label:e.$t("trade.long"),value:"long"}}),l("el-option",{attrs:{label:e.$t("trade.short"),value:"short"}})],1)]}}])}),l("el-table-column",{attrs:{label:e.$t("strategy.enable"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},model:{value:t.row.enable,callback:function(l){e.$set(t.row,"enable",l)},expression:"scope.row.enable"}})]}}])}),l("el-table-column",{attrs:{label:e.$t("table.actions"),align:"center",width:"100","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(l){return e.delStrategy(t)}}},[e._v(e._s(e.$t("table.delete"))+" ")])]}}])})],1),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.dialogStrategyVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),l("el-button",{attrs:{type:"primary",loading:e.dialogLoading},on:{click:function(t){return e.confirmStrategy()}}},[e._v(e._s(e.$t("table.confirm")))])],1)],1)],1)},n=[],o=l("b8c8"),r=l("b5ef"),i=l("8204"),s=l("dd36"),c=l("fee1"),u=(l("e168"),l("3dd5"),l("4cc3"),l("8b03"),l("16dd"),l("40a4"),l("374d"),l("5227"),l("90c8"),l("8d8a"),l("1a71"),l("f2e9"),l("2465")),d=l("1888"),b=["id","enable","leverage","usdt"],p={data:function(){return{klineInterval:["1m","3m","5m","15m","30m","1h","2h","4h","6h","8h","12h","1d","3d","1w","1M"],list:[],sort:"+",listLoading:!1,serviceLoading:!1,enableLoading:!1,buyAll:!0,sellAll:!0,search:{symbol:"",enable:"",margin_type:""},dialogFormVisible:!1,dialogLoading:!1,dialogTitle:this.$t("table.add"),info:{},dialogFormVisible2:!1,dialogLoading2:!1,dialogTitle2:this.$t("table.editBatch"),batchInfo:{usdt:void 0,profit:void 0,loss:void 0,marginType:void 0,leverage:void 0,strategyType:void 0},rowKey:function(e){return e.symbol+e.id},expandKeys:[],timeId:null,interval:30,dialogTechnologyTitle:"",dialogTechnologyVisible:!1,technologySymbolId:0,technology:{ma:[],ema:[],rsi:[],kc:[],boll:[]},dialogStrategyTitle:"",dialogStrategyVisible:!1,strategySymbolId:0,strategy:[]}},computed:{allProfit:function(){var e=this.list.reduce((function(e,t){return e+t.nowProfit}),0);return Object(d["a"])(e,2)}},activated:function(){console.log("activated"),this.interval=localStorage.getItem("refreshInterval")||30,this.fetchData()},deactivated:function(){clearInterval(this.timeId)},created:function(){var e=this;return Object(c["a"])(Object(s["a"])().mark((function t(){var l;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return l=localStorage.getItem("futures_search"),l&&(e.search=JSON.parse(l)),e.interval=localStorage.getItem("refreshInterval")||30,t.next=5,e.fetchData();case 5:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){localStorage.setItem("futures_search",JSON.stringify(this.search)),clearInterval(this.timeId)},methods:{changeRefreshInterval:function(e){var t=this;localStorage.setItem("refreshInterval",e),clearInterval(this.timeId),this.timeId=setInterval((function(){return t.fetchData()}),1e3*e)},round:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Object(d["a"])(e,t)},expandChange:function(e,t){this.expandKeys=t.map((function(e){return e.symbol}))},sortChange:function(e){var t=e.order;this.sort="ascending"===t?"+":"-",this.fetchData()},fetchData:function(){var e=this;return Object(c["a"])(Object(s["a"])().mark((function t(){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:clearInterval(e.timeId),e.getFutures(),e.timeId=setInterval((function(){return e.getFutures()}),1e3*e.interval);case 3:case"end":return t.stop()}}),t)})))()},getFutures:function(){var e=this;return Object(c["a"])(Object(s["a"])().mark((function t(){var l,a,n;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return l=e.search,t.next=3,Object(u["f"])(Object(i["a"])({sort:e.sort},l));case 3:a=t.sent,n=a.data,e.list=n.map((function(e){return Object(i["a"])(Object(i["a"])({},e),{},{enable:e.enable>0})}));case 6:case"end":return t.stop()}}),t)})))()},edit:function(e){var t=this;return Object(c["a"])(Object(s["a"])().mark((function l(){var a,n,o,c,d;return Object(s["a"])().wrap((function(l){while(1)switch(l.prev=l.next){case 0:return a=e.id,n=e.enable,o=e.leverage,c=e.usdt,d=Object(r["a"])(e,b),l.prev=1,l.next=4,Object(u["k"])(a,Object(i["a"])(Object(i["a"])({},d),{},{leverage:Number(o),usdt:c,enable:n?1:0}));case 4:return t.$message({message:t.$t("table.editSuccess"),type:"success"}),l.next=7,t.fetchData();case 7:l.next=12;break;case 9:l.prev=9,l.t0=l["catch"](1),t.$message({message:t.$t("table.editFail"),type:"success"});case 12:case"end":return l.stop()}}),l,null,[[1,9]])})))()},del:function(e){var t=this;this.$confirm("".concat(this.$t("table.deleteConfirm")," ").concat(e.symbol,"?")).then(Object(c["a"])(Object(s["a"])().mark((function l(){return Object(s["a"])().wrap((function(l){while(1)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,Object(u["c"])(e.id);case 3:return t.$message({message:t.$t("table.deleteSuccess"),type:"success"}),l.next=6,t.fetchData();case 6:l.next=11;break;case 8:l.prev=8,l.t0=l["catch"](0),t.$message({message:t.$t("table.deleteFail"),type:"success"});case 11:case"end":return l.stop()}}),l,null,[[0,8]])})))).catch((function(){}))},enableAll:function(e){var t=this,l=1===e?this.$t("table.enableAllCoins"):this.$t("table.disableAllCoins");this.$confirm(l).then(Object(c["a"])(Object(s["a"])().mark((function l(){return Object(s["a"])().wrap((function(l){while(1)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,Object(u["d"])(e);case 3:return t.$message({message:t.$t("table.actionSuccess"),type:"success"}),l.next=6,t.fetchData();case 6:l.next=11;break;case 8:l.prev=8,l.t0=l["catch"](0),t.$message({message:t.$t("table.actionFail"),type:"success"});case 11:case"end":return l.stop()}}),l,null,[[0,8]])})))).catch((function(){}))},isChangeBuy:function(e,t){var l=this;return Object(c["a"])(Object(s["a"])().mark((function e(){return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.edit(t);case 2:case"end":return e.stop()}}),e)})))()},openDialog:function(){this.dialogTitle=this.$t("table.add"),this.dialogFormVisible=!0},addCoin:function(e){var t=this;return Object(c["a"])(Object(s["a"])().mark((function l(){var a;return Object(s["a"])().wrap((function(l){while(1)switch(l.prev=l.next){case 0:return a={symbol:e.symbol,quantity:20,percentChange:0,close:0,open:0,low:0,enable:1,updateTime:+new Date},l.next=3,Object(u["a"])(a);case 3:t.dialogFormVisible=!1;case 4:case"end":return l.stop()}}),l)})))()},batchEdit:function(e){var t=this;return Object(c["a"])(Object(s["a"])().mark((function l(){return Object(s["a"])().wrap((function(l){while(1)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,Object(u["b"])(e);case 3:return t.batchInfo={usdt:void 0,profit:void 0,loss:void 0,marginType:void 0,leverage:void 0,strategyType:void 0},t.dialogFormVisible2=!1,l.next=7,t.fetchData();case 7:l.next=12;break;case 9:l.prev=9,l.t0=l["catch"](0),t.$message({message:t.$t("table.actionFail"),type:"success"});case 12:case"end":return l.stop()}}),l,null,[[0,9]])})))()},openTechnologyDialog:function(e){var t=this;return Object(c["a"])(Object(s["a"])().mark((function l(){return Object(s["a"])().wrap((function(l){while(1)switch(l.prev=l.next){case 0:if(t.technologySymbolId=e.id,e.technology)try{t.technology=JSON.parse(e.technology)}catch(a){t.technology={ma:[],ema:[],rsi:[],kc:[],boll:[]}}else t.technology={ma:[],ema:[],rsi:[],kc:[],boll:[]};t.dialogTechnologyTitle="".concat(e.symbol," ").concat(t.$t("trade.technology")),t.dialogTechnologyVisible=!0;case 4:case"end":return l.stop()}}),l)})))()},openStrategyDialog:function(e){var t=this;return Object(c["a"])(Object(s["a"])().mark((function l(){return Object(s["a"])().wrap((function(l){while(1)switch(l.prev=l.next){case 0:if(t.strategySymbolId=e.id,e.strategy)try{t.strategy=JSON.parse(e.strategy)}catch(a){t.strategy=[]}else t.strategy=[];t.dialogStrategyTitle="".concat(e.symbol," ").concat(t.$t("trade.strategy")),t.dialogStrategyVisible=!0;case 4:case"end":return l.stop()}}),l)})))()},openKlineDialog:function(e){var t=this;return Object(c["a"])(Object(s["a"])().mark((function l(){return Object(s["a"])().wrap((function(l){while(1)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,t.getKcLineChart(e);case 3:l.next=10;break;case 5:return l.prev=5,l.t0=l["catch"](0),console.log(l.t0),t.$message({message:t.$t("table.actionFail"),type:"error"}),l.abrupt("return");case 10:t.dialogTitleKline="".concat(e.symbol,"(").concat(e.kline_interval,")"),t.dialogKlineVisible=!0;case 12:case"end":return l.stop()}}),l,null,[[0,5]])})))()},confirmTechnology:function(){var e=this;return Object(c["a"])(Object(s["a"])().mark((function t(){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,Object.keys(e.technology).forEach((function(t){e.technology[t].forEach((function(e){e.period&&(e.period=Number(e.period)),e.multiplier&&(e.multiplier=Number(e.multiplier)),e.std_dev_multiplier&&(e.std_dev_multiplier=Number(e.std_dev_multiplier))}))})),t.next=4,Object(u["k"])(e.technologySymbolId,{technology:JSON.stringify(e.technology)});case 4:return e.$message({message:e.$t("table.actionSuccess"),type:"success"}),t.next=7,e.fetchData();case 7:t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),e.$message({message:e.$t("table.actionFail"),type:"success"});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},confirmStrategy:function(){var e=this;return Object(c["a"])(Object(s["a"])().mark((function t(){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(u["k"])(e.strategySymbolId,{strategy:JSON.stringify(e.strategy)});case 3:return e.$message({message:e.$t("table.actionSuccess"),type:"success"}),t.next=6,e.fetchData();case 6:t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$message({message:e.$t("table.actionFail"),type:"success"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},addMa:function(){this.technology.ma=[].concat(Object(o["a"])(this.technology.ma),[{name:"",kline_interval:"",period:14,enable:!1}])},delMa:function(e){this.technology.ma=this.technology.ma.filter((function(t,l){return l!==e.$index}))},addEma:function(){this.technology.ema=[].concat(Object(o["a"])(this.technology.ema),[{name:"",kline_interval:"",period:14,enable:!1}])},delEma:function(e){this.technology.ema=this.technology.ema.filter((function(t,l){return l!==e.$index}))},addRsi:function(){this.technology.rsi=[].concat(Object(o["a"])(this.technology.rsi),[{name:"",kline_interval:"",period:14,enable:!1}])},delRsi:function(e){this.technology.rsi=this.technology.rsi.filter((function(t,l){return l!==e.$index}))},addKc:function(){this.technology.kc=[].concat(Object(o["a"])(this.technology.kc),[{name:"",kline_interval:"",period:50,multiplier:2.75,enable:!1}])},delKc:function(e){this.technology.kc=this.technology.kc.filter((function(t,l){return l!==e.$index}))},addBoll:function(){this.technology.boll=[].concat(Object(o["a"])(this.technology.boll),[{name:"",kline_interval:"",period:21,std_dev_multiplier:2,enable:!1}])},delBoll:function(e){this.technology.boll=this.technology.boll.filter((function(t,l){return l!==e.$index}))},addStrategy:function(){this.strategy=[].concat(Object(o["a"])(this.strategy),[{name:"",type:"",code:"",enable:!1}])},delStrategy:function(e){this.strategy=this.strategy.filter((function(t,l){return l!==e.$index}))}}},f=p,m=l("9bf6"),g=Object(m["a"])(f,a,n,!1,null,null,null);t["default"]=g.exports}}]);
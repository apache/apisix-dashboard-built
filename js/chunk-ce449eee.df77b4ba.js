/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ce449eee"],{"333d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},i=[],r=n("d225"),o=n("b0b4"),c=n("308d"),u=n("6bb5"),s=n("4e2b"),l=n("9ab4"),d=n("60a3"),p=function(t,e,n,a){return t/=a/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)},f=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),b=function(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t},h=function(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop},m=function(t,e,n){var a=h(),i=t-a,r=20,o=0;e="undefined"===typeof e?500:e;var c=function t(){o+=r;var c=p(o,a,i,e);b(c),o<e?f(t):n&&"function"===typeof n&&n()};c()},g=function(t){function e(){return Object(r["a"])(this,e),Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),Object(o["a"])(e,[{key:"handleSizeChange",value:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&m(0,800)}},{key:"handleCurrentChange",value:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&m(0,800)}},{key:"currentPage",get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},{key:"pageSize",get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}]),e}(d["c"]);l["a"]([Object(d["b"])({required:!0})],g.prototype,"total",void 0),l["a"]([Object(d["b"])({default:1})],g.prototype,"page",void 0),l["a"]([Object(d["b"])({default:20})],g.prototype,"limit",void 0),l["a"]([Object(d["b"])({default:function(){return[10,20,30,50]}})],g.prototype,"pageSizes",void 0),l["a"]([Object(d["b"])({default:"total, sizes, prev, pager, next, jumper"})],g.prototype,"layout",void 0),l["a"]([Object(d["b"])({default:!0})],g.prototype,"background",void 0),l["a"]([Object(d["b"])({default:!0})],g.prototype,"autoScroll",void 0),l["a"]([Object(d["b"])({default:!1})],g.prototype,"hidden",void 0),g=l["a"]([Object(d["a"])({name:"Pagination"})],g);var v=g,y=v,j=(n("42e2"),n("2877")),w=Object(j["a"])(y,a,i,!1,null,"1ff35890",null);e["a"]=w.exports},"42e2":function(t,e,n){"use strict";var a=n("5390"),i=n.n(a);i.a},4917:function(t,e,n){"use strict";var a=n("cb7c"),i=n("9def"),r=n("0390"),o=n("5f1b");n("214f")("match",1,(function(t,e,n,c){return[function(n){var a=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,a):new RegExp(n)[e](String(a))},function(t){var e=c(n,t,this);if(e.done)return e.value;var u=a(t),s=String(this);if(!u.global)return o(u,s);var l=u.unicode;u.lastIndex=0;var d,p=[],f=0;while(null!==(d=o(u,s))){var b=String(d[0]);p[f]=b,""===b&&(u.lastIndex=r(s,i(u.lastIndex),l)),f++}return 0===f?null:p}]}))},5313:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"e",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"a",(function(){return u}));var a=n("b32d"),i=function(){return Object(a["a"])({url:"/ssl",method:"GET"})},r=function(t,e){return Object(a["a"])({url:"/ssl/".concat(t),method:"PUT",data:e})},o=function(t){return Object(a["a"])({url:"/ssl/".concat(t),method:"GET"})},c=function(t){return Object(a["a"])({url:"/ssl/".concat(t),method:"DELETE"})},u=function(t){return Object(a["a"])({url:"/ssl",method:"POST",data:t})}},5390:function(t,e,n){},"56e6":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("\n      "+t._s(t.$t("table.add"))+"\n    ")])],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.tableData,border:!1,fit:"","highlight-current-row":"","default-sort":{prop:"id",order:"descending"}},on:{"sort-change":t.sortChange}},[t._l(t.tableKeys,(function(t,e){return n("el-table-column",{key:e,attrs:{label:t.key,prop:t.key,width:t.width,"class-name":"status-col"}})})),n("el-table-column",{attrs:{label:t.$t("table.actions"),align:"center",width:"230","class-name":"fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleToEdit(a)}}},[t._v("\n          "+t._s(t.$t("table.edit"))+"\n        ")]),"deleted"!==a.status?n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(e){return t.handleRemove(a)}}},[t._v("\n          "+t._s(t.$t("table.delete"))+"\n        ")]):t._e()]}}])})],2)],1)},i=[],r=(n("a481"),n("4917"),n("75fc")),o=(n("96cf"),n("3b8d")),c=n("d225"),u=n("b0b4"),s=n("308d"),l=n("6bb5"),d=n("4e2b"),p=n("9ab4"),f=n("60a3"),b=n("333d"),h=n("5313"),m=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(s["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.tableKey=0,t.list=[],t.total=0,t.listLoading=!0,t.listQuery={page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"},t.tableData=[],t.tableKeys=[],t}return Object(d["a"])(e,t),Object(u["a"])(e,[{key:"created",value:function(){this.getList()}},{key:"getList",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n,a,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.listLoading=!0,this.tableKeys=[{key:"id",width:100},{key:"sni",width:300}],t.next=4,Object(h["c"])();case 4:e=t.sent,n=e.node.nodes,a=void 0===n?[]:n,a=Object(r["a"])(a).map((function(t){var e=t.key.match(/\/([0-9]+)/)[1],n=parseInt(e.replace(/^(0+)/,""));return{id:n,realId:e,sni:t.value.sni}})),this.tableData=a,this.total=a.length,setTimeout((function(){i.listLoading=!1}),500);case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"handleFilter",value:function(){this.listQuery.page=1,this.getList()}},{key:"handleRemove",value:function(t){var e=this;this.$confirm("Do you want to remove ssl ".concat(t.id,"?"),"Warning",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(h["d"])(t.realId);case 2:e.getList(),e.$message.success("Remove ssl ".concat(t.id," successfully!"));case 4:case"end":return n.stop()}}),n)}))))}},{key:"sortChange",value:function(t){var e=t.prop,n=t.order;"id"===e&&this.sortByID(n)}},{key:"sortByID",value:function(t){this.listQuery.sort="ascending"===t?"+id":"-id",this.handleFilter()}},{key:"handleCreate",value:function(){this.$router.push({name:"SchemaSSLCreate"})}},{key:"handleToEdit",value:function(t){this.$router.push({name:"SchemaSSLEdit",params:{id:t.realId}})}}]),e}(f["c"]);m=p["a"]([Object(f["a"])({name:"UpstreamList",components:{Pagination:b["a"]}})],m);var g=m,v=g,y=(n("646b"),n("2877")),j=Object(y["a"])(v,a,i,!1,null,null,null);e["default"]=j.exports},"646b":function(t,e,n){"use strict";var a=n("8648"),i=n.n(a);i.a},8648:function(t,e,n){t.exports={menuBg:"#304156",menuText:"#bfcbd9",menuActiveText:"#409eff"}},b32d:function(t,e,n){"use strict";var a=n("bc3a"),i=n.n(a),r=n("5c96"),o=i.a.create({baseURL:"/apisix/admin/",timeout:5e3});o.interceptors.request.use((function(t){return t}),(function(t){Promise.reject(t)})),o.interceptors.response.use((function(t){return t.data}),(function(t){return Object(r["Message"])({message:t.response.data.error_msg||t.message,type:"error",duration:5e3}),Promise.reject(t)})),e["a"]=o}}]);
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
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49cd710b"],{2017:function(e,t,n){"use strict";var r=n("25ae"),a=n.n(r);a.a},"25ae":function(e,t,n){e.exports={menuBg:"#304156",menuText:"#bfcbd9",menuActiveText:"#409eff"}},"8b1a":function(e,t,n){"use strict";var r=n("aa73"),a=n.n(r);a.a},"9ed6":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,autocomplete:"on","label-position":"left"}},[n("div",{staticClass:"title-container"},[n("h3",{staticClass:"title"},[e._v("\n        "+e._s(e.$t("login.title"))+"\n      ")])]),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{name:"user"}})],1),n("el-input",{ref:"username",attrs:{placeholder:e.$t("login.username"),name:"username",type:"text",autocomplete:"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{name:"password"}})],1),n("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:e.$t("login.password"),name:"password",autocomplete:"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),n("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[n("svg-icon",{attrs:{name:"password"===e.passwordType?"eye-off":"eye-on"}})],1)],1),n("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("\n      "+e._s(e.$t("login.logIn"))+"\n    ")])],1),n("el-dialog",{attrs:{title:e.$t("login.thirdparty"),visible:e.showDialog},on:{"update:visible":function(t){e.showDialog=t}}},[e._v("\n    "+e._s(e.$t("login.thirdpartyTips"))+"\n    "),n("br"),n("br"),n("br"),n("social-sign")],1)],1)},a=[],s=(n("ac6a"),n("456d"),n("96cf"),n("3b8d")),o=n("d225"),i=n("b0b4"),l=n("308d"),u=n("6bb5"),c=n("4e2b"),d=n("9ab4"),p=n("60a3"),m=n("9dba"),g=n("75fb"),f=n("1131"),h=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(l["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.validateUsername=function(e,t,n){Object(g["b"])(t)?n():n(new Error("Please enter the correct user name"))},e.validatePassword=function(e,t,n){t.length<6?n(new Error("The password can not be less than 6 digits")):n()},e.loginForm={username:"admin",password:"111111"},e.loginRules={username:[{validator:e.validateUsername,trigger:"blur"}],password:[{validator:e.validatePassword,trigger:"blur"}]},e.passwordType="password",e.loading=!1,e.showDialog=!1,e.otherQuery={},e}return Object(c["a"])(t,e),Object(i["a"])(t,[{key:"onRouteChange",value:function(e){var t=e.query;t&&(this.redirect=t.redirect,this.otherQuery=this.getOtherQuery(t))}},{key:"mounted",value:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()}},{key:"showPwd",value:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))}},{key:"handleLogin",value:function(){var e=this;this.$refs.loginForm.validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=8;break}return e.loading=!0,t.next=4,m["a"].Login(e.loginForm);case 4:e.$router.push({path:e.redirect||"/",query:e.otherQuery}),setTimeout((function(){e.loading=!1}),500),t.next=9;break;case 8:return t.abrupt("return",!1);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"getOtherQuery",value:function(e){return Object.keys(e).reduce((function(t,n){return"redirect"!==n&&(t[n]=e[n]),t}),{})}}]),t}(p["c"]);d["a"]([Object(p["d"])("$route",{immediate:!0})],h.prototype,"onRouteChange",null),h=d["a"]([Object(p["a"])({name:"Login",components:{LangSelect:f["a"]}})],h);var w=h,b=w,v=(n("2017"),n("8b1a"),n("2877")),y=Object(v["a"])(b,r,a,!1,null,"3c440a6d",null);t["default"]=y.exports},aa73:function(e,t,n){}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b6dd5762"],{"7abe":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-container",staticStyle:{margin:"5px"}},[n("p",{staticStyle:{"font-size":"15px"}},[t._v(t._s(t.notice))])])},a=[],c={data:function(){return{token:"",notice:""}},created:function(){var t=this;this.token=window.localStorage.getItem("token"),this.$http.defaults.headers.common["token"]=this.token,this.$http.get("/selfhelporder/selfhelporderindex").then((function(e){var n=e.data;200!==n.code?Notify({type:"danger",message:n.msg}):t.notice=n.data.self_help_order_tip}))},computed:{},mounted:function(){},methods:{}},i=c,s=(n("95c5"),n("2877")),r=Object(s["a"])(i,o,a,!1,null,"40c4b206",null);e["default"]=r.exports},"95c5":function(t,e,n){"use strict";var o=n("cdaa"),a=n.n(o);a.a},cdaa:function(t,e,n){}}]);
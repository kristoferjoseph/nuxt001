(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{145:function(e,t,n){"use strict";n.r(t);n(36);var r,c=n(5),o={data:function(){return{message:"...loading"}},methods:{getData:(r=Object(c.a)(regeneratorRuntime.mark((function e(){var t,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat("","/api"),e.prev=1,e.next=4,fetch(t);case 4:return e.next=6,e.sent.json();case 6:data=e.sent,this.message=data.msg,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),this.message=e.t0.message;case 13:case"end":return e.stop()}}),e,this,[[1,10]])}))),function(){return r.apply(this,arguments)})},mounted:function(){this.getData()}},h=n(22),component=Object(h.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",[t("h1",[this._v("Hello World!")]),this._v(" "),t("h2",[this._v("Change me")]),this._v(" "),t("p",[this._v(this._s(this.message))])])}),[],!1,null,null,null);t.default=component.exports}}]);
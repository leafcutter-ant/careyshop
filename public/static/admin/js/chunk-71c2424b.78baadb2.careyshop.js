(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71c2424b"],{3766:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"d",(function(){return s})),n.d(e,"c",(function(){return d})),n.d(e,"f",(function(){return l})),n.d(e,"e",(function(){return c})),n.d(e,"g",(function(){return h})),n.d(e,"h",(function(){return f}));var a=n("bc07"),r="/v1/setting";function o(t,e){return Object(a["a"])({url:r,method:"post",data:{method:e,data:t}})}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(a["a"])({url:r,method:"post",data:{method:"get.setting.list",module:t,code:e}})}function u(t){return o(t,"set.delivery.dist.list")}function s(t){return o(t,"set.payment.list")}function d(t){return o(t,"set.delivery.list")}function l(t){return o(t,"set.shopping.list")}function c(t){return o(t,"set.service.list")}function h(t){return o(t,"set.system.list")}function f(t){return o(t,"set.upload.list")}},"4dd0c":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cs-container",[n("page-header",{ref:"header",attrs:{slot:"header",loading:t.loading,"platform-table":t.platformTable},on:{submit:t.handleSubmit},slot:"header"}),n("page-main",{attrs:{loading:t.loading,"table-data":t.table,"platform-table":t.platformTable},on:{sort:t.handleSort,refresh:t.handleRefresh}}),n("page-footer",{attrs:{slot:"footer",loading:t.loading,current:t.page.current,size:t.page.size,total:t.page.total},on:{change:t.handlePaginationChange},slot:"footer"})],1)},r=[],o=(n("d3b7"),n("3ca3"),n("ddb0"),n("5530")),i=n("3766"),u=n("b27e"),s={name:"system-storage-style",components:{PageHeader:function(){return n.e("chunk-2d21d8bd").then(n.bind(null,"d281"))},PageMain:function(){return n.e("chunk-4fc2b218").then(n.bind(null,"d10f"))},PageFooter:function(){return n.e("chunk-2d225417").then(n.bind(null,"e42d"))}},data:function(){return{loading:!1,table:[],platformTable:[],page:{current:1,size:0,total:0},order:{order_type:void 0,order_field:void 0}}},mounted:function(){var t=this;Promise.all([Object(i["a"])("system_info",["platform"]),this.$store.dispatch("careyshop/db/databasePage",{user:!0})]).then((function(e){t.platformTable=e[0].data?e[0].data.platform.value:[],t.page.size=e[1].get("size").value()||25})).then((function(){t.handleSubmit()}))},methods:{handleRefresh:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(!(this.page.current-1)||this.page.current--),this.$nextTick((function(){t.$refs.header.handleFormSubmit()}))},handlePaginationChange:function(t){var e=this;this.page=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSort:function(t){var e=this;this.order=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSubmit:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n&&(this.page.current=1),this.loading=!0,Object(u["c"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},t),this.order),{},{page_no:this.page.current,page_size:this.page.size})).then((function(t){e.table=t.data.items||[],e.page.total=t.data.total_result})).finally((function(){e.loading=!1}))}}},d=s,l=n("2877"),c=Object(l["a"])(d,a,r,!1,null,null,null);e["default"]=c.exports},b27e:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return u})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return d})),n.d(e,"e",(function(){return l}));var a=n("5530"),r=n("bc07"),o="/v1/storage_style";function i(t){return Object(r["a"])({url:o,method:"post",data:Object(a["a"])({method:"add.storage.style.item"},t)})}function u(t){return Object(r["a"])({url:o,method:"post",data:Object(a["a"])({method:"set.storage.style.item"},t)})}function s(t){return Object(r["a"])({url:o,method:"post",data:Object(a["a"])({method:"get.storage.style.list"},t)})}function d(t){return Object(r["a"])({url:o,method:"post",data:{method:"del.storage.style.list",storage_style_id:t}})}function l(t,e){return Object(r["a"])({url:o,method:"post",data:{method:"set.storage.style.status",storage_style_id:t,status:e}})}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{0:function(t,s,e){"use strict";function a(t,s,e,a,n,r,i,l){var o,c="function"==typeof t?t.options:t;if(s&&(c.render=s,c.staticRenderFns=e,c._compiled=!0),a&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),i?(o=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=o):n&&(o=l?function(){n.call(this,this.$root.$options.shadowRoot)}:n),o)if(c.functional){c._injectStyles=o;var u=c.render;c.render=function(t,s){return o.call(s),u(t,s)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,o):[o]}return{exports:t,options:c}}e.d(s,"a",(function(){return a}))},1:function(t,s,e){"use strict";var a={data:function(){return{}}},n=e(0),r={components:{layout_menu:Object(n.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-light navbar-primary navbar-vertical",attrs:{id:"navbar-primary"}},[e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"navbar-collapse collapse show"},[e("h6",{staticClass:"navbar-heading"},[t._v("Navigation")]),e("ul",{staticClass:"navbar-nav"},[t.$page.auth.user.perms.includes("home_view")?e("li",{staticClass:"nav-item"},[e("inertia-link",{staticClass:"nav-link",attrs:{href:t.route("home")}},[e("span",{staticClass:"nav-link-icon"},[e("i",{staticClass:"feather-home"})]),e("span",{staticClass:"nav-link-title"},[t._v("Home")])])],1):t._e(),t.$page.auth.user.perms.includes("user_view")?e("li",{staticClass:"nav-item"},[e("inertia-link",{staticClass:"nav-link",attrs:{href:t.route("users.index")}},[e("span",{staticClass:"nav-link-icon"},[e("i",{staticClass:"feather-user"})]),e("span",{staticClass:"nav-link-title"},[t._v("Users")])])],1):t._e(),t.$page.auth.user.perms.includes("role_view")?e("li",{staticClass:"nav-item"},[e("inertia-link",{staticClass:"nav-link",attrs:{href:t.route("roles.index")}},[e("span",{staticClass:"nav-link-icon"},[e("i",{staticClass:"feather-sliders"})]),e("span",{staticClass:"nav-link-title"},[t._v("Roles")])])],1):t._e(),t.$page.auth.user.perms.includes("passenger_view")?e("li",{staticClass:"nav-item"},[e("inertia-link",{staticClass:"nav-link",attrs:{href:t.route("passengers.index")}},[e("span",{staticClass:"nav-link-icon"},[e("i",{staticClass:"feather-users"})]),e("span",{staticClass:"nav-link-title"},[t._v("Passengers")])])],1):t._e(),e("li",{staticClass:"nav-item"},[e("inertia-link",{staticClass:"nav-link",attrs:{href:t.route("self.create")}},[e("span",{staticClass:"nav-link-icon"},[e("i",{staticClass:"feather-clipboard"})]),e("span",{staticClass:"nav-link-title"},[t._v("Self Declaration Form")])])],1),t._e()]),t.$page.auth.user.name?e("div",{staticClass:"navbar-side"},[e("div",{staticClass:"ml-auto d-none-navbar-vertical-narrow"},[e("h5",{staticClass:"text-center"},[t._v(t._s(t.$page.auth.user.name)+" - "+t._s(t.$page.auth.user.role))])]),e("form",{attrs:{action:t.route("logout"),method:"POST"}},[e("input",{attrs:{name:"_token",type:"hidden"},domProps:{value:t.$page.csrf_token}}),t._m(2)])]):t._e()])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"navbar-brand navbar-brand-autodark d-none-navbar-horizontal",attrs:{href:"."}},[s("h2",[this._v("Portal")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",{staticClass:"dropdown-menu dropdown-menu-arrow dropdown-menu-columns dropdown-menu-columns-2"},[s("li",[s("a",{staticClass:"dropdown-item",attrs:{href:"./empty.html"}},[this._v("Empty page")])]),s("li",[s("a",{staticClass:"dropdown-item",attrs:{href:"./blank.html"}},[this._v("Blank page")])]),s("li",[s("a",{staticClass:"dropdown-item",attrs:{href:"./buttons.html"}},[this._v("Buttons        ")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[s("i",{staticClass:"feather-log-out"}),this._v("Logout")])}],!1,null,null,null).exports},data:function(){return{open:!1}},methods:{openmenu:function(){this.open=!this.open}}},i=Object(n.a)(r,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"page"},[e("div",{staticClass:"hamburger-menu d-lg-none",class:t.open?"open":"",on:{click:t.openmenu}},[e("span"),e("span"),e("span"),e("span")]),e("layout_menu",{class:t.open?"open":""}),e("div",{staticClass:"content"},[t.$page.flash.message?e("div",{staticClass:"alert alert-success alert-dismissible",attrs:{role:"alert"}},[t._v(t._s(t.$page.flash.message)),e("a",{staticClass:"close",attrs:{href:"#","data-dismiss":"alert","aria-label":"close"}},[t._v("×")])]):t._e(),t._t("default")],2)],1)}),[],!1,null,null,null);s.a=i.exports},17:function(t,s,e){"use strict";e.r(s);var a=e(1),n=e(2),r={metaInfo:{title:"Passengers"},props:["passengers","searchParam","query"],components:{layout:a.a,page_header:n.a},data:function(){return{form:{per_page:this.passengers.per_page,searchParam:this.searchParam,query:this.query}}},methods:{statusclass:function(t){return"cleared"==t?"bg-green":"not-cleared"==t?"bg-red":"pending"==t?"bg-azure":void 0},visit:function(t){this.$inertia.visit(this.route("passengers.index"),{method:"get",data:t,replace:!1,preserveState:!1,preserveScroll:!1,only:[]})},search:function(){this.visit({perPage:this.form.per_page,searchParam:this.form.searchParam,query:this.form.query})},page:function(t){this.visit({page:t,perPage:this.form.per_page,searchParam:this.form.searchParam,query:this.form.query})},delete_item:function(t){confirm("Are you sure?")&&this.$inertia.delete(this.route("passengers.destroy",{id:t}),{replace:!1,preserveState:!1,preserveScroll:!1,only:[]})}}},i=e(0),l=Object(i.a)(r,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("layout",[e("div",{staticClass:"container"},[e("page_header",{attrs:{title:"Passengers",subhead:"Overview"}}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body border-bottom py-3"},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"text-muted"},[t._v("Show"),e("div",{staticClass:"mx-2 d-inline-block"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.per_page,expression:"form.per_page"}],staticClass:"form-control form-control-sm",attrs:{type:"text",value:"8",size:"3"},domProps:{value:t.form.per_page},on:{input:[function(s){s.target.composing||t.$set(t.form,"per_page",s.target.value)},function(s){return t.search()}]}})]),t._v("entries")]),e("div",{staticClass:"text-muted ml-auto"},[t._v("Search:"),e("div",{staticClass:"ml-2 d-inline-block"},[e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.query,expression:"form.query"}],staticClass:"form-control form-control-sm",attrs:{type:"text"},domProps:{value:t.form.query},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.search()},input:function(s){s.target.composing||t.$set(t.form,"query",s.target.value)}}}),e("div",{staticClass:"input-group-append"},[e("div",{staticClass:"input-group-text"},[e("button",{staticClass:"btn btn-sm btn-link p-0",attrs:{type:"button"},on:{click:function(s){return t.search()}}},[e("i",{staticClass:"feather-search"})])])])])])])])]),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table card-table table-vcenter text-nowrap datatable"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Passport Number")]),e("th",[t._v("Flight Number")]),e("th",[t._v("Seat Number")]),e("th",[t._v("Status")]),e("th")])]),e("tbody",t._l(t.passengers.data,(function(s){return e("tr",[e("td",[t._v(t._s(s.name))]),e("td",[t._v(t._s(s.passport))]),e("td",[t._v(t._s(s.flight))]),e("td",[t._v(t._s(s.seat))]),e("td",[e("span",{staticClass:"badge",class:t.statusclass(s.status)},[t._v(t._s(s.status))])]),e("td",{staticClass:"w-1"},[t.$page.auth.user.perms.includes("passenger_view")?e("inertia-link",{attrs:{href:t.route("passengers.show",{id:s.id})}},[e("i",{staticClass:"feather-eye"})]):t._e()],1)])})),0)])]),e("div",{staticClass:"card-footer d-flex align-items-center"},[e("p",{staticClass:"m-0 text-muted"},[t._v("Showing "),e("span",[t._v(t._s(t.passengers.from))]),t._v(" to "),e("span",[t._v(t._s(t.passengers.to))]),t._v(" of "),e("span",[t._v(t._s(t.passengers.total))]),t._v(" entries")]),e("ul",{staticClass:"pagination m-0 ml-auto"},[e("li",{staticClass:"page-item",class:t.passengers.current_page-1<1?"disabled":""},[e("a",{staticClass:"page-link",attrs:{href:"#",tabindex:"-1"},on:{click:function(s){return s.preventDefault(),t.page(t.passengers.current_page-1)}}},[t._v("< prev")])]),t._l(t.passengers.last_page,(function(s){return e("li",{staticClass:"page-item",class:s==t.passengers.current_page?"active":""},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.page(s)}}},[t._v(t._s(s))])])})),e("li",{staticClass:"page-item",class:t.passengers.current_page+1>t.passengers.last_page?"disabled":""},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.page(t.passengers.current_page+1)}}},[t._v("next >")])])],2)])])])])],1)])}),[],!1,null,null,null);s.default=l.exports},2:function(t,s,e){"use strict";var a={props:["title","subhead"]},n=e(0),r=Object(n.a)(a,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"page-header"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-auto"},[s("div",{staticClass:"page-pretitle"},[this._v(this._s(this.subhead))]),s("h2",{staticClass:"page-title"},[this._v(this._s(this.title))])]),s("div",{staticClass:"col-auto ml-auto d-print-none"},[this._t("default")],2)])])}),[],!1,null,null,null);s.a=r.exports}}]);
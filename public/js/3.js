(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{0:function(t,a,s){"use strict";function e(t,a,s,e,n,i,r,l){var o,c="function"==typeof t?t.options:t;if(a&&(c.render=a,c.staticRenderFns=s,c._compiled=!0),e&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),r?(o=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=o):n&&(o=l?function(){n.call(this,this.$root.$options.shadowRoot)}:n),o)if(c.functional){c._injectStyles=o;var u=c.render;c.render=function(t,a){return o.call(a),u(t,a)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,o):[o]}return{exports:t,options:c}}s.d(a,"a",(function(){return e}))},1:function(t,a,s){"use strict";var e={data:function(){return{}}},n=s(0),i={components:{layout_menu:Object(n.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-light navbar-primary navbar-vertical",attrs:{id:"navbar-primary"}},[s("div",{staticClass:"container"},[t._m(0),s("div",{staticClass:"navbar-collapse collapse show"},[s("h6",{staticClass:"navbar-heading"},[t._v("Navigation")]),s("ul",{staticClass:"navbar-nav"},[t.$page.auth.user.perms.includes("home_view")?s("li",{staticClass:"nav-item"},[s("inertia-link",{staticClass:"nav-link",attrs:{href:t.route("home")}},[s("span",{staticClass:"nav-link-icon"},[s("i",{staticClass:"feather-home"})]),s("span",{staticClass:"nav-link-title"},[t._v("Home")])])],1):t._e(),t.$page.auth.user.perms.includes("user_view")?s("li",{staticClass:"nav-item"},[s("inertia-link",{staticClass:"nav-link",attrs:{href:t.route("users.index")}},[s("span",{staticClass:"nav-link-icon"},[s("i",{staticClass:"feather-user"})]),s("span",{staticClass:"nav-link-title"},[t._v("Users")])])],1):t._e(),t.$page.auth.user.perms.includes("role_view")?s("li",{staticClass:"nav-item"},[s("inertia-link",{staticClass:"nav-link",attrs:{href:t.route("roles.index")}},[s("span",{staticClass:"nav-link-icon"},[s("i",{staticClass:"feather-sliders"})]),s("span",{staticClass:"nav-link-title"},[t._v("Roles")])])],1):t._e(),t.$page.auth.user.perms.includes("passenger_view")?s("li",{staticClass:"nav-item"},[s("inertia-link",{staticClass:"nav-link",attrs:{href:t.route("passengers.index")}},[s("span",{staticClass:"nav-link-icon"},[s("i",{staticClass:"feather-users"})]),s("span",{staticClass:"nav-link-title"},[t._v("Passengers")])])],1):t._e(),s("li",{staticClass:"nav-item"},[s("inertia-link",{staticClass:"nav-link",attrs:{href:t.route("self.create")}},[s("span",{staticClass:"nav-link-icon"},[s("i",{staticClass:"feather-clipboard"})]),s("span",{staticClass:"nav-link-title"},[t._v("Self Declaration Form")])])],1),s("li",{staticClass:"nav-item"},[s("inertia-link",{staticClass:"nav-link",attrs:{href:t.route("self.index")}},[s("span",{staticClass:"nav-link-icon"},[s("i",{staticClass:"feather-grid"})]),s("span",{staticClass:"nav-link-title"},[t._v("Retrive QR Code")])])],1),t._e()]),t.$page.auth.user.name?s("div",{staticClass:"navbar-side"},[s("div",{staticClass:"ml-auto d-none-navbar-vertical-narrow"},[s("h5",{staticClass:"text-center"},[t._v(t._s(t.$page.auth.user.name)+" - "+t._s(t.$page.auth.user.role))])]),s("form",{attrs:{action:t.route("logout"),method:"POST"}},[s("input",{attrs:{name:"_token",type:"hidden"},domProps:{value:t.$page.csrf_token}}),t._m(2)])]):t._e()])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"navbar-brand navbar-brand-autodark d-none-navbar-horizontal",attrs:{href:"."}},[a("h2",[this._v("Portal")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",{staticClass:"dropdown-menu dropdown-menu-arrow dropdown-menu-columns dropdown-menu-columns-2"},[a("li",[a("a",{staticClass:"dropdown-item",attrs:{href:"./empty.html"}},[this._v("Empty page")])]),a("li",[a("a",{staticClass:"dropdown-item",attrs:{href:"./blank.html"}},[this._v("Blank page")])]),a("li",[a("a",{staticClass:"dropdown-item",attrs:{href:"./buttons.html"}},[this._v("Buttons        ")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[a("i",{staticClass:"feather-log-out"}),this._v("Logout")])}],!1,null,null,null).exports},data:function(){return{open:!1}},methods:{openmenu:function(){this.open=!this.open}}},r=Object(n.a)(i,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page"},[s("div",{staticClass:"hamburger-menu d-lg-none",class:t.open?"open":"",on:{click:t.openmenu}},[s("span"),s("span"),s("span"),s("span")]),s("layout_menu",{class:t.open?"open":""}),s("div",{staticClass:"content"},[t.$page.flash.message?s("div",{staticClass:"alert alert-success alert-dismissible",attrs:{role:"alert"}},[t._v(t._s(t.$page.flash.message)),s("a",{staticClass:"close",attrs:{href:"#","data-dismiss":"alert","aria-label":"close"}},[t._v("×")])]):t._e(),t._t("default")],2)],1)}),[],!1,null,null,null);a.a=r.exports},2:function(t,a,s){"use strict";var e={props:["title","subhead"]},n=s(0),i=Object(n.a)(e,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"page-header"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-auto"},[a("div",{staticClass:"page-pretitle"},[this._v(this._s(this.subhead))]),a("h2",{staticClass:"page-title"},[this._v(this._s(this.title))])]),a("div",{staticClass:"col-auto ml-auto d-print-none"},[this._t("default")],2)])])}),[],!1,null,null,null);a.a=i.exports},27:function(t,a,s){"use strict";s.r(a);var e=s(1),n=s(2),i=s(4),r={props:["passenger"],components:{layout:e.a,page_header:n.a,form_input:i.a},data:function(){return{sending:!1,form:{flight:"",date:"",passport:""}}},methods:{submit:function(){var t=this;this.sending=!0,this.$inertia.post(this.route("self.retrieve"),{passport:this.form.passport,date:this.form.date,flight:this.form.flight,_token:this.$page.csrf_token}).then((function(){t.sending=!1}))}}},l=s(0),o=Object(l.a)(r,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("layout",[s("div",{staticClass:"container"},[s("page_header",{attrs:{title:"Self Declaration",subhead:"Retrive"}},[s("inertia-link",{staticClass:"btn btn-primary ml-3",attrs:{href:t.route("home")}},[s("i",{staticClass:"feather-arrow-left"}),t._v("Back")])],1),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body border-bottom p-5"},[s("form_input",{attrs:{type:"text",name:"passport",label:"Passport Number",placeholder:"Passport Number"},model:{value:t.form.passport,callback:function(a){t.$set(t.form,"passport",a)},expression:"form.passport"}}),s("form_input",{attrs:{id:"date_picker",type:"date",name:"date",label:"Date of Arrival",placeholder:"Date of Arrival"},model:{value:t.form.date,callback:function(a){t.$set(t.form,"date",a)},expression:"form.date"}}),s("form_input",{attrs:{type:"text",name:"flight",label:"Flight Number",placeholder:"Flight Number"},model:{value:t.form.flight,callback:function(a){t.$set(t.form,"flight",a)},expression:"form.flight"}}),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 text-right d-flex"},[s("button",{staticClass:"btn btn-primary ml-auto",attrs:{type:"submit",disabled:t.sending},on:{click:function(a){return a.preventDefault(),t.submit(a)}}},[t._v("Submit")])])])],1)])])])],1)])}),[],!1,null,null,null);a.default=o.exports},4:function(t,a,s){"use strict";var e={components:{form_error:s(5).a},props:["label","type","name","placeholder","value"]},n=s(0),i=Object(n.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"mb-3"},[s("label",{staticClass:"form-label"},[t._v(t._s(t.label))]),s("input",{staticClass:"form-control",class:t.$page.errors[t.name]?"is-invalid":"",attrs:{type:t.type,name:t.name,placeholder:t.placeholder,required:""},domProps:{value:t.value},on:{input:function(a){return t.$emit("input",a.target.value)}}}),s("form_error",{attrs:{errors:t.$page.errors[t.name]}})],1)}),[],!1,null,null,null);a.a=i.exports},5:function(t,a,s){"use strict";var e={props:["errors"]},n=s(0),i=Object(n.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"invalid-feedback d-block"},t._l(t.errors,(function(a){return s("span",[t._v(t._s(a))])})),0)}),[],!1,null,null,null);a.a=i.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{0:function(t,e,a){"use strict";function s(t,e,a,s,n,r,i,l){var o,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=a,c._compiled=!0),s&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),i?(o=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=o):n&&(o=l?function(){n.call(this,this.$root.$options.shadowRoot)}:n),o)if(c.functional){c._injectStyles=o;var u=c.render;c.render=function(t,e){return o.call(e),u(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,o):[o]}return{exports:t,options:c}}a.d(e,"a",(function(){return s}))},1:function(t,e,a){"use strict";var s={data:function(){return{}}},n=a(0),r={components:{layout_menu:Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light navbar-primary navbar-vertical",attrs:{id:"navbar-primary"}},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"navbar-collapse collapse show"},[a("h6",{staticClass:"navbar-heading"},[t._v("Navigation")]),a("ul",{staticClass:"navbar-nav"},[t.$page.auth.user.perms.includes("home_view")?a("li",{staticClass:"nav-item"},[a("inertia-link",{staticClass:"nav-link",attrs:{href:t.route("home")}},[a("span",{staticClass:"nav-link-icon"},[a("i",{staticClass:"feather-home"})]),a("span",{staticClass:"nav-link-title"},[t._v("Home")])])],1):t._e(),t.$page.auth.user.perms.includes("user_view")?a("li",{staticClass:"nav-item"},[a("inertia-link",{staticClass:"nav-link",attrs:{href:t.route("users.index")}},[a("span",{staticClass:"nav-link-icon"},[a("i",{staticClass:"feather-user"})]),a("span",{staticClass:"nav-link-title"},[t._v("Users")])])],1):t._e(),t.$page.auth.user.perms.includes("role_view")?a("li",{staticClass:"nav-item"},[a("inertia-link",{staticClass:"nav-link",attrs:{href:t.route("roles.index")}},[a("span",{staticClass:"nav-link-icon"},[a("i",{staticClass:"feather-sliders"})]),a("span",{staticClass:"nav-link-title"},[t._v("Roles")])])],1):t._e(),t.$page.auth.user.perms.includes("passenger_view")?a("li",{staticClass:"nav-item"},[a("inertia-link",{staticClass:"nav-link",attrs:{href:t.route("passengers.index")}},[a("span",{staticClass:"nav-link-icon"},[a("i",{staticClass:"feather-users"})]),a("span",{staticClass:"nav-link-title"},[t._v("Passengers")])])],1):t._e(),a("li",{staticClass:"nav-item"},[a("inertia-link",{staticClass:"nav-link",attrs:{href:t.route("self.create")}},[a("span",{staticClass:"nav-link-icon"},[a("i",{staticClass:"feather-clipboard"})]),a("span",{staticClass:"nav-link-title"},[t._v("Self Declaration Form")])])],1),t._e()]),t.$page.auth.user.name?a("div",{staticClass:"navbar-side"},[a("div",{staticClass:"ml-auto d-none-navbar-vertical-narrow"},[a("h5",{staticClass:"text-center"},[t._v(t._s(t.$page.auth.user.name)+" - "+t._s(t.$page.auth.user.role))])]),a("form",{attrs:{action:t.route("logout"),method:"POST"}},[a("input",{attrs:{name:"_token",type:"hidden"},domProps:{value:t.$page.csrf_token}}),t._m(2)])]):t._e()])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-brand navbar-brand-autodark d-none-navbar-horizontal",attrs:{href:"."}},[e("h2",[this._v("Portal")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"dropdown-menu dropdown-menu-arrow dropdown-menu-columns dropdown-menu-columns-2"},[e("li",[e("a",{staticClass:"dropdown-item",attrs:{href:"./empty.html"}},[this._v("Empty page")])]),e("li",[e("a",{staticClass:"dropdown-item",attrs:{href:"./blank.html"}},[this._v("Blank page")])]),e("li",[e("a",{staticClass:"dropdown-item",attrs:{href:"./buttons.html"}},[this._v("Buttons        ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[e("i",{staticClass:"feather-log-out"}),this._v("Logout")])}],!1,null,null,null).exports},data:function(){return{open:!1}},methods:{openmenu:function(){this.open=!this.open}}},i=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",{staticClass:"hamburger-menu d-lg-none",class:t.open?"open":"",on:{click:t.openmenu}},[a("span"),a("span"),a("span"),a("span")]),a("layout_menu",{class:t.open?"open":""}),a("div",{staticClass:"content"},[t.$page.flash.message?a("div",{staticClass:"alert alert-success alert-dismissible",attrs:{role:"alert"}},[t._v(t._s(t.$page.flash.message)),a("a",{staticClass:"close",attrs:{href:"#","data-dismiss":"alert","aria-label":"close"}},[t._v("×")])]):t._e(),t._t("default")],2)],1)}),[],!1,null,null,null);e.a=i.exports},2:function(t,e,a){"use strict";var s={props:["title","subhead"]},n=a(0),r=Object(n.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-header"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-auto"},[e("div",{staticClass:"page-pretitle"},[this._v(this._s(this.subhead))]),e("h2",{staticClass:"page-title"},[this._v(this._s(this.title))])]),e("div",{staticClass:"col-auto ml-auto d-print-none"},[this._t("default")],2)])])}),[],!1,null,null,null);e.a=r.exports},25:function(t,e,a){"use strict";a.r(e);var s=a(1),n=a(2),r=a(4),i={props:["roles","user"],components:{layout:s.a,page_header:n.a,form_input:r.a},data:function(){return{sending:!1,form:{name:this.user.name,email:this.user.email,password:this.user.password,phone:this.user.phone,role:this.user.role_id}}},methods:{submit:function(){var t=this;this.sending=!0,this.$inertia.put(this.route("users.update",{id:this.user.id}),{name:this.form.name,email:this.form.email,password:this.form.password,phone:this.form.phone,role:this.form.role,_token:this.$page.csrf_token}).then((function(){return t.sending=!1}))}}},l=a(0),o=Object(l.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("layout",[a("div",{staticClass:"container"},[a("page_header",{attrs:{title:"Users",subhead:"Add New"}},[a("inertia-link",{staticClass:"btn btn-primary ml-3",attrs:{href:t.route("users.index")}},[a("i",{staticClass:"feather-arrow-left"}),t._v("Back")])],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-8"},[a("form",{staticClass:"card",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("div",{staticClass:"card-body border-bottom p-5"},[a("form_input",{attrs:{type:"text",name:"name",label:"Name",placeholder:"Enter User's Name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),a("form_input",{attrs:{type:"email",name:"email",label:"Email",placeholder:"Enter Email ID"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),a("form_input",{attrs:{type:"password",name:"password",label:"Password",placeholder:"Enter New Password/ Leave blank for exiting password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),a("form_input",{attrs:{type:"number",name:"phone",label:"Phone",placeholder:"Enter Phone Number"},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}}),a("div",{staticClass:"mb-3"},[a("div",{staticClass:"form-label"},[t._v("Role")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.role,expression:"form.role"}],staticClass:"form-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"role",e.target.multiple?a:a[0])}}},t._l(t.roles,(function(e){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.name))])})),0)]),a("div",{staticClass:"d-flex align-items-center"},[a("a",{staticClass:"btn btn-link"},[t._v("Back")]),a("button",{staticClass:"btn btn-primary ml-auto",attrs:{type:"submit"}},[t._v("Save")])])],1)])])])],1)])}),[],!1,null,null,null);e.default=o.exports},4:function(t,e,a){"use strict";var s={components:{form_error:a(5).a},props:["label","type","name","placeholder","value"]},n=a(0),r=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label"},[t._v(t._s(t.label))]),a("input",{staticClass:"form-control",class:t.$page.errors[t.name]?"is-invalid":"",attrs:{type:t.type,name:t.name,placeholder:t.placeholder,required:""},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}),a("form_error",{attrs:{errors:t.$page.errors[t.name]}})],1)}),[],!1,null,null,null);e.a=r.exports},5:function(t,e,a){"use strict";var s={props:["errors"]},n=a(0),r=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"invalid-feedback d-block"},t._l(t.errors,(function(e){return a("span",[t._v(t._s(e))])})),0)}),[],!1,null,null,null);e.a=r.exports}}]);
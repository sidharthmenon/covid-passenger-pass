(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{0:function(t,s,e){"use strict";function a(t,s,e,a,n,i,r,l){var o,c="function"==typeof t?t.options:t;if(s&&(c.render=s,c.staticRenderFns=e,c._compiled=!0),a&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),r?(o=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=o):n&&(o=l?function(){n.call(this,this.$root.$options.shadowRoot)}:n),o)if(c.functional){c._injectStyles=o;var u=c.render;c.render=function(t,s){return o.call(s),u(t,s)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,o):[o]}return{exports:t,options:c}}e.d(s,"a",(function(){return a}))},1:function(t,s,e){"use strict";var a={data:function(){return{}}},n=e(0),i={components:{layout_menu:Object(n.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-light navbar-primary navbar-vertical",attrs:{id:"navbar-primary"}},[e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"navbar-collapse collapse show"},[e("h6",{staticClass:"navbar-heading"},[t._v("Navigation")]),e("ul",{staticClass:"navbar-nav"},[t.$page.auth.user.perms.includes("home_view")?e("li",{staticClass:"nav-item"},[e("inertia-link",{staticClass:"nav-link",attrs:{href:t.route("home")}},[e("span",{staticClass:"nav-link-icon"},[e("i",{staticClass:"feather-home"})]),e("span",{staticClass:"nav-link-title"},[t._v("Home")])])],1):t._e(),t.$page.auth.user.perms.includes("user_view")?e("li",{staticClass:"nav-item"},[e("inertia-link",{staticClass:"nav-link",attrs:{href:t.route("users.index")}},[e("span",{staticClass:"nav-link-icon"},[e("i",{staticClass:"feather-user"})]),e("span",{staticClass:"nav-link-title"},[t._v("Users")])])],1):t._e(),t.$page.auth.user.perms.includes("role_view")?e("li",{staticClass:"nav-item"},[e("inertia-link",{staticClass:"nav-link",attrs:{href:t.route("roles.index")}},[e("span",{staticClass:"nav-link-icon"},[e("i",{staticClass:"feather-sliders"})]),e("span",{staticClass:"nav-link-title"},[t._v("Roles")])])],1):t._e(),t.$page.auth.user.perms.includes("passenger_view")?e("li",{staticClass:"nav-item"},[e("inertia-link",{staticClass:"nav-link",attrs:{href:t.route("passengers.index")}},[e("span",{staticClass:"nav-link-icon"},[e("i",{staticClass:"feather-users"})]),e("span",{staticClass:"nav-link-title"},[t._v("Passengers")])])],1):t._e(),e("li",{staticClass:"nav-item"},[e("inertia-link",{staticClass:"nav-link",attrs:{href:t.route("self.create")}},[e("span",{staticClass:"nav-link-icon"},[e("i",{staticClass:"feather-clipboard"})]),e("span",{staticClass:"nav-link-title"},[t._v("Self Declaration Form")])])],1),t._e()]),t.$page.auth.user.name?e("div",{staticClass:"navbar-side"},[e("div",{staticClass:"ml-auto d-none-navbar-vertical-narrow"},[e("h5",{staticClass:"text-center"},[t._v(t._s(t.$page.auth.user.name)+" - "+t._s(t.$page.auth.user.role))])]),e("form",{attrs:{action:t.route("logout"),method:"POST"}},[e("input",{attrs:{name:"_token",type:"hidden"},domProps:{value:t.$page.csrf_token}}),t._m(2)])]):t._e()])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"navbar-brand navbar-brand-autodark d-none-navbar-horizontal",attrs:{href:"."}},[s("h2",[this._v("Portal")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",{staticClass:"dropdown-menu dropdown-menu-arrow dropdown-menu-columns dropdown-menu-columns-2"},[s("li",[s("a",{staticClass:"dropdown-item",attrs:{href:"./empty.html"}},[this._v("Empty page")])]),s("li",[s("a",{staticClass:"dropdown-item",attrs:{href:"./blank.html"}},[this._v("Blank page")])]),s("li",[s("a",{staticClass:"dropdown-item",attrs:{href:"./buttons.html"}},[this._v("Buttons        ")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[s("i",{staticClass:"feather-log-out"}),this._v("Logout")])}],!1,null,null,null).exports},data:function(){return{open:!1}},methods:{openmenu:function(){this.open=!this.open}}},r=Object(n.a)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"page"},[e("div",{staticClass:"hamburger-menu d-lg-none",class:t.open?"open":"",on:{click:t.openmenu}},[e("span"),e("span"),e("span"),e("span")]),e("layout_menu",{class:t.open?"open":""}),e("div",{staticClass:"content"},[t.$page.flash.message?e("div",{staticClass:"alert alert-success alert-dismissible",attrs:{role:"alert"}},[t._v(t._s(t.$page.flash.message)),e("a",{staticClass:"close",attrs:{href:"#","data-dismiss":"alert","aria-label":"close"}},[t._v("×")])]):t._e(),t._t("default")],2)],1)}),[],!1,null,null,null);s.a=r.exports},2:function(t,s,e){"use strict";var a={props:["title","subhead"]},n=e(0),i=Object(n.a)(a,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"page-header"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-auto"},[s("div",{staticClass:"page-pretitle"},[this._v(this._s(this.subhead))]),s("h2",{staticClass:"page-title"},[this._v(this._s(this.title))])]),s("div",{staticClass:"col-auto ml-auto d-print-none"},[this._t("default")],2)])])}),[],!1,null,null,null);s.a=i.exports},20:function(t,s,e){"use strict";e.r(s);var a=e(1),n=e(2),i=e(4),r={metaInfo:{title:"Create Role"},props:["permissions"],components:{layout:a.a,page_header:n.a,form_input:i.a},data:function(){return{sending:!1,form:{name:"",description:"",permissions:[]}}},methods:{submit:function(){var t=this;this.sending=!0,this.$inertia.post(this.route("roles.store"),{name:this.form.name,description:this.form.description,permissions:this.form.permissions,_token:this.$page.csrf_token}).then((function(){return t.sending=!1}))}}},l=e(0),o=Object(l.a)(r,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("layout",[e("div",{staticClass:"container"},[e("page_header",{attrs:{title:"Roles",subhead:"Add New"}},[e("inertia-link",{staticClass:"btn btn-primary ml-3",attrs:{href:t.route("roles.index")}},[e("i",{staticClass:"feather-arrow-left"}),t._v("Back")])],1),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("form",{staticClass:"card",on:{submit:function(s){return s.preventDefault(),t.submit(s)}}},[e("div",{staticClass:"card-body border-bottom p-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"},[e("form_input",{attrs:{type:"text",name:"name",label:"Name",placeholder:"Enter Role Name"},model:{value:t.form.name,callback:function(s){t.$set(t.form,"name",s)},expression:"form.name"}})],1),e("div",{staticClass:"col-sm-6"},[e("form_input",{attrs:{type:"text",name:"description",label:"Description",placeholder:"Enter Description"},model:{value:t.form.description,callback:function(s){t.$set(t.form,"description",s)},expression:"form.description"}})],1)]),e("div",{staticClass:"row"},t._l(t.permissions,(function(s){return e("div",{staticClass:"col-md-3"},[e("label",{staticClass:"custom-control custom-checkbox custom-control-inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.permissions,expression:"form.permissions"}],staticClass:"custom-control-input",attrs:{type:"checkbox",name:"permissions[]"},domProps:{value:s.id,checked:Array.isArray(t.form.permissions)?t._i(t.form.permissions,s.id)>-1:t.form.permissions},on:{change:function(e){var a=t.form.permissions,n=e.target,i=!!n.checked;if(Array.isArray(a)){var r=s.id,l=t._i(a,r);n.checked?l<0&&t.$set(t.form,"permissions",a.concat([r])):l>-1&&t.$set(t.form,"permissions",a.slice(0,l).concat(a.slice(l+1)))}else t.$set(t.form,"permissions",i)}}}),e("span",{staticClass:"custom-control-label"},[t._v(t._s(s.name))])])])})),0),e("div",{staticClass:"d-flex align-items-center"},[e("a",{staticClass:"btn btn-link"},[t._v("Back")]),e("button",{staticClass:"btn btn-primary ml-auto",attrs:{type:"submit",disabled:t.sending}},[t._v("Save")])])])])])])],1)])}),[],!1,null,null,null);s.default=o.exports},4:function(t,s,e){"use strict";var a={components:{form_error:e(5).a},props:["label","type","name","placeholder","value"]},n=e(0),i=Object(n.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label"},[t._v(t._s(t.label))]),e("input",{staticClass:"form-control",class:t.$page.errors[t.name]?"is-invalid":"",attrs:{type:t.type,name:t.name,placeholder:t.placeholder,required:""},domProps:{value:t.value},on:{input:function(s){return t.$emit("input",s.target.value)}}}),e("form_error",{attrs:{errors:t.$page.errors[t.name]}})],1)}),[],!1,null,null,null);s.a=i.exports},5:function(t,s,e){"use strict";var a={props:["errors"]},n=e(0),i=Object(n.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"invalid-feedback d-block"},t._l(t.errors,(function(s){return e("span",[t._v(t._s(s))])})),0)}),[],!1,null,null,null);s.a=i.exports}}]);
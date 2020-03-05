(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1:function(s,t,a){"use strict";var e={data:function(){return{}}},i=a(0),l={components:{layout_menu:Object(i.a)(e,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light navbar-primary navbar-vertical",attrs:{id:"navbar-primary"}},[a("div",{staticClass:"container"},[s._m(0),a("div",{staticClass:"navbar-collapse collapse show"},[a("h6",{staticClass:"navbar-heading"},[s._v("Navigation")]),a("ul",{staticClass:"navbar-nav"},[s.$page.auth.user.perms.includes("home_view")?a("li",{staticClass:"nav-item"},[a("inertia-link",{staticClass:"nav-link",attrs:{href:s.route("home")}},[a("span",{staticClass:"nav-link-icon"},[a("i",{staticClass:"feather-home"})]),a("span",{staticClass:"nav-link-title"},[s._v("Home")])])],1):s._e(),s.$page.auth.user.perms.includes("user_view")?a("li",{staticClass:"nav-item"},[a("inertia-link",{staticClass:"nav-link",attrs:{href:s.route("users.index")}},[a("span",{staticClass:"nav-link-icon"},[a("i",{staticClass:"feather-user"})]),a("span",{staticClass:"nav-link-title"},[s._v("Users")])])],1):s._e(),s.$page.auth.user.perms.includes("role_view")?a("li",{staticClass:"nav-item"},[a("inertia-link",{staticClass:"nav-link",attrs:{href:s.route("roles.index")}},[a("span",{staticClass:"nav-link-icon"},[a("i",{staticClass:"feather-sliders"})]),a("span",{staticClass:"nav-link-title"},[s._v("Roles")])])],1):s._e(),s.$page.auth.user.perms.includes("passenger_view")?a("li",{staticClass:"nav-item"},[a("inertia-link",{staticClass:"nav-link",attrs:{href:s.route("passengers.index")}},[a("span",{staticClass:"nav-link-icon"},[a("i",{staticClass:"feather-users"})]),a("span",{staticClass:"nav-link-title"},[s._v("Passengers")])])],1):s._e(),a("li",{staticClass:"nav-item"},[a("inertia-link",{staticClass:"nav-link",attrs:{href:s.route("self.create")}},[a("span",{staticClass:"nav-link-icon"},[a("i",{staticClass:"feather-clipboard"})]),a("span",{staticClass:"nav-link-title"},[s._v("Self Declaration Form")])])],1),s._e()]),s.$page.auth.user.name?a("div",{staticClass:"navbar-side"},[a("div",{staticClass:"ml-auto d-none-navbar-vertical-narrow"},[a("h5",{staticClass:"text-center"},[s._v(s._s(s.$page.auth.user.name)+" - "+s._s(s.$page.auth.user.role))])]),a("form",{attrs:{action:s.route("logout"),method:"POST"}},[a("input",{attrs:{name:"_token",type:"hidden"},domProps:{value:s.$page.csrf_token}}),s._m(2)])]):s._e()])])])}),[function(){var s=this.$createElement,t=this._self._c||s;return t("a",{staticClass:"navbar-brand navbar-brand-autodark d-none-navbar-horizontal",attrs:{href:"."}},[t("h2",[this._v("Portal")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",{staticClass:"dropdown-menu dropdown-menu-arrow dropdown-menu-columns dropdown-menu-columns-2"},[t("li",[t("a",{staticClass:"dropdown-item",attrs:{href:"./empty.html"}},[this._v("Empty page")])]),t("li",[t("a",{staticClass:"dropdown-item",attrs:{href:"./blank.html"}},[this._v("Blank page")])]),t("li",[t("a",{staticClass:"dropdown-item",attrs:{href:"./buttons.html"}},[this._v("Buttons        ")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[t("i",{staticClass:"feather-log-out"}),this._v("Logout")])}],!1,null,null,null).exports},data:function(){return{open:!1}},methods:{openmenu:function(){this.open=!this.open}}},r=Object(i.a)(l,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"page"},[a("div",{staticClass:"hamburger-menu d-lg-none",class:s.open?"open":"",on:{click:s.openmenu}},[a("span"),a("span"),a("span"),a("span")]),a("layout_menu",{class:s.open?"open":""}),a("div",{staticClass:"content"},[s.$page.flash.message?a("div",{staticClass:"alert alert-success alert-dismissible",attrs:{role:"alert"}},[s._v(s._s(s.$page.flash.message)),a("a",{staticClass:"close",attrs:{href:"#","data-dismiss":"alert","aria-label":"close"}},[s._v("×")])]):s._e(),s._t("default")],2)],1)}),[],!1,null,null,null);t.a=r.exports},14:function(s,t,a){"use strict";a.r(t);var e=a(1),i=a(2),l={props:["label","value"]},r=a(0),n=Object(r.a)(l,(function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label"},[this._v(this._s(this.label))]),t("div",{staticClass:"form-control-plaintext"},[this._t("default")],2)])}),[],!1,null,null,null).exports,c=a(7),o=a.n(c),m={metaInfo:{title:"Passenger"},props:["passenger"],components:{layout:e.a,page_header:i.a,form_static:n,Selectize:o.a},data:function(){return{sending:!1,form:{remarks:this.passenger.remarks,status:this.passenger.status}}},methods:{submit:function(){var s=this;this.sending=!0,this.$inertia.put(this.route("passengers.update",{id:this.passenger.id}),{remarks:this.form.remarks,status:this.form.status,_token:this.$page.csrf_token}).then((function(){return s.sending=!1}))}}},u=Object(r.a)(m,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("layout",[a("div",{staticClass:"container"},[a("page_header",{attrs:{title:"Passengers",subhead:"Details"}},[a("inertia-link",{staticClass:"btn btn-primary ml-3",attrs:{href:s.route("passengers.index")}},[a("i",{staticClass:"feather-arrow-left"}),s._v("Back")])],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body border-bottom py-3"},[a("form_static",{attrs:{label:"Name of Passenger"}},[s._v(s._s(s.passenger.name))]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4 col-6"},[a("form_static",{attrs:{label:"Passport Number"}},[s._v(s._s(s.passenger.passport))])],1),a("div",{staticClass:"col-sm-4 col-6"},[a("form_static",{attrs:{label:"Flight Number"}},[s._v(s._s(s.passenger.flight))])],1),a("div",{staticClass:"col-sm-4 col-6"},[a("form_static",{attrs:{label:"Seat Number"}},[s._v(s._s(s.passenger.seat))])],1),a("div",{staticClass:"col-sm-4 col-6"},[a("form_static",{attrs:{label:"Date of Arrival"}},[s._v(s._s(s.passenger.date))])],1),a("div",{staticClass:"col-sm-4 col-6"},[a("form_static",{attrs:{label:"Port of origin"}},[s._v(s._s(s.passenger.origin))])],1),a("div",{staticClass:"col-sm-4 col-6"},[a("form_static",{attrs:{label:"Port of destination"}},[s._v(s._s(s.passenger.destination))])],1)])],1)]),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body border-bottom py-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4 col-6"},[a("form_static",{attrs:{label:"House Number"}},[s._v(s._s(s.passenger.house))])],1),a("div",{staticClass:"col-sm-4 col-6"},[a("form_static",{attrs:{label:"Street/Village"}},[s._v(s._s(s.passenger.street))])],1),a("div",{staticClass:"col-sm-4 col-6"},[a("form_static",{attrs:{label:"Tehsil"}},[s._v(s._s(s.passenger.tehsil))])],1),a("div",{staticClass:"col-sm-4 col-6"},[a("form_static",{attrs:{label:"District/City"}},[s._v(s._s(s.passenger.district))])],1),a("div",{staticClass:"col-sm-4 col-6"},[a("form_static",{attrs:{label:"State"}},[s._v(s._s(s.passenger.state))])],1),a("div",{staticClass:"col-sm-4 col-6"},[a("form_static",{attrs:{label:"PIN"}},[s._v(s._s(s.passenger.pin))])],1),a("div",{staticClass:"col-sm-4 col-6"},[a("form_static",{attrs:{label:"Residence Number"}},[s._v(s._s(s.passenger.phone))])],1),a("div",{staticClass:"col-sm-4 col-6"},[a("form_static",{attrs:{label:"Mobile Number"}},[s._v(s._s(s.passenger.mobile))])],1),a("div",{staticClass:"col-sm-12"},[a("form_static",{attrs:{label:"Email Address"}},[s._v(s._s(s.passenger.email))])],1)])])])]),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body border-bottom py-3"},[a("form_static",{attrs:{label:"Countries visited since last 28 days"}},s._l(s.passenger.countries,(function(t){return a("span",{staticClass:"badge bg-blue mr-1"},[s._v(s._s(t.name))])})),0),a("form_static",{attrs:{label:"Details of the cities visited since last 28 days?"}},[s._v(s._s(s.passenger.cities))]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[a("form_static",{attrs:{label:"Fever"}},[1==s.passenger.fever?a("i",{staticClass:"feather-check"}):a("i",{staticClass:"feather-x"})])],1),a("div",{staticClass:"col-4"},[a("form_static",{attrs:{label:"Cough"}},[1==s.passenger.cough?a("i",{staticClass:"feather-check"}):a("i",{staticClass:"feather-x"})])],1),a("div",{staticClass:"col-4"},[a("form_static",{attrs:{label:"Respiratory Distress"}},[1==s.passenger.respiratory?a("i",{staticClass:"feather-check"}):a("i",{staticClass:"feather-x"})])],1)])],1)]),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body border-bottom py-3"},[a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label"},[s._v("Remarks")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:s.form.remarks,expression:"form.remarks"}],staticClass:"form-control",attrs:{name:"example-textarea-input",rows:"6",placeholder:"Remarks"},domProps:{value:s.form.remarks},on:{input:function(t){t.target.composing||s.$set(s.form,"remarks",t.target.value)}}})]),a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label"},[s._v("Status")]),a("selectize",{staticClass:"form-select",attrs:{name:"status",settings:{placeholder:"Status"}},model:{value:s.form.status,callback:function(t){s.$set(s.form,"status",t)},expression:"form.status"}},[a("option",{attrs:{value:"pending"}},[s._v("Pending")]),a("option",{attrs:{value:"cleared"}},[s._v("Cleared")]),a("option",{attrs:{value:"not-cleared"}},[s._v("Not Cleared")])])],1),a("div",{staticClass:"mb-3 text-right"},[a("button",{staticClass:"btn btn-success ml-auto",attrs:{type:"submit",disabled:s.sending},on:{click:function(t){return s.submit()}}},[s._v("Save")])])])])])])],1)])}),[],!1,null,null,null);t.default=u.exports},2:function(s,t,a){"use strict";var e={props:["title","subhead"]},i=a(0),l=Object(i.a)(e,(function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"page-header"},[t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"col-auto"},[t("div",{staticClass:"page-pretitle"},[this._v(this._s(this.subhead))]),t("h2",{staticClass:"page-title"},[this._v(this._s(this.title))])]),t("div",{staticClass:"col-auto ml-auto d-print-none"},[this._t("default")],2)])])}),[],!1,null,null,null);t.a=l.exports}}]);
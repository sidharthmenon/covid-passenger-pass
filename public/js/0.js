(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/main.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/main.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./resources/js/Layouts/menu.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import header from './header';

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    // layout_header: header,
    layout_menu: _menu__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      open: false
    };
  },
  methods: {
    openmenu: function openmenu() {
      this.open = !this.open;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/menu.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/menu.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/main.vue?vue&type=template&id=739c44c6&lang=pug&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/main.vue?vue&type=template&id=739c44c6&lang=pug& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page" },
    [
      _c(
        "div",
        {
          staticClass: "hamburger-menu d-lg-none",
          class: _vm.open ? "open" : "",
          on: { click: _vm.openmenu }
        },
        [_c("span"), _c("span"), _c("span"), _c("span")]
      ),
      _c("layout_menu", { class: _vm.open ? "open" : "" }),
      _c(
        "div",
        { staticClass: "content" },
        [
          _vm.$page.flash.message
            ? _c(
                "div",
                {
                  staticClass: "alert alert-success alert-dismissible",
                  attrs: { role: "alert" }
                },
                [
                  _vm._v(_vm._s(_vm.$page.flash.message)),
                  _c(
                    "a",
                    {
                      staticClass: "close",
                      attrs: {
                        href: "#",
                        "data-dismiss": "alert",
                        "aria-label": "close"
                      }
                    },
                    [_vm._v("×")]
                  )
                ]
              )
            : _vm._e(),
          _vm._t("default")
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/menu.vue?vue&type=template&id=ba94ab7a&lang=pug&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/menu.vue?vue&type=template&id=ba94ab7a&lang=pug& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    {
      staticClass:
        "navbar navbar-expand-lg navbar-light navbar-primary navbar-vertical",
      attrs: { id: "navbar-primary" }
    },
    [
      _c("div", { staticClass: "container" }, [
        _vm._m(0),
        _c("div", { staticClass: "navbar-collapse collapse show" }, [
          _c("h6", { staticClass: "navbar-heading" }, [_vm._v("Navigation")]),
          _c("ul", { staticClass: "navbar-nav" }, [
            _vm.$page.auth.user.perms.includes("home_view")
              ? _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "inertia-link",
                      {
                        staticClass: "nav-link",
                        attrs: { href: _vm.route("home") }
                      },
                      [
                        _c("span", { staticClass: "nav-link-icon" }, [
                          _c("i", { staticClass: "feather-home" })
                        ]),
                        _c("span", { staticClass: "nav-link-title" }, [
                          _vm._v("Home")
                        ])
                      ]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm.$page.auth.user.perms.includes("user_view")
              ? _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "inertia-link",
                      {
                        staticClass: "nav-link",
                        attrs: { href: _vm.route("users.index") }
                      },
                      [
                        _c("span", { staticClass: "nav-link-icon" }, [
                          _c("i", { staticClass: "feather-user" })
                        ]),
                        _c("span", { staticClass: "nav-link-title" }, [
                          _vm._v("Users")
                        ])
                      ]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm.$page.auth.user.perms.includes("role_view")
              ? _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "inertia-link",
                      {
                        staticClass: "nav-link",
                        attrs: { href: _vm.route("roles.index") }
                      },
                      [
                        _c("span", { staticClass: "nav-link-icon" }, [
                          _c("i", { staticClass: "feather-sliders" })
                        ]),
                        _c("span", { staticClass: "nav-link-title" }, [
                          _vm._v("Roles")
                        ])
                      ]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm.$page.auth.user.perms.includes("passenger_view")
              ? _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "inertia-link",
                      {
                        staticClass: "nav-link",
                        attrs: { href: _vm.route("passengers.index") }
                      },
                      [
                        _c("span", { staticClass: "nav-link-icon" }, [
                          _c("i", { staticClass: "feather-users" })
                        ]),
                        _c("span", { staticClass: "nav-link-title" }, [
                          _vm._v("Passengers")
                        ])
                      ]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "inertia-link",
                  {
                    staticClass: "nav-link",
                    attrs: { href: _vm.route("self.create") }
                  },
                  [
                    _c("span", { staticClass: "nav-link-icon" }, [
                      _c("i", { staticClass: "feather-clipboard" })
                    ]),
                    _c("span", { staticClass: "nav-link-title" }, [
                      _vm._v("Self Declaration Form")
                    ])
                  ]
                )
              ],
              1
            ),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "inertia-link",
                  {
                    staticClass: "nav-link",
                    attrs: { href: _vm.route("self.index") }
                  },
                  [
                    _c("span", { staticClass: "nav-link-icon" }, [
                      _c("i", { staticClass: "feather-grid" })
                    ]),
                    _c("span", { staticClass: "nav-link-title" }, [
                      _vm._v("Retrive QR Code")
                    ])
                  ]
                )
              ],
              1
            ),
            false
              ? undefined
              : _vm._e()
          ]),
          _vm.$page.auth.user.name
            ? _c("div", { staticClass: "navbar-side" }, [
                _c(
                  "div",
                  { staticClass: "ml-auto d-none-navbar-vertical-narrow" },
                  [
                    _c("h5", { staticClass: "text-center" }, [
                      _vm._v(
                        _vm._s(_vm.$page.auth.user.name) +
                          " - " +
                          _vm._s(_vm.$page.auth.user.role)
                      )
                    ])
                  ]
                ),
                _c(
                  "form",
                  { attrs: { action: _vm.route("logout"), method: "POST" } },
                  [
                    _c("input", {
                      attrs: { name: "_token", type: "hidden" },
                      domProps: { value: _vm.$page.csrf_token }
                    }),
                    _vm._m(2)
                  ]
                )
              ])
            : _vm._e()
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass:
          "navbar-brand navbar-brand-autodark d-none-navbar-horizontal",
        attrs: { href: "." }
      },
      [_c("h2", [_vm._v("Portal")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      {
        staticClass:
          "dropdown-menu dropdown-menu-arrow dropdown-menu-columns dropdown-menu-columns-2"
      },
      [
        _c("li", [
          _c(
            "a",
            { staticClass: "dropdown-item", attrs: { href: "./empty.html" } },
            [_vm._v("Empty page")]
          )
        ]),
        _c("li", [
          _c(
            "a",
            { staticClass: "dropdown-item", attrs: { href: "./blank.html" } },
            [_vm._v("Blank page")]
          )
        ]),
        _c("li", [
          _c(
            "a",
            { staticClass: "dropdown-item", attrs: { href: "./buttons.html" } },
            [_vm._v("Buttons        ")]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-primary btn-block", attrs: { type: "submit" } },
      [_c("i", { staticClass: "feather-log-out" }), _vm._v("Logout")]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Layouts/main.vue":
/*!***************************************!*\
  !*** ./resources/js/Layouts/main.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_vue_vue_type_template_id_739c44c6_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=739c44c6&lang=pug& */ "./resources/js/Layouts/main.vue?vue&type=template&id=739c44c6&lang=pug&");
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ "./resources/js/Layouts/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_739c44c6_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_vue_vue_type_template_id_739c44c6_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Layouts/main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Layouts/main.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/Layouts/main.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Layouts/main.vue?vue&type=template&id=739c44c6&lang=pug&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Layouts/main.vue?vue&type=template&id=739c44c6&lang=pug& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_739c44c6_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/pug-plain-loader!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=template&id=739c44c6&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/main.vue?vue&type=template&id=739c44c6&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_739c44c6_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_739c44c6_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Layouts/menu.vue":
/*!***************************************!*\
  !*** ./resources/js/Layouts/menu.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_vue_vue_type_template_id_ba94ab7a_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.vue?vue&type=template&id=ba94ab7a&lang=pug& */ "./resources/js/Layouts/menu.vue?vue&type=template&id=ba94ab7a&lang=pug&");
/* harmony import */ var _menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.vue?vue&type=script&lang=js& */ "./resources/js/Layouts/menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _menu_vue_vue_type_template_id_ba94ab7a_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _menu_vue_vue_type_template_id_ba94ab7a_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Layouts/menu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Layouts/menu.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/Layouts/menu.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./menu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Layouts/menu.vue?vue&type=template&id=ba94ab7a&lang=pug&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Layouts/menu.vue?vue&type=template&id=ba94ab7a&lang=pug& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_ba94ab7a_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/pug-plain-loader!../../../node_modules/vue-loader/lib??vue-loader-options!./menu.vue?vue&type=template&id=ba94ab7a&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/menu.vue?vue&type=template&id=ba94ab7a&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_ba94ab7a_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_ba94ab7a_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
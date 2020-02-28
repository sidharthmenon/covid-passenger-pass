(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Auth/email.vue?vue&type=template&id=1c14d45e&lang=pug&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Auth/email.vue?vue&type=template&id=1c14d45e&lang=pug& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "flex-fill d-flex flex-column justify-content-center" },
    [
      _c("div", { staticClass: "container-tight py-6" }, [
        _vm._m(0),
        _c(
          "form",
          {
            staticClass: "card card-md",
            attrs: { action: _vm.route("password.email"), method: "post" }
          },
          [
            _c("input", {
              attrs: { name: "_token", type: "hidden" },
              domProps: { value: _vm.$page.csrf_token }
            }),
            _c("div", { staticClass: "card-body" }, [
              _c("h2", { staticClass: "mb-5 text-center" }, [
                _vm._v("Forgot password")
              ]),
              _vm.$page.flash.status
                ? _c(
                    "div",
                    {
                      staticClass: "alert alert-success alert-dismissible",
                      attrs: { role: "alert" }
                    },
                    [
                      _vm._v(_vm._s(_vm.$page.flash.status)),
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
              _c("p", { staticClass: "text-muted" }, [
                _vm._v(
                  "Enter your email address and your password will be reset and emailed to you."
                )
              ]),
              _c("div", { staticClass: "mb-3" }, [
                _c("label", { staticClass: "form-label" }, [
                  _vm._v("Email address")
                ]),
                _c("input", {
                  staticClass: "form-control",
                  attrs: {
                    type: "email",
                    placeholder: "Enter email",
                    name: "email"
                  }
                }),
                _c(
                  "div",
                  { staticClass: "invalid-feedback d-block" },
                  _vm._l(_vm.$page.errors.email, function(error) {
                    return _c("span", [_vm._v(_vm._s(error))])
                  }),
                  0
                )
              ]),
              _vm._m(1)
            ])
          ]
        ),
        _c("div", { staticClass: "text-center text-muted" }, [
          _vm._v("Forget it, "),
          _c("a", { attrs: { href: _vm.route("login") } }, [
            _vm._v("send me back")
          ]),
          _vm._v(" to the sign in screen.")
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
    return _c("div", { staticClass: "text-center mb-4" }, [
      _c("h2", [_vm._v("Portal")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-footer" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary btn-block", attrs: { type: "submit" } },
        [_vm._v("Send Password Reset Link")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/Pages/Auth/email.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Auth/email.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _email_vue_vue_type_template_id_1c14d45e_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email.vue?vue&type=template&id=1c14d45e&lang=pug& */ "./resources/js/Pages/Auth/email.vue?vue&type=template&id=1c14d45e&lang=pug&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _email_vue_vue_type_template_id_1c14d45e_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _email_vue_vue_type_template_id_1c14d45e_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Auth/email.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Auth/email.vue?vue&type=template&id=1c14d45e&lang=pug&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Auth/email.vue?vue&type=template&id=1c14d45e&lang=pug& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_email_vue_vue_type_template_id_1c14d45e_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/pug-plain-loader!../../../../node_modules/vue-loader/lib??vue-loader-options!./email.vue?vue&type=template&id=1c14d45e&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Auth/email.vue?vue&type=template&id=1c14d45e&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_email_vue_vue_type_template_id_1c14d45e_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_email_vue_vue_type_template_id_1c14d45e_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
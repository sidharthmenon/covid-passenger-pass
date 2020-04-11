(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/formErrors.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/formErrors.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['errors']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/formInput.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/formInput.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formErrors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formErrors */ "./resources/js/Components/formErrors.vue");
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    form_error: _formErrors__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['label', 'type', 'name', 'placeholder', 'value']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/pageHeader.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/pageHeader.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['title', 'subhead']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Forms/self.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Forms/self.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layouts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Layouts/main */ "./resources/js/Layouts/main.vue");
/* harmony import */ var _Components_pageHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/pageHeader */ "./resources/js/Components/pageHeader.vue");
/* harmony import */ var _Components_formInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/formInput */ "./resources/js/Components/formInput.vue");
/* harmony import */ var _Components_formErrors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/formErrors */ "./resources/js/Components/formErrors.vue");
/* harmony import */ var vue2_selectize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue2-selectize */ "./node_modules/vue2-selectize/dist/vue2-selectize.js");
/* harmony import */ var vue2_selectize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue2_selectize__WEBPACK_IMPORTED_MODULE_4__);
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
  metaInfo: {
    title: 'Self Declaration Form'
  },
  props: ['states', 'countries', 'airports'],
  components: {
    layout: _Layouts_main__WEBPACK_IMPORTED_MODULE_0__["default"],
    page_header: _Components_pageHeader__WEBPACK_IMPORTED_MODULE_1__["default"],
    form_input: _Components_formInput__WEBPACK_IMPORTED_MODULE_2__["default"],
    form_error: _Components_formErrors__WEBPACK_IMPORTED_MODULE_3__["default"],
    Selectize: vue2_selectize__WEBPACK_IMPORTED_MODULE_4___default.a
  },
  data: function data() {
    return {
      sending: false,
      step: 1,
      form: {
        name: '',
        seat: '',
        flight: '',
        passport: '',
        date: '',
        origin: '',
        destination: '',
        house: '',
        street: '',
        tehsil: '',
        district: '',
        state: '',
        pin: '',
        phone: '',
        mobile: '',
        email: '',
        countries: '',
        cities: '',
        fever: false,
        cough: false,
        respiratory: false
      },
      selectizeOptionSource: {
        placeholder: 'Port of origin of Journey',
        valueField: 'id',
        labelField: 'name',
        searchField: ['name', 'city', 'country'],
        options: this.airports,
        create: false,
        render: {
          option: function option(data, escape) {
            return '<div>' + '<span class="title">' + escape(data.name) + '</span>' + '<span class="label">City: ' + data.city + ' | Country: ' + data.country + '</span>' + '</div>';
          },
          item: function item(data, escape) {
            return '<div>' + escape(data.name) + '<span class="label">' + data.city + ' | ' + data.country + '</span>' + '</div>';
          }
        }
      },
      selectizeOptionDestination: {
        placeholder: 'Port of destination of Journey',
        valueField: 'id',
        labelField: 'name',
        searchField: ['name', 'city', 'country'],
        options: this.airports,
        create: false,
        render: {
          option: function option(data, escape) {
            return '<div>' + '<span class="title">' + escape(data.name) + '</span>' + '<span class="label">City: ' + data.city + ' | Country: ' + data.country + '</span>' + '</div>';
          },
          item: function item(data, escape) {
            return '<div>' + escape(data.name) + '<span class="label">' + data.city + ' | ' + data.country + '</span>' + '</div>';
          }
        }
      }
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.sending = true;
      this.$inertia.post(this.route('self.store'), {
        name: this.form.name,
        seat: this.form.seat,
        flight: this.form.flight,
        passport: this.form.passport,
        date: this.form.date,
        origin: this.form.origin,
        destination: this.form.destination,
        house: this.form.house,
        street: this.form.street,
        tehsil: this.form.tehsil,
        district: this.form.district,
        state: this.form.state,
        pin: this.form.pin,
        phone: this.form.phone,
        mobile: this.form.mobile,
        email: this.form.email,
        countries: this.form.countries,
        cities: this.form.cities,
        fever: this.form.fever,
        cough: this.form.cough,
        respiratory: this.form.respiratory,
        _token: this.$page.csrf_token
      }).then(function () {
        _this.sending = false;
        _this.step = 1;
      });
    },
    next: function next() {
      // alert('');
      if (this.step < 4) {
        this.step = this.step + 1;
      }
    },
    back: function back() {
      if (this.step > 1) {
        this.step = this.step - 1;
      }
    }
  },
  mounted: function mounted() {
    flatpickr(document.querySelector('#date_picker input'), {});
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/formErrors.vue?vue&type=template&id=565ec63a&lang=pug&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/formErrors.vue?vue&type=template&id=565ec63a&lang=pug& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "invalid-feedback d-block" },
    _vm._l(_vm.errors, function(error) {
      return _c("span", [_vm._v(_vm._s(error))])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/formInput.vue?vue&type=template&id=0a7230cb&lang=pug&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/formInput.vue?vue&type=template&id=0a7230cb&lang=pug& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mb-3" },
    [
      _c("label", { staticClass: "form-label" }, [_vm._v(_vm._s(_vm.label))]),
      _c("input", {
        staticClass: "form-control",
        class: _vm.$page.errors[_vm.name] ? "is-invalid" : "",
        attrs: { type: _vm.type, name: _vm.name, placeholder: _vm.placeholder },
        domProps: { value: _vm.value },
        on: {
          input: function($event) {
            return _vm.$emit("input", $event.target.value)
          }
        }
      }),
      _c("form_error", { attrs: { errors: _vm.$page.errors[_vm.name] } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/pageHeader.vue?vue&type=template&id=3563ac67&lang=pug&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/pageHeader.vue?vue&type=template&id=3563ac67&lang=pug& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "page-header" }, [
    _c("div", { staticClass: "row align-items-center" }, [
      _c("div", { staticClass: "col-auto" }, [
        _c("div", { staticClass: "page-pretitle" }, [
          _vm._v(_vm._s(_vm.subhead))
        ]),
        _c("h2", { staticClass: "page-title" }, [_vm._v(_vm._s(_vm.title))])
      ]),
      _c(
        "div",
        { staticClass: "col-auto ml-auto d-print-none" },
        [_vm._t("default")],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Forms/self.vue?vue&type=template&id=a7af2cd6&lang=pug&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Forms/self.vue?vue&type=template&id=a7af2cd6&lang=pug& ***!
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
  return _c("layout", [
    _c(
      "div",
      { staticClass: "container" },
      [
        _c(
          "page_header",
          { attrs: { title: "Self Declaration Form", subhead: "Add New" } },
          [
            _c(
              "inertia-link",
              {
                staticClass: "btn btn-primary ml-3",
                attrs: { href: _vm.route("home") }
              },
              [_c("i", { staticClass: "feather-arrow-left" }), _vm._v("Back")]
            )
          ],
          1
        ),
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.submit($event)
              }
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _vm.step == 1
                ? _c("div", { staticClass: "col-sm-6" }, [
                    _c("div", { staticClass: "card" }, [
                      _c("div", { staticClass: "card-header" }, [
                        _c("h4", { staticClass: "card-title" }, [
                          _vm._v("Personal Information")
                        ])
                      ]),
                      _c(
                        "div",
                        { staticClass: "card-body border-bottom p-5" },
                        [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-sm-6" },
                              [
                                _c("form_input", {
                                  attrs: {
                                    type: "text",
                                    name: "name",
                                    label: "Name of the passenger",
                                    placeholder: "Name of the passenger"
                                  },
                                  model: {
                                    value: _vm.form.name,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "name", $$v)
                                    },
                                    expression: "form.name"
                                  }
                                })
                              ],
                              1
                            ),
                            _c("div", { staticClass: "col-sm-6" }, [
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-6" },
                                  [
                                    _c("form_input", {
                                      attrs: {
                                        type: "text",
                                        name: "seat",
                                        label: "Seat Number",
                                        placeholder: "Seat Number"
                                      },
                                      model: {
                                        value: _vm.form.seat,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "seat", $$v)
                                        },
                                        expression: "form.seat"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _c(
                                  "div",
                                  { staticClass: "col-6" },
                                  [
                                    _c("form_input", {
                                      attrs: {
                                        type: "text",
                                        name: "flight",
                                        label: "Flight Number",
                                        placeholder: "Flight Number"
                                      },
                                      model: {
                                        value: _vm.form.flight,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "flight", $$v)
                                        },
                                        expression: "form.flight"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ])
                            ]),
                            _c(
                              "div",
                              { staticClass: "col-sm-6" },
                              [
                                _c("form_input", {
                                  attrs: {
                                    type: "text",
                                    name: "passport",
                                    label: "Passport Number",
                                    placeholder: "Passport Number"
                                  },
                                  model: {
                                    value: _vm.form.passport,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "passport", $$v)
                                    },
                                    expression: "form.passport"
                                  }
                                })
                              ],
                              1
                            ),
                            _c(
                              "div",
                              { staticClass: "col-sm-6" },
                              [
                                _c("form_input", {
                                  attrs: {
                                    id: "date_picker",
                                    type: "date",
                                    name: "date",
                                    label: "Date of Arrival",
                                    placeholder: "Date of Arrival"
                                  },
                                  model: {
                                    value: _vm.form.date,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "date", $$v)
                                    },
                                    expression: "form.date"
                                  }
                                })
                              ],
                              1
                            ),
                            _c("div", { staticClass: "col-sm-6" }, [
                              _c(
                                "div",
                                { staticClass: "mb-3 airport-select" },
                                [
                                  _c("label", { staticClass: "form-label" }, [
                                    _vm._v("Port of origin of Journey")
                                  ]),
                                  _c("selectize", {
                                    staticClass: "form-select",
                                    attrs: {
                                      name: "origin",
                                      settings: _vm.selectizeOptionSource
                                    },
                                    model: {
                                      value: _vm.form.origin,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "origin", $$v)
                                      },
                                      expression: "form.origin"
                                    }
                                  }),
                                  _c("form_error", {
                                    attrs: { errors: _vm.$page.errors.origin }
                                  })
                                ],
                                1
                              )
                            ]),
                            _c("div", { staticClass: "col-sm-6" }, [
                              _c(
                                "div",
                                { staticClass: "mb-3 airport-select" },
                                [
                                  _c("label", { staticClass: "form-label" }, [
                                    _vm._v("Port of destination of Journey")
                                  ]),
                                  _c("selectize", {
                                    staticClass: "form-select",
                                    attrs: {
                                      name: "destination",
                                      settings: _vm.selectizeOptionDestination
                                    },
                                    model: {
                                      value: _vm.form.destination,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "destination", $$v)
                                      },
                                      expression: "form.destination"
                                    }
                                  }),
                                  _c("form_error", {
                                    attrs: {
                                      errors: _vm.$page.errors.destination
                                    }
                                  })
                                ],
                                1
                              )
                            ])
                          ])
                        ]
                      )
                    ])
                  ])
                : _vm._e(),
              _vm.step == 2
                ? _c("div", { staticClass: "col-sm-6" }, [
                    _c("div", { staticClass: "card" }, [
                      _c("div", { staticClass: "card-header" }, [
                        _c("h4", { staticClass: "card-title" }, [
                          _vm._v("Contact Address in India for All Travelers")
                        ])
                      ]),
                      _c(
                        "div",
                        { staticClass: "card-body border-bottom p-5" },
                        [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-sm-6" },
                              [
                                _c("form_input", {
                                  attrs: {
                                    type: "text",
                                    name: "house",
                                    label: "House Number",
                                    placeholder: "House Number"
                                  },
                                  model: {
                                    value: _vm.form.house,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "house", $$v)
                                    },
                                    expression: "form.house"
                                  }
                                })
                              ],
                              1
                            ),
                            _c(
                              "div",
                              { staticClass: "col-sm-6" },
                              [
                                _c("form_input", {
                                  attrs: {
                                    type: "text",
                                    name: "street",
                                    label: "Street/ Village",
                                    placeholder: "Street/ Village"
                                  },
                                  model: {
                                    value: _vm.form.street,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "street", $$v)
                                    },
                                    expression: "form.street"
                                  }
                                })
                              ],
                              1
                            ),
                            _c("div", { staticClass: "col-sm-12" }, [
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-6" },
                                  [
                                    _c("form_input", {
                                      attrs: {
                                        type: "text",
                                        name: "tehsil",
                                        label: "Tehsil",
                                        placeholder: "Tehsil"
                                      },
                                      model: {
                                        value: _vm.form.tehsil,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "tehsil", $$v)
                                        },
                                        expression: "form.tehsil"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _c(
                                  "div",
                                  { staticClass: "col-6" },
                                  [
                                    _c("form_input", {
                                      attrs: {
                                        type: "text",
                                        name: "district",
                                        label: "District/ City",
                                        placeholder: "District/ City"
                                      },
                                      model: {
                                        value: _vm.form.district,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "district", $$v)
                                        },
                                        expression: "form.district"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ])
                            ]),
                            _c("div", { staticClass: "col-sm-12" }, [
                              _c("div", { staticClass: "row" }, [
                                _c("div", { staticClass: "col-6" }, [
                                  _c(
                                    "div",
                                    { staticClass: "mb-3" },
                                    [
                                      _c(
                                        "label",
                                        { staticClass: "form-label" },
                                        [_vm._v("State")]
                                      ),
                                      _c(
                                        "selectize",
                                        {
                                          staticClass: "form-select",
                                          attrs: {
                                            name: "state",
                                            settings: { placeholder: "State" }
                                          },
                                          model: {
                                            value: _vm.form.state,
                                            callback: function($$v) {
                                              _vm.$set(_vm.form, "state", $$v)
                                            },
                                            expression: "form.state"
                                          }
                                        },
                                        _vm._l(_vm.states, function(state) {
                                          return _c(
                                            "option",
                                            { domProps: { value: state.name } },
                                            [_vm._v(_vm._s(state.name))]
                                          )
                                        }),
                                        0
                                      ),
                                      _c("form_error", {
                                        attrs: {
                                          errors: _vm.$page.errors.state
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]),
                                _c(
                                  "div",
                                  { staticClass: "col-6" },
                                  [
                                    _c("form_input", {
                                      attrs: {
                                        type: "number",
                                        name: "pin",
                                        label: "PIN",
                                        placeholder: "PIN"
                                      },
                                      model: {
                                        value: _vm.form.pin,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "pin", $$v)
                                        },
                                        expression: "form.pin"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ])
                            ]),
                            _c("div", { staticClass: "col-sm-12" }, [
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-6" },
                                  [
                                    _c("form_input", {
                                      attrs: {
                                        type: "number",
                                        name: "phone",
                                        label: "Residence Phone",
                                        placeholder: "Residence Number"
                                      },
                                      model: {
                                        value: _vm.form.phone,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "phone", $$v)
                                        },
                                        expression: "form.phone"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _c(
                                  "div",
                                  { staticClass: "col-6" },
                                  [
                                    _c("form_input", {
                                      attrs: {
                                        type: "number",
                                        name: "mobile",
                                        label: "Mobile",
                                        placeholder: "Mobile"
                                      },
                                      model: {
                                        value: _vm.form.mobile,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "mobile", $$v)
                                        },
                                        expression: "form.mobile"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ])
                            ]),
                            _c(
                              "div",
                              { staticClass: "col-sm-6" },
                              [
                                _c("form_input", {
                                  attrs: {
                                    type: "text",
                                    name: "email",
                                    label: "Email",
                                    placeholder: "Email"
                                  },
                                  model: {
                                    value: _vm.form.email,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "email", $$v)
                                    },
                                    expression: "form.email"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ]
                      )
                    ])
                  ])
                : _vm._e(),
              _vm.step == 3
                ? _c("div", { staticClass: "col-sm-6" }, [
                    _c("div", { staticClass: "card" }, [
                      _c("div", { staticClass: "card-header" }, [
                        _c("h4", { staticClass: "card-title" }, [
                          _vm._v("PART-A")
                        ])
                      ]),
                      _c(
                        "div",
                        { staticClass: "card-body border-bottom p-5" },
                        [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-sm-12" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "mb-3" },
                                  [
                                    _c("label", { staticClass: "form-label" }, [
                                      _vm._v(
                                        "Details of the countries visited since last 28 days?"
                                      )
                                    ]),
                                    _c(
                                      "selectize",
                                      {
                                        staticClass: "form-select",
                                        attrs: {
                                          name: "countries",
                                          settings: {
                                            placeholder:
                                              "Details of the countries visited since last 28 days?",
                                            maxItems: 15,
                                            plugins: ["remove_button"]
                                          }
                                        },
                                        model: {
                                          value: _vm.form.countries,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "countries", $$v)
                                          },
                                          expression: "form.countries"
                                        }
                                      },
                                      _vm._l(_vm.countries, function(country) {
                                        return _c(
                                          "option",
                                          { domProps: { value: country.id } },
                                          [_vm._v(_vm._s(country.name))]
                                        )
                                      }),
                                      0
                                    ),
                                    _c("form_error", {
                                      attrs: {
                                        errors: _vm.$page.errors.countries
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _c("form_input", {
                                  attrs: {
                                    type: "text",
                                    name: "cities",
                                    label:
                                      "Details of the cities visited since last 28 days?",
                                    placeholder:
                                      "Details of the cities visited since last 28 days?"
                                  },
                                  model: {
                                    value: _vm.form.cities,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "cities", $$v)
                                    },
                                    expression: "form.cities"
                                  }
                                }),
                                _c("div", { staticClass: "mb-3" }, [
                                  _c("div", { staticClass: "form-label" }, [
                                    _vm._v(
                                      "Are you suffering from any of the following symptoms"
                                    )
                                  ]),
                                  _c(
                                    "label",
                                    { staticClass: "form-check form-switch" },
                                    [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.fever,
                                            expression: "form.fever"
                                          }
                                        ],
                                        staticClass: "form-check-input",
                                        attrs: { type: "checkbox" },
                                        domProps: {
                                          checked: Array.isArray(_vm.form.fever)
                                            ? _vm._i(_vm.form.fever, null) > -1
                                            : _vm.form.fever
                                        },
                                        on: {
                                          change: function($event) {
                                            var $$a = _vm.form.fever,
                                              $$el = $event.target,
                                              $$c = $$el.checked ? true : false
                                            if (Array.isArray($$a)) {
                                              var $$v = null,
                                                $$i = _vm._i($$a, $$v)
                                              if ($$el.checked) {
                                                $$i < 0 &&
                                                  _vm.$set(
                                                    _vm.form,
                                                    "fever",
                                                    $$a.concat([$$v])
                                                  )
                                              } else {
                                                $$i > -1 &&
                                                  _vm.$set(
                                                    _vm.form,
                                                    "fever",
                                                    $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      )
                                                  )
                                              }
                                            } else {
                                              _vm.$set(_vm.form, "fever", $$c)
                                            }
                                          }
                                        }
                                      }),
                                      _c(
                                        "span",
                                        { staticClass: "form-check-label" },
                                        [_vm._v("Fever")]
                                      )
                                    ]
                                  ),
                                  _c(
                                    "label",
                                    { staticClass: "form-check form-switch" },
                                    [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.cough,
                                            expression: "form.cough"
                                          }
                                        ],
                                        staticClass: "form-check-input",
                                        attrs: { type: "checkbox" },
                                        domProps: {
                                          checked: Array.isArray(_vm.form.cough)
                                            ? _vm._i(_vm.form.cough, null) > -1
                                            : _vm.form.cough
                                        },
                                        on: {
                                          change: function($event) {
                                            var $$a = _vm.form.cough,
                                              $$el = $event.target,
                                              $$c = $$el.checked ? true : false
                                            if (Array.isArray($$a)) {
                                              var $$v = null,
                                                $$i = _vm._i($$a, $$v)
                                              if ($$el.checked) {
                                                $$i < 0 &&
                                                  _vm.$set(
                                                    _vm.form,
                                                    "cough",
                                                    $$a.concat([$$v])
                                                  )
                                              } else {
                                                $$i > -1 &&
                                                  _vm.$set(
                                                    _vm.form,
                                                    "cough",
                                                    $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      )
                                                  )
                                              }
                                            } else {
                                              _vm.$set(_vm.form, "cough", $$c)
                                            }
                                          }
                                        }
                                      }),
                                      _c(
                                        "span",
                                        { staticClass: "form-check-label" },
                                        [_vm._v("Cough")]
                                      )
                                    ]
                                  ),
                                  _c(
                                    "label",
                                    { staticClass: "form-check form-switch" },
                                    [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.respiratory,
                                            expression: "form.respiratory"
                                          }
                                        ],
                                        staticClass: "form-check-input",
                                        attrs: { type: "checkbox" },
                                        domProps: {
                                          checked: Array.isArray(
                                            _vm.form.respiratory
                                          )
                                            ? _vm._i(
                                                _vm.form.respiratory,
                                                null
                                              ) > -1
                                            : _vm.form.respiratory
                                        },
                                        on: {
                                          change: function($event) {
                                            var $$a = _vm.form.respiratory,
                                              $$el = $event.target,
                                              $$c = $$el.checked ? true : false
                                            if (Array.isArray($$a)) {
                                              var $$v = null,
                                                $$i = _vm._i($$a, $$v)
                                              if ($$el.checked) {
                                                $$i < 0 &&
                                                  _vm.$set(
                                                    _vm.form,
                                                    "respiratory",
                                                    $$a.concat([$$v])
                                                  )
                                              } else {
                                                $$i > -1 &&
                                                  _vm.$set(
                                                    _vm.form,
                                                    "respiratory",
                                                    $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      )
                                                  )
                                              }
                                            } else {
                                              _vm.$set(
                                                _vm.form,
                                                "respiratory",
                                                $$c
                                              )
                                            }
                                          }
                                        }
                                      }),
                                      _c(
                                        "span",
                                        { staticClass: "form-check-label" },
                                        [_vm._v("Respiratory distress")]
                                      )
                                    ]
                                  )
                                ])
                              ],
                              1
                            )
                          ])
                        ]
                      )
                    ])
                  ])
                : _vm._e()
            ]),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-6 text-right d-flex" }, [
                _vm.step > 1
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-link",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.back()
                          }
                        }
                      },
                      [_vm._v("Back")]
                    )
                  : _vm._e(),
                _vm.step < 3
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-primary ml-auto",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.next()
                          }
                        }
                      },
                      [_vm._v("Next")]
                    )
                  : _vm._e(),
                _vm.step == 3
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-success ml-auto",
                        attrs: { type: "submit", disabled: _vm.sending }
                      },
                      [_vm._v("Save")]
                    )
                  : _vm._e()
              ])
            ])
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Components/formErrors.vue":
/*!************************************************!*\
  !*** ./resources/js/Components/formErrors.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formErrors_vue_vue_type_template_id_565ec63a_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formErrors.vue?vue&type=template&id=565ec63a&lang=pug& */ "./resources/js/Components/formErrors.vue?vue&type=template&id=565ec63a&lang=pug&");
/* harmony import */ var _formErrors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formErrors.vue?vue&type=script&lang=js& */ "./resources/js/Components/formErrors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _formErrors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _formErrors_vue_vue_type_template_id_565ec63a_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _formErrors_vue_vue_type_template_id_565ec63a_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/formErrors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/formErrors.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Components/formErrors.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formErrors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./formErrors.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/formErrors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formErrors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/formErrors.vue?vue&type=template&id=565ec63a&lang=pug&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Components/formErrors.vue?vue&type=template&id=565ec63a&lang=pug& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_formErrors_vue_vue_type_template_id_565ec63a_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/pug-plain-loader!../../../node_modules/vue-loader/lib??vue-loader-options!./formErrors.vue?vue&type=template&id=565ec63a&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/formErrors.vue?vue&type=template&id=565ec63a&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_formErrors_vue_vue_type_template_id_565ec63a_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_formErrors_vue_vue_type_template_id_565ec63a_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Components/formInput.vue":
/*!***********************************************!*\
  !*** ./resources/js/Components/formInput.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formInput_vue_vue_type_template_id_0a7230cb_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formInput.vue?vue&type=template&id=0a7230cb&lang=pug& */ "./resources/js/Components/formInput.vue?vue&type=template&id=0a7230cb&lang=pug&");
/* harmony import */ var _formInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formInput.vue?vue&type=script&lang=js& */ "./resources/js/Components/formInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _formInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _formInput_vue_vue_type_template_id_0a7230cb_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _formInput_vue_vue_type_template_id_0a7230cb_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/formInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/formInput.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Components/formInput.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./formInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/formInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/formInput.vue?vue&type=template&id=0a7230cb&lang=pug&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Components/formInput.vue?vue&type=template&id=0a7230cb&lang=pug& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_formInput_vue_vue_type_template_id_0a7230cb_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/pug-plain-loader!../../../node_modules/vue-loader/lib??vue-loader-options!./formInput.vue?vue&type=template&id=0a7230cb&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/formInput.vue?vue&type=template&id=0a7230cb&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_formInput_vue_vue_type_template_id_0a7230cb_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_formInput_vue_vue_type_template_id_0a7230cb_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Components/pageHeader.vue":
/*!************************************************!*\
  !*** ./resources/js/Components/pageHeader.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageHeader_vue_vue_type_template_id_3563ac67_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageHeader.vue?vue&type=template&id=3563ac67&lang=pug& */ "./resources/js/Components/pageHeader.vue?vue&type=template&id=3563ac67&lang=pug&");
/* harmony import */ var _pageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageHeader.vue?vue&type=script&lang=js& */ "./resources/js/Components/pageHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _pageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pageHeader_vue_vue_type_template_id_3563ac67_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pageHeader_vue_vue_type_template_id_3563ac67_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/pageHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/pageHeader.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Components/pageHeader.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./pageHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/pageHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/pageHeader.vue?vue&type=template&id=3563ac67&lang=pug&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Components/pageHeader.vue?vue&type=template&id=3563ac67&lang=pug& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_pageHeader_vue_vue_type_template_id_3563ac67_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/pug-plain-loader!../../../node_modules/vue-loader/lib??vue-loader-options!./pageHeader.vue?vue&type=template&id=3563ac67&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/pageHeader.vue?vue&type=template&id=3563ac67&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_pageHeader_vue_vue_type_template_id_3563ac67_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_pageHeader_vue_vue_type_template_id_3563ac67_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Forms/self.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Forms/self.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _self_vue_vue_type_template_id_a7af2cd6_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./self.vue?vue&type=template&id=a7af2cd6&lang=pug& */ "./resources/js/Pages/Forms/self.vue?vue&type=template&id=a7af2cd6&lang=pug&");
/* harmony import */ var _self_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./self.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Forms/self.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _self_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _self_vue_vue_type_template_id_a7af2cd6_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _self_vue_vue_type_template_id_a7af2cd6_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Forms/self.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Forms/self.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Forms/self.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_self_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./self.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Forms/self.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_self_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Forms/self.vue?vue&type=template&id=a7af2cd6&lang=pug&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Forms/self.vue?vue&type=template&id=a7af2cd6&lang=pug& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_self_vue_vue_type_template_id_a7af2cd6_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/pug-plain-loader!../../../../node_modules/vue-loader/lib??vue-loader-options!./self.vue?vue&type=template&id=a7af2cd6&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Forms/self.vue?vue&type=template&id=a7af2cd6&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_self_vue_vue_type_template_id_a7af2cd6_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_self_vue_vue_type_template_id_a7af2cd6_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
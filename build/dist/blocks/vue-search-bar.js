/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"dist/blocks/vue-search-bar": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([2,"dist/blocks.cement"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/SearchBar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/SearchBar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    action: {
      type: String,
      default: '/search'
    },
    cssClasses: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    hiddenInputs: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    locale: {
      type: String,
      default: function _default() {
        return 'en';
      }
    },
    searchBtn: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: 'Search ...'
    },
    inputWidth: {
      type: String,
      default: '100%'
    },
    limitSuggestions: {
      type: Number,
      default: 5
    }
  },
  data: function data() {
    return {
      params: '',
      inputStyle: {},
      expanded: false,
      icon: 'search',
      searching: false,
      displaySuggestions: false,
      selectedIndex: 0,
      suggestions: []
    };
  },
  computed: {
    containerClass: function containerClass() {
      return this.cssClasses['container'];
    },
    formClass: function formClass() {
      return this.cssClasses['form'];
    },
    inputClass: function inputClass() {
      return this.cssClasses['input'];
    }
  },
  mounted: function mounted() {
    this.inputStyle = {
      width: "calc(100% - ".concat(this.$refs.btn.getBoundingClientRect().width, "px)")
    };
  },
  methods: {
    // Using dom manipulation as this is being 
    // invoke by outside JS
    hide: function hide() {
      document.getElementById(this.id).classList.remove('c-search--visible');
    },
    hideSuggestions: function hideSuggestions() {},
    navDown: function navDown() {
      var i = this.selectedIndex % this.suggestions.length;
      this.suggestions[i].selected = true;
      this.selectedIndex += 1;
    },
    navUp: function navUp() {
      var i = this.suggestions.length - 1 - this.selectedIndex % this.suggestions.length;
      this.suggestions[i].selected = true;
      this.selectedIndex += 1;
    },
    getSelected: function getSelected() {},
    getSuggestions: function getSuggestions() {},
    cleanSuggestions: function cleanSuggestions() {}
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/SearchBar.vue?vue&type=template&id=12c087d9&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/SearchBar.vue?vue&type=template&id=12c087d9& ***!
  \********************************************************************************************************************************************************************************************/
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
  return _c("div", { class: _vm.containerClass }, [
    _c(
      "form",
      {
        class: _vm.formClass,
        attrs: { action: _vm.action, method: "get" },
        on: {
          keyup: [
            function($event) {
              if (
                !("button" in $event) &&
                _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])
              ) {
                return null
              }
              return _vm.cleanSuggestions($event)
            },
            function($event) {
              if (
                !("button" in $event) &&
                _vm._k($event.keyCode, "down", 40, $event.key, [
                  "Down",
                  "ArrowDown"
                ])
              ) {
                return null
              }
              return _vm.NavDown($event)
            },
            function($event) {
              if (
                !("button" in $event) &&
                _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])
              ) {
                return null
              }
              return _vm.navUp($event)
            }
          ],
          focusout: _vm.hideSuggestions,
          click: function($event) {
            _vm.expanded = true
          }
        }
      },
      [
        _vm._l(_vm.hiddenInputs, function(value, key) {
          return _c("input", {
            attrs: { type: "hidden", name: key },
            domProps: { value: value }
          })
        }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.params,
              expression: "params"
            }
          ],
          class: _vm.inputClass,
          style: _vm.inputStyle,
          attrs: { type: "text", placeholder: _vm.placeholder, name: "q" },
          domProps: { value: _vm.params },
          on: {
            blur: _vm.hideSuggestions,
            change: _vm.getSuggestions,
            keypress: _vm.getSuggestions,
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.params = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _vm._t("icon"),
        _vm._v(" "),
        [_vm._t("search-btn")],
        _vm._v(" "),
        _c(
          "a",
          { staticClass: "c-search__close-icon", on: { click: _vm.hide } },
          [_vm._t("close-icon")],
          2
        )
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/entries/vue-search-bar.js":
/*!***************************************!*\
  !*** ./src/entries/vue-search-bar.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_dist_vue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue/dist/vue.js */ "./node_modules/vue/dist/vue.js");
/* harmony import */ var vue_dist_vue_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_dist_vue_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_dom_listener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/dom-listener */ "./src/config/dom-listener.js");
/* harmony import */ var _vue_SearchBar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vue/SearchBar.vue */ "./src/vue/SearchBar.vue");

 // Components


vue_dist_vue_js__WEBPACK_IMPORTED_MODULE_0___default.a.component('search-bar', _vue_SearchBar_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
Object(_config_dom_listener__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ }),

/***/ "./src/vue/SearchBar.vue":
/*!*******************************!*\
  !*** ./src/vue/SearchBar.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchBar_vue_vue_type_template_id_12c087d9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchBar.vue?vue&type=template&id=12c087d9& */ "./src/vue/SearchBar.vue?vue&type=template&id=12c087d9&");
/* harmony import */ var _SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBar.vue?vue&type=script&lang=js& */ "./src/vue/SearchBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchBar_vue_vue_type_template_id_12c087d9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchBar_vue_vue_type_template_id_12c087d9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue/SearchBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/SearchBar.vue?vue&type=script&lang=js&":
/*!********************************************************!*\
  !*** ./src/vue/SearchBar.vue?vue&type=script&lang=js& ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./SearchBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/SearchBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/SearchBar.vue?vue&type=template&id=12c087d9&":
/*!**************************************************************!*\
  !*** ./src/vue/SearchBar.vue?vue&type=template&id=12c087d9& ***!
  \**************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_12c087d9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./SearchBar.vue?vue&type=template&id=12c087d9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/SearchBar.vue?vue&type=template&id=12c087d9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_12c087d9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_12c087d9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 2:
/*!*********************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:8080 ./src/entries/vue-search-bar.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /app/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:8080 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:8080");
module.exports = __webpack_require__(/*! ./src/entries/vue-search-bar.js */"./src/entries/vue-search-bar.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3NyYy92dWUvU2VhcmNoQmFyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdnVlL1NlYXJjaEJhci52dWU/OTNjZSIsIndlYnBhY2s6Ly8vLi9zcmMvZW50cmllcy92dWUtc2VhcmNoLWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdnVlL1NlYXJjaEJhci52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Z1ZS9TZWFyY2hCYXIudnVlPzg1NzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Z1ZS9TZWFyY2hCYXIudnVlPzE4ZjMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwiU2VhcmNoQmFyIiwiTW91bnRlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlE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QTtBQUFBO0FBQUE7QUFBQTtDQUdBOztBQUNBO0FBQ0FBLHNEQUFHLENBQUNDLFNBQUosQ0FBYyxZQUFkLEVBQTRCQywwREFBNUI7QUFFQUMsb0VBQU8sRzs7Ozs7Ozs7Ozs7O0FDUFA7QUFBQTtBQUFBO0FBQUE7QUFBd0Y7QUFDM0I7QUFDTDs7O0FBR3hEO0FBQzBGO0FBQzFGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQXlLLENBQWdCLDZPQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTdMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJkaXN0L2Jsb2Nrcy92dWUtc2VhcmNoLWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiZGlzdC9ibG9ja3MvdnVlLXNlYXJjaC1iYXJcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMixcImRpc3QvYmxvY2tzLmNlbWVudFwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiA6Y2xhc3M9J2NvbnRhaW5lckNsYXNzJz5cblxuICAgIDxmb3JtIDpjbGFzcz0nZm9ybUNsYXNzJ1xuICAgICAgQGtleXVwLmVzYz0nY2xlYW5TdWdnZXN0aW9ucycgXG4gICAgICBAZm9jdXNvdXQ9J2hpZGVTdWdnZXN0aW9ucycgXG4gICAgICBAa2V5dXAuZG93bj0nTmF2RG93bidcbiAgICAgIEBrZXl1cC51cD0nbmF2VXAnXG4gICAgICBAY2xpY2s9J2V4cGFuZGVkID0gdHJ1ZSdcbiAgICAgIDphY3Rpb249J2FjdGlvbidcbiAgICAgIG1ldGhvZD0nZ2V0Jz5cblxuICAgICAgPGlucHV0IHYtZm9yPScodmFsdWUsIGtleSkgaW4gaGlkZGVuSW5wdXRzJyB0eXBlPSdoaWRkZW4nIDpuYW1lPSdrZXknIDp2YWx1ZT0ndmFsdWUnPlxuXG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgOnN0eWxlPSdpbnB1dFN0eWxlJ1xuICAgICAgICA6Y2xhc3M9J2lucHV0Q2xhc3MnXG4gICAgICAgIDpwbGFjZWhvbGRlcj0ncGxhY2Vob2xkZXInXG4gICAgICAgIEBibHVyPSdoaWRlU3VnZ2VzdGlvbnMnXG4gICAgICAgIEBjaGFuZ2U9J2dldFN1Z2dlc3Rpb25zJ1xuICAgICAgICBAa2V5cHJlc3M9J2dldFN1Z2dlc3Rpb25zJ1xuICAgICAgICB2LW1vZGVsPSdwYXJhbXMnXG4gICAgICAgICBuYW1lPSdxJz5cblxuICAgICAgPHNsb3QgcmVmPSdpY29uJyBuYW1lPSdpY29uJz48L3Nsb3Q+XG4gICAgICA8dGVtcGxhdGUgcmVmPSdidG4nPlxuICAgICAgICA8c2xvdCBuYW1lPSdzZWFyY2gtYnRuJz48L3Nsb3Q+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8YSBAY2xpY2s9J2hpZGUnIGNsYXNzPSdjLXNlYXJjaF9fY2xvc2UtaWNvbic+XG4gICAgICAgIDxzbG90IG5hbWU9J2Nsb3NlLWljb24nPjwvc2xvdD5cbiAgICAgIDwvYT5cblxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuXG4gICAgYWN0aW9uIDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJy9zZWFyY2gnXG4gICAgfSxcblxuICAgIGNzc0NsYXNzZXM6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IHsgcmV0dXJuIHt9IH1cbiAgICB9LFxuXG4gICAgaGlkZGVuSW5wdXRzOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0OiAoKSA9PiB7IHJldHVybiB7fSB9XG4gICAgfSxcblxuICAgIGxvY2FsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdCAoKSB7IHJldHVybiAnZW4nIH1cbiAgICB9LFxuXG4gICAgc2VhcmNoQnRuOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH0sXG5cbiAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ1NlYXJjaCAuLi4nXG4gICAgfSxcblxuICAgIGlucHV0V2lkdGg6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcxMDAlJ1xuICAgIH0sXG5cbiAgICBsaW1pdFN1Z2dlc3Rpb25zOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiA1XG4gICAgfVxuXG4gIH0sXG5cbiAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJhbXM6ICcnLFxuICAgICAgaW5wdXRTdHlsZToge30sXG4gICAgICBleHBhbmRlZDogZmFsc2UsXG4gICAgICBpY29uOiAnc2VhcmNoJyxcbiAgICAgIHNlYXJjaGluZzogZmFsc2UsXG4gICAgICBkaXNwbGF5U3VnZ2VzdGlvbnM6IGZhbHNlLFxuICAgICAgc2VsZWN0ZWRJbmRleDogMCxcbiAgICAgIHN1Z2dlc3Rpb25zOiBbXVxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuXG4gICAgY29udGFpbmVyQ2xhc3MgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3NzQ2xhc3Nlc1snY29udGFpbmVyJ11cbiAgICB9LFxuXG4gICAgZm9ybUNsYXNzICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNzc0NsYXNzZXNbJ2Zvcm0nXVxuICAgIH0sXG5cbiAgICBpbnB1dENsYXNzICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNzc0NsYXNzZXNbJ2lucHV0J11cbiAgICB9XG5cbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICB0aGlzLmlucHV0U3R5bGUgPSB7d2lkdGg6IGBjYWxjKDEwMCUgLSAke3RoaXMuJHJlZnMuYnRuLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRofXB4KWAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcblxuICAgIC8vIFVzaW5nIGRvbSBtYW5pcHVsYXRpb24gYXMgdGhpcyBpcyBiZWluZyBcbiAgICAvLyBpbnZva2UgYnkgb3V0c2lkZSBKU1xuICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLmNsYXNzTGlzdC5yZW1vdmUoJ2Mtc2VhcmNoLS12aXNpYmxlJylcbiAgICB9LFxuXG4gICAgaGlkZVN1Z2dlc3Rpb25zOiBmdW5jdGlvbiAoKSB7XG4gICAgfSxcblxuICAgIG5hdkRvd246IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpID0gdGhpcy5zZWxlY3RlZEluZGV4ICUgdGhpcy5zdWdnZXN0aW9ucy5sZW5ndGhcbiAgICAgIHRoaXMuc3VnZ2VzdGlvbnNbaV0uc2VsZWN0ZWQgPSB0cnVlXG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggKz0gMVxuICAgIH0sXG5cbiAgICBuYXZVcDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGkgPSAodGhpcy5zdWdnZXN0aW9ucy5sZW5ndGggLSAxKSAtICh0aGlzLnNlbGVjdGVkSW5kZXggJSB0aGlzLnN1Z2dlc3Rpb25zLmxlbmd0aClcbiAgICAgIHRoaXMuc3VnZ2VzdGlvbnNbaV0uc2VsZWN0ZWQgPSB0cnVlXG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggKz0gMVxuICAgIH0sXG5cbiAgICBnZXRTZWxlY3RlZDogZnVuY3Rpb24gKCkge1xuICAgIH0sXG5cbiAgICBnZXRTdWdnZXN0aW9uczogZnVuY3Rpb24gKCkge1xuICAgIH0sXG5cbiAgICBjbGVhblN1Z2dlc3Rpb25zOiBmdW5jdGlvbiAoKSB7XG4gICAgfVxuXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IGNsYXNzOiBfdm0uY29udGFpbmVyQ2xhc3MgfSwgW1xuICAgIF9jKFxuICAgICAgXCJmb3JtXCIsXG4gICAgICB7XG4gICAgICAgIGNsYXNzOiBfdm0uZm9ybUNsYXNzLFxuICAgICAgICBhdHRyczogeyBhY3Rpb246IF92bS5hY3Rpb24sIG1ldGhvZDogXCJnZXRcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGtleXVwOiBbXG4gICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICEoXCJidXR0b25cIiBpbiAkZXZlbnQpICYmXG4gICAgICAgICAgICAgICAgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVzY1wiLCAyNywgJGV2ZW50LmtleSwgW1wiRXNjXCIsIFwiRXNjYXBlXCJdKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uY2xlYW5TdWdnZXN0aW9ucygkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAhKFwiYnV0dG9uXCIgaW4gJGV2ZW50KSAmJlxuICAgICAgICAgICAgICAgIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJkb3duXCIsIDQwLCAkZXZlbnQua2V5LCBbXG4gICAgICAgICAgICAgICAgICBcIkRvd25cIixcbiAgICAgICAgICAgICAgICAgIFwiQXJyb3dEb3duXCJcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uTmF2RG93bigkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAhKFwiYnV0dG9uXCIgaW4gJGV2ZW50KSAmJlxuICAgICAgICAgICAgICAgIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJ1cFwiLCAzOCwgJGV2ZW50LmtleSwgW1wiVXBcIiwgXCJBcnJvd1VwXCJdKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBfdm0ubmF2VXAoJGV2ZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZm9jdXNvdXQ6IF92bS5oaWRlU3VnZ2VzdGlvbnMsXG4gICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgX3ZtLmV4cGFuZGVkID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX3ZtLl9sKF92bS5oaWRkZW5JbnB1dHMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImhpZGRlblwiLCBuYW1lOiBrZXkgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiB2YWx1ZSB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYXJhbXMsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGFyYW1zXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGNsYXNzOiBfdm0uaW5wdXRDbGFzcyxcbiAgICAgICAgICBzdHlsZTogX3ZtLmlucHV0U3R5bGUsXG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBfdm0ucGxhY2Vob2xkZXIsIG5hbWU6IFwicVwiIH0sXG4gICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wYXJhbXMgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgYmx1cjogX3ZtLmhpZGVTdWdnZXN0aW9ucyxcbiAgICAgICAgICAgIGNoYW5nZTogX3ZtLmdldFN1Z2dlc3Rpb25zLFxuICAgICAgICAgICAga2V5cHJlc3M6IF92bS5nZXRTdWdnZXN0aW9ucyxcbiAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgX3ZtLnBhcmFtcyA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX3QoXCJpY29uXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBbX3ZtLl90KFwic2VhcmNoLWJ0blwiKV0sXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYy1zZWFyY2hfX2Nsb3NlLWljb25cIiwgb246IHsgY2xpY2s6IF92bS5oaWRlIH0gfSxcbiAgICAgICAgICBbX3ZtLl90KFwiY2xvc2UtaWNvblwiKV0sXG4gICAgICAgICAgMlxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMlxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZS9kaXN0L3Z1ZS5qcydcbmltcG9ydCBNb3VudGVyIGZyb20gJy4uL2NvbmZpZy9kb20tbGlzdGVuZXInXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vdnVlL1NlYXJjaEJhci52dWUnXG5WdWUuY29tcG9uZW50KCdzZWFyY2gtYmFyJywgU2VhcmNoQmFyKVxuXG5Nb3VudGVyKClcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2VhcmNoQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMmMwODdkOSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TZWFyY2hCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TZWFyY2hCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvYXBwL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxMmMwODdkOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxMmMwODdkOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2VhcmNoQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMmMwODdkOSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxMmMwODdkOScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3Z1ZS9TZWFyY2hCYXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlYXJjaEJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWFyY2hCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlYXJjaEJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTJjMDg3ZDkmXCIiXSwic291cmNlUm9vdCI6IiJ9
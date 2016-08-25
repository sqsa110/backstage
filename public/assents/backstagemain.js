/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _LoginBox = __webpack_require__(4);

	var _LoginBox2 = _interopRequireDefault(_LoginBox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var main = function main() {
	    (0, _reactDom.render)(_react2.default.createElement(_LoginBox2.default, null), document.getElementById('content'));
	};

	main();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = lib;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(34);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LoginHeader = _react2.default.createClass({
	  displayName: "LoginHeader",

	  render: function render() {
	    return _react2.default.createElement(
	      "div",
	      { className: "modal-header" },
	      _react2.default.createElement(
	        "div",
	        { className: "container-fluid" },
	        _react2.default.createElement(
	          "div",
	          { className: "row" },
	          _react2.default.createElement(
	            "div",
	            { className: "col-xs-6" },
	            "登陆"
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "col-xs-6" },
	            "快速注册"
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "row dash" },
	          _react2.default.createElement("div", { className: "col-xs-2" }),
	          _react2.default.createElement("div", { className: "col-xs-2 line" }),
	          _react2.default.createElement("div", { className: "col-xs-2" }),
	          _react2.default.createElement("div", { className: "col-xs-2" }),
	          _react2.default.createElement("div", { className: "col-xs-2 line" }),
	          _react2.default.createElement("div", { className: "col-xs-2" })
	        )
	      )
	    );
	  }
	});

	var LoginUser = _react2.default.createClass({
	  displayName: "LoginUser",

	  render: function render() {
	    return _react2.default.createElement(
	      "div",
	      { className: "form-group" },
	      _react2.default.createElement(
	        "label",
	        { "for": "username" },
	        "用户名:"
	      ),
	      _react2.default.createElement("input", { type: "text", className: "form-control", id: "username", placeholder: "用户名" })
	    );
	  }
	});

	var LoginPw = _react2.default.createClass({
	  displayName: "LoginPw",

	  render: function render() {
	    return _react2.default.createElement(
	      "div",
	      { className: "form-group" },
	      _react2.default.createElement(
	        "label",
	        { "for": "password" },
	        "密码:"
	      ),
	      _react2.default.createElement("input", { type: "password", className: "form-control", id: "password", placeholder: "密码" })
	    );
	  }
	});

	var LoginBody = _react2.default.createClass({
	  displayName: "LoginBody",

	  render: function render() {
	    return _react2.default.createElement(
	      "div",
	      { className: "modal-body" },
	      _react2.default.createElement(
	        "form",
	        null,
	        _react2.default.createElement(
	          "div",
	          { className: "container-fluid" },
	          _react2.default.createElement(LoginUser, null),
	          _react2.default.createElement(LoginPw, null)
	        )
	      )
	    );
	  }
	});

	var LoginFooter = _react2.default.createClass({
	  displayName: "LoginFooter",

	  render: function render() {
	    return _react2.default.createElement(
	      "div",
	      { className: "modal-footer" },
	      _react2.default.createElement(
	        "button",
	        { type: "button", className: "btn btn-default", "data-dismiss": "modal" },
	        "取消"
	      ),
	      _react2.default.createElement(
	        "button",
	        { type: "button", className: "btn btn-primary" },
	        "登陆"
	      )
	    );
	  }
	});

	var LoginBox = _react2.default.createClass({
	  displayName: "LoginBox",

	  render: function render() {
	    return _react2.default.createElement(
	      "div",
	      { className: "modal fade login show in", id: "loginModal", tabindex: "-1" },
	      _react2.default.createElement("link", { href: "test.css", rel: "stylesheet" }),
	      _react2.default.createElement(
	        "div",
	        { className: "modal-dialog" },
	        _react2.default.createElement(
	          "div",
	          { className: "modal-content" },
	          _react2.default.createElement(LoginHeader, null),
	          _react2.default.createElement(LoginBody, null),
	          _react2.default.createElement(LoginFooter, null)
	        )
	      )
	    );
	  }
	});

	exports.default = LoginBox;

/***/ }
/******/ ]);
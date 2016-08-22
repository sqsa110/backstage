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

	var _CommentBox = __webpack_require__(4);

	var _CommentBox2 = _interopRequireDefault(_CommentBox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var main = function main() {
	    (0, _reactDom.render)(_react2.default.createElement(_CommentBox2.default, null), document.getElementById('content'));
	};

	main();

	/*
	var React = require('react');
	import { render } from 'react-dom';
	var HelloworldComponent = React.createClass({
	    displayName : 'HelloWorldComponent',
	    render : function(){
	        return (
	            <div>Hello world</div>
	        );
	    }
	});

	let main = function(){
	    render(
	        <HelloworldComponent />,
	        document.getElementById('example')
	    );
	}
	main();
	*/

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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _CommentList = __webpack_require__(5);

	var _CommentList2 = _interopRequireDefault(_CommentList);

	var _CommentForm = __webpack_require__(7);

	var _CommentForm2 = _interopRequireDefault(_CommentForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CommentBox = _react2.default.createClass({
		displayName: 'CommentBox',
		render: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'commentBox' },
				_react2.default.createElement(
					'h1',
					null,
					'Comments'
				),
				_react2.default.createElement(_CommentList2.default, null),
				_react2.default.createElement(_CommentForm2.default, null)
			);
		}
	});

	exports.default = CommentBox;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Comment = __webpack_require__(6);

	var _Comment2 = _interopRequireDefault(_Comment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CommentList = _react2.default.createClass({
		displayName: 'CommentList',

		render: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'commentList' },
				_react2.default.createElement(
					_Comment2.default,
					{ author: 'Pete Hunt' },
					'This is one comment'
				),
				_react2.default.createElement(
					_Comment2.default,
					{ author: 'Jordan Walke' },
					'This is *another* comment'
				)
			);
		}
	});

	exports.default = CommentList;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Comment = _react2.default.createClass({
		displayName: "Comment",
		render: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "comment" },
				_react2.default.createElement(
					"h2",
					{ className: "commentAuthor" },
					this.props.author
				),
				this.props.children
			);
		}
	});

	exports.default = Comment;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CommentForm = _react2.default.createClass({
		displayName: "CommentForm",

		render: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "commentForm" },
				"Hello,world! I am a CommentForm."
			);
		}
	});

	exports.default = CommentForm;

/***/ }
/******/ ]);
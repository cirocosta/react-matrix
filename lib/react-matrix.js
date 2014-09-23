(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["Matrix"] = factory(require("React"));
	else
		root["Matrix"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** ./src/Matrix.jsx ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @jsx React.DOM
	 */
	
	'use strict';
	
	__webpack_require__(/*! ./Matrix.scss */ 5);
	
	var React = __webpack_require__(/*! react */ 1);
	var Svg = __webpack_require__(/*! ./Svg.jsx */ 3);
	var Grid = __webpack_require__(/*! ./Grid.jsx */ 7);
	
	var Matrix = React.createClass({displayName: 'Matrix',
	  propTypes: {
	    squareSize: React.PropTypes.number.isRequired,
	    matrix: React.PropTypes.array.isRequired
	  },
	
	  render:function () {
	    var width = this.props.squareSize * this.props.matrix[0].length;
	    var height = this.props.squareSize * this.props.matrix.length;
	
	    return (
	      Svg({width: width, 
	           height: height}, 
	        Grid({className: "Grid", 
	              matrix: this.props.matrix, 
	              squareSize: this.props.squareSize})
	      )
	    );
	  }
	});
	
	module.exports = Matrix;


/***/ },
/* 1 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/*!*********************!*\
  !*** ./src/Row.jsx ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @jsx React.DOM
	 */
	
	'use strict';
	
	var React = __webpack_require__(/*! react */ 1);
	var scale = __webpack_require__(/*! ../utils/scale */ 6);
	var Cell = __webpack_require__(/*! ./Cell.jsx */ 4);
	
	
	var Row = React.createClass({displayName: 'Row',
	  propTypes: {
	    dataRow: React.PropTypes.array.isRequired,
	    squareSize: React.PropTypes.number.isRequired,
	    key: React.PropTypes.number.isRequired,
	  },
	
	  // TODO(ciro) - generalize this
	  STATES: {
	    '0': 'available',
	    '1': 'barrier',
	    '2': 'path',
	    '3': 'pipette',
	    '4': 'component'
	  },
	
	  render:function () {
	    var range = scale
	      .linear([0, this.props.dataRow.length],
	              [0, this.props.squareSize * this.props.dataRow.length]);
	
	    var cells = this.props.dataRow.map(function(cel, j)  {
	      return Cell({x: range(j), 
	                   y: range(this.props.key), 
	                   state: this.STATES[cel], 
	                   size: this.props.squareSize, 
	                   key: this.props.key + 1 + j})
	    }.bind(this));
	
	    return (
	      React.DOM.g({className: "Row"}, 
	        cells
	      )
	    );
	  }
	});
	
	module.exports = Row;


/***/ },
/* 3 */
/*!*********************!*\
  !*** ./src/Svg.jsx ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @jsx React.DOM
	 */
	
	'use strict';
	
	var React = __webpack_require__(/*! react */ 1);
	var scale = __webpack_require__(/*! ../utils/scale */ 6);
	var Svg = React.createClass({displayName: 'Svg',
	  propTypes: {
	    width: React.PropTypes.number.isRequired,
	    height: React.PropTypes.number.isRequired
	  },
	
	  render:function () {
	    return (
	      React.DOM.svg({width: this.props.width, 
	           height: this.props.height, 
	           className: "Matrix"}, 
	        this.props.children
	      )
	    );
	  }
	});
	
	module.exports = Svg;


/***/ },
/* 4 */
/*!**********************!*\
  !*** ./src/Cell.jsx ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @jsx React.DOM
	 */
	
	'use strict';
	
	var React = __webpack_require__(/*! react */ 1);
	
	var Cell = React.createClass({displayName: 'Cell',
	  propTypes: {
	    x: React.PropTypes.number.isRequired,
	    y: React.PropTypes.number.isRequired,
	    size: React.PropTypes.number.isRequired,
	    state: React.PropTypes.string.isRequired,
	    key: React.PropTypes.number.isRequired
	  },
	
	  render:function () {
	    return (
	      React.DOM.rect({className: "Cell " + this.props.state, 
	            x: this.props.x, 
	            y: this.props.y, 
	            width: this.props.size, 
	            height: this.props.size, 
	            key: this.props.key})
	    );
	  }
	});
	
	module.exports = Cell;


/***/ },
/* 5 */
/*!*************************!*\
  !*** ./src/Matrix.scss ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 6 */
/*!************************!*\
  !*** ./utils/scale.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	
		/**
		 * Creates a linear scale given a domain array
		 * and a range array
		 * @param  {array} d1
		 * @param  {array} d2
		 * @return {Function}
		 */
		linear: function (d1, d2) {
			return function (num) {
	      return d2[0] + (d2[1] - d2[0]) * ((num-d1[0])/(d1[1]-d1[0]));
	    };
		}
	};


/***/ },
/* 7 */
/*!**********************!*\
  !*** ./src/Grid.jsx ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @jsx React.DOM
	 */
	
	'use strict';
	
	var React = __webpack_require__(/*! react */ 1);
	var Row = __webpack_require__(/*! ./Row.jsx */ 2);
	
	var Grid = React.createClass({displayName: 'Grid',
	  propTypes: {
	    matrix: React.PropTypes.array.isRequired,
	    squareSize: React.PropTypes.number.isRequired,
	  },
	
	  render:function () {
	    var rows = this.props.matrix.map(function(row, i) 
	      {return Row({key: i, 
	           dataRow: row, 
	           squareSize: this.props.squareSize});}.bind(this)
	    );
	
	    return (
	      React.DOM.g(null, 
	        rows
	      )
	    );
	  }
	});
	
	module.exports = Grid;


/***/ }
/******/ ])
});

//# sourceMappingURL=react-matrix.js.map
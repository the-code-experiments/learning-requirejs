/**
 *	The goal of this file is to provide the basic understanding:
 *	-> The migration from module to module Require.js
 *
 *	How to run this example.
 *	1. Open Example-3.html in browser.
 *	2. Press F12, go to console tab.
 *	3. See the message get displayed on that console tab.
 */

/**
 * 1st Way to define module using Require.js API.
 * 
 * @Syntax: 
 *		define(["module1", "module2", ...], function(module1, module2, ...) {
	
 		});
 */
define(['./module1', './module2', 'libs/print'], function(module1, module2, print) {
	"use strict";

	print(module1.getHello());

	print(module2.getWelcome("Ashwin"));

});

/**
 * 2nd Way to define module using Require.js API.
 * 
 * @Syntax: 
 *		define(function([require]) {
			var module1 = require('module1');
			var module2 = require('module2');
			...

 		});
 */

// define(function(require) {
// 	"use strict";

// 	var module1 = require('./module1');
// 	var module2 = require('./module2');
// 	var print = require('libs/print');

// 	print(module1.getHello());
// 	print(module2.getWelcome("Ashwin"));
// });
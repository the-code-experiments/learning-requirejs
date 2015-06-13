/**
 *	The goal of this file is to provide the basic understanding:
 *	-> 	How to know library is AMD compliant.
 *
 *	How to run this example.
 *	1. Open Example-6.html in browser.
 *	2. Press F12, go to console tab.
 *	3. See the message get displayed on that console tab.
 */

define(['underscore'], function(_) {

	console.log("First element from Array: ", _.first([5, 4, 3, 2, 1]));

});
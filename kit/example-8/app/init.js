/**
 *	The goal of this file is to provide the basic understanding:
 *	-> 	How to bust require.js cache.
 *
 *	How to run this example.
 *	1. Open Example-8.html in browser.
 *	2. Press F12, go to console tab.
 *	3. See the message get displayed on that console tab.
 */

define(["config"], function(config) {

	"use strict";

	var url = config.url;
	console.log("Global Url: ", url);

});
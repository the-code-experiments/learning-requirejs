/**
 *	@module: return a text string;
 *	@params:
		-> msg: String
 */
define(function() {

	"use strict";

	return {
		getWelcome: function(msg) {
			return "Hi, " + msg;
		}
	};

});
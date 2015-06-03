/**
 *  require is global now, thus can be accessed by window.require;
 *  Require.js config API, takes require.js configuration object.
 *
 *  @config-options:
        -> shim (exports): Help to check it the provided library is AMD supported.
 */
requirejs.config({
	baseUrl: "libs",

	paths: {
		app: '../app',
		underscore: 'underscore-min-1-8-2'
	},

	shim: {
		'underscore': {
			exports: '_'
		}
	}
});

/**
 *	Require.js onError method to handle Async timeout error.
 */
requirejs.onError = function(err) {
	if (err.requireType === 'timeout') {
		alert("error: " + err);
	} else {
		throw err;
	}
};

require(['app/init']);
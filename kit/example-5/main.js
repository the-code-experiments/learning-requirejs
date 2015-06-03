/**
 *  require is global now, thus can be accessed by window.require;
 *  Require.js config API, takes require.js configuration object.
 *
 *  @config-options:
        -> shim (deps): Help to manage dependencies loading
 */
requirejs.config({
	baseUrl: "libs",

	paths: {
		app: '../app',
		jquery: 'jquery',
		gridster: 'jquery.gridster.min'
	},

	shim: {
		"gridster": {
			deps: ['jquery']
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
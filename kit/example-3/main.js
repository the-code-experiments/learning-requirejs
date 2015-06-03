/**
 *	require is global now, thus can be accessed by window.require;
 *	Require.js config API, takes require.js configuration object.
 */
requirejs.config({
	paths: {
		app: 'app'
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

/**
 *	Require app/init file as our application initialization file.
 *	require.js will load init.js file and execute it.
 */
require(['app/init']);
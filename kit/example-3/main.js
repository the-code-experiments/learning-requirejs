/**
 *	require is global now, thus can be accessed by window.require;
 *	Require.js config API, takes require.js configuration object.
 *	
 *	@config-options:
 		-> paths: Specify the path for js files; It is relative to the baseUrl;
 		   if baseUrl is not provided then by default baseUrl path will become the path where the require.js main file reference.
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
/**
 *  require is global now, thus can be accessed by window.require;
 *  Require.js config API, takes require.js configuration object.
 *
 *  @config-options:
        -> baseUrl: Specify the baseUrl Url, As baseUrl is specify the path for js files will change and will be relative to this baseUrl;
 */
requirejs.config({
    baseUrl: "libs",

    paths: {
        app: '../app',
        jquery: 'jquery'
    }
});

/**
 *  Require.js onError method to handle Async timeout error.
 */
requirejs.onError = function(err) {
    if (err.requireType === 'timeout') {
        alert("error: " + err);
    } else {
        throw err;
    }
};

require(['app/init']);
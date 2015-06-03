/**
 *  require is global now, thus can be accessed by window.require;
 *  Require.js config API, takes require.js configuration object.
 *
 *  @config-options:
        -> deps: Load & executes the dependencies file rightaway in Async way.
        -> callback: This function will get executed immediately after loading the deps files.
        -> urlArgs: Appends query string for each loading file; This feature can be used to Require.js cache bust.
 */
requirejs.config({
    paths: {
        app: 'app'
    },

    deps: ["app/init"],
    callback: function() {
        console.log("In Requirejs callback api method");
    },

    urlArgs: "bust=" + (new Date()).getTime()
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
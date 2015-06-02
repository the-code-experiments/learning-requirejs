requirejs.config({
    paths: {
        app: 'app'
    },

    deps: ["app/init"],
    callback: function() {
    	console.log("In callback");
    },

    urlArgs: "bust=" + (new Date()).getTime()
});

requirejs.onError = function(err) {
    if (err.requireType === 'timeout') {
        alert("error: " + err);
    } else {
        throw err;
    }
};
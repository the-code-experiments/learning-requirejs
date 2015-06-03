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

requirejs.onError = function(err) {
    if (err.requireType === 'timeout') {
        alert("error: " + err);
    } else {
        throw err;
    }
};

require(['app/init']);
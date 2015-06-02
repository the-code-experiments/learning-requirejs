requirejs.config({
	baseUrl: "libs",

	paths: {
		app: '../app',
		jquery: 'jquery',
		underscore: 'underscore-min-1-5-2'
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

requirejs(['app/init']);
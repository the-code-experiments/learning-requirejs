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

requirejs.onError = function(err) {
    if (err.requireType === 'timeout') {
        alert("error: " + err);
    } else {
        throw err;
    }
};

require(['app/init']);
var reqAlpha = requirejs.config({
	baseUrl: "libs",

	paths: {
		app: '../app'
	},

	shim: {
		"gridster": {
			deps: ['jquery']
		}
	}
});

var reqBeta = requirejs.config({
	baseUrl: "libs",

	paths: {
		jquery: 'jquery',
		gridster: 'jquery.gridster.min'
	},

	shim: {
		"gridster": {
			deps: ['jquery']
		}
	}
});

reqBeta(['app/init']);
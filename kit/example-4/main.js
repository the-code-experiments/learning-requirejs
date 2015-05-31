requirejs.config({
	baseUrl: "libs",

	paths: {
		app: '../app',
		jquery: 'jquery',
		gridster: 'jquery.gridster.min'
	},

	shim: {
		"gridster": {
			"depends": ['jquery']
		}
	}
});

requirejs(['app/init']);
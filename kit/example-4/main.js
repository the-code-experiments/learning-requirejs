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

requirejs(['app/init']);
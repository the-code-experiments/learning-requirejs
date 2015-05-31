requirejs.config({
	baseUrl: "libs",

	paths: {
		app: '../app',
		jquery: 'jquery'
	}
});

requirejs(['app/init']);
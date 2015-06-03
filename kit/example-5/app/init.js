define(['gridster', 'jquery', './module1', './module2', 'print'], function(gridster, $, module1, module2, print) {

	print(module1.getHello());

	print(module2.getWelcome());


	$(".gridster ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [140, 140]
    });

});


// define(function(require) {

// 	var module1 = require('./module1');

// 	var module2 = require('./module2');

// 	var print = require('print');

// 	print(module1.getHello());

// 	print(module2.getWelcome());

// });
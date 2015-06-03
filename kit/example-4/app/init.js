define(['jquery', './module1', './module2', 'print'], function($, module1, module2, print) {

	print(module1.getHello());

	print(module2.getWelcome());

	$('.area').html(module1.getHello());

});


// define(function(require) {

// 	var module1 = require('./module1');

// 	var module2 = require('./module2');

// 	var print = require('print');

// 	print(module1.getHello());

// 	print(module2.getWelcome());

// });
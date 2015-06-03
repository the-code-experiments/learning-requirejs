define(['./module1', './module2', 'libs/print'], function(module1, module2, print) {

	print(module1.getHello());

	print(module2.getWelcome());

});


// define(function(require) {

// 	var module1 = require('./module1');

// 	var module2 = require('./module2');

// 	var print = require('libs/print');

// 	print(module1.getHello());

// 	print(module2.getWelcome());

// });
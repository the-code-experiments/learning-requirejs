define(['underscore', 'jquery', './module1', './module2', 'print'], function(_, $, module1, module2, print) {

    print(module1.getHello());

    print(module2.getWelcome());

    console.log(_.first([5, 4, 3, 2, 1]));

});


// define(function(require) {

// 	var module1 = require('./module1');

// 	var module2 = require('./module2');

// 	var print = require('print');

// 	print(module1.getHello());

// 	print(module2.getWelcome());

// });
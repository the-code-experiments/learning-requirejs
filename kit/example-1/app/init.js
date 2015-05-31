define(function(require) {

	var module1 = require('./module1');

	var print = require('print');

	print(module1.getHello());

});
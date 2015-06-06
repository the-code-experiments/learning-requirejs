/**
 *	The goal of this file is to provide the basic understanding:
 *	-> Loading & executing third party modules. In our case its jquery library.
 *
 *	How to run this example.
 *	1. Open Example-4.html in browser.
 *	2. Press F12, go to console tab.
 *	3. See the message get displayed on that console tab.
 */

define(['jquery', './module1', './module2', 'print'], function($, module1, module2, print) {

	print(module1.getHello());

	print(module2.getWelcome("Ashwin"));

	$('.area').html(module1.getHello());

});
/**
 *	The goal of this file is to provide the basic understanding:
 *	-> 	Loading & executing third party sub modules. 
 *	->	How to manage dependency loading; In our case gridster should load after jquery library.
 *
 *	How to run this example.
 *	1. Open Example-5.html in browser.
 *	2. Press F12, go to console tab.
 *	3. See the message get displayed on that console tab.
 */

define(['gridster', 'jquery', './module1', './module2', 'print'], function(gridster, $, module1, module2, print) {

	print(module1.getHello());

	print(module2.getWelcome("Ashwin"));


	$(".gridster ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [140, 140]
    });

});
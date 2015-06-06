/**
 *	The goal of this file is to provide the basic understanding:
 *	-> The migration from non-module to module
 *
 *	How to run this example.
 *	1. Open Example-1.html in browser.
 *	2. Press F12, go to console tab.
 *	3. See the message get displayed on that console tab.
 */

/**
 *	@function: return a text string;
 */

function getHelloWorld() {
	return "Hello World";
}

/**
 *	@function: return a text string;
 *	@params:
		-> msg: String
 */

function getWelcome(msg) {
	return "Hi, " + msg;
}

/**
 *	@function: print message on console;
 *	@params:
		-> msg: String
 */

function printMsg(msg) {
	console.log(msg);
}

printMsg(getHelloWorld());

printMsg(getWelcome("Ashwin"));
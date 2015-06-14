/**
 * @file spec.js
 */

var HomePage = require("./pages/home.page");

browser.ignoreSynchronization = true;

describe ('home page' , function () {

	var home = new HomePage();
	
	it ('should have a welcome message', function () {
		browser.get('/');
		expect(home.getWelcome()).toEqual('Welcome to lat-drupal.local');
	});

});
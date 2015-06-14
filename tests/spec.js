/**
 * @file spec.js
 */

var HomePage = require('./pages/home.page')
	, helper = require('./helpers/helper');

browser.ignoreSynchronization = true;

describe ('home page' , function () {
	
	it ('should have a welcome message', function () {
		HomePage.get();
		expect(HomePage.getWelcome()).toEqual('Welcome to lat-drupal.local');
	});

	it ('should login as admin', function () {
		helper.login();
		expect(element(by.css('body.logged-in')).isPresent()).toBe(true);
	});

	it ('should logout', function () {
		helper.logout();
		expect(element(by.css('body.logged-in')).isPresent()).toBe(false);
	});

	it ('should a have a main menu', function () {
		HomePage.get();
		expect(HomePage.mainMenu.isPresent()).toBe(true);
	});

	it ('should have home, media and contact menu items', function () {
		var items = ['Home', 'Media', 'Contact'];
		HomePage.get();
		items.forEach(function (item) {
			expect(HomePage.mainMenu.getText()).toContain(item);
		});
	});

});
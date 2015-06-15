/**
 * @file spec.js
 */

var HomePage = require('./pages/home.page');

browser.ignoreSynchronization = true;

describe ('home page' , function () {
	
	it ('should have a title', function () {
		HomePage.get();
		expect(HomePage.getContentTitle()).toEqual('Learning About Testing');
	});

	it ('should have a home page content', function () {
		HomePage.get();
		expect(HomePage.contentContainer.isPresent()).toBe(true);
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
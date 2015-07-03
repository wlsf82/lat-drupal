/**
 * @file authentication.spec.js
 */

var helper = require('./helpers/helper');

browser.ignoreSynchronization = true;

describe ('authentication' , function () {
	
	it ('should login as admin', function () {
		helper.login('admin', 'latdrupal');
		expect(element(by.css('body.logged-in')).isPresent()).toBe(true);
	});

	it ('should logout', function () {
		helper.logout();
		expect(element(by.css('body.logged-in')).isPresent()).toBe(false);
	});

});
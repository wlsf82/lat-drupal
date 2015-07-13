/**
 * @file authentication.spec.js
 */

var AuthenticationPage = require('./pages/authentication.page');

browser.ignoreSynchronization = true;

describe ('Authentication' , function () {
	
	it ('should login as admin', function () {
		AuthenticationPage.login('admin', 'latdrupal');
		expect(AuthenticationPage.logoutLink.isPresent()).toBe(true);
	});

	it ('should logout', function () {
		AuthenticationPage.logout();
		expect(AuthenticationPage.logoutLink.isPresent()).toBe(false);
	});

});
/**
 * @file contact.spec.js
 */

var ContactPage = require('./pages/contact.page');

browser.ignoreSynchronization = true;

describe ('Contact' , function () {
	it ('should successfully submit the contact form', function () {
		ContactPage.get();
		ContactPage.successfullySubmit();
		expect(ContactPage.successMessage.isDisplayed()).toBe(true);
	});
});
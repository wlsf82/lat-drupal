/**
 * @file contact.spec.js
 */

var ContactPage = require('./pages/contact.page');

browser.ignoreSynchronization = true;

describe ('Contact' , function () {
	beforeEach(function () {
    ContactPage.get();
  });

	it ('should successfully submit the contact form', function () {
		ContactPage.submit('Ana', 'ana@banana.com', 'teste lorem ipsum');
		expect(ContactPage.successMessage.isDisplayed()).toBe(true);
	});

	it ('should not successfully submit the contact form because of empty mandatory fields', function () {
		ContactPage.submit('', '', '');
		expect(ContactPage.successMessage.isPresent()).toBe(false);
	});
});
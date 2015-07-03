/**
 * @file news.spec.js
 */

var genericPage = require('./pages/generic.page');

describe ('News', function () {
	it ('should have a title', function () {
		browser.get('novidades');
		expect(genericPage.getContentTitle()).toEqual('Novidades');
	});

	// it ('should have a list of news', function () {

	// });
});
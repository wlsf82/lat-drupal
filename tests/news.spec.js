/**
 * @file news.spec.js
 */

var NewsPage = require('./pages/news.page')
	, genericPage = require('./pages/generic.page');

browser.ignoreSynchronization = true;

describe ('News', function () {
	it ('should have a title', function () {
		NewsPage.get();
		expect(genericPage.getContentTitle()).toEqual('Novidades');
	});

	it ('should have a list of news', function () {
		NewsPage.get();
		expect(NewsPage.viewList.isPresent()).toBe(true);
	});

	iit ('should not have pagination for less than 10 list items', function () {
		NewsPage.get();
		expect(NewsPage.pagination.isPresent()).toBe(false);
	});
});
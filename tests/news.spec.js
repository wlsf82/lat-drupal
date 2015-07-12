/**
 * @file news.spec.js
 */

var NewsPage = require('./pages/news.page')
	, genericPage = require('./pages/generic.page');

browser.ignoreSynchronization = true;

describe ('News', function () {
	beforeEach(function () {
    NewsPage.get();
  });

	it ('should have a title', function () {
		expect(genericPage.getContentTitle()).toEqual('Novidades');
	});

	it ('should have a list of news', function () {
		expect(NewsPage.viewList.isPresent()).toBe(true);
	});

	it ('should not have pagination for less than 11 list items', function () {
		expect(NewsPage.pagination.isPresent()).toBe(false);
	});
});
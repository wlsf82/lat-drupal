/**
 * @file media.spec.js
 */

var HomePage = require('./pages/home.page')
	, MediaPage = require('./pages/media.page')
	, genericPage = require('./pages/generic.page');

browser.ignoreSynchronization = true;

describe ('Media' , function () {
	beforeEach(function () {
    MediaPage.get();
  });

	it ('should have a title', function () {
		expect(genericPage.getContentTitle()).toEqual('Midias');
	});

	it ('should have a list of media', function () {
		expect(MediaPage.viewList.isPresent()).toBe(true);
	});

	it ('should display pagination for each 10 list items', function () {
		expect(MediaPage.pagination.isDisplayed()).toBe(true);
	});

	it ('should navigate to the last page using pagination', function () {
		MediaPage.goToLastPage();
		expect(MediaPage.firstPageLink.isDisplayed()).toBe(true);
	});
});
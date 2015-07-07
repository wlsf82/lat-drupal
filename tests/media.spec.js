/**
 * @file media.spec.js
 */

var HomePage = require('./pages/home.page')
	, MediaPage = require('./pages/media.page')
	, genericPage = require('./pages/generic.page');

browser.ignoreSynchronization = true;

describe ('Media' , function () {
	it ('should have a title', function () {
		MediaPage.get();
		expect(genericPage.getContentTitle()).toEqual('Midias');
	});

	it ('should have a list of media', function () {
		MediaPage.get();
		expect(MediaPage.viewList.isPresent()).toBe(true);
	});

});
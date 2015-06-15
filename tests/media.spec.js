/**
 * @file media.spec.js
 */

var HomePage = require('./pages/home.page')
	// , MediaPage = require('./pages/media.page')
	, helper = require('./helpers/helper');

browser.ignoreSynchronization = true;

describe ('media page' , function () {
	
	it ('should have sub-items into media menu for each kind of available media', function () {

		var subItems = ['Hands-on videos and webinars', 'Podcasts', 'eBooks', 'Blog posts', 'Presentations', 'Pictures'];

		HomePage.get();

		helper.clickMenu('media');

		subItems.forEach(function (subItem) {
			expect(helper.getMenuSubItems()).toContain(subItem);
		});

	});

	it ('should go to a list of media when accessing the media main page', function () {

	});

	it ('should go to a list of specific kind of media', function () {

	});

});
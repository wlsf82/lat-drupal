/**
 * @file spec.js
 */

var HomePage = require('./pages/home.page')
	, genericPage = require('./pages/generic.page');

browser.ignoreSynchronization = true;

describe ('home page' , function () {

	it ('should use andromeda theme', function () {
		browser.get('/');
		expect(browser.executeScript('return Drupal.settings.ajaxPageState.theme')).toEqual('andromeda');
	});
	
	it ('should have a title', function () {
		HomePage.get();
		expect(HomePage.getTitle()).toEqual('Learning About Testing');
	});

	it ('should have a site slogan', function () {
		HomePage.get();
		expect(HomePage.slogan.getText()).toEqual('Aprenda teste de software com conteudo mao na massa!');
	});

	it ('should have a home page content', function () {
		HomePage.get();
		expect(HomePage.contentContainer.isPresent()).toBe(true);
	});

	it ('should a have a main menu', function () {
		HomePage.get();
		expect(HomePage.mainMenu.isPresent()).toBe(true);
	});

	it ('should have home, news, medias, blog, contact and login menu items', function () {
		var items = ['Home', 'Novidades', 'Midias', 'Blog', 'Contato', 'Login'];
		HomePage.get();
		items.forEach(function (item) {
			expect(HomePage.mainMenu.getText()).toContain(item);
		});
	});

	it ('should have an external link for the talking about testing blog', function () {
		HomePage.get();
		expect(genericPage.getBlogUrl()).toEqual('http://talkingabouttesting.com/');
	});

});
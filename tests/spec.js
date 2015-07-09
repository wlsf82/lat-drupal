/**
 * @file spec.js
 */

var HomePage = require('./pages/home.page')
	, genericPage = require('./pages/generic.page');

browser.ignoreSynchronization = true;

describe ('Home page' , function () {

	beforeEach(function () {
    HomePage.get();
  });

	it ('should use andromeda theme', function () {
		HomePage.checkDrupalTheme('andromeda');
	});
	
	it ('should have a title', function () {
		expect(HomePage.getTitle()).toEqual('Learning About Testing');
	});

	it ('should have a site slogan', function () {
		expect(HomePage.slogan.getText()).toEqual('Aprenda teste de software com conteudo mao na massa!');
	});

	it ('should have a home page content', function () {
		expect(HomePage.contentContainer.isPresent()).toBe(true);
	});

	it ('should a have a main menu', function () {
		expect(HomePage.mainMenu.isPresent()).toBe(true);
	});

	it ('should have news, medias, blog, contact and login menu items', function () {
		var items = ['Novidades', 'Midias', 'Blog', 'Contato', 'Login'];
		items.forEach(function (item) {
			expect(HomePage.mainMenu.getText()).toContain(item);
		});
	});

	it ('should have an external link for the talking about testing blog', function () {
		expect(genericPage.getBlogUrl()).toEqual('http://talkingabouttesting.com/');
	});

});
/**
 * @file home.page.js
 */

var HomePage = function () {

	this.mainMenu = element(by.css('#main-menu-links'));
	this.contentContainer = element(by.css('#content'));

  this.get = function () {
  	browser.get('/');
  };

  this.getContentTitle = function () {
  	return element(by.css('#content h2 a')).getText();
  };

};

module.exports = new HomePage();

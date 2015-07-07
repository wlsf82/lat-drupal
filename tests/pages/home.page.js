/**
 * @file home.page.js
 */

var HomePage = function () {

	this.mainMenu = element(by.css('#main-menu-links'));
	this.contentContainer = element(by.css('#content'));
	this.title = element(by.css('#site-name span'));
	this.slogan = element(by.css('#site-slogan'));

  this.get = function () {
  	browser.get('/');
  };

  this.getTitle = function () {
  	return this.title.getText();
  };

};

module.exports = new HomePage();

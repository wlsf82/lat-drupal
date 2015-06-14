/**
 * @file home.page.js
 */

var HomePage = function () {

	this.mainMenu = element(by.css('#main-menu-links'));

  this.get = function () {
  	browser.get('/');
  };

  this.getWelcome = function () {
  	return element(by.css('h1#page-title')).getText();
  };

};

module.exports = HomePage;

// To experimento
// module.exports = new HomePage();

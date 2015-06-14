/**
 * @file home.page.js
 */

var HomePage = function () {

  this.getWelcome = function () {
  	return element(by.css('h1#page-title')).getText();
  };

};

module.exports = HomePage;

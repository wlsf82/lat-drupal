/**
 * @file generic.page.js
 */

var GenericPage = function () {

	this.getContentTitle = function () {
  	return element(by.css('#content h1')).getText();
  };

  this.getBlogUrl = function () {
  	return element(by.css('#main-menu-links li:nth-child(3) a')).getAttribute('href');
  };

};

module.exports = new GenericPage();

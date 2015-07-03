/**
 * @file generic.page.js
 */

var GenericPage = function () {

	this.getContentTitle = function () {
  	return element(by.css('#content h1')).getText();
  };

};

module.exports = new GenericPage();

/**
 * @file news.page.js
 */

var NewsPage = function () {

	this.viewList = element(by.css('#content .view-news'));

	this.get = function () {
  	browser.get('novidades');
  };

};

module.exports = new NewsPage();

/**
 * @file news.page.js
 */

var NewsPage = function () {

	this.viewList = element(by.css('#content .view-news'));
	this.pagination = element(by.css('#content .view-news .pager'));

	this.get = function () {
  	browser.get('novidades');
  };

};

module.exports = new NewsPage();

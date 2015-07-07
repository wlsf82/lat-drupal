/**
 * @file media.page.js
 */

var MediaPage = function () {

	this.viewList = element(by.css('#content .view-medias'));
	this.pagination = element(by.css('#content .view-medias .pager'));

	this.get = function () {
  	browser.get('midias');
  };

};

module.exports = new MediaPage();

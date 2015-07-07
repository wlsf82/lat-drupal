/**
 * @file media.page.js
 */

var MediaPage = function () {

	this.viewList = element(by.css('#content .view-medias'));
	this.pagination = element(by.css('#content .view-medias .pager'));
	this.lastPageLink = this.pagination.element(by.cssContainingText('a', 'last'));
	this.firstPageLink = this.pagination.element(by.cssContainingText('a', 'first'));

	this.get = function () {
  	browser.get('midias');
  };

  this.goToLastPage = function () {
  	this.lastPageLink.click();
  };

};

module.exports = new MediaPage();

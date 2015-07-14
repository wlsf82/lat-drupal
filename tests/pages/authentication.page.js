/**
 * @file authentication.page.js
 */

var AuthenticationPage = function () {

	this.usernameField = element(by.css('#user-login #edit-name'));
  this.passwordField = element(by.css('#user-login #edit-pass'));
  this.submitButton = element(by.css('#user-login #edit-submit'));
  this.logoutLink = element(by.cssContainingText('#toolbar-user .last a', 'Log out'));

  this.get = function () {
  	browser.get('/?q=user');
  };

  this.login = function (user, password) {
    this.get();
    this.usernameField.sendKeys(user);
    this.passwordField.sendKeys(password);
    this.submitButton.click();
  };

  this.logout = function () {
    this.logoutLink.click();
  };

};

module.exports = new AuthenticationPage();

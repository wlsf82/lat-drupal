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
    browser.driver.sleep(100);
    this.usernameField.sendKeys(user);
    browser.driver.sleep(100);
    this.passwordField.sendKeys(password);
    browser.driver.sleep(100);
    this.submitButton.click();
    browser.driver.sleep(100);
  };

  this.logout = function () {
    browser.driver.sleep(100);
    this.logoutLink.click();
  };

};

module.exports = new AuthenticationPage();

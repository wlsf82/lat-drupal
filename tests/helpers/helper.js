/**
 * @file helper.js
 */

function login (user, password) {
	var usernameField = element(by.css('#user-login #edit-name'))
    , passwordField = element(by.css('#user-login #edit-pass'))
    , submitButton = element(by.css('#user-login #edit-submit'));

  browser.get('/?q=user');    

  usernameField.sendKeys(user);
  passwordField.sendKeys(password);
  submitButton.click();
}

function logout() {
  element(by.cssContainingText('#toolbar-user .last a', 'Log out')).click();
}

function clickMenu(menu) {
  element(by.cssContainingText('#main-menu-links a', menu)).click();
}

// Expose helper methods.
module.exports = {
  login: login,
  logout: logout,
  clickMenu: clickMenu
};
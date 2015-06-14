/**
 * @file helper.js
 */

var adminlogin = browser.params.adminLogin;

function login () {
	var user = adminlogin.user
		, password = adminlogin.password;

	browser.get('/');

	var usernameField = element(by.css('#edit-name'))
    , passwordField = element(by.css('#edit-pass'))
    , submitButton = element(by.css('#edit-submit'));

  usernameField.sendKeys(user).then(function() {
    passwordField.sendKeys(password).then(function() {
      submitButton.click();
    });
  });
}

function logout() {
  element(by.cssContainingText('#toolbar-user .last a', 'Log out')).click();
}

// Expose helper methods.
module.exports = {
  login: login,
  logout: logout
};
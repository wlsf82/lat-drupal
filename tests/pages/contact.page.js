/**
 * @file contact.page.js
 */

var ContactPage = function () {

	this.name = element(by.css('.webform-client-form #edit-submitted-nome'));
  this.email = element(by.css('.webform-client-form #edit-submitted-email'));
  this.message = element(by.css('.webform-client-form textarea'));
  this.submitButton = element(by.css('.webform-client-form input[value="Submit"'));
  this.successMessage = element(by.cssContainingText('.webform-confirmation p', 'Thank you, your submission has been received.'))

  this.get = function () {
  	browser.get('/?q=node/3');
  };

  this.fillForm = function (name, email, message) {
    this.name.sendKeys(name);
    this.email.sendKeys(email);
    this.message.sendKeys(message);
  };

  this.successfullySubmit = function () {
    this.fillForm('Ana', 'ana@banana.com', 'teste lorem ipsum');
    this.submitButton.click();
  };

};

module.exports = new ContactPage();

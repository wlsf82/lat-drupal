/**
 * @file conf.js
 */

// var cloudTestingHelper = require('./helpers/cloud.testing.helper');

var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',
  // seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',

  specs: [ 
    'spec.js',
    'news.spec.js',
    'media.spec.js',
    'contact.spec.js',
    'authentication.spec.js' 
  ],

  baseUrl: 'http://lat-drupal.local/',

  capabilities: {

    'browserName': 'chrome',

    // Saucelabs credentials
    // username: cloudTestingHelper.getInfo('saucelabs', 'user'),
    // accessKey: cloudTestingHelper.getInfo('saucelabs', 'key'),

    // Test suite name.
    'name': 'lat-drupal test suite'

  },

  onPrepare: function() {
    // Add a screenshot reporter and store screenshots to `/tmp`: 
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'tmp'
    }));

    browser.driver.manage().window().maximize();
  }

}

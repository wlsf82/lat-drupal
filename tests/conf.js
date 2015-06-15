/**
 * @file conf.js
 */

// var cloudTestingHelper = require('./helpers/cloud.testing.helper');

exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',
  // seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',

  specs: [ 
    'spec.js',
    'authentication.spec.js' 
  ],

  baseUrl: 'http://lat-drupal.local/',

  params: {
    adminLogin: {
      'user': 'admin',
      'password': 'latdrupal'
    }
  },

  capabilities: {

    'browserName': 'chrome',

    // Saucelabs credentials
    // username: cloudTestingHelper.getInfo('saucelabs', 'user'),
    // accessKey: cloudTestingHelper.getInfo('saucelabs', 'key'),

    // Test suite name.
    'name': 'lat-drupal test suite'

  },

  onPrepare: function() {
    var SpecReporter = require('jasmine-spec-reporter');

    // add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true, // display summary of all failures after execution
      displayFailedSpec: true,      // display each failed spec
      displaySuiteNumber: true,     // display each suite number (hierarchical)
      displaySpecDuration: true     // display each spec duration
    }));
  },

}

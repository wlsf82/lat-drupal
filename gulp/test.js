/**
 * @file Test related Gulp tasks.
 */

var gulp = require('gulp')
  , request = require('request')
  , spawn = require('child_process').spawn
  , webdriver
  , protractor;

/**
 * Print buffer string.
 */
function logBuffer(data) {
  console.log(data.toString());
}

/**
 * Swallow any errors.
 */
function swallowError (error) {
  logBuffer(error);
  this.emit('end');
}

/**
 * Initiates webdriver.
 */
gulp.task('webdriver', function (done) {
  var started = false;

  /**
   * Check if webdriver is ready.
   */
  function ready(buffer) {
    if (!started && buffer.toString().indexOf('Started SocketListener') !== -1) {
      started = true;
      done();
    } else if (!started) {
      logBuffer(buffer);
    }
  }
  webdriver = spawn('webdriver-manager', ['start']);
  webdriver.stdout.on('data', ready);
  webdriver.stderr.on('data', ready);

  webdriver.on('exit', function (code) {
    // Make sure selenium stops.
    request('http://localhost:4444/selenium-server/driver/?cmd=shutDownSeleniumServer', function (err, res, body) {
      if (body == 'OKOK') {
        webdriver.emit('exitSelenium');
      }
    });
  });
});

/**
 * E2E test: uses Protractor to perform e2e tests.
 */
gulp.task('test:e2e', ['webdriver'], function (done) {
  protractor = spawn('protractor', ['tests/conf.js']);
  protractor.stdout.on('data', logBuffer);
  protractor.stderr.on('data', logBuffer);

  protractor.on('exit', function (code) {
    webdriver.kill('SIGHUP');
  });

  webdriver.on('exitSelenium', done);
});

gulp.task('test', ['test:e2e']);
exports.config = {

  // Spec patterns are relative to the location of this config.
  specs: [
    'e2e/**/*_spec.js'
  ],


  multiCapabilities: [{
    'browserName': 'chrome'
  }],


  // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be prepended with this.
  baseUrl: 'http://localhost:9001', //default test port with Yeoman

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 20000
  }
};
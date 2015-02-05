/*
 * Bedrock Configuration.
 *
 * Copyright (c) 2012-2015 Digital Bazaar, Inc. All rights reserved.
 */
var path = require('path');

module.exports = function(bedrock) {
  if(bedrock.config.protractor) {
    var protractor = bedrock.config.protractor.config;
    // add protractor tests
    //protractor.suites['bedrock-angular-modal'] =
    //  path.join(__dirname, './tests/**/*.js');
    protractor.params.config.onPrepare.push(
      path.join(__dirname, './prepare'));
  }

  bedrock.config.requirejs.config.shim['dialog-polyfill'] = {
    exports: 'dialogPolyfill'
  };
};

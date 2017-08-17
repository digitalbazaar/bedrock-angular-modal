/*
 * Bedrock Configuration.
 *
 * Copyright (c) 2012-2017 Digital Bazaar, Inc. All rights reserved.
 */
const path = require('path');

module.exports = function(bedrock) {
  if(bedrock.config.protractor) {
    const protractor = bedrock.config.protractor.config;
    // add protractor tests
    // protractor.suites['bedrock-angular-modal'] =
    //  path.join(__dirname, './tests/**/*.js');
    protractor.params.config.onPrepare.push(
      path.join(__dirname, './prepare'));
  }
};

/*!
 * Modal module.
 *
 * Copyright (c) 2012-2016 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
define([
  'angular',
  './alert-modal-component',
  './modal-component',
  './modal-directive'
], function(angular) {

'use strict';

var module = angular.module('bedrock.modal', ['stackables', 'bedrock.alert']);

Array.prototype.slice.call(arguments, 1).forEach(function(register) {
  register(module);
});

});

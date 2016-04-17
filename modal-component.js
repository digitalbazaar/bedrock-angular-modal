/*!
 * Bedrock Modal.
 *
 * Copyright (c) 2012-2016 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
define([], function() {

'use strict';

function register(module) {
  module.component('brModal', {
    require: '^stackable',
    bindings: {
      title: '@?brTitle'
    },
    transclude: {
      'br-modal-header': '?brModalHeader',
      'br-modal-body': '?brModalBody',
      'br-modal-footer': '?brModalFooter'
    },
    templateUrl: requirejs.toUrl('bedrock-angular-modal/modal-component.html')
  });
}

return register;

});

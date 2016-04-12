/*!
 * Alert Modal.
 *
 * Copyright (c) 2012-2016 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
define([], function() {

'use strict';

function register(module) {
  module.component('brAlertModal', {
    require: '^stackable',
    bindings: {
      header: '@brModalHeader',
      ok: '@brModalOk',
      cancel: '@brModalCancel'
    },
    transclude: true,
    templateUrl: requirejs.toUrl('bedrock-angular-modal/alert-modal.html')
  });
}

return register;

});

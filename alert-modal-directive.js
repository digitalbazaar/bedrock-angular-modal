/*!
 * Alert Modal.
 *
 * Copyright (c) 2012-2015 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
define([], function() {

'use strict';

/* @ngInject */
function factory() {
  return {
    restrict: 'EA',
    require: '^stackable',
    scope: {
      header: '@brModalHeader',
      ok: '@brModalOk',
      cancel: '@brModalCancel'
    },
    transclude: true,
    templateUrl: requirejs.toUrl('bedrock-angular-modal/alert-modal.html'),
    link: function(scope, element, attrs, stackable) {
      scope.stackable = stackable;
    }
  };
}

return {brAlertModal: factory};

});

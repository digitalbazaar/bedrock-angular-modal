/*!
 * Alert Modal.
 *
 * Copyright (c) 2012-2015 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
define(['module'], function(module) {

'use strict';

var modulePath = module.uri.substr(0, module.uri.lastIndexOf('/')) + '/';

/* @ngInject */
function factory() {
  return {
    restrict: 'A',
    require: '^stackable',
    scope: {
      header: '@brModalHeader',
      ok: '@brModalOk',
      cancel: '@brModalCancel'
    },
    transclude: true,
    templateUrl: modulePath + 'alert-modal.html',
    link: function(scope, element, attrs, stackable) {
      scope.stackable = stackable;
    }
  };
}

return {brAlertModal: factory};

});

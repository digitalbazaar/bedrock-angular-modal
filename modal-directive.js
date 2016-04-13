/*!
 * Bedrock Lazy-load + Alerts Modal Wrapper.
 *
 * Copyright (c) 2012-2016 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
define([], function() {

'use strict';

function register(module) {
  // 'modal' replaces bootstrap "modal" class -- intentionally no "br-" prefix
  module.directive({modal: factory});
}

/* @ngInject */
function factory() {
  return {
    restrict: 'C',
    transclude: true,
    /* jshint multistr: true */
    template: '\
      <div br-lazy-compile="!stackable || stackable.isOpen" \
        br-lazy-id="br-modal"> \
        <div br-alerts br-fixed="true"></div> \
        <div ng-transclude></div> \
      </div>'
  };
}

return register;

});

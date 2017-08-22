/*!
 * Bedrock Lazy-load + Alerts Modal Wrapper.
 *
 * Copyright (c) 2012-2017 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
/* @ngInject */
export default function factory() {
  return {
    restrict: 'C',
    transclude: true,
    /* jshint multistr: true */
    template: '\
      <div br-lazy-compile="!stackable || stackable.isOpen" \
        br-lazy-id="br-modal"> \
        <div ng-transclude></div> \
      </div>'
  };
}

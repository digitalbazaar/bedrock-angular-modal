/*!
 * Bedrock Modal.
 *
 * Copyright (c) 2012-2015 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
define([], function() {

'use strict';

/* @ngInject */
function modal() {
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

/* @ngInject */
function brModal() {
  return {
    restrict: 'E',
    require: '^stackable',
    scope: {title: '@?brTitle'},
    transclude: {
      'br-modal-header': '?brModalHeader',
      'br-modal-body': '?brModalBody',
      'br-modal-footer': '?brModalFooter'
    },
    /* jshint multistr: true */
    template: '\
      <div class="modal"> \
        <div class="modal-dialog"> \
          <div class="modal-content"> \
            <div ng-multi-transclude-controller> \
              <div class="modal-header"> \
                <div ng-multi-transclude="br-modal-header" \
                  ng-transclude="br-modal-header"> \
                  <a class="close stackable-cancel">&times;</a> \
                  <h3 class="modal-title">{{title}}</h3> \
                </div> \
              </div> \
              <div class="modal-body"> \
                <div ng-multi-transclude="br-modal-body" \
                  ng-transclude="br-modal-body"></div> \
              </div> \
              <div class="modal-footer"> \
                <div ng-multi-transclude="br-modal-footer" \
                  ng-transclude="br-modal-footer"> \
                  <button type="button" \
                    class="btn btn-default stackable-cancel">Cancel</button> \
                </div> \
              </div> \
            </div> \
          </div><!-- /.modal-content --> \
        </div><!-- /.modal-dialog --> \
      </div><!-- /.modal -->'
  };
}

// 'modal' replaces bootstrap "modal" class -- intentionally no "br-" prefix
return {modal: modal, brModal: brModal};

});

/*!
 * Bedrock Modal.
 *
 * Copyright (c) 2012-2017 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
export default {
  require: {
    stackable: '^stackable'
  },
  bindings: {
    title: '@?brTitle'
  },
  transclude: {
    'br-modal-header': '?brModalHeader',
    'br-modal-body': '?brModalBody',
    'br-modal-footer': '?brModalFooter'
  },
  templateUrl: 'bedrock-angular-modal/modal-component.html'
};

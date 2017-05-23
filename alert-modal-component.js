/*!
 * Alert Modal.
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
    header: '@brModalHeader',
    ok: '@brModalOk',
    cancel: '@brModalCancel'
  },
  transclude: true,
  templateUrl: 'bedrock-angular-modal/alert-modal.html'
};

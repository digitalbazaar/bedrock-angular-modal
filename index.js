/*!
 * Modal module.
 *
 * Copyright (c) 2012-2017 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
import angular from 'angular';
import AlertModalComponent from './alert-modal-component.js';
import ModalComponent from './modal-component.js';
import ModalDirective from './modal-directive.js';

const module = angular.module('bedrock.modal', ['stackables', 'bedrock.alert']);

module.component('brAlertModal', AlertModalComponent);
module.component('brModal', ModalComponent);
// 'modal' replaces bootstrap "modal" class -- intentionally no "br" prefix
module.directive('modal', ModalDirective);

/* @ngInject */
module.config($provide => {
  /* @ngInject */
  $provide.decorator('$mdToast', $delegate => {
    const show = $delegate.show;
    $delegate.show = options => {
      options = options._options || {};
      if(!('parent' in options)) {
        const dialog = angular.element('dialog:not(:has(dialog))');
        if(dialog[0]) {
          options.parent = 'dialog';
        } else {
          options.parent = 'body';
        }
      }
      return show.call($delegate, options);
    };
    return $delegate;
  });
});

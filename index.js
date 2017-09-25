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

const module = angular.module('bedrock.modal', [
  'stackables', 'bedrock.alert', 'bedrock.lazyCompile']);

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
        // find "highest" open dialog on the stack or use body
        let parent;
        let child = document.body;
        do {
          parent = child;
          child = parent.querySelector('dialog[open]');
        } while(child);
        options.parent = parent;
      }
      return show.call($delegate, options);
    };
    return $delegate;
  });
});

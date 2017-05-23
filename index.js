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

var module = angular.module('bedrock.modal', ['stackables', 'bedrock.alert']);

module.component('brAlertModal', AlertModalComponent);
module.component('brModal', ModalComponent);
// 'modal' replaces bootstrap "modal" class -- intentionally no "br" prefix
module.directive('modal', ModalDirective);

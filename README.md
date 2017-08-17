# bedrock-angular-modal

An [AngularJS][] module that provides stackable modals.

## Quick Examples

```html
<stackable-modal stackable="model.showMyModal">
  <br-modal br-title="My Modal">
    <br-modal-body>
      <p>Some modal content...</p>
    </br-modal-body>
    <br-modal-footer>
      <md-button type="button" class="md-primary md-raised">Ok</md-button>
      <md-button type="button" class="stackable-cancel">Cancel</md-button>
    </br-modal-footer>
  </br-modal>
</stackable-modal>
```

You can combine a modal with [bedrock-angular-lazy-compile][] to prevent it
from being compiled until it's shown for the first time, thus improving
initial page render time:

```html
<stackable-modal stackable="model.showMyModal"
  br-lazy-compile="model.showMyModal" br-lazy-id="my-modal">
  <my-modal-component></my-modal-component>
</stackable-modal>
```

To show a simple alert modal:

```html
<stackable-modal stackable="model.showAlert"
  stackable-closing="model.confirm(err, result)"
  stackable-closed="model.alertClosed(err, result)">
  <br-alert-modal
    br-modal-header="Warning"
    br-modal-ok="Ok"
    br-modal-cancel="Cancel">
    <div class="text-center alert alert-danger">
      <strong>Warning!</strong>
      What you're about to do is dangerous!
    </div>
    <p>Are you sure that you want to?</p>
  </br-alert-modal>
</stackable-modal>
```

```js
// called when the alert is closing
modal.confirm = function(err, result) {
  if(!err && result === 'ok') {
    // can return a Promise that resolves to `false` or just `false` to cancel
    // closing the alert; returning anything else won't cancel
    return new Promise(function(resolve, reject) {
      // ...
    }).catch(function(err) {
      console.log('Error', err);
      // cancel closing the alert by returning false
      return false;
    });
  }
};

// called after the alert is closed
model.alertClosed = function(err, result) {
  if(!err && result === 'ok') {
    console.log('doing the dangerous thing...');
  }
};
```

For more information on the various `stackable-modal` features available,
see [angular-stackables][].

## Setup

```
npm install bedrock-angular-modal
```

`bedrock-angular-modal` must be added to the `bedrock.browserDependencies` list
in the `package.json` file of the dependent package.

To manually add **bedrock-angular-modal** as a dependency:

```js
angular.module('myapp', ['bedrock.modal']);
```

<!-- ## How It Works

TODO: -->


[angular-stackables]: https://github.com/digitalbazaar/angular-stackables
[bedrock]: https://github.com/digitalbazaar/bedrock
[bedrock-angular]: https://github.com/digitalbazaar/bedrock-angular
[bedrock-angular-lazy-compile]: https://github.com/digitalbazaar/bedrock-angular-lazy-compile
[AngularJS]: https://github.com/angular/angular.js

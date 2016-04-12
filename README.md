# bedrock-angular-modal

An [AngularJS][] module that provides [bootstrap][]-styled, stackable modals.

## Quick Examples

```html
<stackable-modal stackable="model.showMyModal">
  <br-modal br-title="My Modal">
    <br-modal-body>
      <p>Some modal content...</p>
    </br-modal-body>
    <br-modal-footer>
      <button type="button" class="btn btn-primary">Ok</button>
      <button type="button"
        class="btn btn-default stackable-cancel">Cancel</button>
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
bower install bedrock-angular-modal
```

If you're using [bedrock-angular][], installation of the module followed by
a restart of your [bedrock][] server is sufficient to make the module
available to your application.

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
[bootstrap]: http://getbootstrap.com/
[bower]: http://bower.io/
[AngularJS]: https://github.com/angular/angular.js

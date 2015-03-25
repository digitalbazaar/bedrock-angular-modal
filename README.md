# bedrock-angular-modal

An [AngularJS][] module that provides [bootstrap][]-styled, stackable modals.

## Quick Examples

```html
<stackable-modal stackable="model.showMyModal">
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <a class="close stackable-cancel">&times;</a>
          <h3 class="modal-title">My Modal</h3>
        </div>
        <div class="modal-body">
          <p>Some modal content...</p>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Ok</button>
          <button type="button"
            class="btn btn-default stackable-cancel">Cancel</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->
</stackable-modal>
```

You can combine a modal with [bedrock-angular-lazy-compile][] to prevent it
from being compiled until it's shown for the first time, thus improving
initial page render time:

```html
<stackable-modal stackable="model.showMyModal"
  br-lazy-compile="model.showMyModal" br-lazy-id="my-modal">
  <my-modal-directive></my-modal-directive>
</stackable-modal>
```

To show a simple alert modal:

```html
<stackable-modal stackable="model.showAlert"
  stackable-closing="model.confirm(err, result)"
  stackable-closed="model.alertClosed(err, result)">
  <div br-alert-modal
    br-modal-header="Warning"
    br-modal-ok="Ok"
    br-modal-cancel="Cancel">
    <div class="text-center alert alert-danger">
      <strong>Warning!</strong>
      What you're about to do is dangerous!
    </div>
    <p>Are you sure that you want to?</p>
  </div>
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

## How It Works

TODO:


[angular-stackables]: https://github.com/digitalbazaar/angular-stackables
[bedrock]: https://github.com/digitalbazaar/bedrock
[bedrock-angular]: https://github.com/digitalbazaar/bedrock-angular
[bedrock-angular-lazy-compile]: https://github.com/digitalbazaar/bedrock-angular-lazy-compile
[bootstrap]: http://getbootstrap.com/
[bower]: http://bower.io/
[AngularJS]: https://github.com/angular/angular.js

# bedrock-angular-modal
Bedrock AngularJS Modals

# bedrock-angular-modal

An [AngularJS][] module that provides [bootstrap][]-styled, stackable modals.

## Quick Examples

```html
<stackable-modal stackable="model.showMyModal">
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <a class="close stackable-cancel">&times;<span class="sr-only">Close</span></a>
          <h3 class="modal-title">My Modal</h3>
        </div>
        <div class="modal-body">
          <p>Some modal content...</p>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary"><i class="fa fa-check"></i> Ok</button>
          <button type="button" class="btn btn-default stackable-cancel">Cancel</button>
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


[bedrock]: https://github.com/digitalbazaar/bedrock
[bedrock-angular]: https://github.com/digitalbazaar/bedrock-angular
[bootstrap]: http://getbootstrap.com/
[bower]: http://bower.io/
[AngularJS]: https://github.com/angular/angular.js

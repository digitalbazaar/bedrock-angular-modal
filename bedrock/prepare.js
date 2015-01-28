var bedrock = GLOBAL.bedrock;
var by = GLOBAL.by;

bedrock.on('init', function() {
  // locate the top-level modal
  by.addLocator('modal', function() {
    return document.querySelectorAll('.modal');
  });

  // locate the top-level modal footer
  by.addLocator('modalFooter', function() {
    return document.querySelectorAll('.modal .modal-footer');
  });
});

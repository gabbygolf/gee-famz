$('#addNew').click(function() {
  $('#newAdd').show();
});

$('#allContacts').click(function() {
  $('#contactList').show('slow', function() {
    // Animation complete.
  });
});
// create a function that stores added title and body, function that makes dynamic element ('li' li's need to have a h1, p , [delete, uipvote, downvote] buttons, quality)
var titleInput = $('.title-input-js');
var descriptionInput = $('.description-input-js');
var saveButton = $('.save-button');


saveButton.on('click', function(){
  $('ul').append(
    '<li>' +
      '<h2 class="idea-title">' + titleInput.val() + '</h2>' +
      '<button class="delete-button" type=button></button>' +
      '<p class="idea-description">' + descriptionInput.val() + '</p>' +
      '<button class="upvote-button" type=button></button>' +
      '<button class="downvote-button" type=button></button>' +
      '<p class="quality-value">' + 'ranking: swill' + '</p>' +
    '</li>');
});


// function that removes li

$('ul').on('click', '.delete-button', function() {
  $(this).parent().remove('li');
});


// function that changes quality


// function that searches with li's
// function to be able to edit li's
// function that replaces edited li
// function to local store and remove li's
// Create new function or add to other function, to call on stored li's
// functions for buttons that will refrence previous buttons

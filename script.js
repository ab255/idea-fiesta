// create a function that stores added title and body, function that makes dynamic element ('li' li's need to have a h1, p , [delete, uipvote, downvote] buttons, quality)
var titleInput = $('.title-input-js');
var descriptionInput = $('.description-input-js');
var createIdea = $('ul').append(
  '<li>' +
    '<h2>' + titleInput.val() + '</h2>' +
    '<img>' +
    '<p>' + descriptionInput.val() + '</p>' +
    '<img>' + 
    '<img>' +
    '<p>' + 'ranking: ' + ideaRanking() + '</p>' +
  '</li>'
);
// function that removes li
// function that changes quality
// function that searches with li's
// function to be able to edit li's
// function that replaces edited li
// function to local store and remove li's
// Create new function or add to other function, to call on stored li's
// functions for buttons that will refrence previous buttons

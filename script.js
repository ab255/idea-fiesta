// create a function that stores added title and body, function that makes dynamic element ('li' li's need to have a h1, p , [delete, uipvote, downvote] buttons, quality)
var titleInput = $('.title-input-js');
var descriptionInput = $('.description-input-js');
var saveButton = $('.save-button');
var i = 0;
var x = ['Swill', 'Plausible', 'Genius'];
var ideas = [
  {
    'title': 'Erics idea',
    'description': 'great idea',
    'quality': 'superb'
  },
  {
    'title': 'Bens idea',
    'description': 'good idea',
    'quality': 'plausible'
  }
];
var ideasJson = JSON.stringify(ideas);
// var qualityOutput = $('.quality-value');
// var current = 0;
// var ranking = ["Swill", "Plausible", "Genius"];

saveButton.on('click', function(){
  $('ul').append(
    '<li>' +
      '<h2 class="idea-title">' + titleInput.val() + '</h2>' +
      '<button class="delete-button" type=button></button>' +
      '<p class="idea-description">' + descriptionInput.val() + '</p>' +
      '<button class="upvote-button" type=button>Upvote</button>' +
      '<button class="downvote-button" type=button></button>' +
      '<p class="quality-value">' + 'ranking: ' + x[i] + '</p>' +
    '</li>');
});

// Function for ideas

function renderIdeasToDom() {
  var parsedIdeas = parseIdeasJson();

  parsedIdeas.forEach(renderTheIdea);
};

function renderTheIdea(item, index) {
  $('ul').append(
    '<li>' +
      '<h2 class="idea-title">' + item['title'] + '</h2>' +
      '<button class="delete-button" type=button></button>' +
      '<p class="idea-description">' + item['description'] + '</p>' +
      '<button class="upvote-button" type=button>Upvote</button>' +
      '<button class="downvote-button" type=button></button>' +
      '<p class="quality-value">' + 'ranking: ' + item['quality'] + '</p>' +
    '</li>');
};

function parseIdeasJson() {
  return JSON.parse(ideasJson);
};

function addIdeaToIdeasJson() {
  var newIdea = {
    'title': 'new idea',
    'description': 'awesome idea',
    'quality': 'superb'
  }

  // YOU WILL WANT TO USE THE LOCAL STORAGE JSON FUNCTION HERE, NOT MY CRAP!
  var currentIdeas = parseIdeasJson();
  currentIdeas.push(newIdea);
  ideasJson = JSON.stringify(currentIdeas);
};

// function that removes li

$('ul').on('click', '.delete-button', function() {
  $(this).parent().remove('li');
});


// function that changes quality

$('ul').on('click', '.upvote-button', function() {
  var qualityOutput = $('.quality-value');
  i = (i+1)%x.length;
  qualityOutput.replaceWith('<p class="quality-value">' + 'ranking: ' + x[i] + '</p>');
});


// function that searches with li's
// function to be able to edit li's
// function that replaces edited li
// function to local store and remove li's
// Create new function or add to other function, to call on stored li's
// functions for buttons that will refrence previous buttons

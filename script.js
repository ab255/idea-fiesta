// create a function that stores added title and body, function that makes dynamic element ('li' li's need to have a h1, p , [delete, uipvote, downvote] buttons, quality)
var titleInput = $('.title-input-js');
var descriptionInput = $('.description-input-js');
var saveButton = $('.save-button');
var i = 0;
var x = ['Swill', 'Plausible', 'Genius'];
var ideas = [];

$(document).ready(function(){
  renderIdeas();
});

function Idea(title, body, quality, id) {
  this.title = title;
  this.body = body;
  this.quality = quality;
  this.id = Date.now()
};

function createNewIdea() {
  var title = titleInput.val();
  var description = descriptionInput.val();
  var details = JSON.stringify({'title': title, 'description': description, 'quality': 'Swill'});
  localStorage.setItem(title, details);
};

/////

var ideasWeHaveRetrieved = retrieveIdeas();
var strungIdeas = JSON.stringify(ideas);

function storeIdeas() {
  localStorage.setItem('ideas', strungIdeas);
};

function retrieveIdeas() {
  var theIdeasThatWereRetreived = localStorage.getItem('ideas');
  JSON.parse(theIdeasThatWereRetreived);
};

function clearIdeas() {
  $('ul').empty();
}

function renderIdeas() {
  for (var i in window.localStorage){
    var idea = JSON.parse(localStorage.getItem(i));
    var title = idea['title'];
    var description = idea['body'];
    var quality = idea['quality'];
    renderTheIdea(title, description, quality);
  }
}

function renderTheIdea(title, description, quality) {
  $('ul').append(
    '<li>' +
      '<section class="li-header">' +
      '<h2 class="idea-title">' + title + '</h2>' +
      '<button class="delete-button" type=button></button>' +
      '</section>' +
      '<p class="idea-description">' + description + '</p>' +
      '<section class="li-footer">' +
      '<button class="upvote-button" type=button></button>' +
      '<button class="downvote-button" type=button></button>' +
      '<p class="quality-value">' + 'ranking: ' + quality + '</p>' +
      '</section>' +
    '</li>');
};

function renderIdeasToPage() {
  ideasWeHaveRetrieved.forEach(renderTheIdea);
};

function addNewIdeaToThePage() {
  var spawnedIdea = new Idea(title, body, quality, id);
  ideasWeHaveRetrieved.push(spawnedIdea);
  strungIdeas = JSON.stringify(spawnedIdea);
}


saveButton.on('click', function(){
  createNewIdea();
  clearIdeas();
  renderIdeas();
});



// function that removes li

$('ul').on('click', '.delete-button', function() {
  $(this).parent().parent().remove('li');

});

  // var qualityOutput = "swill"
  // var index = x.indexOf(qualityOutput)
  // if index < 2
  //   newQuality = x[index++]
  // on click, if quality index = 0, add 1
  // if quality index = 2, do nothing

// function that changes quality

$('ul').on('click', '.upvote-button', function() {
  var qualityOutput = $('.quality-value');
  if (i < 2) {
    i = (i+1);
    qualityOutput.replaceWith('<p class="quality-value">' + 'ranking: ' + x[i] + '</p>');
  }
  // if (i == 2) {
  //     $('.upvote-button').prop('disabled', true);
  //   }
});

$('ul').on('click', '.downvote-button', function() {
  var qualityOutput = $('.quality-value');
  if (i > 0) {
    i = (i-1);
    qualityOutput.replaceWith('<p class="quality-value">' + 'ranking: ' + x[i] + '</p>');
  }
  // if (i == 0) {
  //   $('.downvote-button').prop('disabled', true);
  // }
});

// var currentQuality = $('.value').text(thing)

// var downVoteQualities = {
//   "Genius" : "Plausible",
//   "Plausible" : "Swill",
//   "Swill" : "Swill"
// }

// create a function that stores added title and body, function that makes dynamic element ('li' li's need to have a h1, p , [delete, uipvote, downvote] buttons, quality)
var titleInput = $('.title-input-js');
var descriptionInput = $('.description-input-js');
var saveButton = $('.save-button');
var i = 0;
var x = ['Swill', 'Plausible', 'Genius'];
var ideas = [];


function Idea(title, body, quality, id) {
  this.title = title;
  this.body = body;
  this.quality = quality;
  this.id = Date.now()
};

function createNewIdea() {
  var title = titleInput.val();
  var body = descriptionInput.val();
  var createANewIdea = new Idea(title, body);
  ideas.push(createANewIdea);
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

function renderTheIdea(item, index) {
  $('ul').append(
    '<li>' +
      '<section class="li-header">' +
      '<h2 class="idea-title">' + item['title'] + '</h2>' +
      '<button class="delete-button" type=button></button>' +
      '</section>' +
      '<p class="idea-description">' + item['description'] + '</p>' +
      '<section class="li-footer"'> +
      '<button class="upvote-button" type=button>Upvote</button>' +
      '<button class="downvote-button" type=button></button>' +
      '<p class="quality-value">' + 'ranking: ' + item['quality'] + '</p>' +
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

///////

// var ideasJson = JSON.stringify(ideas);
//
// function parseIdeasJson() {
//   return JSON.parse(ideasJson);
// };
//
// function renderTheIdea(item, index) {
//   $('ul').append(
//     '<li>' +
//       '<section class="li-header">' +
//       '<h2 class="idea-title">' + item['title'] + '</h2>' +
//       '<button class="delete-button" type=button></button>' +
//       '</section>' +
//       '<p class="idea-description">' + item['description'] + '</p>' +
//       '<section class="li-footer"'> +
//       '<button class="upvote-button" type=button>Upvote</button>' +
//       '<button class="downvote-button" type=button></button>' +
//       '<p class="quality-value">' + 'ranking: ' + item['quality'] + '</p>' +
//       '</section>' +
//     '</li>');
// };
//
// function renderIdeasToDom() {
//   var parsedIdeas = parseIdeasJson();
//   parsedIdeas.forEach(renderTheIdea);
// };
//
//
// function addIdeaToIdeasJson() {
//   var newIdea = {
//   }
// // YOU WILL WANT TO USE THE LOCAL STORAGE JSON FUNCTION HERE, NOT MY CRAP!
//   var currentIdeas = parseIdeasJson();
//   currentIdeas.push(newIdea);
//   ideasJson = JSON.stringify(currentIdeas);
// };

////

saveButton.on('click', function(){
  $('ul').append(
    '<li>' +
      '<section class="li-header">' +
        '<h2 class="idea-title">' + titleInput.val() + '</h2>' +
        '<button class="delete-button" type=button></button>' +
      '</section>' +
        '<p class="idea-description">' + descriptionInput.val() + '</p>' +
      '<section class="li-footer">' +
        '<button class="upvote-button" type=button></button>' +
        '<button class="downvote-button" type=button></button>' +
        '<p class="quality-value">' + 'ranking: ' + x[i] + '</p>' +
      '</section>' +
    '</li>');
      createNewIdea();
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

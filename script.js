// create a function that stores added title and body, function that makes dynamic element ('li' li's need to have a h1, p , [delete, uipvote, downvote] buttons, quality)
var titleInput = $('.title-input-js');
var descriptionInput = $('.description-input-js');
var saveButton = $('.save-button');
var i = 0;
var x = ['Swill', 'Plausible', 'Genius'];
var uniqueId = Date.now();
var ideas = [];

// function generateIdea(titleInput, descriptionInput, uniqueId) {
//   this.titleInput= titleInput;
//   this.descriptionInput = descriptionInput;
//   this.uniqueId = uniqueId;
// }


function Idea(title, body, quality) {
  this.title = title;
  this.body = body;
  this.quality = quality;
  this.id = Date.now()
}

function createNewIdea() {
  var title = titleInput.val();
  var body = descriptionInput.val();
  var createANewIdea = new Idea(title, body);
  ideas.push(createANewIdea);
}



///////

var ideasJson = JSON.stringify(ideas);

function parseIdeasJson() {
  return JSON.parse(ideasJson);
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

function renderIdeasToDom() {
  var parsedIdeas = parseIdeasJson();
  parsedIdeas.forEach(renderTheIdea);
};


function addIdeaToIdeasJson() {
  var newIdea = {
  }
// YOU WILL WANT TO USE THE LOCAL STORAGE JSON FUNCTION HERE, NOT MY CRAP!
  var currentIdeas = parseIdeasJson();
  currentIdeas.push(newIdea);
  ideasJson = JSON.stringify(currentIdeas);
};

////

saveButton.on('click', function(){
  $('ul').append(
    '<li>' +
      '<h2 class="idea-title">' + titleInput.val() + '</h2>' +
      '<button class="delete-button" type=button></button>' +
      '<p class="idea-description">' + descriptionInput.val() + '</p>' +
      '<button class="upvote-button" type=button>Upvote</button>' +
      '<button class="downvote-button" type=button>Downvote</button>' +
      '<p class="quality-value">' + 'ranking: ' + x[i] + '</p>' +
    '</li>');
      createNewIdea();
});


// function that removes li

$('ul').on('click', '.delete-button', function() {
  $(this).parent().remove('li');

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

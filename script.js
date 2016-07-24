var titleInput = $('.title-input-js');
var descriptionInput = $('.description-input-js');
var saveButton = $('.save-button');
var i = 0;
var qualityValue = ['Swill', 'Plausible', 'Genius'];

$(document).ready(function(){
  renderIdeas();
});

function createNewIdea() {
  var title = titleInput.val();
  var description = descriptionInput.val();
  var id = Date.now();
  var quality = this.quality;
  var details = JSON.stringify({'id': id, 'title': title, 'description': description, 'quality': 'ranking: Swill'});
  localStorage.setItem(id, details);
};

function clearIdeas() {
  $('ul').empty();
}

function renderIdeas() {
  for (var i in window.localStorage){
    var idea = JSON.parse(localStorage.getItem(i));
    var title = idea['title'];
    var description = idea['description'];
    var quality = idea['quality'];
    var id = idea['id'];
    renderTheIdea(id, title, description, quality);
  }
}

function renderTheIdea(id, title, description, quality) {
  $('ul').prepend(
    '<li id='+ id + '>' +
      '<section class="li-header">' +
      '<h2 class="idea-title">' + title + '</h2>' +
      '<button class="delete-button" type=button></button>' +
      '</section>' +
      '<p class="idea-description">' + description + '</p>' +
      '<section class="li-footer">' +
      '<button class="upvote-button" type=button></button>' +
      '<button class="downvote-button" type=button></button>' +
      '<p class="quality-value">' + quality + '</p>' +
      '</section>' +
    '</li>');
};


saveButton.on('click', function(){
  createNewIdea();
  clearIdeas();
  renderIdeas();
});



$('ul').on('click', '.delete-button', function () {
    var id = parseInt(this.closest('li').id);
    localStorage.removeItem(id);
    $(this).parent().parent().remove('li');
  });


$('ul').on('click', '.upvote-button', function() {
  var qualityOutput = $('.quality-value');
  if (i < 2) {
    i = (i+1);
    qualityOutput.replaceWith('<p class="quality-value">' + 'ranking: ' + qualityValue[i] + '</p>');
  }

  var id = parseInt(this.closest('li').id);
  var title = $(this).parent().parent('li').find('.idea-title').text();
  var description = $(this).parent().parent('li').find('.idea-description').text();
  var quality = $(this).parent().parent('li').find('.quality-value').text();
  var details = JSON.stringify({'id': id, 'title': title, 'description': description, 'quality': quality});
  localStorage.setItem(id, details);
});

$('ul').on('click', '.downvote-button', function() {
  var qualityOutput = $('.quality-value');
  if (i > 0) {
    i = (i-1);
    qualityOutput.replaceWith('<p class="quality-value">' + 'ranking: ' + qualityValue[i] + '</p>');
  }

  var id = parseInt(this.closest('li').id);
  var title = $(this).parent().parent('li').find('.idea-title').text();
  var description = $(this).parent().parent('li').find('.idea-description').text();
  var quality = $(this).parent().parent('li').find('.quality-value').text();
  var details = JSON.stringify({'id': id, 'title': title, 'description': description, 'quality': quality});
  localStorage.setItem(id, details);
});

$('#search-bar').keyup(function(){
   var valThis = $(this).val().toLowerCase();
    $('li').each(function(){
     var text = $(this).text().toLowerCase();
        (text.indexOf(valThis) == 0) ? $(this).show() : $(this).hide();
   });
  });

// $('li').each(function(){
// $(this).attr('data-search-term', $(this).text().toLowerCase());
// });
//
// $('#search-bar').on('keyup', function(){
//
// var searchTerm = $(this).val().toLowerCase();
//
//     $('li').each(function(){
//
//         if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
//             $(this).show();
//         } else {
//             $(this).hide();
//         }
//
//     });
//
// });

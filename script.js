var titleInput = $('.title-input-js');
var descriptionInput = $('.description-input-js');
var saveButton = $('.save-button');
var qualityValue = ['Swill', 'Plausible', 'Genius'];
var qualityKey = {
    0: ' Swill',
    1: ' Plausible',
    2: ' Genius'
}

// Render Ideas on Page Refresh

$(document).ready(function() {
    renderIdeas();
});

// Creating New Idea

function createNewIdea() {
    var title = titleInput.val();
    var description = descriptionInput.val();
    var id = Date.now();
    var quality = this.quality;
    var details = JSON.stringify({
        'id': id,
        'title': title,
        'description': description,
        'quality': qualityValue[0],
        'counter': 0
    });
    localStorage.setItem(id, details);
};

//Rendering Idea to DOM

function clearInputs() {
    titleInput.val('');
    descriptionInput.val('');
}

function clearIdeas() {
    $('ul').empty();
}

function renderIdeas(qualityStuff) {
    for (var i in window.localStorage) {
        var idea = JSON.parse(localStorage.getItem(i));
        var title = idea['title'];
        var description = idea['description'];
        var quality = qualityKey[idea['counter']];
        var id = idea['id'];
        var counter = idea['counter'];
        renderTheIdea(id, title, description, quality, counter);
    }
}

function renderTheIdea(id, title, description, quality, counter) {
    $('ul').prepend(
        '<li id=' + id + '>' +
        '<section class="li-header">' +
        '<h2 class="idea-title" contenteditable="true">' + title + '</h2>' +
        '<button class="delete-button" type=button></button>' +
        '</section>' +
        '<p class="idea-description" contenteditable="true">' + description + '</p>' +
        '<section class="li-footer">' +
        '<button class="upvote-button" type=button data-id=' + counter + '></button>' +
        '<button class="downvote-button" type=button data-id=' + counter + '></button>' +
        '<p class="ranking">' + 'Ranking:' + '<span class="quality-value">' + quality + '</span>' + '</p>' +
        '</section>' +
        '</li>');
};

function reRenderDOM() {
    clearIdeas();
    renderIdeas();
}

// Save Button

saveButton.on('click', function() {
    createNewIdea();
    reRenderDOM();
    clearInputs();
});

//Delete Button

$('ul').on('click', '.delete-button', function() {
    var id = parseInt(this.closest('li').id);
    localStorage.removeItem(id);
    $(this).parent().parent().remove('li');
});

//Upvote and Downvote Buttons

function getIdea(id) {
    return JSON.parse(localStorage.getItem(id));
}

function storeIdea(id, idea) {
    localStorage.setItem(id, JSON.stringify(idea));
}

$('ul').on('click', '.upvote-button', function() {
    var qualityOutput = $(this).parent().parent('li').find('.quality-value');
    var newCounter = $(this).data("id");
    if (newCounter < 2) {
        newCounter = (newCounter + 1);
        $(this).attr('id', newCounter);
        qualityOutput.replaceWith(
            '<span class="quality-value">' + qualityKey[`${newCounter}`] + '</span>'
        );
    }

    var id = parseInt(this.closest('li').id);
    var currentIdea = getIdea(id);
    currentIdea.counter = newCounter;
    storeIdea(id, currentIdea);
    reRenderDOM();
});

$('ul').on('click', '.downvote-button', function() {
    var qualityOutput = $(this).parent().parent('li').find('.quality-value');
    var newCounter = $(this).data("id");
    if (newCounter > 0) {
        newCounter = (newCounter - 1);
        $(this).attr('id', newCounter);
        qualityOutput.replaceWith(
            '<span class="quality-value">' + qualityKey[`${newCounter}`] + '</span>'
        );
    }

    var id = parseInt(this.closest('li').id);
    var currentIdea = getIdea(id);
    currentIdea.counter = newCounter;
    storeIdea(id, currentIdea);
    reRenderDOM();
});

//Editing Title and Description

$('ul').on('focusout', '.idea-title', function() {
    var id = parseInt(this.closest('li').id);
    var title = $(this).parent().parent('li').find('.idea-title').text();
    var currentIdea = getIdea(id);
    currentIdea.title = title;
    storeIdea(id, currentIdea);
    reRenderDOM();
});

$('ul').on('focusout', '.idea-description', function() {
    var id = parseInt(this.closest('li').id);
    var description = $(this).parent('li').find('.idea-description').text();
    var currentIdea = getIdea(id);
    currentIdea.description = description;
    storeIdea(id, currentIdea);
    reRenderDOM();
});

//Search Bar

$('#search-bar').keyup(function() {
    var filter = $(this).val();
    $('li').each(function() {
        if ($(this).text().search(new RegExp(filter, 'i')) < 0) {
            $(this).hide();
        } else {
            $(this).show()
        }
    });
});
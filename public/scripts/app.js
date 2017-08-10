/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$( document ).ready(function() {

// This following function is to prevent XSS.
  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

//Creates a parent article containing all of the necessary elements for a tweet.
//This element is rendered in composer-char-counter.js
  function createTweetElement(tweetData){
      const html = 
        `<article class="tweet-holder">
          <header class ="tweet-cont-header">
            <section class="at-picture">
              <img src=' ${tweetData.user.avatars.small}'>
            </section>
            <section class="at-name"> ${tweetData.user.handle} </section>
            <section class="user-name">${tweetData.user.name}</section>
            <section class="separator"></section>
          </header>
          <div> ${escape(tweetData.content.text)}</div>
          <footer> ${moment(tweetData.created_at).fromNow()}
            <i class="fa fa-flag-o" aria-hidden="true"></i>
            <i class="fa fa-refresh" aria-hidden="true"></i>
            <i class="fa fa-heart-o" aria-hidden="true"></i>
          </footer>
        </article>`;
        return html;
  }


//This following function appends the outcome of the function from app.js.
 function renderTweets(tweets){
  tweets.forEach(function (tweet) {
    $('.container-tweet').prepend (createTweetElement(tweet));
  });
}
//Retreives the JSON from /tweets and renders it in renderTweets.
function loadTweets(){
  $.getJSON('/tweets', renderTweets) 
}

//This following block, prevents the default actions of 
//the tweeter form. It prevents it from going to /tweet.
  $('form').submit(function(e) {
    // alert('Submit Canceled') // THIS IS UNNECESSARY - FOR TESTING PURPOSES.
    e.preventDefault();
//If unacceptable, dont accept it.
    var textArea = $(this).find('textarea')
    var formLength = textArea.val().length;
    console.log(formLength)
    if (formLength > 140 || formLength === null || formLength === ""){
      alert ("Tweet does not meet requirements.")
    }
    else {
      $.ajax({
        url: '/tweets',
        method: 'post',
        data: $(this).serialize()
      }).done(function (){
        console.log($(this).serialize());
        textArea.val("");
        alert ("Tweet'd!");
        loadTweets();
      })
    }
  });

//With this event handler, the Compose button will now appear and disapear
//with every click.
$('button').click(function(){
  $('.new-tweet').toggle();
  $('textarea').focus()
});

loadTweets();



});

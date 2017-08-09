/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$( document ).ready(function() {
// var tweets = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": {
//         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//       },
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": {
//         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
//         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
//         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
//       },
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   },
//   {
//     "user": {
//       "name": "Johann von Goethe",
//       "avatars": {
//         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
//         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
//         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
//       },
//       "handle": "@johann49"
//     },
//     "content": {
//       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
//     },
//     "created_at": 1502246968
//   }
// ]

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
    $('.container-tweet').append(createTweetElement(tweet));
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
      console.log($(this).serialize());
      textArea.val("")
      alert ("Tweet'd!")
    }
  });

function validateForm() {
  let x = document.forms
}

loadTweets();

});

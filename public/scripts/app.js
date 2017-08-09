/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// function createTweetHeader(tweetUser) {
// 	// let $tweetHeader = $('<header>').attr('class', 'tweet-cont-header');
// 	// let $tweetName = $('<section>').attr('class', 'user-name').text(tweetUser.name);
// 	// let $tweetAtName = $ ('<section>').attr('class', 'at-name').text(tweetUser.handle);
// 	// let $img = $('<img>').attr('src', tweetUser.avatars.small);
// 	// // $tweetName.append(tweetObj.user.name);
// 	// $tweetHeader.append($img);
// 	// $tweetHeader.append($tweetName);
// 	// $tweetHeader.append($tweetAtName);

// 	return $tweetHeader;
// }

// function createTweetFooter(tweetUser) {
// 	let $tweetFooter = $('<footer>').text(tweetUser.created_at)
// }

// function createTweetElement(tweetObj){
//   // TODO: Turn tweetObj into an <article> element

//   let $tweet = $('<article>').attr('class', 'tweet-holder');
//   // Add stuff to my article element using data from my tweetObj
//   $tweet.append(createTweetHeader(tweetObj.user));
//   $tweet.append($('<div>').text(tweetObj.content.text));
//   $tweet.append(createTweetFooter(tweetObj.user).);




//   return $tweet;
// }

function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function createSectionElement(tweetData){
	  const html = `<article class="tweet-holder">
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


var tweets = [
	{
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1502246968
  }
]



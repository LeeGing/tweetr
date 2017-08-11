$( document ).ready(function() {
  var maxLength = 140;

  //This function will calculate the value of the text area.
  //It will change the counter to the maxLength - value.
  $('textarea').keyup(function() {
    var length = $(this).val().length;
    length = maxLength - length;
    $('.counter').text(length);

    // If the counter is 0 or less, the counter will turn red.
    if ( length <= 0 ){
      $('.counter').css('color', 'red');
    } else {
      $('.counter').css('color', 'black');
    }
  });
});


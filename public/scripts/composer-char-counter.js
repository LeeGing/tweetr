// $(document).ready(function() {
// 	$('textarea').on('keyup', function () {

// 	};
// 	$('textarea').keyup();
// 	console.log("EVENT HANDLER WORKS");
// });

$( document ).ready(function() {
	var maxLength = 140;
	//This function will calculate the value of the text area.
	//It will change the counter to the maxLength - value.
	$('textarea').keyup(function() {
		var length = $(this).val().length;
		length = maxLength-length;
		$('.counter').text(length);
		// If the counter is 0 or less, the counter will turn red.
		if ( length <= 0 ){
			$('.counter').css('color', 'red');
		} else {
			$('.counter').css('color', 'black');
		}
	});
});

// function countChar() {
//  var len = $('textarea').val().length;
//  $('#counter').text(len + ' characters');
//  console.log("123")
// };



////
// $(document).ready(function() {

//  countChar();
//  $('textarea').change(countChar);
//  $('textarea').keyup(countChar);
// });


// ["#overlay","#,modal"].forEach(show);
// document.querySelector(#modal)



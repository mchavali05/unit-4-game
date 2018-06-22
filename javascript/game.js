//create four crystals
//each crystal should have a unique value (1,2,3,4), under/equal value 4
//We will have a number with starting value of 0, this number will be incremented by the random number associated with the crystal that was clicked.

var crystals = ["http://www.scienceclarified.com/photos/crystal-3107.jpg", "http://www.scienceclarified.com/photos/crystal-3107.jpg", "http://www.scienceclarified.com/photos/crystal-3107.jpg", "http://www.scienceclarified.com/photos/crystal-3107.jpg"];
var startingNumber = 19;
var goalNumber = 120;
var winNumber = 0;
var lossNumber = 0;
$('#starting-number').text(startingNumber);
$('#goal-number').text(goalNumber);
$('#win-number').text(winNumber);
$('#loss-number').text(lossNumber);


for(i=0; i<crystals.length; i++) {
	var crystal = $('<img>');
	crystal.attr('src', crystals[i]);
	crystal.addClass('crystal-button');
	crystal.attr('info', Math.ceil(Math.random() * 11));
	$('#crystals-container').append(crystal);

}

$('.crystal-button').on('click', function(){
	var number = parseInt($(this).attr('info'));
	console.log(number);
	startingNumber = startingNumber + number;
	console.log(startingNumber);
	$('#starting-number').text(startingNumber);
	$('#goal-number').text(goalNumber);
	if(startingNumber>goalNumber) {
		lossNumber++;
		console.log(lossNumber);
		$('#loss-number').text(lossNumber);
		setTimeout(function(){
			alert("you lost");
		}, 100)
		//comment
	}
	if(startingNumber==goalNumber) {
		winNumber++;
		console.log(winNumber);
		$('#win-number').text(winNumber);
		setTimeout(function(){
			alert("you won!");
		}, 100)
		
	}

}) 
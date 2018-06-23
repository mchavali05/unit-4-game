//create four crystals
//each crystal should have a unique value (1,2,3,4), under/equal value 4
//We will have a number with starting value of 0, this number will be incremented by the random number associated with the crystal that was clicked.

var crystals = ["http://www.scienceclarified.com/photos/crystal-3107.jpg", "http://www.scienceclarified.com/photos/crystal-3107.jpg", "http://www.scienceclarified.com/photos/crystal-3107.jpg", "http://www.scienceclarified.com/photos/crystal-3107.jpg"];
var startingNumber = 0;
//var goalNumber = 120;
var winNumber = 0;
var lossNumber = 0;
//var score = 0;

//$('#starting-number').text(startingNumber);
//$('#goal-number').text(goalNumber);
$('#win-number').text(winNumber);
$('#loss-number').text(lossNumber);
$('#score').text(startingNumber);


for(i=0; i<crystals.length; i++) {
	var crystal = $('<img>');
	crystal.attr('src', crystals[i]);
	crystal.addClass('crystal-button');
	crystal.attr('info', Math.ceil(Math.random() * 11));
	$('#crystals-container').append(crystal);

}

function randomIntFromInterval(min,max){
		return Math.floor(Math.random()*(max-min+1)+min);
		}
		
var randomNumber = randomIntFromInterval(19,120);
console.log(randomNumber);

// Function that resets the game.
	function resetGame() {
    // Make our current total number 0.
    startingNumber = 0;
    $('#score').text(startingNumber);
   
    // Generate a random target number and render it to the page.
    randomNumber = randomIntFromInterval(19,120);
	console.log(randomNumber);
	$('#rand-number').text(randomNumber);

  }

$('.crystal-button').on('click', function(){
	
	var number = parseInt($(this).attr('info'));
	console.log(number);
	startingNumber = startingNumber + number;
	console.log(startingNumber);
		 
	$('#starting-number').text(startingNumber);
	//$('#goal-number').text(goalNumber);
	$('#score').text(startingNumber);
	$('#rand-number').text(randomNumber);
  

	if(startingNumber>randomNumber) {
		lossNumber++;
		$('#won-or-lost').text('You Lost!!');
		console.log(lossNumber);
		$('#loss-number').text(lossNumber);
		resetGame();
		setTimeout(function(){
			alert("you lost");
		}, 100)
	

	}
	if(startingNumber==randomNumber) {
		winNumber++;
		$('#won-or-lost').text('You Won!!');
		console.log(winNumber);
		$('#win-number').text(winNumber);
		resetGame();
		setTimeout(function(){
			alert("you won!");
		}, 100)
		
	}	


}) 
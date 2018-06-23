//variables
var crystals = ["https://www.jewelrysupply.com/assets/images/HF6292b-swarovski-sunflower-hotfix-flat-back-rhinestone.jpg", "https://images-na.ssl-images-amazon.com/images/I/41gCbaVN7zL._SL500_AC_SS350_.jpg", "https://www.jewelrysupply.com/assets/images/RP6005b-swarovski-ruby-point-back-chaton.jpg", "http://images6.fanpop.com/image/photos/37300000/Emerald-stone-precious-stones-37310107-238-212.jpg"];
var startingNumber = 0;
var winNumber = 0;
var lossNumber = 0;

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
	startingNumber = startingNumber + number;
		 
	$('#starting-number').text(startingNumber);
	$('#score').text(startingNumber);
	$('#rand-number').text(randomNumber);
  

	if(startingNumber>randomNumber) {
		lossNumber++;
		$('#won-or-lost').text('You Lost!!');
		$('#loss-number').text(lossNumber);
		resetGame();
		setTimeout(function(){
			alert("you lost");
		}, 100)
	

	}
	if(startingNumber==randomNumber) {
		winNumber++;
		$('#won-or-lost').text('You Won!!');
		$('#win-number').text(winNumber);
		resetGame();
		setTimeout(function(){
			alert("you won!");
		}, 100)
		
	}	


}) 
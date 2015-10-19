$(function() { //document ready
	var breed = [ //declaring breeds array
		{ 
			name: "German Wirehaired Pointer",
			hairType: "curly",
			personalityType: "lazy",
			height: "tall",
			image: 'assets/pointer.jpg',
			counter: 0
		},{
			name: "Miniature Poodle",
			hairType: "curly",
			personalityType: "intellectual",
			height: "short",
			image: 'assets/miniPoodle.jpg',
			counter: 0
		},{
			name: "Afghan Hound",
			hairType: "straight",
			personalityType: "active",
			height: "tall",
			image: 'assets/afgan.jpg',
			counter: 0
		},{
			name: "Pug",
			hairType: "straight",
			personalityType: "joker",
			height: "short",
			image: 'assets/pug.jpg',
			counter: 0
		},{
			name: "Basset Hound",
			hairType: "straight",
			personalityType: "lazy",
			height: "short",
			image:'assets/bassettSad.jpg' ,
			counter: 0
		},{
			name: "Miniature Schnauzer",
			distinguishingType: "beard",
			hairType: "",
			personalityType: "",
			height: "",
			image: 'assets/miniatureSchnauzer.jpg',
			counter: 0
		},{
			name: "Weimaraner",
			hairType: "",
			personalityType: "",
			height: "",
			image: 'assets/dogBun.png',
			counter: 0
		},{
			name: "Boxer",
			hairType: "",
			personalityType: "",
			height: "",
			image: 'assets/boxer.jpg',
			counter: 0
		},
		{
			name: "Mexican Hairless",
			distinguishingType: "bald",
			hairType: "",
			personalityType: "",
			height: "",
			image: 'assets/mexicanHairless.jpg',
			counter: 0
		}
	]

	$('.send').on('click', function(event) { //when the send button is clicked on the form
		event.preventDefault(); //prevent default event from happening
		//four variables that store the user answer for each question
		var answer1 = $('input[name=hairType]:checked', 'form').val();
		var answer2 = $('input[name=personalityType]:checked', 'form').val();
		var answer3 = $('input[name=distinguishingType]:checked', 'form').val();
		var answer4 = $('input[name=height]:checked', 'form').val();
		//store all the answers in an object
		var userAnswer = {
			hairType: answer1,
			personalityType: answer2,
			distinguishingType: answer3,
			height: answer4
		}
		//if they select a distinguishing feature then they automatically get certain breed
		if (answer3 === 'beard') {
			$(".doppelganger").attr("src", "assets/miniatureSchnauzer.jpg");
			$('.breedName').html("Miniature Schnauzer");
		} else if (answer3 === 'manBun') {
			$(".doppelganger").attr("src", "assets/dogBun.png");
			$('.breedName').html("Weimaraner");
		} else if (answer3 === 'funkyTeeth') {
			$(".doppelganger").attr("src", "assets/boxer.jpg");
			$('.breedName').html("Boxer");
		} else if (answer3 === 'bald') {
			$(".doppelganger").attr("src", "assets/mexicanHairless.jpg");
			$('.breedName').html("Mexican Hairless");
		} else {
			//if they don't have distinguishing features then do this:
			for (var i = 0; i < breed.length; i++) {
				if (userAnswer.hairType === breed[i].hairType) {
					breed[i].counter += 1;
				}
				if (userAnswer.personalityType === breed[i].personalityType) {
					breed[i].counter += 1;
				}
				if (userAnswer.height === breed[i].height) {
					breed[i].counter += 1;
				}
			}; //for loop end

			function getWinner(breed) {
			   var max = {};
			   for (var i = 0; i < breed.length; i++) {
			      if (breed[i].counter > (max.counter || 0)) {
			      	max = breed[i];
			      }
			   }
			    return max;
			}

			var winner = getWinner(breed);

			$('.doppelganger').attr('src', winner.image);
			var winnerBreed = winner.name;
			$('.breedName').html(winnerBreed);
		}
	});

	$('.resetQuiz').on('click', function() {
		window.location.reload(true);
	});
}); // document ready closing
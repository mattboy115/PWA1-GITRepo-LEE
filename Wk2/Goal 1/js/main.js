//Name: Matthew Lee
//Date: 09/02/2015
//Assignment: Goal1: Assignment: Duel1

//Self Executing Function
(function(){

	console.log("Fight!!!");

	//Player Information [Name, damage, Max health]
	var playerOne = ["Kratos", 20, 100];
	var playerTwo = ["Kabal", 20, 100];

	//Start Round
	var round = 0;


	//Function for the process of what happens during each round.
	function fight() {
		//Announces Player Max health and round start.
		alert(playerOne[0] + ": " + playerOne[2] + " *START* " + playerTwo[0] + ": " + playerTwo[2]);
		//For loop for figuring actual random player damage.
		for (var i = 0; i < 10; i++) {
			var minDamage1 = playerOne[1] * .5;
			var minDamage2 = playerTwo[1] * .5;
			var f1 = Math.floor(Math.random() * (playerOne[1] - minDamage1) + minDamage1);
			var f2 = Math.floor(Math.random() * (playerTwo[1] - minDamage2) + minDamage2);

			//Damage subtracted
			playerOne[2]-=f1;
			playerTwo[2]-=f2;

			console.log(playerOne[0] + ": " + playerOne[2] + " " + playerTwo[0] + ": " + playerTwo[2]);

			//Triggers winnerCheck function.
			var result = winnerCheck();
            console.log(result);

            //If no winner move to next round
           if (result==="no winner") {
                round++;
                alert(playerOne[0]+": "+playerOne[2]+"  *ROUND "+round+" OVER"+"*  "+playerTwo[0]+": "+playerTwo[2]);

            } 

            //Else end program.
            else{
                alert(result);
                break;
            }

		};

	};

	//Function checks if either player has hit 0 health.
	function winnerCheck() {

		var result= "no winner";

		//Result for both
		if (playerOne[2] < 1 && playerTwo[2] < 1) {
			result = "You Both Die";
		}

		//Result for Kabal Dying
		else if(playerOne[2] < 1) {
			result = playerTwo[0] + " WINS!!!";
		}

		//Result for Kratos Dying
		else if (playerTwo[2] < 1) {
			result = playerOne[0] + " WINS!!!";
		}
		return result;
	
	};

	//Initiate fight
	fight();
		

})();

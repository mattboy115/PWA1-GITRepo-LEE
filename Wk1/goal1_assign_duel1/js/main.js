//Name: Matthew Lee
//Date: 09/02/2015
//Assignment: Goal1: Assignment: Duel1

//Self Executing Function
(function(){

	console.log("Fight!!!");

	//Player Names (I"m making them Kratos and Kabal because that is who is pictured on the page.)
	var playerOneName = "Kratos";
	var playerTwoName = "Kabal";

	//Player Damage
	var playerOneDamage = 20;
	var playerTwoDamage = 20;

	//Player health
	var playerOneHealth	= 100;
	var playerTwoHealth = 100;

	//Start Round
	var round = 0;


	//Function for the process of what happens during each round.
	function fight() {
		//Announces Player Max health and round start.
		alert(playerOneName + ":" + playerOneHealth + " *START* " + playerTwoName + ":" + playerTwoHealth);
		//For loop for figuring actual random player damage.
		for (var i = 0; i < 10; i++) {
			var minDamage1 = playerOneDamage * .5;
			var minDamage2 = playerTwoDamage * .5;
			var f1 = Math.floor(Math.random() * (playerOneDamage - minDamage1) + minDamage1);
			var f2 = Math.floor(Math.random() * (playerTwoDamage - minDamage2) + minDamage2);

			//Damage subtracted
			playerOneHealth-=f1;
			playerTwoHealth-=f2;

			console.log(playerOneName + ": " + playerOneHealth + " " + playerTwoName + ": " + playerTwoHealth);

			//Triggers winnerCheck function.
			var result = winnerCheck();
            console.log(result);

            //If no winner move to next round
            if (result === "no winner") {
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);
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

		var result="no winner :(";

		//Result for both
		if (playerOneHealth < 1 && playerTwoHealth < 1) {
			result = "You Both Die";
		}

		//Result for Kabal Dying
		else if(playerOneHealth < 1) {
			result = playerTwoName + " WINS!!!";
		}

		//Result for Kratos Dying
		else if (playerTwoHealth < 1) {
			result = playerOneName + " WINS!!!";
		}
		return result;
	
	};

	//Initiate fight
	fight();
		

})();

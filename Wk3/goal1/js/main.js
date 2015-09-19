//Name: Matthew Lee
//Date: 09/02/2015
//Assignment: Goal1: Assignment: Duel1

//Self Executing Function
(function(){

	console.log("Fight!!!");

	//Player Information [Name, damage, Max health]
	var players = {name:['Kabal', 'Kratos'], damage:[20, 20], health:[100, 100]};

	//Start Round
	var round = 0;


	//Function for the process of what happens during each round.
	document.getElementById("fight_btn").onclick = function fight(e) {
		e.preventDefault();
		//Announces Player Max health and round start.

		document.getElementById("kabal").innerHTML = (players.name[0] + ": " + players.health[0]);
		document.getElementById("center").innerHTML = ( " *START* " );
		document.getElementById("kratos").innerHTML = (players.name[1] + ": " + players.health[1]);
		//For loop for figuring actual random player damage.
		for (var i = 0; i < 10; i++) {
			var minDamage1 = players.damage[0] * .5;
			var minDamage2 = players.damage[1] * .5;
			var f1 = Math.floor(Math.random() * (players.damage[0] - minDamage1) + minDamage1);
			var f2 = Math.floor(Math.random() * (players.damage[1] - minDamage2) + minDamage2);

			//Damage subtracted
			players.health[0]-=f1;
			players.health[1]-=f2;

			console.log(players.name[0] + ": " + players.health[0] + " " + players.name[1] + ": " + players.health[1]);

			//Triggers winnerCheck function.
			var result = winnerCheck();
            console.log(result);

            //If no winner move to next round
           if (result==="no winner") {
                'fight_btn'.addEventListener("click", round++);
                document.getElementById("kabal").innerHTML = (players.name[0]+": "+players.health[0]);
                document.getElementById("center").innerHTML = ("*ROUND "+round+" OVER*");
                document.getElementById("kratos").innerHTML = (players.name[1]+": "+players.health[1]);

            } 

            //Else end program.
            else{
                document.getElementById("center").innerHTML = (result);
                document.getElementById("button_cont").innerHTML = "DONE!";
                break;
            }
		};
	};

	//Function checks if either player has hit 0 health.
	function winnerCheck() {

		var result= "no winner";

		//Result for both
		if (players.health[0] < 1 && players.health[1] < 1) {
			result = "You Both Die!";
		}

		//Result for Kabal Dying
		else if(players.health[0] < 1) {
			result = players.name[1] + " WINS!!!";
		}

		//Result for Kratos Dying
		else if (players.health[1] < 1) {
			result = players.name[0] + " WINS!!!";
		}
		return result;
	
	};

		

})();

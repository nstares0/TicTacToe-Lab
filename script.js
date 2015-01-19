window.addEventListener("load", function () {


				  var boxOne = document.getElementById("a1");
				  var boxTwo = document.getElementById("a2");
				  var boxThree = document.getElementById("a3");
				  var boxFour = document.getElementById("a4");
				  var boxFive = document.getElementById("a5");
				  var boxSix = document.getElementById("a6");
				  var boxSeven = document.getElementById("a7");
				  var boxEight = document.getElementById("a8");
				  var boxNine = document.getElementById("a9");



				  var boardMap = [
				  		   [boxOne.innerHTML,
				  		   boxTwo.innerHTML,
				  		   boxThree.innerHTML],

				  		   [boxFour.innerHTML,
				  		   boxFive.innerHTML,
				  		   boxSix.innerHTML],

				  		   [boxSeven.innerHTML,
				  		   boxEight.innerHTML,
				  		   boxNine.innerHTML]

				  ];



		var boxes = document.getElementsByClassName("square");
		for (var i = 0; i < boxes.length; i++) {
		 boxes[i].addEventListener("click", clickFunction);

		}

		var clicks = 0;
		

	
			
		

		function clickFunction(event) {

			clicks += 1;
			if (clicks % 2 === 0){
				event.target.innerHTML = "O";

				}
				

				else {
				event.target.innerHTML = "X";


				}
			
				event.target.style.backgroundColor = "yellow";
						
					if (boardMap[0][0] == "X" && boardMap[0][1] == "X" && boardMap[0][2] == "X" ) {
						console.log("h");
					}
				
				event.target.removeEventListener("click", clickFunction );
				

				
		}

		console.log(boardMap);

		


		function resetFunction (event) {
		for (var i = 0; i < boxes.length; i++) {
		 boxes[i].innerHTML = " ";
		 boxes[i].style.backgroundColor = "white";
		 boxes[i].addEventListener("click", clickFunction);

			}
		
		}

		var reset1 = document.getElementsByClassName("reset");
		reset1[0].addEventListener("click", resetFunction);


});
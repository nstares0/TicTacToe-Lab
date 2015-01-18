
window.addEventListener("load", function () {



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
				event.target.innerHTML = "X"

				;
				

				}
			
				event.target.style.backgroundColor = "yellow";
				event.target.removeEventListener("click", clickFunction );


		}





			



		function resetFunction (event) {
		for (var i = 0; i < boxes.length; i++) {
		 boxes[i].innerHTML = " ";
		 boxes[i].style.backgroundColor = "white";

		}
		
		}

		var reset1 = document.getElementsByClassName("reset");
		reset1[0].addEventListener("click", resetFunction);





});
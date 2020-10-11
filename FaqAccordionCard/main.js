let questionOne = document.getElementById("questionOne");
let questionTwo = document.getElementById("questionTwo");
let questionThree = document.getElementById("questionThree");
let questionFour = document.getElementById("questionFour");
let questionFive = document.getElementById("questionFive");

function expand(n) {
	switch (n) {
		case 1:
			questionOne.classList.toggle("show");
			document.getElementById("questionOneButton").classList.toggle("rotate");
			document.querySelector(".questionOneQ p").classList.toggle("bold");
			break;

		case 2:
			questionTwo.classList.toggle("show");
			document.getElementById("questionTwoButton").classList.toggle("rotate");
			document.querySelector(".questionTwoQ p").classList.toggle("bold");
			break;

		case 3:
			questionThree.classList.toggle("show");
			document.getElementById("questionThreeButton").classList.toggle("rotate");
			document.querySelector(".questionThreeQ p").classList.toggle("bold");
			break;

		case 4:
			questionFour.classList.toggle("show");
			document.getElementById("questionFourButton").classList.toggle("rotate");
			document.querySelector(".questionFourQ p").classList.toggle("bold");
			break;

		case 5:
			questionFive.classList.toggle("show");
			document.getElementById("questionFiveButton").classList.toggle("rotate");
			document.querySelector(".questionFiveQ p").classList.toggle("bold");
			break;

		default:
			break;
	}
}

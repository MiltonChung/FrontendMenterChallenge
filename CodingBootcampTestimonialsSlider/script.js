let tanya = document.getElementsByClassName("tanya");
let john = document.getElementsByClassName("john");
let toggle = false;

function switchSlide() {
	if (!toggle) {
		// Show John and hide Tanya
		tanya[0].classList.add("hide");
		tanya[1].classList.add("hide");
		john[0].classList.remove("hide");
		john[1].classList.remove("hide");
		toggle = true;
	} else {
		// Show Tanya and hide John
		tanya[0].classList.remove("hide");
		tanya[1].classList.remove("hide");
		john[0].classList.add("hide");
		john[1].classList.add("hide");
		toggle = false;
	}
}

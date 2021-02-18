const body = document.querySelector("body");
const toggle = document.querySelector(".toggle-control");

let toggleState = true;

toggle.addEventListener("click", e => {
	if (toggleState) {
		body.classList.toggle("dark-mode");
	}
	toggleState = !toggleState;
});

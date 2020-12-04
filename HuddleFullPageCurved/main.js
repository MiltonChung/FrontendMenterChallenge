const email = document.getElementById("email");
const emailSubmit = document.getElementById("emailSubmit");
const errorMsg = document.getElementById("emailError");

emailSubmit.addEventListener("click", (e) => {
	e.preventDefault();
	if (email.value) {
		errorMsg.classList.add("hide");
	} else {
		errorMsg.classList.remove("hide");
	}
});

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", validateForm);

function validateForm(e) {
	e.preventDefault();
	const userInput = document.getElementById("user-input").value;
	console.log(userInput);
	if (!ValidateEmail(userInput)) {
		emailForm.classList.add("error");
	} else {
		emailForm.classList.remove("error");
		emailForm.classList.add("success");
		document.getElementById("user-input").value = "";
		setTimeout(function () {
			emailForm.classList.remove("success");
		}, 2000);
	}
}

function ValidateEmail(userEmail) {
	const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	return userEmail.match(mailformat);
}

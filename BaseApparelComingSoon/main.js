const emailForm = document.getElementById("email-form");
const emailButton = document.getElementById("email-button");

emailButton.addEventListener("click", checkUserInput);

function checkUserInput(e) {
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

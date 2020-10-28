const emailForm = document.getElementById("emailForm");
const button = document.getElementById("button");

button.addEventListener("click", checkInput);

function checkInput(e) {
	e.preventDefault();
	const userInput = document.getElementById("userEmail").value;
	if (!ValidateEmail(userInput)) {
		emailForm.classList.add("error");
	} else {
		emailForm.classList.remove("error");
		emailForm.classList.add("success");
		document.getElementById("userEmail").value = "";
		setTimeout(function () {
			emailForm.classList.remove("success");
		}, 2000);
	}
}

function ValidateEmail(userEmail) {
	const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	return userEmail.match(mailformat);
}

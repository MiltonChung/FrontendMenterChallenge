const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

const rowFirstName = document.getElementById("rowFn");
const rowLastName = document.getElementById("rowLn");
const rowEmail = document.getElementById("rowEmail");
const rowPassword = document.getElementById("rowPw");

const form = document.getElementById("form");

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", validateForm);

let firstNameTracker = false,
	lastNameTracker = false,
	emailTracker = false,
	passwordTracker = false;

function validateForm(e) {
	e.preventDefault();
	const firstNameInput = firstName.value;
	if (firstNameInput == "" || firstNameInput.length === 0) {
		form.classList.add("error");
		rowFirstName.classList.add("showError");
		firstNameTracker = false;
	} else {
		rowFirstName.classList.remove("showError");
		firstNameTracker = true;
	}

	const lastNameInput = lastName.value;
	if (lastNameInput == "" || lastNameInput.length === 0) {
		form.classList.add("error");
		rowLastName.classList.add("showError");
		lastNameTracker = false;
	} else {
		rowLastName.classList.remove("showError");
		lastNameTracker = true;
	}

	const emailInput = email.value;
	if (!ValidateEmail(emailInput)) {
		form.classList.add("error");
		rowEmail.classList.add("showError");
		emailTracker = false;
	} else {
		rowEmail.classList.remove("showError");
		emailTracker = true;
	}

	const passwordInput = password.value;
	if (passwordInput == "" || passwordInput.length === 0) {
		form.classList.add("error");
		rowPassword.classList.add("showError");
		passwordTracker = false;
	} else {
		rowPassword.classList.remove("showError");
		passwordTracker = true;
	}

	checkIfSuccess();
}

function checkIfSuccess() {
	if (firstNameTracker && lastNameTracker && emailTracker && passwordTracker) {
		form.classList.remove("error");
		form.classList.add("success");
		firstName.value = "";
		lastName.value = "";
		email.value = "";
		password.value = "";
		setTimeout(() => {
			form.classList.remove("success");
		}, 2500);
	}
}

function ValidateEmail(userEmail) {
	const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	return userEmail.match(mailformat);
}

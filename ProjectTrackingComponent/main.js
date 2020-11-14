const hambIcon = document.getElementById("hamburgerIcon");
const closeIcon = document.getElementById("closeIcon");
const responsiveNavbar = document.getElementById("responsiveNavbar");

hambIcon.addEventListener("click", () => {
	responsiveNavbar.classList.toggle("show");
	hambIcon.classList.remove("show");
	hambIcon.classList.add("hide");
	closeIcon.classList.remove("hide");
	closeIcon.classList.add("show");
});

closeIcon.addEventListener("click", () => {
	responsiveNavbar.classList.toggle("show");
	hambIcon.classList.remove("hide");
	hambIcon.classList.add("show");
	closeIcon.classList.remove("show");
	closeIcon.classList.add("hide");
});

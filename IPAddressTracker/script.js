const displayIpAddress = document.querySelector("#ipAddress");
const displayLocation = document.querySelector("#location");
const displayTimezone = document.querySelector("#timezone");
const displayISP = document.querySelector("#isp");
const submitSearch = document.getElementById("search_form");
const map = document.getElementById("map");
const loadingDiv = document.querySelector(".loading");

// IP Geolocation API by IPify ========================================
// Docs: https://geo.ipify.org/docs
// Example: https://geo.ipify.org/api/v1?apiKey=at_4qMCbIQ94gKTv5J6AcTsZX35Brtba&ipAddress=8.8.8.8
const BASE_URL = "https://geo.ipify.org/api/v1?apiKey=";
const IP_GEOLOCATION_API = "at_4qMCbIQ94gKTv5J6AcTsZX35Brtba";
let LAT, LONG, MAP, MARKER;

window.onload = () => {
	map.classList.add("hide");
	loadingDiv.classList.remove("hide");

	fetch(`${BASE_URL}${IP_GEOLOCATION_API}`)
		.then(res => res.json())
		.then(data => {
			map.classList.remove("hide");
			loadingDiv.classList.add("hide");
			setHtmlInfo(data.ip, data.location, data.location.timezone, data.isp);
			setMap(data.location.lat, data.location.lng);
		});
};

submitSearch.addEventListener("submit", e => {
	e.preventDefault();
	const userInput = e.target[0].value;

	map.classList.add("hide");
	loadingDiv.classList.remove("hide");
	setHtmlInfoLoading();

	if (ValidateIPaddress(userInput)) {
		fetch(`${BASE_URL}${IP_GEOLOCATION_API}&ipAddress=${userInput}`)
			.then(res => res.json())
			.then(data => {
				map.classList.remove("hide");
				loadingDiv.classList.add("hide");
				setHtmlInfo(data.ip, data.location, data.location.timezone, data.isp);
				FlyToMap(data.location.lat, data.location.lng);
			})
			.catch(err => console.log(err));
	} else if (userInput) {
		fetch(`${BASE_URL}${IP_GEOLOCATION_API}&domain=${userInput}`)
			.then(res => res.json())
			.then(data => {
				map.classList.remove("hide");
				loadingDiv.classList.add("hide");
				setHtmlInfo(data.ip, data.location, data.location.timezone, data.isp);
				FlyToMap(data.location.lat, data.location.lng);
			})
			.catch(err => console.log(err));
	} else if (userInput === "") {
		alert("Please enter something");
	} else {
		alert("Please enter a valid IP address or domain");
	}
});

function setHtmlInfoLoading() {
	displayIpAddress.innerHTML = "Loading...";
	displayLocation.innerHTML = "Loading...";
	displayTimezone.innerHTML = "Loading...";
	displayISP.innerHTML = "Loading...";
}

function setHtmlInfo(ip, location, timezone, isp) {
	displayIpAddress.innerHTML = ip;
	displayLocation.innerHTML = `${location.city}, ${location.region} ${location.postalCode}`;
	displayTimezone.innerHTML = `UTC ${timezone}`;
	displayISP.innerHTML = isp;
}

function setMap(lat, long) {
	// Leaflet + Mapbox api calls =========================================
	// Docs: https://leafletjs.com/examples/quick-start/
	MAP = L.map("map").setView([lat, long], 13);

	L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
		attribution:
			'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: "mapbox/streets-v11",
		tileSize: 512,
		zoomOffset: -1,
		accessToken:
			"pk.eyJ1IjoiY3Jvc3NmZmlyZXgiLCJhIjoiY2tsbHBpd2JkMDFreTJvcDRlbjNseGc1dSJ9.a26lI9C3F4W49wSaehHoMA",
	}).addTo(MAP);

	MARKER = L.marker([lat, long]).addTo(MAP);
}

function FlyToMap(lat, long) {
	MAP.flyTo([lat, long], 13, {
		animate: true,
		duration: 0.8, // in seconds
	});

	MARKER.setLatLng([lat, long]);
}

function ValidateIPaddress(ipaddress) {
	if (
		/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
			ipaddress
		)
	) {
		return true;
	}
	return false;
}

function isValidHttpUrl(string) {
	let url;

	try {
		url = new URL(string);
		console.log(url);
	} catch (_) {
		return false;
	}

	return url.host;
}

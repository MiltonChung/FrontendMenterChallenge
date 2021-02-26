// Leaflet + Mapbox api calls =========================================
const mymap = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
	attribution:
		'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: "mapbox/streets-v11",
	tileSize: 512,
	zoomOffset: -1,
	accessToken:
		"pk.eyJ1IjoiY3Jvc3NmZmlyZXgiLCJhIjoiY2tsbHBpd2JkMDFreTJvcDRlbjNseGc1dSJ9.a26lI9C3F4W49wSaehHoMA",
}).addTo(mymap);

const marker = L.marker([51.5, -0.09]).addTo(mymap);

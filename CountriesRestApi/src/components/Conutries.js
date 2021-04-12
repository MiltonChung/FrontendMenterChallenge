import React, { useState, useEffect } from "react";
import Filter from "./Filter.js";
import { ALL_URL } from "../base_url.js";

const Conutries = () => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		fetch(ALL_URL)
			.then(res => res.json())
			.then(data => {
				setCountries(data.slice(0, 15));
				console.log(countries);
			});
	}, []);

	return (
		<main>
			<div className="main-container">
				<Filter />
				<h2>main</h2>
			</div>
		</main>
	);
};

export default Conutries;

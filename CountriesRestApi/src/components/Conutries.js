import React, { useState, useEffect } from "react";
import Filter from "./Filter.js";
import { ALL_URL } from "../base_url.js";
import { Link } from "react-router-dom";

const Conutries = () => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		fetch(ALL_URL)
			.then(res => res.json())
			.then(data => {
				setCountries(data);
			});
	}, []);

	return (
		<main className="main-container">
			<div className="content-container">
				<Filter />
				<div className="countries-container">
					{countries.map(item => {
						return (
							<Link to={`country/${item.name}`} className="country" key={item.name}>
								<img src={item.flag} alt={item.name} />
								<div className="country-details">
									<h3 className="country-title">{item.name}</h3>
									<p>
										<span>Population:</span> {item.population}
									</p>
									<p>
										<span>Region:</span> {item.region}
									</p>
									<p>
										<span>Capital:</span> {item.capital}
									</p>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</main>
	);
};

export default Conutries;

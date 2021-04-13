import React, { useEffect, useState } from "react";
import { NAME_URL, COUNTRY_CODE_URL } from "../base_url.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BorderingCountries = ({ country }) => {
	const [border, setBorder] = useState("");

	useEffect(() => {
		fetch(`${COUNTRY_CODE_URL}/${country}`)
			.then(res => res.json())
			.then(data => {
				setBorder(data);
			});
	}, [country]);

	return (
		<div className="border-button-container">
			<Link to={`/country/${border.name}`} className="border-country-button">
				{border.name}
			</Link>
		</div>
	);
};

const DetailedPage = props => {
	const [countryDetails, setCountryDetails] = useState([]);

	useEffect(() => {
		fetch(`${NAME_URL}/${props.match.params.country}?fullText=true`)
			.then(res => res.json())
			.then(data => {
				setCountryDetails(data);
			});
	}, [props.match.params.country]);

	return (
		<main className="main-container">
			<div className="content-container">
				<div className="back-button">
					<Link to="/">
						<FontAwesomeIcon icon={faArrowLeft} />
						Back
					</Link>
				</div>
				<div className="country-detail">
					<img src={countryDetails[0]?.flag} alt={countryDetails[0]?.name} />
					<div className="country-detail-content">
						<h2>{countryDetails[0]?.name}</h2>
						<div className="country-detail-stats">
							<div className="country-detail-stats-left">
								<p>
									<span className="bold">Native Name: </span>
									{countryDetails[0]?.nativeName}
								</p>
								<p>
									<span className="bold">Population: </span>
									{countryDetails[0]?.population.toLocaleString("en-US")}
								</p>
								<p>
									<span className="bold">Region: </span>
									{countryDetails[0]?.region}
								</p>
								<p>
									<span className="bold">Sub Region: </span>
									{countryDetails[0]?.subregion}
								</p>
								<p>
									<span className="bold">Capital: </span>
									{countryDetails[0]?.capital}
								</p>
							</div>

							<div className="country-detail-stats-right">
								<p>
									<span className="bold">Top Level Domain: </span>
									{countryDetails[0]?.topLevelDomain}
								</p>
								<p>
									<span className="bold">Currencies: </span>
									{countryDetails[0]?.currencies.map(item => item.name)}
								</p>
								<p>
									<span className="bold">Languages: </span>
									{countryDetails[0]?.languages.map((item, i, arr) => {
										if (arr.length - 1 === i) {
											return item.name;
										} else {
											return `${item.name}, `;
										}
									})}
								</p>
							</div>
						</div>

						<div className="country-detail-borders">
							<div className="bold border">Border Countries:</div>
							<div className="border-container">
								{console.log(countryDetails[0]?.borders)}
								{countryDetails[0]?.borders.length === 0 ? (
									<p>None</p>
								) : (
									countryDetails[0]?.borders.map(item => {
										return <BorderingCountries country={item} key={Math.random()} />;
									})
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default DetailedPage;

import React, { useEffect, useState } from "react";
import { NAME_URL } from "../base_url.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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
									{countryDetails[0]?.population}
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
									{countryDetails[0]?.languages.map(item => item.name)}
								</p>
							</div>
						</div>

						<div className="country-detail-borders">
							<p>
								<span className="bold">Border Countries:</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default DetailedPage;

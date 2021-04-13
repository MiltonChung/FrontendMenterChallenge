import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { ALL_URL, NAME_URL, REGION_URL } from "../base_url.js.js";

const Filter = ({ setCountries }) => {
	const [showMenu, setShowMenu] = useState(false);
	const [region, setRegion] = useState("");

	useEffect(() => {
		const pageClickEvent = e => {
			e.preventDefault();
			setShowMenu(false);
		};

		if (showMenu) {
			window.addEventListener("click", pageClickEvent);
		}

		return () => {
			window.removeEventListener("click", pageClickEvent);
		};
	}, [showMenu]);

	const handleShowMenu = e => {
		e.preventDefault();
		setShowMenu(!showMenu);
	};

	const handleSearch = e => {
		e.preventDefault();
		if (e.target.search.value === "") {
			handleReset(e);
			return;
		}
		fetch(`${NAME_URL}/${e.target.search.value}`)
			.then(res => res.json())
			.then(data => {
				setCountries(data);
			});
	};

	const handleRegion = (reg, e) => {
		e.preventDefault();
		fetch(`${REGION_URL}/${reg}`)
			.then(res => res.json())
			.then(data => {
				setCountries(data);
			});
		setRegion(reg);
	};

	const handleReset = e => {
		e.preventDefault();
		fetch(ALL_URL)
			.then(res => res.json())
			.then(data => {
				setCountries(data);
			});
		setRegion("All");
	};

	return (
		<form className="filter-form" onSubmit={handleSearch}>
			<label htmlFor="search" className="search-country">
				<FontAwesomeIcon icon={faSearch} />
				<input type="text" placeholder="Search for country..." id="search" name="search" />
			</label>
			<input type="submit" style={{ display: "none" }} />

			<div className="filter-dropdown-button" onClick={handleShowMenu}>
				<button>
					{region ? region : "Filter by Region"}
					<FontAwesomeIcon icon={faChevronDown} />
				</button>
				{showMenu ? (
					<ul className="region-dropdown-menu">
						<li>
							<button onClick={handleReset}>All</button>
						</li>
						<li>
							<button onClick={e => handleRegion("Africa", e)}>Africa</button>
						</li>
						<li>
							<button onClick={e => handleRegion("Americas", e)}>America</button>
						</li>
						<li>
							<button onClick={e => handleRegion("Asia", e)}>Asia</button>
						</li>
						<li>
							<button onClick={e => handleRegion("Europe", e)}>Europe</button>
						</li>
						<li>
							<button onClick={e => handleRegion("Oceania", e)}>Oceania</button>
						</li>
					</ul>
				) : (
					""
				)}
			</div>
		</form>
	);
};

export default Filter;

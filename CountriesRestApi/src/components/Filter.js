import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Filter = () => {
	const [showMenu, setShowMenu] = useState(false);

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

	return (
		<form className="filter-form">
			<label htmlFor="search" className="search-country">
				<FontAwesomeIcon icon={faSearch} />
				<input type="text" placeholder="Search for country..." id="search" name="search" />
			</label>

			<div className="filter-dropdown-button">
				<button onClick={handleShowMenu}>
					Filter by region
					<FontAwesomeIcon icon={faChevronDown} />
				</button>
				{showMenu ? (
					<div className="region-dropdown-menu">
						<button>Africa</button>
						<button>America</button>
						<button>Asia</button>
						<button>Europe</button>
						<button>Oceania</button>
					</div>
				) : (
					""
				)}
			</div>
		</form>
	);
};

export default Filter;

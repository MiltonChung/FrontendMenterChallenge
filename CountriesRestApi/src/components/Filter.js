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

			<div className="filter-dropdown-button" onClick={handleShowMenu}>
				<button>
					Filter by Region
					<FontAwesomeIcon icon={faChevronDown} />
				</button>
				{showMenu ? (
					<ul className="region-dropdown-menu">
						<li>
							<button>Africa</button>
						</li>
						<li>
							<button>America</button>
						</li>
						<li>
							<button>Asia</button>
						</li>
						<li>
							<button>Europe</button>
						</li>
						<li>
							<button>Oceania</button>
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

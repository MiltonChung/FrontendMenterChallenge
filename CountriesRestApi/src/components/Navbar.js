import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as farMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as fasMoon } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
	const DarkModeToggle = () => {
		setDarkMode(!darkMode);
	};

	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Where in the world?</Link>
				</li>
				<li>
					<button className="dark-mode" onClick={DarkModeToggle}>
						{darkMode ? <FontAwesomeIcon icon={farMoon} /> : <FontAwesomeIcon icon={fasMoon} />}
						Dark Mode
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

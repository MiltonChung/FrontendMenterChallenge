import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as farMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as fasMoon } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<h2>Where in the world?</h2>
				</li>
				<li>
					<button className="dark-mode">
						<FontAwesomeIcon icon={fasMoon} />
						Dark Mode
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

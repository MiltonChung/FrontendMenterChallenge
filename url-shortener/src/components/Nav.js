import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
	const [menu, setMenu] = useState(false);

	function toggleMenu() {
		setMenu(!menu);
	}

	return (
		<nav>
			<h2 className="brand">Shortly</h2>
			<button className="menu-button" onClick={toggleMenu}>
				<FontAwesomeIcon icon={faBars} />
			</button>
			<div className={menu ? "nav-links-m" : "nav-links"}>
				<ul className="nav-left">
					<li>
						<a href="/" className="link">
							Features
						</a>
					</li>
					<li>
						<a href="/" className="link">
							Pricing
						</a>
					</li>
					<li>
						<a href="/" className="link">
							Resources
						</a>
					</li>
				</ul>
				<div className="mobile-line"></div>
				<ul className="nav-right">
					<li>
						<a href="/" className="link">
							Login
						</a>
					</li>
					<li className="m-sign-up">
						<a href="/" className="link sign-up">
							Sign Up
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;

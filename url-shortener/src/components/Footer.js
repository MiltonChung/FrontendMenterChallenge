import React from "react";
import IconFacebook from "../images/icon-facebook.svg";
import IconInsta from "../images/icon-instagram.svg";
import IconTwitter from "../images/icon-twitter.svg";
import IconPinterest from "../images/icon-pinterest.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitter, faPinterest, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<footer className="footer-container">
			<div className="footer">
				<h2>Shortly</h2>
				<div className="empty"></div>
				<ul className="features">
					<p>Features</p>
					<li>
						<a href="/">Link Shortening</a>
					</li>
					<li>
						<a href="/">Branded Links</a>
					</li>
					<li>
						<a href="/">Analytics</a>
					</li>
				</ul>

				<ul className="resources">
					<p>Resources</p>
					<li>
						<a href="/">Blog</a>
					</li>
					<li>
						<a href="/">Developers</a>
					</li>
					<li>
						<a href="/">Support</a>
					</li>
				</ul>

				<ul className="company">
					<p>Company</p>
					<li>
						<a href="/">About</a>
					</li>
					<li>
						<a href="/">Our Team</a>
					</li>
					<li>
						<a href="/">Careers</a>
					</li>
					<li>
						<a href="/">Contact</a>
					</li>
				</ul>
				<div className="socials-container">
					<FontAwesomeIcon icon={faFacebookSquare} />
					<FontAwesomeIcon icon={faTwitter} />
					<FontAwesomeIcon icon={faPinterest} />
					<FontAwesomeIcon icon={faInstagram} />
				</div>
			</div>
		</footer>
	);
};

export default Footer;

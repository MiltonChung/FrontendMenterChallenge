import React from "react";
import Logo from "../images/logo.svg";

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
				<div className="socials-container"></div>
			</div>
		</footer>
	);
};

export default Footer;

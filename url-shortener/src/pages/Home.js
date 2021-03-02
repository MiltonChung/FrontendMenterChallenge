import React from "react";
import IllustrationWorking from "../images/illustration-working.svg";

// import IconFacebook from "../images/icon-facebook.svg";
// import IconInsta from "../images/icon-instagram.svg";
// import IconTwitter from "../images/icon-twitter.svg";
// import IconPinterest from "../images/icon-pinterest.svg";
// import IconBrand from "../images/icon-brand-recognition.svg";
// import IconRecords from "../images/icon-detailed-records.svg";
// import IconCustomizable from "../images/icon-fully-customizable.svg";

const Home = () => {
	return (
		<main>
			<section className="hero">
				<div className="hero-left">
					<h1 className="title">
						More than just <br /> shorter links
					</h1>
					<div className="subtitle">
						Build your brand's recognition and get detailed insights on how your links are performing
					</div>
					<a href="/">Get Started</a>
				</div>
				<div className="hero-right">
					<img src={IllustrationWorking} alt="working" />
				</div>
			</section>
		</main>
	);
};

export default Home;

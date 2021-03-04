import React from "react";
import IllustrationWorking from "../images/illustration-working.svg";

import UrlForm from "../components/UrlForm";
// import ShortenedUrl from "../components/ShortenedUrl";

import IconBrand from "../images/icon-brand-recognition.svg";
import IconRecords from "../images/icon-detailed-records.svg";
import IconCustomizable from "../images/icon-fully-customizable.svg";

const Home = () => {
	return (
		<main>
			<section className="hero">
				<div className="hero-left">
					<h1 className="title">More than just shorter links</h1>
					<div className="subtitle">
						Build your brand's recognition and get detailed insights on how your links are performing
					</div>
					<a href="/">Get Started</a>
				</div>
				<div className="hero-right">
					<img src={IllustrationWorking} alt="working" />
				</div>
			</section>

			<section className="stats-container">
				<UrlForm />

				<section className="statistics">
					<h2 className="title">Advanced Statistics</h2>
					<p className="subtitle">
						Track how your links are performing across the web with our advanced statistics dashboard
					</p>

					<div className="boxes">
						<div className="background-line"></div>
						<div className="box">
							<div className="icon-container">
								<img src={IconBrand} alt="brand icon" />
							</div>
							<h3>Brand Recognition</h3>
							<p>
								Boost your brand recognition with each click. Generic links don't mean a thing. Branded
								links help instil confidence in your content.
							</p>
						</div>

						<div className="box box-2">
							<div className="icon-container">
								<img src={IconRecords} alt="brand icon" />
							</div>
							<h3>Detailed Records</h3>
							<p>
								Gain insights into who is clicking your links. Knowing when and where people engage with
								your content helps inform better decisions.
							</p>
						</div>

						<div className="box box-3">
							<div className="icon-container">
								<img src={IconCustomizable} alt="brand icon" />
							</div>
							<h3>Fully Customizable</h3>
							<p>
								Improve brand awareness and content discoverability through customizable links,
								superchargin audience engagement.
							</p>
						</div>
					</div>
				</section>
			</section>

			<section className="boost-container">
				<div className="boost">
					<h2>Boost your links today</h2>
					<a href="/">Get Started</a>
				</div>
			</section>
		</main>
	);
};

export default Home;

import React, { useEffect } from "react";

import INFO from "../../data/user";

import "./styles/about.css";

const About = ({ refProps }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentDate = new Date();
	let currentYear = currentDate.getFullYear();
	const yearsOfExperience = currentYear - 2018;

	return (
		<React.Fragment>
			<div className="about-container" ref={refProps}>
				<div className="about-first-area">
					<div className="about-first-area-left-side">
						<div className="about-header">
							<h1 className="title about-title">
								{INFO.homepage.title} with {yearsOfExperience} years of
								experience
							</h1>
							<h2 id="about">About</h2>
						</div>

						<div className="subtitle about-subtitle">
							{INFO.homepage.description}
						</div>
						<div className="about-socials">
							<i class="devicon-react-original-wordmark colored"></i>
							<i class="devicon-nextjs-original-wordmark colored"></i>
							<i class="devicon-javascript-plain colored"></i>
							<i class="devicon-typescript-plain colored"></i>
							<i class="devicon-threejs-original-wordmark colored"></i>
							<i class="devicon-html5-plain-wordmark colored"></i>
							<i class="devicon-css3-plain-wordmark colored"></i>
							<i class="devicon-nodejs-plain-wordmark colored"></i>
							<i class="devicon-mongodb-plain-wordmark colored"></i>
							<i class="devicon-azuresqldatabase-plain colored"></i>
							<i class="devicon-python-plain-wordmark colored"></i>
							<i class="devicon-java-plain-wordmark colored"></i>
							<i class="devicon-amazonwebservices-plain-wordmark colored"></i>
						</div>
					</div>
					<div className="about-first-area-right-side">
						<div className="about-image-container">
							<div className="about-image-wrapper">
								<img src="portrait.jpg" alt="about" className="about-image" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;

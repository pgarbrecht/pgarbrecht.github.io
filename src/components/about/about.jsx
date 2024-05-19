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
			<div className="homepage-container" ref={refProps}>
				<div className="homepage-first-area">
					<div className="homepage-first-area-left-side">
						<div className="section-header" id="about">
							About
						</div>
						<div className="title homepage-title">
							{INFO.homepage.title} with {yearsOfExperience} years of experience
						</div>

						<div className="subtitle homepage-subtitle">
							{INFO.homepage.description}
						</div>
						<div className="homepage-socials">
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
					<div className="homepage-first-area-right-side">
						<div className="homepage-image-container">
							<div className="homepage-image-wrapper">
								<img
									src="portrait.jpg"
									alt="about"
									className="homepage-image"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;

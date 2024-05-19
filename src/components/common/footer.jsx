import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = (props) => {
	const {
		active,
		aboutRef,
		experienceRef,
		samplesRef,
		contactRef,
		scrollCallback,
	} = props;

	// Get the year dynamically for footer
	const date = new Date();
	const year = date.getFullYear();

	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li>
							{/* <Link to="/">Home</Link> */}
							<button
								className="footer-nav-link-item"
								onClick={() => scrollCallback(aboutRef)}
							>
								About
							</button>
						</li>
						<li>
							{/* <Link to="/about">About</Link> */}
							<button
								className="footer-nav-link-item"
								onClick={() => scrollCallback(experienceRef)}
							>
								Experience
							</button>
						</li>
						<li>
							{/* <Link to="/projects">Projects</Link> */}
							<button
								className="footer-nav-link-item"
								onClick={() => scrollCallback(samplesRef)}
							>
								Samples
							</button>
						</li>
						<li>
							{/* <Link to="/contact">Contact</Link> */}
							<button
								className="footer-nav-link-item"
								onClick={() => scrollCallback(contactRef)}
							>
								Contact
							</button>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">© {year} Phil Garbrecht</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;

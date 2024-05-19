import React from "react";
import Socials from "../about/socials";
import SEO from "../../data/seo";

import "./styles/contact.css";

const Contact = ({ refProps }) => {
	return (
		<React.Fragment>
			<div ref={refProps}>
				<div className="section-header" id="contact">
					Contact
				</div>
				<div className="content-wrapper">
					<div className="contact-container">
						<div className="subtitle contact-subtitle">
							Thank you for taking the time to view my portfolio and learn more
							about me. I would be happy to connect with you to chat more.
							Please feel welcome to reach out to me via one of the methods
							below.
						</div>
					</div>
					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;

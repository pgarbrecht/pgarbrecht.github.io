import React from "react";
import Socials from "../about/socials";

import "./styles/contact.css";

const Contact = ({ refProps }) => {
	return (
		<React.Fragment>
			<div ref={refProps}>
				<div className="contact-container">
					<div className="contact-text-container">
						<h2 id="contact">Contact</h2>
						<div>
							Thank you for taking the time to view my portfolio and learn more
							about me. I would be happy to connect with you to chat more.
							Please feel welcome to reach out to me.
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

import React from "react";

import "./styles/navBar.css";

const NavBar = (props) => {
	const {
		active,
		aboutRef,
		experienceRef,
		samplesRef,
		contactRef,
		scrollCallback,
	} = props;

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li>
								<button
									className={
										active === "about" ? "nav-item active" : "nav-item"
									}
									onClick={() => scrollCallback(aboutRef)}
								>
									About
								</button>
							</li>
							<li>
								<button
									className={
										active === "experience" ? "nav-item active" : "nav-item"
									}
									onClick={() => scrollCallback(experienceRef)}
								>
									Experience
								</button>
							</li>
							<li>
								<button
									className={
										active === "samples" ? "nav-item active" : "nav-item"
									}
									onClick={() => scrollCallback(samplesRef)}
								>
									Samples
								</button>
							</li>
							<li>
								<button
									className={
										active === "contact" ? "nav-item active" : "nav-item"
									}
									onClick={() => scrollCallback(contactRef)}
								>
									Contact
								</button>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;

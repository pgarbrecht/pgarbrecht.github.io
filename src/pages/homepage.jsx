import React, { useRef } from "react";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";
import Contact from "../components/contact/contact";
import About from "../components/about/about";

import "./styles/homepage.css";

const Homepage = () => {
	// refs
	const aboutRef = useRef(null);
	const experienceRef = useRef(null);
	const samplesRef = useRef(null);
	const contactRef = useRef(null);
	const scrollCallback = (ref) => {
		ref.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar
					aboutRef={aboutRef}
					experienceRef={experienceRef}
					samplesRef={samplesRef}
					contactRef={contactRef}
					scrollCallback={scrollCallback}
				/>
				<div className="content-wrapper">
					<div className="homepage-container">
						<About refProps={aboutRef} />
						<Works refProps={experienceRef} />
						<AllProjects refProps={samplesRef} />
						<Contact refProps={contactRef} />
						<div className="page-footer">
							<Footer
								aboutRef={aboutRef}
								experienceRef={experienceRef}
								samplesRef={samplesRef}
								contactRef={contactRef}
								scrollCallback={scrollCallback}
							/>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;

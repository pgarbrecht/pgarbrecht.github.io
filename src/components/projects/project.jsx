import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLink,
	faDesktop,
	faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { mediums, title, description, image, links, test } = props;
	const getIcon = (medium) => {
		switch (medium) {
			case "Desktop":
				return faDesktop;
			case "Mobile":
				return faMobileScreenButton;
			default:
				return faDesktop;
		}
	};

	return (
		<React.Fragment>
			<div className={`project ${title}`}>
				<div className="project-container">
					<div className="mediums-container">
						{mediums.map((medium, index) => (
							<div className="social-icon" key={index}>
								<FontAwesomeIcon
									icon={getIcon(medium)}
									className="social-icon"
								/>
							</div>
						))}
					</div>
					<div className="project-title">{title}</div>
					<div className="image-description-container">
						<div className="project-description">{description}</div>
						<img className="project-image" src={`/${image}`} />
					</div>
					<div className="links-container">
						{links.map((link, index) => (
							<a
								href={link.url}
								key={index}
								target="_blank"
								rel="noreferrer"
								className="project-link"
							>
								<div className="project-link-icon">
									<FontAwesomeIcon icon={faLink} />
								</div>
								<div className="project-link-text">{link.linkText}</div>
							</a>
						))}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Project;

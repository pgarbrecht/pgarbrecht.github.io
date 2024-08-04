import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/experience.css";

const Experience = ({ refProps }) => {
	return (
		<div className="experience" ref={refProps}>
			<h2 id="experience">Experience</h2>
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="experience-body">
						<div className="work">
							<img
								src="./sisu-logo.jpeg"
								alt="Sisu logo"
								className="work-image"
							/>
							<div className="work-text-fields">
								<div className="work-title">Sisu Robotics</div>
								<div className="work-subtitle">Web Software Developer</div>
								<div className="work-duration">January 2023 - Present</div>
							</div>
						</div>
						<div className="work-divider-line" />
						<div className="work">
							<img
								src="./family-gains-logo.jpeg"
								alt="Family Gains logo"
								className="work-image"
							/>
							<div className="work-text-fields">
								<div className="work-title">Family Gains</div>
								<div className="work-subtitle">
									Founder and Lead Web Engineer
								</div>
								<div className="work-duration">March 2020 - Present</div>
							</div>
						</div>
						<div className="work-divider-line" />
						<div className="work">
							<img
								src="./watermark-logo.jpeg"
								alt="Watermark logo"
								className="work-image"
							/>
							<div className="work-text-fields">
								<div className="work-title">Watermark Insights</div>
								<div className="work-subtitle">Senior Website Manager</div>
								<div className="work-duration">
									September 2021 - January 2023
								</div>
							</div>
						</div>
						<div className="work">
							<div className="work-image-placeholder" />
							<div className="work-text-fields">
								<div className="work-title"></div>
								<div className="work-subtitle">Website Manager</div>
								<div className="work-duration">
									September 2020 - September 2021
								</div>
							</div>
						</div>
						<div className="work-divider-line" />
						<div className="work">
							<img
								src="./khoros-logo.jpeg"
								alt="Khoro logo"
								className="work-image"
							/>
							<div className="work-text-fields">
								<div className="work-title">Khoros</div>
								<div className="work-subtitle">Website Program Manager</div>
								<div className="work-duration">
									January 2020 - September 2020
								</div>
							</div>
						</div>
						<div className="work">
							<div className="work-image-placeholder" />
							<div className="work-text-fields">
								<div className="work-title"></div>
								<div className="work-subtitle">Website Content Manager</div>
								<div className="work-duration">January 2019 - January 2020</div>
							</div>
						</div>
						<div className="work-divider-line" />
						<div className="work">
							<img src="./logo.png" alt="PG logo" className="work-image" />
							<div className="work-text-fields">
								<div className="work-title">Self-Employed</div>
								<div className="work-subtitle">Web Development Specialist</div>
								<div className="work-duration">
									September 2017 - January 2019
								</div>
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Experience;

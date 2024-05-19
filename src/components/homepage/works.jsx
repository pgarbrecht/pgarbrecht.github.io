import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = ({ refProps }) => {
	return (
		<div className="works" ref={refProps}>
			<div className="section-header" id="experience">
				Experience
			</div>
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./sisu-logo.jpeg"
								alt="Sisu logo"
								className="work-image"
							/>
							<div className="work-text-fields">
								<div className="work-title">Sisu</div>
								<div className="work-subtitle">
									Robotics Software Developer, Web & Mobile
								</div>
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
								<div className="work-subtitle">Founder & Lead Engineer</div>
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
								<div className="work-subtitle">
									Senior Digital Manager, Full Stack
								</div>
								<div className="work-duration">
									September 2021 - January 2023
								</div>
							</div>
						</div>
						<div className="work">
							<div className="work-image-placeholder" />
							<div className="work-text-fields">
								<div className="work-title"></div>
								<div className="work-subtitle">Digital Manager, Full Stack</div>
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
								<div className="work-subtitle">Program Manager, Front End</div>
								<div className="work-duration">
									January 2020 - September 2020
								</div>
							</div>
						</div>
						<div className="work">
							<div className="work-image-placeholder" />
							<div className="work-text-fields">
								<div className="work-title"></div>
								<div className="work-subtitle">Content Manager, Front End</div>
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

export default Works;

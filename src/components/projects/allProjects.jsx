import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = ({ refProps }) => {
	return (
		<div className="all-projects-container" ref={refProps}>
			<h2 id="samples">Samples</h2>
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						mediums={project.mediums}
						title={project.title}
						description={project.description}
						links={project.links}
						image={project.image}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;

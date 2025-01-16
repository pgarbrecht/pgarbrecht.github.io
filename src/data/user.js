const INFO = {
	main: {
		title: "Phil Garbrecht's Portfolio Website",
		name: "Phil Garbrecht",
		email: "philgarbrecht@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/pgarbrecht",
		linkedin: "https://www.linkedin.com/in/philgarbrecht/",
	},

	about: {
		title: "Phil Garbrecht, Software Engineer",
		description:
			"I am a software engineer with 6 years of development and leadership experience, known for solving business challenges. I have built scalable production applications and led development teams across varied tech stacks. I combine hands-on experience and formal education in software engineering and computer science to consistently deliver effective, reliable, and optimized solutions.",
	},

	projects: [
		{
			title: "Sisu Lab",
			description:
				"I serve as the lead web software engineer on the Sisu team for a React.js and Node.js based product. Sisu’s software allows filmmakers in Hollywood and around the world to easily program a robot arm with a camera on it to film complex shots. When I joined, the web app had been built by a team of web developers from an agency whom I replaced, saving the company $240,000 per year. I refactored the web app to improve code quality, performance, and responsiveness, and contributed key features including CRUD operations, a file management system, program settings, and integrations. In my free time, I also developed a cross-platform mobile app version of the product that the business took to market and achieved reduced support costs and increased user satisfaction. In between feature work, I solved critical bugs that saved the business many high value customers, set up robust unit and integration testing in a CI/CD pipeline to prevent bugs and increase release velocity, and increased documentation and standards on the team.",
			mediums: ["Desktop", "Mobile"],
			image: "sisu-screenshot.png",
			links: [
				{
					linkText: "View Product",
					url: "https://www.sisucinemarobotics.com/sisu-lab",
				},
			],
		},
		{
			title: "Watermark",
			description:
				"I served as the development lead for the business website at Watermark Insights and developed across the stack. Watermark Insights is a higher ed software company that provides software solutions for colleges and universities around the world to measure, report on, and improve student performance. I hired on the team and worked with direct reports and colleagues across the business to develop new features using Javascript, HTML, and CSS that made the website easier to maintain and update to achieve business objectives. Under my direction we made the website our #1 revenue source with high technical standards in all categories of web development including mobile responsiveness, accessibility, SEO, and more. Some of my favorite projects to work on for the site include redesigning the navigation menu, implementing the automated chatbot, updating the site for mobile responsiveness, migrating a newly acquired company’s website, engaging in a site redesign, and implementing reusable banners and promotional components for business campaigns. I was fortunate to receive Watermark’s Award of Excellence, given to the top 1% of employees each year, for my contributions to business success and helped lay a foundation for site reliability and performance with AWS that led to the team’s continued success.",
			mediums: ["Desktop"],
			image: "watermark-screenshot.png",
			links: [
				{
					linkText: "View Site",
					url: "https://www.watermarkinsights.com/",
				},
			],
		},
		{
			title: "Khoros",
			description:
				"I served as a development team member on the website team at Khoros. Khoros is a digital communications software company that provides solutions to large enterprise brands for social media management, online marketing, online communities, and customer support. I worked with colleagues across the business to redesign and optimize the website for technical and revenue results, with a focus on SEO. I utilized Javascript, HTML, and CSS best practices to correct bugs and improve the website’s performance, structure, and design so that it ranked better in search engines, bringing in more business leads. I also led the project to build the resources section of the website, which is one of the most important areas of the website to attract and convert leads for the business. This project involved a mass migration of content from acquired company websites and a strong focus on discoverability of content, with the implementation of multiple filter types. Through my leadership, we finished the project in half of the time estimated. Within one year of the project launch, the business had a 10X increase in monthly website leads, and went on to have continued expansion and success with the resources section.",
			mediums: ["Desktop"],
			image: "khoros-screenshot.png",
			links: [
				{
					linkText: "View Site",
					url: "https://khoros.com/",
				},
				// {
				// 	linkText: "Extra sample",
				// 	url: "https://google.com/",
				// },
			],
		},
	],
};

export default INFO;

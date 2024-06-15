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

	homepage: {
		title: `Phil Garbrecht, Senior Web and Mobile Software Engineer`,
		description:
			"I am a senior software engineer who loves solving problems and making software to help people. I began my career in web development and have led several teams in web and mobile over the years. I have enhanced my hands-on experience with formal education in software engineering & computer science to become a well-rounded engineer.",
	},

	about: {
		title: "About Me",
		description:
			"I am a software engineer who loves solving problems and making software to help people. I fell in love with coding by working in web development and have since worked in web and mobile. I have enhanced my hands-on development experience with formal education in software engineering & computer science to become a well-rounded engineer.",
	},

	projects: [
		{
			title: "Sisu Lab",
			description:
				"I serve as the lead front end and mobile software engineer on the Sisu team. Sisu Lab is software that allows filmmakers in Hollywood and around the world to easily program a robot arm with a camera on it to film complex shots. When I joined, the web app had been built by a team of front end developers from an agency whom I replaced, saving the company $240,000 per year. The React.js web app was originally built to be run locally and was designed for one specific tablet, browser, and operating system. I refactored the web app significantly so it could work on multiple devices, browsers, and operating systems. I implemented unit testing, React best practices, and many features in the web app including 3D robot visualization, a file management system, user settings, and more. In my free time, I developed a React Native mobile app to connect to the locally run web app over mobile hotspot so that customers could easily use the software from other tablets, including the iPad, and get answers to common questions using the app. The business took my idea to market and saw reduction in support costs and increased user satisfaction. I also solved many critical bugs that saved the business from losing valuable customers and increased documentation and standards on the team.",
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
			title: "Family Gains",
			description:
				"I am the founder of Family Gains and serve as the lead engineer for our business website and software products. Family Gains is a children’s education company that provides resources to help parents raise their kids from early age to adulthood. The business began as an online store that sold at-home learning activity kits and games. I architected the website and built the infrastructure using React.js, Tailwind, Node.js, MongoDB, and Stripe integration for checkout. An admin dashboard was built to allow broader team members to log in and easily add or edit products. The online store helped achieve 25% YoY revenue increase and it remains in use on the website while the business is in the process of expanding to software products. My current focus is on building out the learning subscription app which will be available as a React.js web app and React Native mobile app. This app allows kids to do many learning activities that change as they age, and allows parents to customize what subjects their kids focus on learning. There are also plans to develop an online, interactive tutoring service using similar 3D functionality as in the app, along with media.",
			mediums: ["Desktop", "Mobile"],
			image: "family-gains-screenshot.png",
			links: [
				{
					linkText: "View Site",
					url: "https://www.familygains.com/",
				},
			],
		},
		{
			title: "Watermark Insights",
			description:
				"I served as the team lead for the business website at Watermark Insights and contributed across the stack. Watermark Insights is a higher ed software company that provides software solutions for colleges and universities around the world to measure, report on, and improve student performance. I hired on the team and worked with direct reports and colleagues across the business to develop new features using Javascript, HTML, and CSS that made the website easier to maintain and update to achieve business objectives. Under my direction we made the website our #1 revenue source with high technical standards in all categories of web development including mobile responsiveness, accessibility, SEO, and more. Some of my favorite projects to work on for the site include redesigning the navigation menu, implementing the automated chatbot, updating the site for mobile responsiveness, migrating a newly acquired company’s website, engaging in a site redesign, and implementing reusable banners and promotional components for business campaigns. I was fortunate to receive Watermark’s Award of Excellence, given to the top 1% of employees each year, for my contributions to business success and helped lay a foundation for site reliability and performance with AWS that led to the team’s continued success.",
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
				"I served as a team member and project lead on the website team at Khoros. Khoros is a digital communications software company that provides solutions to large enterprise brands for social media management, online marketing, online communities, and customer support. I worked with colleagues across the business to redesign and optimize the website for technical and revenue results, with a focus on SEO. I utilized Javascript, HTML, and CSS best practices to correct bugs and improve the website’s performance, structure, and design so that it ranked better in search engines, bringing in more business leads. I also led the project to build the resources section of the website, which is one of the most important areas of the website to attract and convert leads for the business. This project involved a mass migration of content from acquired company websites and a strong focus on discoverability of content, with the implementation of multiple filter types. Through my leadership, we finished the project in half of the time estimated. Within one year of the project launch, the business had a 10X increase in monthly website leads, and went on to have continued expansion and success with the resources section.",
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

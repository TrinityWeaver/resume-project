import React from "react";

const ServiceContent = [
	{
		icon: "icon-cloud",
		title: "Cloud Engineering",
		descriptions: `As a Cloud engineer, I build and maintain cloud infrastructure. In addition, 
		I develop, deploy, and debug cloud-based applications with an emphasis on automation, 
		orchestration and integration. I also monitor and administer cloud systems, all related 
		services and platforms to integrate security as a shared responsibility throughout the 
		entire IT lifecycle.`,
		delayAnimation: "",
	},
	{
		icon: "icon-desktop",
		title: "DevOps Engineering",
		descriptions: `As a DevOps engineer, I introduce processes, tools, 
		and methodologies to balance needs throughout the software development 
		life cycle, from coding and deployment to maintenance and updates. 
		I automate a chunk of internal processes and ensure the security of 
		the software in the system.
		I also manage CI/CD pipelines. Automated pipelines remove manual errors, 
		provide standardized feedback loops to developers, and enable fast 
		product iterations in our software delivery process.`,
		delayAnimation: "200",
	},
	{
		icon: "icon-browser",
		title: "Python Development",
		descriptions: `I design, code, build APIs ( Flask, Django ), and 
		deploy development projects in Python, mainly in AWS Cloud. I 
		also work on debugging those same projects to ensure they 
		function as intended. As a python developer, I work closely 
		with other teams, including data collection and analytics, to 
		help answer questions and provide insight.`,
		delayAnimation: "400",
	},
];
export default function Service() {
	return (
		<>
			<div className="row">
				{ServiceContent.map((val, i) => (
					<div
						className="col-md-6 col-lg-4 my-3"
						key={i}
						data-aos="fade-right"
						data-aos-duration="1200"
						data-aos-delay={val.delayAnimation}
					>
						<div className="feature-box-01">
							<div className="icon">
								<i className={`icon ${val.icon}`}></i>
							</div>
							<div className="feature-content">
								<h5>{val.title}</h5>
								<p>{val.descriptions}</p>
							</div>
						</div>
						{/* End .feature-box-01 */}
					</div>
				))}
			</div>
		</>
	);
}

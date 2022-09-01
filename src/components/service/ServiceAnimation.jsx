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
		title: "Web Development",
		descriptions: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
		delayAnimation: "200",
	},
	{
		icon: "icon-browser",
		title: "Seo Marketing",
		descriptions: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
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

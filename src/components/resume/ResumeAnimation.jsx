import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
	{
		jobPosition: `Cloud/DevOps Engineer`,
		jobType: `ZAVA | Remote`,
		jobDuration: `Jan 2022 - Present`,
		timeDuraton: `Full Time`,
		compnayName: "ZAVA",
		jobDescription: `Building and implementing a robust, persistent, and auto-healing CI/CD Jenkins Pipeline in AWS Cloud in an automated manner using 
		Terraform and Ansible. This involves maintaining, configuring, and troubleshooting CI/CD pipeline issues, as well as developing various automated 
		solutions for business logic. These solutions leverage AWS services such as Cognito, Lambda, API Gateway, RDS, DynamoDB, and more, using programming 
		languages like Python and JavaScript among other technologies.
			
		In terms of infrastructure management, I spearheaded a significant modernization of our Ansible approach. Previously, each server acted as an Ansible controller, 
		downloading configurations from S3 buckets to configure itself. I transitioned this to a centralized Ansible controller model, which streamlined the process, 
		ensured consistent synchronization across servers, and aligned with modern best practices in infrastructure as code and configuration management.
		
		Additionally, I developed a solution for a BI tool by implementing Lightdash, an application integrated into our ECS Fargate service. This implementation 
		facilitated effective communication between dbt Cloud and our data warehouse, Redshift. The integration of Lightdash into our architecture enhanced our BI capabilities, 
		allowing for more sophisticated data analysis and visualization, and improving data-driven decision-making processes.`,
		delayAnimation: "",
	},
	{
		jobPosition: `IT Operations Engineer`,
		jobType: `ZAVA | Remote`,
		jobDuration: `Aug 2019 - Dec 2021`,
		timeDuraton: `Full Time`,
		compnayName: "ZAVA",
		jobDescription: `Cyber Essentials Plus Company-wide certification gained.
    Creating and implementing various solutions for business logic via Jamf Pro.
    Network Debugging.
    As a Senior IT Ops Engineer, I have provided 3rd Line Tech Support across the whole organisation, including maintaining networking hardware and software and performing other technical support duties.
    Integration OneLogin as a solution for identity and access management and SSO widely in organisation.
    Implementing Automations around Google Workspace, OneLogin and many more.
    Enabling automated onboarding and offboarding process, for example, implementing automatic device enrollment and automatic encryption via Jamf.`,
		delayAnimation: "100",
	},
];

const educatonContent = [
	{
		passingYear: "May 2022 / Dec 2022",
		degreeTitle: "AWS Certified Developer/SysOps - Associate",
		instituteName: "Amazon Web Services Training and Certification",
	},
	{
		passingYear: "May 2021",
		degreeTitle: "Jamf Certified Expert",
		instituteName: "Granted by Jamf",
	},
	{
		passingYear: "December 2020",
		degreeTitle: "PCEP - Certified Entry-Level Python Programmer",
		instituteName: "OpenEDG Institute",
	},
];

const Resume = () => {
	return (
		<>
			<section id="resume" className="section">
				<div className="container">
					<div className="title">
						<h3>Experience.</h3>
					</div>
					{/* End title */}
					<div className="resume-box">
						{resumeContent.map((val, i) => (
							<div
								className="resume-row"
								key={i}
								data-aos="fade-up"
								data-aos-duration="1200"
								data-aos-delay={val.delayAnimation}
							>
								<div className="row">
									<div className="col-md-4 col-xl-3">
										<div className="rb-left">
											<h6>{val.jobPosition}</h6>
											<label>{val.jobType}</label>
											<p>{val.jobDuration}</p>
											<div className="rb-time">{val.timeDuraton}</div>
										</div>
									</div>
									<div className="col-md-8 col-xl-9">
										<div className="rb-right">
											<h6>{val.compnayName}</h6>
											<p>{val.jobDescription}</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* separated */}
					<div
						className="separated"
						style={{
							backgroundImage: `url(${
								process.env.PUBLIC_URL + "img/border-dark.png"
							})`,
						}}
					></div>
					{/* End separated */}

					<div className="title">
						<h3>Skills</h3>{" "}
					</div>

					<div className="row align-items-center">
						<div
							className="col-lg-4 m-15px-tb"
							data-aos="fade-up"
							data-aos-duration="1200"
						>
							<ul className="aducation-box">
								{educatonContent.map((val, i) => (
									<li key={i}>
										<span>{val.passingYear}</span>
										<h6>{val.degreeTitle} </h6>
										<p>{val.instituteName}</p>{" "}
									</li>
								))}
							</ul>
						</div>
						{/* End .col */}

						<div
							className="col-lg-7 ml-auto m-15px-tb"
							data-aos="fade-up"
							data-aos-duration="1200"
							data-aos-delay="200"
						>
							<Skills />
						</div>
						{/* End .col */}
					</div>
				</div>
			</section>
		</>
	);
};

export default Resume;

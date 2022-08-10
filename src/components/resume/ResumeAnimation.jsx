import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
	{
		jobPosition: `Junior Cloud Engineer`,
		jobType: `ZAVA | Remote`,
		jobDuration: `Jan 2022 - Present`,
		timeDuraton: `Full Time`,
		compnayName: "ZAVA",
		jobDescription: `Build and implement Available, Persistent and auto-healing CI/CD Jenkins Pipeline in AWS Cloud in an automated fashion using Terraform and Ansible and maintaining, configuring and troubleshooting CI/CD Pipeline issues.
    Build various automated solutions for business logic involving AWS ( Cognito, Lambda, API Gateway, RDS, DynamoDB and many more ), different programming languages ( Python, JavaScript ) and other technologies.
    Implementation / Creating IT Op's Portal ( Static Web Applications which enables access to a couple of company services) using various technologies: JavaScript, Python, React, CloudFront, AWS WAF, AWS Lambda, AWS API - Gateway, AWS Cognito etc.`,
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
		passingYear: "May 2022",
		degreeTitle: "AWS Certified Developer - Associate",
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
						<h3>Certifications & Skills</h3>{" "}
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

import React from "react";
import Social from "../Social";
import Testimonials from "../testimonial/TestimonialAnimation";
import Services from "../service/ServiceAnimation";
import Awards from "../award/AwardsAnimation";

const About = () => {
	return (
		<>
			<section id="about" className="section theme-light dark-bg">
				<div className="container">
					<div className="row align-items-center justify-content-center">
						<div
							className="col-md-6 col-lg-4"
							data-aos="fade-up"
							data-aos-duration="1200"
						>
							<div className="about-me">
								<div className="img">
									<div className="img-in">
										<img src="img/about/_8240368.jpg" alt="about" />
									</div>

									<Social />

									{/* End social icon */}
								</div>
								{/* End img */}
								<div className="info">
									<p>Cloud Engineer / Kubernetes Engineer</p>
									<h3>Sebastian Marynicz</h3>
								</div>
								{/* End info */}
							</div>
							{/* End about-me */}
						</div>
						{/* End col */}

						<div
							className="col-lg-7 ml-auto"
							data-aos="fade-up"
							data-aos-duration="1200"
							data-aos-delay="200"
						>
							<div className="about-info">
								<div className="title">
									<h3>Biography</h3>
								</div>

								<div className="about-text">
									<p>
										I am a passionate DevOps professional with expertise in Linux systems, cloud computing, and Kubernetes. My recent accomplishments include leading the migration of the ELK Stack to AWS EKS, creating a CI/CD pipeline for the ECK stack, and designing a serverless log ingestion solution using AWS Lambda, API Gateway, and Logstash, improving scalability and efficiency.
									</p>
									<p>
										I have enhanced infrastructure security and automation by implementing Terraform pre-checks with TFSec and developing a Terraform module to automate AWS CloudWatch alarms with Microsoft Teams integration, improving monitoring and incident response.
									</p>									
									<p>
										Previously, I built cost-effective solutions and automations, including a highly available Jenkins pipeline in AWS with persistent memory, streamlining CI/CD processes. Certified in AWS Developer, SysOps Administrator Associate, and Kubernetes (CKA), I am driven by a passion for learning and applying new technologies to deliver scalable and innovative solutions.
									</p>
								</div>
								<div className="info-list">
									<div className="row">
										<div className="col-sm-6">
											<ul>
												<li>
													<label>Name: </label>
													<span>Sebastian Marynicz</span>
												</li>
												<li>
													<label>Birthday: </label>
													<span>5th March 1985</span>
												</li>
												<li>
													<label>Age: </label>
													<span>39 years</span>
												</li>
												<li>
													<label>Address: </label>
													<span>London</span>
												</li>
											</ul>
										</div>
										<div className="col-sm-6">
											<ul>
												<li>
													<label>Phone: </label>
													<span>(+44) 20 3467 9604</span>
												</li>
												<li>
													<label>Email: </label>
													<span>contact@sebastianmarynicz.co.uk</span>
												</li>
												<li>
													<label>Discord: </label>
													<span>Trinity Weaver#3077</span>
												</li>
												<li>
													<label>Freelance: </label>
													<span>Available</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* End col */}
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
						<h3>What I do?</h3>
					</div>

					<Services />

					{/* End .row */}

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
						<h3>Certifications.</h3>
					</div>

					<Awards />
					{/* End Awards */}

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
						<h3>Testimonials.</h3>
					</div>

					<Testimonials />
					{/* End Testimonaial */}
				</div>
			</section>
		</>
	);
};

export default About;

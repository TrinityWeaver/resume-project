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
									<p>Cloud Engineer</p>
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
										In my current role, I was exposed to many Programing
										Languages, like Python, and React JS, bash scripting. I am
										passionate about new technologies and Linux Systems, Cloud,
										and AWS. I am always keen to learn new technologies and
										skills. As proof of my knowledge, I recently obtained AWS
										Developer Associate Certification, which involved a wide
										range of skills related to AWS Cloud, to achieve
										certification.
									</p>
									<p>
										I have built fantastic automations and provided solutions
										involving cloud, Jenkins, various programming languages etc.
										I was making all processes a hand-free experience and
										removing possibilities of human errors making these
										solutions cost-effective. In my current role, I did enable
										for one of the teams a CI/CD Pipeline by building Super
										Available Jenkins Pipeline with persistent memory in AWS. In
										this solution, I implemented a Jenkins Master as an
										auto-healing and cost-effective part of your continuous
										integration and deployment system. This is just one example
										of my projects.
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
													<span>37 years</span>
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

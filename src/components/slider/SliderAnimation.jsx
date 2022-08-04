import React from "react";
import TextLoop from "react-text-loop";

const conctInfo = {
	phone: "+44 793-665-7257",
	email: " contact@sebastianmarynicz.co.uk",
};

const sliderContent = {
	name: "Sebastian Marynicz",
	designation: "Cloud / DevOps Engineer",
	description: `Results-driven and collaborative IT Operations engineer offering 3+ years of experience in building automated solutions, python
  coding and shell scripting, server management and hardware troubleshooting. In possession of exceptional attention to detail, the
  ability to think critically, residence, an insatiable thirst for knowledge, and an infectiously positive attitude. On the path to becoming
  certified AWS Certified Developer - Associate. I am looking for Junior roles in DevOps Engineering and Cloud Engineering for further
  development in my IT career..`,
	btnText: " Donwload CV",
};

const Slider = () => {
	return (
		<>
			{/*  Home Banner */}
			<section id="home" className="home-banner">
				<div className="hb-top-fixed d-flex">
					<div className="hb-info">
						<a href="tel:+04 6545-9535-6515">{conctInfo.phone}</a>
						<a href="mailto:contact@sebastianmarynicz.co.uk">
							{conctInfo.email}
						</a>
					</div>
					<div className="hb-lang">
						<ul className="nav">
							<li className="active">
								<a href="#">EN</a>
							</li>
						</ul>
					</div>
				</div>
				{/* End hp-top-fixed */}

				<div className="container">
					<div className="row full-screen align-items-center">
						<div className="col-lg-7">
							<div className="type-box">
								<h6 data-aos="fade-up" data-aos-duration="1200">
									Hello, My name is
								</h6>
								<h1
									className="font-alt"
									data-aos="fade-up"
									data-aos-duration="1200"
									data-aos-delay="100"
								>
									{sliderContent.name}
								</h1>
								<div
									data-aos="fade-up"
									data-aos-duration="1200"
									data-aos-delay="200"
								>
									<TextLoop>
										<p className="loop-text lead">
											AWS Certified Developer Associate
										</p>
										<p className="loop-text lead"> Cloud Engineer</p>
										<p className="loop-text lead"> DevOps Engineer</p>
									</TextLoop>
								</div>

								<p
									className="desc"
									data-aos="fade-up"
									data-aos-duration="1200"
									data-aos-delay="300"
								>
									{sliderContent.description}
								</p>
								<div
									className="mt-4"
									data-aos="fade-up"
									data-aos-duration="1200"
									data-aos-delay="400"
								>
									<a
										className="px-btn px-btn-white"
										href="img/resume.png"
										download
									>
										{sliderContent.btnText}
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* End Container*/}
				<div
					className="hb-me"
					style={{
						backgroundImage: `url(${
							process.env.PUBLIC_URL + "img/slider/home-banner.png"
						})`,
					}}
				></div>
			</section>

			{/* End Home Banner  */}
		</>
	);
};

export default Slider;

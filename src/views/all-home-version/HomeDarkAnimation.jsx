import React from "react";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/SliderAnimation";
import About from "../../components/about/AboutAnimation";
import Resume from "../../components/resume/ResumeAnimation";
import Portfolio from "../../components/portfolio/PortfolioAnimation";
import Blog from "../../components/blog/BlogAnimation";
import Contact from "../../components/contact/Contact";
import ContactInfo from "../../components/contact/ContactInfo";
import Map from "../../components/contact/Map";
import Footer from "../../components/footer/FooterAnimation";
import useDocumentTitle from "../../components/useDocumentTitle";
import CookieConsent from "react-cookie-consent";
import Cookies from "js-cookie";
import ReactGA from "react-ga4";
import { useState } from "react";
import { hotjar } from "react-hotjar";

const HomeOne = () => {
	useDocumentTitle("Sebastian's Resume");
	const [cookieConsent, setCookieConsent] = useState(false);
	const [cookieConsentAccepted, setCookieConsentAccepted] = useState(false);

	if (
		Cookies.get("ConsentCookieResumeProject") !== undefined ||
		cookieConsent === true
	) {
		ReactGA.initialize("G-K00B3WGTR2");
		ReactGA.send("pageview");
		hotjar.initialize(3108880, 6);
	}

	if (
		Cookies.get("ConsentCookieResumeProject") !== undefined &&
		cookieConsentAccepted === false
	) {
		setCookieConsentAccepted(true);
	}

	const HandleAcceptConsent = () => {
		setCookieConsent(true);
	};

	return (
		<div className="main-left theme-dark">
			<Header />
			{/* End Header Section */}

			<Slider cookieConsent={cookieConsent} />
			{/* End Slider Section */}

			<About />
			{/* End About Section */}

			<Resume />
			{/* End Resume Section */}

			<section id="work" className="section theme-light dark-bg">
				<div className="container">
					<div className="title">
						<h3>My Portfolio.</h3>
					</div>
					<Portfolio />
				</div>
			</section>
			{/* End Portfolio Section */}

			<section id="blog" className="section">
				<div className="container">
					<div className="title">
						<h3>Latest Blog.</h3>
					</div>
					<Blog />
				</div>
			</section>
			{/* End Portfolio Section */}

			<section id="contactus" className="section theme-light dark-bg">
				<div className="container">
					<div className="row">
						<div
							className="col-lg-5 col-xl-4 m-15px-tb"
							data-aos="fade-right"
							data-aos-duration="1200"
						>
							<ContactInfo />
						</div>
						{/* End Contact info */}

						<div
							className="col-lg-7 ml-auto m-15px-tb"
							data-aos="fade-right"
							data-aos-duration="1200"
							data-aos-delay="200"
						>
							<div className="contact-form">
								<h4>Say Something</h4>
								<Contact />
							</div>
						</div>
						{/* End contact form */}

						<div
							className="col-12"
							data-aos="fade-up"
							data-aos-duration="1200"
							data-aos-delay="300"
						>
							<Map />
							{/* End google-map */}
						</div>
						{/* End Col */}
					</div>
				</div>
			</section>
			{/* End Contact Section */}

			<footer className="footer white">
				<div className="container">
					<Footer />
				</div>
			</footer>
			{/* End Contact Section */}
			<CookieConsent
				location="bottom"
				buttonText="Accept All"
				cookieName="ConsentCookieResumeProject"
				enableDeclineButton={true}
				style={{ background: "#2B373B" }}
				setDeclineCookie={false}
				onAccept={HandleAcceptConsent}
				buttonStyle={{
					background: "#ff9301",
					color: "#ffffff",
					fontSize: "13px",
				}}
				declineButtonStyle={{
					background: "#ff9301",
					color: "#ffffff",
					fontSize: "13px",
				}}
				expires={150}
			>
				<b>We value your privacy</b>
				<p>
					We use cookies to enhance your browsing experience, serve personalized
					ads or content, and analyze our traffic. By clicking "Accept All", you
					consent to our use of cookies.{" "}
				</p>
			</CookieConsent>
		</div>
	);
};

export default HomeOne;

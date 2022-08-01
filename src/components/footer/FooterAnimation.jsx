import React from "react";
import {
	FaGithub,
	FaLinkedinIn,
	FaRedhat,
	FaPython,
	FaAws,
} from "react-icons/fa";

const SocialShare = [
	{
		Social: <FaLinkedinIn />,
		link: "https://www.linkedin.com/in/sebastian-marynicz-88b390105/",
	},
	{ Social: <FaGithub />, link: "https://github.com/TrinityWeaver" },
	{
		Social: <FaAws />,
		link: "https://www.credly.com/badges/b7e88bad-7ffa-4589-b371-a5ba5224b0f7/public_url",
	},
	{
		Social: <FaPython />,
		link: "https://verify.openedg.org/?id=xN39.NH7u.na2t",
	},
	{ Social: <FaRedhat />, link: "https://access.redhat.com/user/58516651" },
];

const Footer = () => {
	return (
		<>
			<div className="row align-items-center">
				<div className="col-md-6 my-2">
					<div className="nav justify-content-center justify-content-md-start">
						{SocialShare.map((val, i) => (
							<a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
								{val.Social}
							</a>
						))}
					</div>
					{/* End .nav */}
				</div>
				{/* End .col */}

				<div className="col-md-6 my-2 text-center text-md-end">
					<p>
						© {new Date().getFullYear()} copyright{" "}
						<a
							href="mailto:sebastian.marynicz@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							Sebastian Marynicz
						</a>{" "}
						all right reserved
					</p>
				</div>
				{/* End .col */}
			</div>
			{/* End .row */}
		</>
	);
};

export default Footer;

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

const Social = () => {
	return (
		<div className="nav social-icons justify-content-center">
			{SocialShare.map((val, i) => (
				<a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
					{val.Social}
				</a>
			))}
		</div>
	);
};

export default Social;

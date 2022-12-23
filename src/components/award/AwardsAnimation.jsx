import React from "react";

const AwardContnet = [
	{
		img: "aws-certified-sysops-administrator-associate",
		awardName: "AWS Certified SysOps Administrator – Associate",
		awardFor: "Dec 2022",
		delayAnimation: "0",
		link: "https://www.credly.com/badges/c166deb6-ec8d-458e-8d09-f84b9ca9f7cd/public_url"
	},	
	{
		img: "aws-certified-developer-associate",
		awardName: "AWS Certified Developer – Associate",
		awardFor: "May 2022",
		delayAnimation: "100",
		link: "https://www.credly.com/badges/b7e88bad-7ffa-4589-b371-a5ba5224b0f7/public_url"
	},
	{
		img: "jamfpro",
		awardName: "Jamf Certified Expert",
		awardFor: "May 2021",
		delayAnimation: "200",
		link: "https://account.jamf.com/training-courses/certificate/t4-3tcH7RD1euP6Uicj_zA"
	},
	{
		img: "pcep-30-01-pcep-certified-entry-level-python-programmer",
		awardName: "PCEP - Certified Entry-Level Python Programmer",
		awardFor: "Dec 2020",
		delayAnimation: "300",
		link: "https://verify.openedg.org/?id=xN39.NH7u.na2t"
	},
	{
		img: "jamfpro",
		awardName: "Jamf Certified Admin",
		awardFor: "Sep 2020",
		delayAnimation: "400",
		link: "https://account.jamf.com/training-courses/certificate/t4-3tcH7RD1euP6Uicj_zA"
	},
	{
		img: "jamfpro",
		awardName: "Jamf Certified Tech",
		awardFor: "Jun 2020",
		delayAnimation: "400",
		link: "https://account.jamf.com/training-courses/certificate/t4-3tcH7RD1euP6Uicj_zA"
	},

];

const Awards = () => {
	return (
		<>
			<div className="row">
				{AwardContnet.map((val, i) => (
					<div
						className="col-lg-4 m-15px-tb"
						key={i}
						data-aos="fade-right"
						data-aos-duration="1200"
						data-aos-delay={val.delayAnimation}
					>
						<div className="feature-box-02 d-flex align-items-center">
							<div className="icon">
								<img src={`img/award/${val.img}.png`} alt="award" />
							</div>
							<div className="media-body">
								<h6><a href={val.link}>{val.awardName}</a></h6>
								<p>{val.awardFor}</p>
							</div>
						</div>
					</div>
					// End .col
				))}
			</div>
			{/* End .row */}
		</>
	);
};

export default Awards;

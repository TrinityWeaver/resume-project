import React from "react";

const ContactInfo = () => {
	return (
		<>
			<div className="contact-info">
				<h4>What's your story? Get in touch</h4>
				<p>
					Always available for freelancing if the right project comes along, I
					am also open to job offers. Feel free to contact me.
				</p>

				<ul>
					<li className="media">
						<i className="icon icon-map"></i>
						<span className="media-body">
							Brick Lane, London, E1 6PU, United Kingdom.
						</span>
					</li>
					{/* End li */}

					<li className="media">
						<i className="icon icon-envelope"></i>
						<span className="media-body">contact@sebastianmarynicz.co.uk</span>
					</li>
					{/* End li */}

					<li className="media">
						<i className="icon icon-phone"></i>
						<span className="media-body">+44 20 3467 9604</span>
					</li>
					{/* End li */}
				</ul>
			</div>
			{/* End .contact-info */}
		</>
	);
};

export default ContactInfo;

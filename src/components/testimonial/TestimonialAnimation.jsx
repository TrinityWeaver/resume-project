import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      imageName: "tom",
      desc: `  I’ve worked with many Cloud/Devops Engineers but Sebastian was one of the best.
      He consistently gave 100% of herself to our team, and was critical in ensuring the 
      completion of our projects by the deadline. 
      Sebastian was always reliable and professional, and at stressful times he was a positive 
      influence on all of us.
      Overall, Sebastian was a pleasure to work with and I have qualms recommending him to 
      anybody looking for an excellent Cloud/DevOps Engineer.`,
      reviewerName: "Tomasz Nowak",
      designation: "Information Technology Operations Manager at ZAVA",
      delayAnimation: "",
    },
    {
      imageName: "arnold",
      desc: ` Only one word that comes to mind when I think of Sebastian, and that’s AWESOME. 
      I worked with Sebastian at ZAVA and he was a consummate professional at all times. 
      He explained the inner workings of the company perfectly and was instrumental in helping 
      me to find my feet.
      Sebastian‘s work ethic was impeccable, and he was always the first person to offer help 
      and support.
      Thanks, Sebastian! You made my time at ZAVA a pleasure.`,
      reviewerName: "Arnold Sadrijaj",
      designation: "Senior IT Operations Engineer at ZAVA",
      delayAnimation: "200",
    },
    {
      imageName: "raja",
      desc: ` Sebastian is my go-to for technical knowledge ( Cloud, Linux, Python ). Whenever I need help with AWS,
      I make sure to reach out to him, as he is the best at it. He has been 
      collaborating with my team for a couple of years, and on top of 
      being a great Cloud/DevOps Engineer, he is also an easy-going person.
      I definitely recommend Sebastian to any job.”`,
      reviewerName: "Balawal Raja",
      designation: "IT Operations Engineer at ZAVA",
      delayAnimation: "200",
    },




  ];

  return (
    <div className="testimonial-wrapper">
      <Slider {...settings}>
        {TestimonilContent.map((val, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="testimonial-01 media">
              <div className="avatar">
                <img
                  src={`img/testimonial/${val.imageName}.jpg`}
                  alt="review comments"
                ></img>
              </div>
              <div className="media-body">
                <p>{val.desc}</p>
                <h6>{val.reviewerName}</h6>
                <span>{val.designation}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

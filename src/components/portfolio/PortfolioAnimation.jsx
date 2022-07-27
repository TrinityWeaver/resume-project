import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import { FiLink } from "react-icons/fi";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const tabList = ["All", "Branding", "Photography", "Fashion", "Product"];
const tabListContent = [
  {
    porftoliItems: [
      {
        img: "m-portfolio-1",
        title: "Bottle Illustration",
        subTitle: "Figma Shoot",
        alterText: "Bottle Illustration",
        delayAnimation: "",
        portfolioLink:
          "https://dribbble.com/shots/16529339-Beny-Personal-Portfolio-React-Template",
      },
      {
        img: "m-portfolio-2",
        title: "E-Learning App",
        subTitle: "Nuna ios App",
        alterText: "Illustration",
        delayAnimation: "100",
        portfolioLink:
          "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
      },
      {
        img: "m-portfolio-3",
        title: "Visual Design",
        subTitle: "Themeforest Marke",
        alterText: "Business Mockup",
        delayAnimation: "200",
        portfolioLink:
          "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
      },
      {
        img: "m-portfolio-4",
        title: "Business Card",
        subTitle: "Graphicriver Market",
        alterText: "E-Cosmetics",
        delayAnimation: "0",
        portfolioLink:
          "https://dribbble.com/shots/16545341-Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
      },
      {
        img: "m-portfolio-5",
        title: "Chatting Application",
        subTitle: "Codecanyon Market",
        alterText: "Bottle Illustration",
        delayAnimation: "100",
        portfolioLink:
          "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
      },
      {
        img: "m-portfolio-6",
        title: "Web Application",
        subTitle: "Behance Shot",
        alterText: "Web Application",
        delayAnimation: "200",
        portfolioLink:
          "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
      },
      {
        img: "m-portfolio-7",
        title: "Business Card",
        subTitle: "Graphicriver Market",
        alterText: "Business Card",
        delayAnimation: "0",
        portfolioLink:
          "https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template",
      },
      {
        img: "m-portfolio-8",
        title: "Chatting App Design",
        subTitle: "Codecanyon Market",
        alterText: "Chatting App Design",
        delayAnimation: "100",
        portfolioLink:
          "https://www.behance.net/gallery/128278341/Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
      },
      {
        img: "m-portfolio-9",
        title: "Web Motion",
        subTitle: "Behance Shot",
        alterText: "Web Motion",
        delayAnimation: "200",
        portfolioLink: "https://www.facebook.com/ibthemes",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "m-portfolio-6",
        title: "Web Application",
        subTitle: "Behance Shot",
        alterText: "Web Application",
        delayAnimation: "",
        portfolioLink:
          "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
      },
      {
        img: "m-portfolio-3",
        title: "Visual Design",
        subTitle: "Themeforest Marke",
        alterText: "Business Mockup",
        delayAnimation: "100",
        portfolioLink:
          "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
      },
      {
        img: "m-portfolio-8",
        title: "Chatting App Design",
        subTitle: "Codecanyon Market",
        alterText: "Chatting App Design",
        delayAnimation: "200",
        portfolioLink:
          "https://www.behance.net/gallery/128278341/Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
      },
      {
        img: "m-portfolio-4",
        title: "Business Card",
        subTitle: "Graphicriver Market",
        alterText: "E-Cosmetics",
        delayAnimation: "300",
        portfolioLink:
          "https://dribbble.com/shots/16545341-Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "m-portfolio-2",
        title: "E-Learning App",
        subTitle: "Nuna ios App",
        alterText: "Illustration",
        delayAnimation: "",
        portfolioLink:
          "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
      },

      {
        img: "m-portfolio-5",
        title: "Chatting Application",
        subTitle: "Codecanyon Market",
        alterText: "Bottle Illustration",
        delayAnimation: "100",
        portfolioLink:
          "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
      },
      {
        img: "m-portfolio-6",
        title: "Web Application",
        subTitle: "Behance Shot",
        alterText: "Web Application",
        delayAnimation: "200",
        portfolioLink:
          "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "m-portfolio-1",
        title: "Bottle Illustration",
        subTitle: "Figma Shoot",
        alterText: "Bottle Illustration",
        delayAnimation: "",
        portfolioLink:
          "https://dribbble.com/shots/16529339-Beny-Personal-Portfolio-React-Template",
      },
      {
        img: "m-portfolio-7",
        title: "Business Card",
        subTitle: "Graphicriver Market",
        alterText: "Business Card",
        delayAnimation: "100",
        portfolioLink:
          "https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template",
      },
      {
        img: "m-portfolio-9",
        title: "Web Motion",
        subTitle: "Behance Shot",
        alterText: "Web Motion",
        delayAnimation: "200",
        portfolioLink: "https://www.facebook.com/ibthemes",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "m-portfolio-2",
        title: "E-Learning App",
        subTitle: "Nuna ios App",
        alterText: "Illustration",
        delayAnimation: "",
        portfolioLink:
          "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
      },
      {
        img: "m-portfolio-3",
        title: "Visual Design",
        subTitle: "Themeforest Marke",
        alterText: "Business Mockup",
        delayAnimation: "100",
        portfolioLink:
          "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
      },

      {
        img: "m-portfolio-5",
        title: "Chatting Application",
        subTitle: "Codecanyon Market",
        alterText: "Bottle Illustration",
        delayAnimation: "200",
        portfolioLink:
          "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
      },
      {
        img: "m-portfolio-6",
        title: "Web Application",
        subTitle: "Behance Shot",
        alterText: "Web Application",
        delayAnimation: "300",
        portfolioLink:
          "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
      },
    ],
  },
];

const Portfolio = () => {
  return (
    <SimpleReactLightbox>
      <div className="portfolio-filter-01">
        <Tabs>
          <TabList className="filter d-flex flex-wrap justify-content-start">
            {tabList.map((val, i) => (
              <Tab key={i}>{val}</Tab>
            ))}
          </TabList>
          {/* End tablist */}

          <SRLWrapper>
            {tabListContent.map((tabContent, i) => (
              <TabPanel key={i}>
                <div className="portfolio-content ">
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                  >
                    {tabContent.porftoliItems.map((val, i) => (
                      <div
                        className="portfolio-box-01"
                        key={i}
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay={val.delayAnimation}
                      >
                        <div className="portfolio-img">
                          <div className="portfolio-info">
                            <h5>
                              <a
                                href={val.portfolioLink}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {val.title}
                              </a>
                            </h5>
                            <span>{val.subTitle}</span>
                          </div>
                          {/* End .portfolio-info */}
                          <a
                            href={`img/portfolio/${val.img}.jpg`}
                            className="gallery-link"
                          >
                            <img
                              src={`img/portfolio/${val.img}.jpg`}
                              alt={val.alterText}
                            />
                          </a>
                          {/* End gallery link */}
                          <a
                            className="portfolio-icon"
                            href={val.portfolioLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FiLink />
                          </a>
                          {/* End .portfolio-icon */}
                        </div>
                      </div>
                    ))}
                  </Masonry>
                </div>
                {/* End list wrapper */}
              </TabPanel>
            ))}
          </SRLWrapper>
          {/* End tabpanel */}
        </Tabs>
      </div>
    </SimpleReactLightbox>
  );
};

export default Portfolio;

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

const tabList = ["All","Webistes", "CI/CD Jenkins",  "Automations", "Python"];
const tabListContent = [
  {
    porftoliItems: [
      {
        img: "m-portfolio-1",
        title: "Resume Project",
        subTitle: "www.sebastianmarynicz.co.uk",
        alterText: "Websites",
        delayAnimation: "",
        portfolioLink:
          "https://dribbble.com/shots/16529339-Beny-Personal-Portfolio-React-Template",
      },
      {
        img: "m-portfolio-2",
        title: "Resume Terraform",
        subTitle: "Infrastructure as Code",
        alterText: "Websites",
        delayAnimation: "100",
        portfolioLink:
          "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
      },
      {
        img: "jenkins4",
        title: "CI/CD Jenkins",
        subTitle: "CI/CD Pipeline",
        alterText: "CI/CD Jenkins",
        delayAnimation: "200",
        portfolioLink:
          "https://cloudonaut.io/how-to-set-up-jenkins-on-aws/",
      },
      {
        img: "spa1",
        title: "Internal SPA Portal",
        subTitle: "SPA with serverless microservices",
        alterText: "Websites",
        delayAnimation: "0",
        portfolioLink:
          "https://dribbble.com/shots/16545341-Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
      },
      {
        img: "m-portfolio-5",
        title: "Archiving Accounts Automation",
        subTitle: "Serverless Automation",
        alterText: "Automations",
        delayAnimation: "100",
        portfolioLink:
          "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
      },
      {
        img: "m-portfolio-6",
        title: "Crypto Bot",
        subTitle: "Binance API",
        alterText: "Python",
        delayAnimation: "200",
        portfolioLink:
          "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
      },
      {
        img: "m-portfolio-6",
        title: "HelperCLI for AWS",
        subTitle: "Resource Removal",
        alterText: "Python",
        delayAnimation: "200",
        portfolioLink:
          "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
      },
    ],
  },
  {
    porftoliItems: [
           // Websites
           {
            img: "m-portfolio-1",
            title: "Resume Project",
            subTitle: "www.sebastianmarynicz.co.uk",
            alterText: "Websites",
            delayAnimation: "",
            portfolioLink:
              "https://dribbble.com/shots/16529339-Beny-Personal-Portfolio-React-Template",
          },
          {
            img: "m-portfolio-2",
            title: "Resume Terraform",
            subTitle: "Infrastructure as Code",
            alterText: "Websites",
            delayAnimation: "100",
            portfolioLink:
              "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
          },
          {
            img: "m-portfolio-4",
            title: "Internal SPA Portal",
            subTitle: "SPA with serverless microservices",
            alterText: "Websites",
            delayAnimation: "0",
            portfolioLink:
              "https://dribbble.com/shots/16545341-Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
          },
    ],
  },
  {
    porftoliItems: [

      // CI/CD Jenkins
      {
        img: "m-portfolio-3",
        title: "CI/CD Jenkins",
        subTitle: "CI/CD Pipeline",
        alterText: "CI/CD Jenkins",
        delayAnimation: "200",
        portfolioLink:
          "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
      },
    ],
  },
  {
    porftoliItems: [

      // Automations
      {
        img: "m-portfolio-5",
        title: "Archiving Accounts Automation",
        subTitle: "Serverless Automation",
        alterText: "Automations",
        delayAnimation: "100",
        portfolioLink:
          "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
      },
    ],
  },
  {
    porftoliItems: [

      // Python
      {
        img: "m-portfolio-6",
        title: "Crypto Bot",
        subTitle: "Binance API",
        alterText: "Python",
        delayAnimation: "200",
        portfolioLink:
          "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
      },
      {
        img: "m-portfolio-6",
        title: "HelperCLI for AWS",
        subTitle: "Resource Removal",
        alterText: "Python",
        delayAnimation: "200",
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
                            href={`img/portfolio/${val.img}.svg`}
                            className="gallery-link"
                          >
                            <img
                              src={`img/portfolio/${val.img}.svg`}
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

import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Junior Cloud Engineer`,
    jobType: `ZAVA | Remote`,
    jobDuration: `Aug 2021 - Present`,
    timeDuraton: `Full Time`,
    compnayName: "ZAVA",
    jobDescription: `Adipisicing Lorem ipsum dolor sit amet, consectetur elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor.`,
    delayAnimation: "",
  },
  {
    jobPosition: `IT Operations Engineer`,
    jobType: `ZAVA | Remote`,
    jobDuration: `Aug 2019 - Jul 2021`,
    timeDuraton: `Full Time`,
    compnayName: "ZAVA",
    jobDescription: `Cyber Essentials Plus Company-wide certification gained.
    Creating and implementing various solutions for business logic via Jamf Pro
    Network Debugging
    3rd Line Tech Support across the whole organisation, including maintaining networking hardware\n
    and software, and performing other technical support duties.
    ntegration OneLogin as a solution for identity and access management and SSO widely in organisation
    Administering a bunch of services, such as Google Workspace, Microsoft, OneLogin, DUO, Amazon Connect.`,
    delayAnimation: "100",
  },
  {
    jobPosition: `Animation Artist`,
    jobType: `IbThemes | Remote`,
    jobDuration: `Jan 2019 - Present`,
    timeDuraton: `Full Time`,
    compnayName: "IB Themes",
    jobDescription: ` Consectetur adipisicing elit,lorem ipsum dolor sit amet,
    sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor.`,
    delayAnimation: "200",
  },
];

const educatonContent = [
  {
    passingYear: "May 2022",
    degreeTitle: "AWS Certified Developer - Associate",
    instituteName: "Amazon Web Services Training and Certification",
  },
  {
    passingYear: "May 2021",
    degreeTitle: "Jamf Certified Expert",
    instituteName: "Granted by Jamf",
  },
  {
    passingYear: "December 2020",
    degreeTitle: "PCEP - Certified Entry-Level Python Programmer",
    instituteName: "OpenEDG Institute",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div
                className="resume-row"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            <h3>Certifications & Skills</h3>{" "}
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-4 m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>{" "}
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;

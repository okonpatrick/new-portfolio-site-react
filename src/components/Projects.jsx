import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCards } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import project1 from "../assets/img/project-airline.png";
import project2 from "../assets/img/project-dashboard.PNG";
import project3 from "../assets/img/movie-app.PNG";
import project4 from "../assets/img/project-tindog.PNG";
import project5 from "../assets/img/project-trurealtors.PNG";
import project6 from "../assets/img/project-extension.PNG";
import project7 from "../assets/img/Capture.JPG";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useState } from "react";

export const Projects = () => {
  const [isProjectExpanded, projectExpanded] = useState(false);
  const fullskilltext =

    "I have a proven track record of contributing to highly productive and scalable projects. I specialize in creating visually appealing websites and captivating digital experiences that leave a lasting impression.  Throughout my career, I've played a pivotal role in driving growth for organizations by implementing strategic initiatives and optimizing workflows. By leveraging my expertise in web development, I've helped enhance operational efficiency and expand market reach, resulting in measurable results and increased brand visibility. With a collaborative approach and a passion for continuous learning, I'm committed to delivering exceptional outcomes and exceeding expectations.";
  const toggleProjectExpand = () => {
    projectExpanded(!isProjectExpanded);
  };

  const projects = [
    {
      title: "Airline Website",
      description: "Design & Development",
      imgUrl: project1,
      linkUrl: "https://airline-reservation-cpe412.vercel.app/",
      category: ["web", "design"],
    },

    {
      title: "Startup Dashboard",
      description: "Design & Development",
      imgUrl: project2,
      linkUrl: "https://dashboard-react-app-five.vercel.app/",
      category: ["web", "design"],
    },
    {
      title: "Movie App",
      description: "Design & Development",
      imgUrl: project3,
      linkUrl: "https://hng-movie-app-li8t.onrender.com/",
      category: "web",
    },
    {
      title: "Tindog Website",
      description: "Design & Development",
      imgUrl: project4,
      linkUrl: "https://tindog-app-pi.vercel.app/",
      category: "web",
    },
    {
      title: "Realtor Website",
      description: "Design & Development",
      imgUrl: project5,
      linkUrl: "https://tru-realtor-app.vercel.app/",
      category: "web",
    },
    {
      title: "Chrome Extension",
      description: "Design & Development",
      imgUrl: project6,
      linkUrl: "https://drag-and-drop-gallery-app.vercel.app/",
      category: ["web", "design"],
    },

    {
      title: "Award Design",
      description: "Graphic Design",
      imgUrl: project7,
      linkUrl:
        "https://drive.google.com/file/d/1jxTGuibsdju7sxkEWNI_mE519PUniZpT/view?usp=drive_link",
      category: "design",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility offset={500}>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <div className="toggleProjects">
                    {isProjectExpanded ? (
                      <div>{fullskilltext}</div>
                    ) : (
                      <div>
                        {fullskilltext.slice(0, 290)}{" "}
                        {/* Display first 200 characters */}
                        {fullskilltext.length > 290 && "..."}{" "}
                        {/* Add ellipsis if text is longer than 200 characters */}
                        <button
                          onClick={toggleProjectExpand}
                          className="project-button flex"
                        >
                          {isProjectExpanded ? "See less" : "See more"}
                        </button>
                      </div>
                    )}

                    <p>
                      View my <b>Github Repositories</b>{" "}
                      <u>
                        <a href="https://github.com/okonpatrick/">
                          {" "}
                          Here.&nbsp;
                        </a>
                      </u>
                    </p>
                  </div>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center alig-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Web</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Design</Nav.Link>
                </Nav.Item>
              </Nav>
              <TrackVisibility offset={1000} partialVisibility>
                {({ isVisible }) => (
                  <Tab.Content
                    id="slideInUp"
                    className={
                      isVisible ? "animate__animated animate__slideInUp" : ""
                    }
                  >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => {
                          return <ProjectCards key={index} {...project} />;
                        })}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      {" "}
                      <Row>
                        {projects
                          .filter((project) => project.category === "web")
                          .map((project, index) => (
                            <ProjectCards key={index} {...project} />
                          ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      {" "}
                      <Row>
                        {projects
                          .filter((project) =>
                            project.category.includes("design")
                          )
                          .map((project, index) => (
                            <ProjectCards key={index} {...project} />
                          ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                )}
              </TrackVisibility>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="Image" className="background-img-right" />
    </section>
  );
};

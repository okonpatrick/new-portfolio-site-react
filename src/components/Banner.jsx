import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/ceopics2.jpg";
import "animate.css";
import "animate.css/animate.css";
import TrackVisibility from "react-on-screen";
import Button from "../components/Button";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const Banner = () => {
  const fulltext = `Welcome to my profile! I'm a highly skilled Frontend Web Developer with a passion for creating impactful digital experiences. Based in Nigeria, I specialize in crafting visually stunning websites and apps, designing compelling user interfaces, and driving business growth through innovative solutions.
  Please feel free to explore my portfolio to get a glimpse of my previous projects and collaborations. I'm always eager to connect with fellow professionals, developers, and potential clients who are looking to bring their digital presence to new heights. I have contributed greatly to improving the business of the companies/establishments I have found myself by successfully managing projects resulting in increased performance and productivity. I'm a good team player.
  Let's connect and explore how we can collaborate to create meaningful and visually captivating experiences.`;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Router>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility once>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h1>
                      {`Hi I'm Patrick Anthony`} <br />
                      <span
                        className="txt-rotate"
                        data-period="1000"
                        data-rotate='["Frontend Web Developer"]'
                      >
                        {/* <span className="wrap">{text}</span> */}
                        <h3>A Frontend Web Developer</h3>
                      </span>
                    </h1>
                    <div>
                      {isExpanded ? (
                        <div>{fulltext}</div>
                      ) : (
                        <div>
                          {fulltext.slice(0, 200)}{" "}
                          {/* Display first 200 characters */}
                          {fulltext.length > 200 && "..."}{" "}
                          {/* Add ellipsis if text is longer than 200 characters */}
                        </div>
                      )}
                      <button onClick={toggleExpand} className="mt-2">
                        {isExpanded ? "See less" : "See more"}
                      </button>
                    </div>
                    <div className="flex">
                      {/* <ArrowRightCircle size={25} */}
                      <HashLink to="#connect">
                        <Button
                          text="Hire Me"
                          id="toConnect"
                          className="vvd"
                          onClick={() => console.log("connect")}
                        />
                      </HashLink>

                      <HashLink to="https://drive.google.com/file/d/15GA1awAv_HSSaSozuWzFz56X-gPe1dNF/view?usp=sharing">
                        <button className="hireAnddownloadBtn2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                          </svg>
                           Résumé
                        </button>
                      </HashLink>
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility once>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img
                      className="profilepic"
                      src={headerImg}
                      alt="Header img"
                    />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  );
};

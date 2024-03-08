import { Col, Container, Row } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import "animate.css";
import "animate.css/animate.css";

var currentDate = new Date();
var year = currentDate.getFullYear();

const LocalFooter = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center">
          <MailchimpForm />

          <Col sm={6} className="text-center ">
            <div className="social-icon">
              <a href="https://github.com/okonpatrick/">
                <img src={navIcon4} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/patrick-okon/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://mobile.facebook.com/patrick.okon.10420">
                <img src={navIcon2} alt="" />
              </a>
            </div>
            <p>
              {" "}
              © {year} <span>Portfolio Site</span> by{" "}
              <span>Patrick Anthony Okon</span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default LocalFooter;

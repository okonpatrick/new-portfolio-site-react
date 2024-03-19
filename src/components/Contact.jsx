import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import "animate.css/animate.css"; // you need to require the css somewhere
import TrackVisibility from "react-on-screen";
import messagebox from "../assets/img/messagebox9.svg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    //Your EmailJS service ID, template ID, and Public Key

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "patrick",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        setIsEmailSent(true);
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <span>
              Feel free to explore my portfolio and get in touch to discuss how
              we can collaborate to achieve your goals. Thank you for visiting,
              and I look forward to the opportunity to work together!.
            </span>

            <TrackVisibility partialVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={messagebox}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Send a Message</h2>
                  <div className="emailFormDiv">
                    {isEmailSent && (
                      <div className="success-message">
                        Email sent successfully!
                      </div>
                    )}
                    <form onSubmit={handleSubmit} className="emailForm">
                      <div className="input-group">
                        <Row>
                          <Col size={12} sm={6} className="px-3">
                            <input
                              type="text"
                              placeholder="Your Name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="inputbox"
                            />
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                            <input
                              type="email"
                              placeholder="Your Email"
                              value={email}
                              required
                              onChange={(e) => setEmail(e.target.value)}
                              className="emailField"
                            />
                          </Col>
                        </Row>
                      </div>
                      <Col className="px-1">
                        <textarea
                          cols="30"
                          rows="10"
                          value={message}
                          required
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Send a mail..."
                        ></textarea>
                        <button type="submit" className="white-button">
                          Send!
                        </button>
                      </Col>
                    </form>
                    <div className="spacer"></div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Contact;

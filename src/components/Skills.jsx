import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";
import "animate.css";
import ReactCarousel from "./CarouselComponent";
import Stacks from ".././components/Stacks";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx animate__animated animate__zoomIn">
              <h2>Skills</h2>
              <p>
                With a strong background in web development, I excel in building
                responsive and user-friendly websites using HTML, CSS,
                JavaScript, React.js, Next.js, Typescript and Nodejs. I'm proficient in these tools/libraries/frameworks, enabling me to create dynamic and interactive web
                applications. I strive to deliver exceptional results that meet
                the unique needs of my clients. As a web designer, I
                leverage my creativity and expertise in CSS, Bootstrap and Tailwind
                to produce visually appealing designs that captivate audiences.
                I have a keen eye for detail and a passion
                for creating visually compelling experiences.
                <br></br> Beyond my technical skills, I am a customer-centric
                and result driven entrepreneur.<br></br>
                View my <strong>Resume</strong>{" "}
                <u>
                  <a href="https://drive.google.com/file/d/15GA1awAv_HSSaSozuWzFz56X-gPe1dNF/view?usp=sharing">
                    {" "}
                    Here.&nbsp;
                  </a>
                  <Stacks />
                </u>
              </p>
              <ReactCarousel />
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt="Image" className="background-image-left" />
    </section>
  );
};

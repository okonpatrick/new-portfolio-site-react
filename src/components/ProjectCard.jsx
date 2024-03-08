import { Col } from "react-bootstrap";

export const ProjectCards = ({ title, description, imgUrl, linkUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h3>{title}</h3>
          <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="project-link">View Site </a>
          <h5></h5>
        </div>
      </div>
    </Col>
  );
};
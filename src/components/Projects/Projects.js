import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import supplar from "../../Assets/Projects/supplar-logo.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={supplar}
              isBlog={false}
              title="Supplar"
              description="Back-end for supplar mobile application"
              link="https://github.com/Supplar-App/supplar-backend-v2"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

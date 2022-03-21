import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiDjango,
  DiLinux,
  DiPython,
  DiDocker,
  DiGit,
} from "react-icons/di";

function Techstack() {
  return (
    <div>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiPython color="#016172"/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiDjango  color="green" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiDocker color="#43d7eb" />
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiLinux />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact color="#43d7eb" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit color="#c73410" />
        </Col>
      </Row>
    </div>
  );
}

export default Techstack;

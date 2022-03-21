import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiNeovim,
  SiVisualstudiocode,
  SiWindows,
  SiDebian,
  SiGithub
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiDebian color="#ce2323" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNeovim color="green" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode color="#016172" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows color="#81d1e6" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub color="#572db9" />
      </Col>
    </Row>
  );
}

export default Toolstack;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed by Soumyajit Behera</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © Shaggy Axel</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/shaggy-axel"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://t.me/shaggy_axel"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaTelegram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:shaggy-axel@mail.ru"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <HiMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ruslan Korneev </span>
            from <span className="purple"> Belgrade, Serbia.</span>
            <br />I am a Back-end Developer
            using <span className="purple"> Python, Django REST. </span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Teaching
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Basketball
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a happy live!"{" "}
          </p>
          <footer className="blockquote-footer">Shaggy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

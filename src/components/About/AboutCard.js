import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amit Poudyal </span>
            from <span className="purple"> Palpa, Nepal.</span>
            <br />
            I am currently learning and developing my skillset.
            <br />
            I am pursuing my bachelor in Computer Engineering at Kathmandu
            University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Knowing About Other Fields
            </li>
            <li className="about-activity">
              <ImPointRight /> Explore New Things
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A learner can embrace growth when faced with new experiences and knowledge."{" "}
          </p>
          <footer className="blockquote-footer">Amit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

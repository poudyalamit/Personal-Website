import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bolnuhos from "../../Assets/Projects/bolnuhos.png";
import kinnuhos from "../../Assets/Projects/kinnuhos.png";
import notekitab from "../../Assets/Projects/notekitab.png";
import newsrider from "../../Assets/Projects/newsrider.png";

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
              imgPath={bolnuhos}
              isBlog={false}
              title="Bolnuhos"
              description="Personal Chat Room and Group Chat Room and hangout with friends build with react.js, Chakra-UI and MongoDB. Have features which allows users for realtime messaging."
              ghLink="https://github.com/poudyalamit/Bolnuhos"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kinnuhos}
              isBlog={false}
              title="Kinnuhos"
              description="A E-commerce website with features of verifying pin codes, choosing variants of the products with payment system made using Next.js, MongoDB."
              ghLink="https://github.com/poudyalamit/Kinnuhos"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notekitab}
              isBlog={false}
              title="NoteKitab"
              description="Note storing with full of authentication of the users built using reactjs, MongoDB. Also have features to store the notes with more security adding pins."
              ghLink="https://github.com/poudyalamit/NoteKitab"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsrider}
              isBlog={false}
              title="News Rider"
              description="A news application which uses the api of the News-API and fetches all the news loaded by that api of the world made using Reactjs."
              ghLink="https://github.com/poudyalamit/News-Rider"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

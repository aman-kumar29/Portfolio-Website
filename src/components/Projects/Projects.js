import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Multimodal Sentiment Analysis"
              description="Developed an ML model that applies deep learning techniques to extract
              sentiment from diverse modalities with high accuracy"
              ghLink="https://github.com/aman-kumar29/multimodal-sentiment-analysis"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="News Aggregator"
              description="Designed and developed a cutting-edge news aggregator app using React and News API. Successfully implemented a user-friendly interface for seamless news browsing."
              ghLink="https://github.com/aman-kumar29/News-Aggregator"
              demoLink="https://bucolic-chimera-1e5b8b.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Night Canteen Management"
              description="A full-stack web development project built using the MERN (MongoDB, Express, React, Node.js) stack. The website offers various functionalities, including adding food items to a cart and placing orders, along with an admin panel accessible only to the admin for managing food items."
              ghLink="https://github.com/aman-kumar29/Night-Canteen-Management-Website"
              demoLink="https://dull-gold-kitten-cape.cyclic.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Shiru Cafe Clone"
              description="An App Development project using JetPack ComposeThis Shiru Cafe Clone App is clone of an app on Google PLayStore namely Shiru Cafe which allows a few University / College Students to get Cold or Hot Drink for FREE!!!"
              ghLink="https://github.com/aman-kumar29/ShiruCafeClone"
              demoLink="https://drive.google.com/drive/folders/119INRWtUMjvB9IUrsKPtMdiPH-jJOAp3"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Semantic Analysis with LSTM"
              description="Using 'Natural Launguage Processing' for the sentiment analysis on a large dataset of Amazon product reviews."
              ghLink="https://github.com/aman-kumar29/Semantic-Analysis-with-LSTM"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 65.60%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/aman-kumar29/Face-Emotion-Recognition"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

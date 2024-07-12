import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import download from "../../Assets/Projects/download.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Github from "../About/Github";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong style={{ color: "#CF1D2A" }}>Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }} >
          {/* <Col md={4} className="project-card">
            <ProjectCard
            imgPath={chatify}
            isBlog={false}
            title="Multimodal Sentiment Analysis"
            description="Developed an ML model that applies deep learning techniques to extract
            sentiment from diverse modalities with high accuracy"
            ghLink="https://github.com/aman-kumar29/multimodal-sentiment-analysis"
            // demoLink="https://chatify-49.web.app/"
            />
            </Col> */}


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Night Canteen Management"
              description="Built a full-stack web app using the MERN stack, featuring cart and order functionalities for food items. An admin-only panel enables efficient management of food items, enhancing overall operations and user experience."
              ghLink="https://github.com/aman-kumar29/NightCanteen"
              demoLink="https://canteen-web-deployed.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={download}
              isBlog={false}
              title="Video Conferencing Website"
              description="Built a video conferencing platform with HTML, CSS, JavaScript, WebRTC, and Agora SDKs for 50+ users. Features included screen sharing, low latency, 15+ concurrent streams, and real-time chat for enhanced user engagement."
              ghLink="https://github.com/aman-kumar29/Video-Conferencing-Website"
              demoLink="https://video-conferencing-website-woad.vercel.app/"
            />
          </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={chatify}
                isBlog={false}
                title="PDF Question Answering"
                description="Created a PDF question-answering app with Langchain and Google's Palm model using RAG. Built a Streamlit app for real-time querying, leveraging ChromaDB for fast vector storage and retrieval, reducing query response times."
                ghLink="https://github.com/aman-kumar29/Ask-PDF"
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

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Semantic Analysis with LSTM"
              description="Using 'Natural Launguage Processing' for the sentiment analysis on a large dataset of Amazon product reviews."
              ghLink="https://github.com/aman-kumar29/Semantic-Analysis-with-LSTM"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier with FER-2013 using Keras and TensorFlow, achieving 65.60% accuracy in predicting human emotions. Used OpenCV to detect faces in images and pass them to the classifier for emotion prediction."
              ghLink="https://github.com/aman-kumar29/Face-Emotion-Recognition"
            />
          </Col>
        </Row>
      </Container>
      <Github />
    </Container>
  );
}

export default Projects;

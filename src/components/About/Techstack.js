import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
} from "react-icons/di";
import { FaAws } from "react-icons/fa";
import {
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiSpringboot,
} from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={1} md={1} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={1} md={1} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={1} md={1} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={1} md={1} className="tech-icons">
        <DiPython />
      </Col>
      {/* <Col xs={1} md={1} className="tech-icons">
        <TbBrandGolang />
      </Col> */}
      <Col xs={1} md={1} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={1} md={1} className="tech-icons">
        <DiReact />
      </Col>
      {/* <Col xs={1} md={1} className="tech-icons">
        <SiSolidity />
      </Col> */}
      <Col xs={1} md={1} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={1} md={1} className="tech-icons">
        <SiNextdotjs />
      </Col>
      {/* <Col xs={1} md={1} className="tech-icons">
        <DiGit />
      </Col> */}
      <Col xs={1} md={1} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={1} md={1} className="tech-icons">
        <FaAws />
      </Col>
      {/* <Col xs={1} md={1} className="tech-icons">
        <SiRedis />
      </Col> */}
      <Col xs={1} md={1} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={1} md={1} className="tech-icons">
        <SiSpringboot/>
      </Col>
    </Row>
  );
}

export default Techstack;

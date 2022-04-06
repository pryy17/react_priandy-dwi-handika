import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import "./styles/Home.css";
import Menus from "./Menus";

export default function Home(props) {
  return (
    <div>
      <div className="home-container d-flex align-items-center justify-content-center container-fluid">
        <Container className="container-fluid align-items-center justify-content-center">
          <Row className="align-items-center justify-content-center container-fluid mb-3">
            <div className="photo-profile"></div>
          </Row>
          <Row className="home-row home-title align-middle">
            <Col className="title-col">
              <h1>
                <strong>PRIANDY DWI HANDIKA.</strong>
              </h1>
              <p>My Weekly React assignment</p>
            </Col>
          </Row>
          <Row className=" px-5">
            <Col>
              <a href="#menuAssignment"><Button variant="primary">Get Started</Button></a>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Menus dataMenu={props.dataMenu} />
      </div>
    </div>
  );
}
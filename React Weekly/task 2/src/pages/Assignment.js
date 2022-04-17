import React, { useState } from "react";
import { Container, Row, Carousel, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/Assignment.css";

export default function Assignment(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="assignment-container d-flex align-items-center justify-content-center">
      <Container>
        <Row className="assignment-row">
          <Col className="assignment-title pt-5 d-flex justify-content-center">
            <div>
              <h1>{props.dataMenu.name}</h1>
              <p>{props.dataMenu.desc}</p>
              <div>
                <Button size="lg"><Link to={`/${props.dataMenu.url}`} style={{ color: "white", textDecoration : "none"}}>Try Here</Link></Button>
              </div>
            </div>
          </Col>
          <Col className="screenshots-assignment" sm={8}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              
              {props.dataMenu.img.map((item) => (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={`/assets/images/${props.dataMenu.name}/${item}`}
                    alt="First slide"
                  />
                </Carousel.Item>
              ))}

            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

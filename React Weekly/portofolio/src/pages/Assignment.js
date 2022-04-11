import React, { useState } from "react";
import { Container, Row, Carousel, Col, Button } from "react-bootstrap";
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
              <p>lorep impsum gafo gado vfdsksncksncksju</p>
              <div>
                <Button size="lg">Try Here</Button>
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

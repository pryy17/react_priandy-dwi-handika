import React, { useState } from "react";
import { Container, Row, Carousel, Col, Button } from "react-bootstrap";
import "./styles/Assignment.css";

export default function Assignment() {
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
                <h1>Judul</h1>
                <p>lorep impsum gafo gado vfdsksncksncksju</p>
                <div><Button size="lg" >Try Here</Button></div>
            </div>
          </Col>
          <Col className="screenshots-assignment" sm={8}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/assets/images/homebg.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/assets/images/homebg.jpg"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/assets/images/homebg.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

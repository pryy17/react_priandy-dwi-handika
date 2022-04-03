import React from "react";
import { Navbar, Container, Offcanvas, Nav, Col, Row } from "react-bootstrap";

export default function sideBar() {
  return (
    <div style={{
      position : "fixed",
      width: "100%"
     }}>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Row className="justify-content-md-start">
            <Col>
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
            </Col>
            <Col>
              <Navbar.Brand href="#" className="justify-content-start">
                ReactJS
              </Navbar.Brand>
            </Col>
          </Row>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

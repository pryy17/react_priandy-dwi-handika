import React from "react";
import { Navbar, Container, Offcanvas, Nav, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function sideBar(props) {

  const dataMenu = props.dataMenu;

  return (
    <div style={{
      width: "100%"
     }}>
      <Navbar bg="light" expand={false}>
          <Row className="w-100">
            <Col>
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
            </Col>
            <Col >
              <Navbar.Brand href="#" className="w-100">
                ReactJS
              </Navbar.Brand>
            </Col>
            <Col xs={10} style={{ textAlign: "right"  }} >
              <Nav.Link><Link to="/" style={{ textDecoration : "none", color : "black" }}>HOME</Link></Nav.Link>
            </Col>
          </Row>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                ReactJS
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {
                  dataMenu.map((menu)=>(
                    <Nav.Link href="#action1" className=" border-1" key={menu.id}><Link to={`${menu.id}`}>{menu.name}</Link></Nav.Link>
                  ))
                }
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
      </Navbar>
    </div>
  );
}

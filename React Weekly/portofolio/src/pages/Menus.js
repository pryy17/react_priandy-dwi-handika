import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./styles/Menus.css";
import { Link } from "react-router-dom";

export default function Menus(props) {
  const assignment = props.dataMenu;

  return (
    <div id="menuAssignment" className="menus-container d-flex align-items-center justify-content-center container-fluid">
      <div>
        <Container>
          <Row className=" pb-5">
            <h1>My assignment</h1>
          </Row>
          <Row className=" d-flex justify-content-center align-items-center gap-md-5 gap-1" md={4}>
            {assignment.map((item) => (
              
              <Link to={`${item.id}`}><Button className="animate-btn" size="lg" key={item.id}>{item.name}</Button></Link>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./styles/Menus.css";
const dataAssignment = [
  {
    name: "Introduction React",
  },
  {
    name: "React Fundamental",
  },
  {
    name: "React Routing",
  },
  {
    name: "Event Handling",
  },
  {
    name: "React Hook",
  },
  {
    name: "React Form",
  },
  {
    name: "Global State Management and Data fetching",
  },
  {
    name: "Testing",
  },
  {
    name: "Deployment",
  },
];
export default function Menus() {
  const assignment = dataAssignment;

  return (
    <div className="menus-container d-flex align-items-center justify-content-center container-fluid">
      <div>
        <Container>
          <Row className=" pb-5">
            <h1>My assignment</h1>
          </Row>
          <Row className=" d-flex justify-content-center align-items-center gap-5" md={4}>
            {assignment.map((item) => (
              <Button size="lg">{item.name}</Button>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

import React from "react";
import { Button, Card } from "react-bootstrap";

export default function CardMenu() {
  return (
    <div>
      <Card style={{ width: "12rem" }} className="border-0">
        <Card.Img variant="top" src="img/makanan/bakmi bangka.jpg" className="rounded" />
        <Card.Body className="px-0">
          <Card.Title className=" text-start">Bakmi Bangka</Card.Title>
          <Card.Text className="text-start">
            Rp10.000
          </Card.Text>
          <Card.Text className=" text-start" style={{ color : "#F17228" }}>
            Makanan
          </Card.Text>
        </Card.Body>
        <Button variant="primary" style={{ backgroundColor : "#F17228"}} className=" border-0">Pesan</Button>
      </Card>
    </div>
  );
}

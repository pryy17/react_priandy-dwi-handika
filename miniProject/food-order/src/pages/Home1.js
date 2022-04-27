import React from "react";
import { Col, Button, Row, Card } from "react-bootstrap";
import CardIcon from "../components/CardIcon";
import CardMenu from "../components/CardMenu";
import CardSlider from "../components/CardSlider";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { tampil } from "../redux/menuSlice";
import Categories from "../components/Categories";

export default function Home1() {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="header-container">
        <Row style={{ height: "12rem" }}>
          <Col className=" d-flex align-items-center justify-content-center text-center text-md-start">
            <div>
              <strong style={{ color: "white", fontSize: "60px" }}>
                Are you starving?
              </strong>{" "}
              <br />
              <p>dengan hanya beberapa click, bayar dan kenyang</p>
              <Button type="button" className="btn btn-light">
                <strong>Pesan Sekarang</strong>
              </Button>
            </div>
          </Col>
          <Col className="mangkok d-flex align-items-center justify-content-center text-start">
            <img src="img/image.png" alt="mangkok" className=" pt-5" />
          </Col>
        </Row>
      </div>
      <div className="d-flex justify-content-evenly text-decoration-none mt-5">
        <div>
          <Row className="my-5">
            <h1>How does it works</h1>
          </Row>
          <Row className="d-flex justify-content-evenly">
            <Col>
              <CardIcon
                gambar={"menu.png"}
                title={"Choose order"}
                text={"Check over hundreds of menus to pick your favorite food"}
              />
            </Col>
            <Col>
              <CardIcon
                gambar={"payment.png"}
                title={"Pay advanced"}
                text={
                  "It's quick, safe, and simple. Select several methods of payment"
                }
              />
            </Col>
            <Col>
              <CardIcon
                gambar={"donut.png"}
                title={"Enjoy meals"}
                text={"Food is made and delivered directly to your home."}
              />
            </Col>
          </Row>
        </div>
      </div>

      <div className="d-flex justify-content-evenly text-decoration-none mt-5">
        <div>
          <Row className="my-5">
            <h1>Popular food</h1>
          </Row>
          <Row className="d-flex justify-content-evenly">
            <CardSlider />
          </Row>
        </div>
      </div>

      <div className="d-flex justify-content-evenly text-decoration-none my-5">
        <div style={{ width: "100%" }}>
          <Row className="my-5">
            <h1>Search by Food</h1>
          </Row>
          <Row className="d-flex justify-content-between" style={{ width: "100%" }}>
            <Col><Categories /></Col>
            <Col><Categories /></Col>
            <Col><Categories /></Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

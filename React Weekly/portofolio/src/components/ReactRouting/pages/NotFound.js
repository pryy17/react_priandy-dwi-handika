import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          height: "100vh",
          textAlign: "center",
          backgroundColor: "Red",
          position: "absolute",
          width: "100%",
        }}
      >
        <h1 style={{ marginTop: "40vh"}}> Oops Halaman Tidak Di Temukan :(</h1>
        <Link to={"/"}>
          <button>HOME</button>
        </Link>
      </div>
    </div>
  );
}

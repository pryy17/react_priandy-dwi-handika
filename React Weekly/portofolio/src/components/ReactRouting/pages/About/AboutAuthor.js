import React from "react";
import Navbar from "../../components/Navbar";

export default function AboutAuthor() {
  return (
    <div>
        <Navbar text="about author"/>
      <div
        style={{
          color: "white",
          height: "100vh",
          backgroundColor: "purple",
          textAlign: "left",
          padding: "0 2em",
          position: "absolute"
        }}
      >
        <h1 style={{ paddingTop: "50vh" }}>About the Author</h1>
        <p>
          me is which is short for " application," is a type of software that
          can be installed and run on a computer, tablet, smartphone or other
          electronic devices. An app most frequently refers to a mobile
          application or a piece of software that is installed and used on a
          computer.
        </p>
      </div>
    </div>
  );
}

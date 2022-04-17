import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <div>
      <div className="topnav">
        <div><Link to="/homeRouting" className="list-nav">Home</Link></div>
        <div><Link to="/about" className="list-nav">About App</Link></div>
        {props.text === "about author" ? <div><Link to="about-author" className="list-nav">{props.text}</Link></div> : false}
        <div><Link to="/contact" className="list-nav">Contact</Link></div>
      </div>
    </div>
  );
}

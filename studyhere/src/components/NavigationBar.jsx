import React from "react";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <nav className="nav-bar">
      <h1 className="logo">StudyHere</h1>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Spaces</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
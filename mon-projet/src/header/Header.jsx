
import React from "react";
import "./Header.css";   // 👈 import du CSS dans le même dossier

export default function Header() {
  return (
    <header>
      <h2>Biona</h2>
      <nav className="navbar">
        <ul className="ul">
          <li className="list">
            <a href="/">Home <span className="arrow">▼</span></a>
            <div className="dropDown">
              <a href="/">Home 1</a>
              <a href="/">Home 2</a>
            </div>
          </li>
          <li><a href="/">Contact Us</a></li>
        </ul>
      </nav>
      <nav className="navbar2">
        <ul className="ul2">
          <li><a href="/">My Account</a></li>
          <li><a href="/">Cart</a></li>
        </ul>
      </nav>
    </header>
  );
}



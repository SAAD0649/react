import React from "react";


export default function Header() {
  return (
    <header>
      <h2>Biona</h2>

      <nav className="navbar">
        <ul className="ul">
          {/* Home */}
          <li className="list">
            <a href="#">
              Home <span className="arrow">▼</span>
            </a>
            <div className="dropDown">
              <a href="#">Home 1</a>
              <a href="#">Home 2</a>
              <a href="#">Home 3</a>
              <a href="#">Home 4</a>
              <a href="#">Home 5</a>
              <a href="#">Home 6</a>
              <a href="#">Home 7</a>
              <a href="#">Home 8</a>
            </div>
          </li>

          {/* Shop */}
          <li className="list">
            <a href="#">
              Shop <span className="arrow">▼</span>
            </a>
            <div className="dropDown">
              <a href="#">Categories</a>
              <a href="#">Products grid (Sidebar)</a>
              <a href="#">Single product 1</a>
              <a href="#">Single product 2</a>
              <a href="#">Single product 3</a>
            </div>
          </li>

          {/* Blog */}
          <li className="list">
            <a href="#">
              Blog <span className="arrow">▼</span>
            </a>
            <div className="dropDown">
              <a href="#">Blog</a>
              <a href="#">Blog (Sidebar)</a>
              <a href="#">Blog Three grid</a>
              <a href="#">Blog two grid (Sidebar)</a>
              <a href="#">Single Post</a>
              <a href="#">Single Post (Sidebar)</a>
            </div>
          </li>

          {/* Pages */}
          <li className="list">
            <a href="#">
              Pages <span className="arrow">▼</span>
            </a>
            <div className="dropDown">
              <a href="#">Blog</a>
              <a href="#">FAQ</a>
              <a href="#">Our story</a>
              <a href="#">Delivery</a>
              <a href="#">Our location</a>
              <a href="#">404</a>
              <a href="#">Documentation</a>
            </div>
          </li>

          {/* Contact */}
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>

      <nav className="navbar2">
        <ul className="ul2">
          <li><a href="#">My Account</a></li>
          <li><a href="#">Cart</a></li>
        </ul>
      </nav>
    </header>
  );
}


import React from "react";


export default function Footer() {
  return (
    <footer>
      <div className="line1">
        <h1>Biona</h1>
        <p>*These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose.</p>
        <p>Zemez © . All rights reserved.</p>
      </div>

      <div className="line2">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Blog</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </div>

      <div className="line3">
        <h3>Sign up for the newsletter</h3>
        <input type="email" id="email" placeholder="Enter Email" />
        <input type="submit" value="subscribe" className="subscribe" />
        <p>Contact for a Free Consultation:</p>
        <a href="tel:+18005553535">+1 8 800 555 35 35</a>
        <div className="loca">
          <img src="placeholder.png" alt="location" />
          <p>160 Broadway, New York, NY 10038,
            102 1st Avenue, New York, NY 100</p>
        </div>
      </div>
    </footer>
  );
}

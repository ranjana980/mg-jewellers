// Footer.js

import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: rc6307108245@gmail.com</p>
            <p>Phone: 6307108245</p>
            <p>Address: 123 Jewelry Street, City, Country</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <p>Stay connected on social media:</p>
            <div className="social-icons">
              <a href="#" className="social-icon">Facebook</a>
              <a href="#" className="social-icon">Instagram</a>
              <a href="#" className="social-icon">Twitter</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Manch Guru Jewelers. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

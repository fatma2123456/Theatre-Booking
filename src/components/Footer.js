import React from 'react';
import './Footer.css'; // Import your custom CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: example@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="col-md-4">
            <h5>Location</h5>
            <p>123 Street, City</p>
            <p>Country</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <h4>Join Our Newsletter</h4>
              <p>
                Subscribe to our newsletter and receive the latest news about
                our products and services!
              </p>
              <form
                action="forms/newsletter.php"
                method="post"
                className="php-email-form"
              >
                <div className="newsletter-form">
                  <input type="email" name="email" />
                  <input type="submit" defaultValue="Subscribe" />
                </div>
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your subscription request has been sent. Thank you!
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <h2 className="">GreenLight</h2>
            <div className="footer-contact pt-3">
              <p>Addis Ababa, Ethiopia</p>
              <p>Bole</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+251115174696</span>
              </p>
              <p>
                <strong>Email:</strong> <span>info@greenlight.com</span>
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i className="bi bi-chevron-right" /> <a href="#hero">Home</a>
              </li>
              <li>
                <i className="bi bi-chevron-right" /> <a href="#about">About us</a>
              </li>
              <li>
                <i className="bi bi-chevron-right" /> <a href="#services">Services</a>
              </li>
              <li>
                <i className="bi bi-chevron-right" /> <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <i className="bi bi-chevron-right" /> <a href="#team">Team</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <i className="bi bi-chevron-right" /> <span>Web Design</span>
              </li>
              <li>
                <i className="bi bi-chevron-right" />{" "}
                <span>Web Development</span>
              </li>
              <li>
                <i className="bi bi-chevron-right" />{" "}
                <span>Product Management</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12">
            <h4>Follow Us</h4>
            <div className="social-links d-flex">
              <a href>
                <i className="bi bi-linkedin" />
              </a>
              <a href>
                <i className="bi bi-twitter-x" />
              </a>
              <a href>
                <i className="bi bi-facebook" />
              </a>
              <a href>
                <i className="bi bi-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>
          <strong className="px-1 sitename">GreenLight Technology</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
        <div className="credits">
          Designed by <a href="#">GreenLight Technology</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/other-pages.css';

const Contact = () => {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Have questions or feedback? We'd love to hear from you!</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>We're here to help and answer any questions you might have. We look forward to hearing from you!</p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon"><i className="fas fa-envelope"></i></div>
                  <div className="method-details">
                    <h3>Email Us</h3>
                    <p>support@pt.com</p>
                    <p>For general inquiries: info@pt.com</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon"><i className="fas fa-phone-alt"></i></div>
                  <div className="method-details">
                    <h3>Call Us</h3>
                    <p>+1 (555) 123-4567</p>
                    <p>Monday to Friday, 9am - 5pm EST</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon"><i className="fas fa-map-marker-alt"></i></div>
                  <div className="method-details">
                    <h3>Visit Us</h3>
                    <p>123 Tech Lane, Suite 456</p>
                    <p>Flint, MI 48503</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon"><i className="fas fa-comments"></i></div>
                  <div className="method-details">
                    <h3>Live Chat</h3>
                    <p>Available on our website</p>
                    <p>7 days a week, 8am - 8pm EST</p>
                  </div>
                </div>
              </div>

              <div className="social-connect">
                <h3>Connect With Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="Enter your name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" name="email" placeholder="Enter your email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" name="subject" required>
                    <option value="" disabled>Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-about">
              <div className="footer-logo">
                <i className="fas fa-hands" style={{ marginRight: '10px' }}></i>
                PictureThis
              </div>
              <p className="footer-description">An educational app that bridges communication gaps through interactive sign language games and tools.</p>
              <div className="social-links">
                <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                <Link to="/"><i className="fab fa-twitter"></i></Link>
                <Link to="/"><i className="fab fa-instagram"></i></Link>
                <Link to="/"><i className="fab fa-youtube"></i></Link>
              </div>
            </div>

            <div className="footer-links">
              <h3>Learn</h3>
              <ul>
                <li><Link to="/">Content Modules</Link></li>
                <li><Link to="/">Communication Tools</Link></li>
              </ul>
            </div>

            <div className="footer-links">
              <h3>Community</h3>
              <ul>
                <li><Link to="/">Challenges</Link></li>
                <li><Link to="/">Leaderboards</Link></li>
              </ul>
            </div>

            <div className="footer-links">
              <h3>Support</h3>
              <ul>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          <div className="copyright">
            <p>&copy; 2025 PictureThis All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;

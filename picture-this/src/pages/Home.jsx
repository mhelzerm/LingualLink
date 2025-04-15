import React from 'react';
import { Link } from 'react-router-dom';
import '../css/main.css';

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Learn Sign Language With PictureThis</h1>
            <p>
              Bridge communication gaps with our fun, interactive games designed
              to teach American Sign Language and help build communication skills
              for all ages.
            </p>
            <Link to="/signup" className="cta-btn">
              Start Learning Now
            </Link>
          </div>
          <div className="hero-image">
            <img
              src="..\src\assets\logo.gif"
              alt="Picture This logo"
              width="400"
            />
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose PictureThis?</h2>
          <div className="features-grid">
            {[
              {
                icon: 'fa-gamepad',
                title: 'Fun Games',
                text: 'Learn through interactive games that make sign language easy and enjoyable to master.',
              },
              {
                icon: 'fa-users',
                title: 'Community Challenges',
                text: 'Challenge friends, track your progress, and compete on leaderboards.',
              },
              {
                icon: 'fa-comment-dots',
                title: 'Communication Tools',
                text: 'Build sentences with audio snippets and sign language to express needs and ideas.',
              },
              {
                icon: 'fa-laptop-code',
                title: 'Custom Content',
                text: 'Create and share your own content modules for games and communication.',
              },
              {
                icon: 'fa-universal-access',
                title: 'Accessible For All',
                text: 'Designed for all ages and abilities, with customizable accessibility options.',
              },
              {
                icon: 'fa-wifi-slash',
                title: 'Offline Mode',
                text: 'Download modules to practice and communicate even without an internet connection.',
              },
            ].map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <i className={`fas ${feature.icon}`}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps">
            {[
              {
                step: 1,
                title: 'Sign Up',
                text: 'Create your account and personalize your learning journey.',
              },
              {
                step: 2,
                title: 'Choose Modules',
                text: 'Select from various content modules based on your communication needs.',
              },
              {
                step: 3,
                title: 'Play Games',
                text: 'Learn through fun, interactive games that adapt to your skill level.',
              },
              {
                step: 4,
                title: 'Track Progress',
                text: 'Monitor your improvement and earn rewards as you advance.',
              },
            ].map((s, index) => (
              <div key={index} className="step">
                <div className="step-number">{s.step}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials section is empty, but included here if you want to fill it later */}
      <section className="testimonials">
        <div className="container"></div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-about">
              <div className="footer-logo">
                <i className="fas fa-hands" style={{ marginRight: '10px' }}></i>
                PictureThis
              </div>
              <p className="footer-description">
                An educational app that bridges communication gaps through
                interactive sign language games and tools.
              </p>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>

            <div className="footer-links">
              <h3>Learn</h3>
              <ul>
                <li><a href="#">Content Modules</a></li>
                <li><a href="#">Communication Tools</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h3>Community</h3>
              <ul>
                <li><a href="#">Challenges</a></li>
                <li><a href="#">Leaderboards</a></li>
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

export default Home;

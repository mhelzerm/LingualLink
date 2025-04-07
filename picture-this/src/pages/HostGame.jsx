import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/other-pages.css';

const modules = Array(8).fill({
  title: 'Spanish Lesson IV',
  author: 'maryborg2003',
  image: 'https://placehold.co/200x100',
});

const HostGame = () => {
  return (
    <div>
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <h1>Modules</h1>
          <p>Select a module below to start a new game!</p>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="modules">
        <div className="container">
          <div className="modules-grid">
            {modules.map((module, index) => (
              <div className="modules-card" key={index}>
                <div className="modules-icon">
                  <img src={module.image} alt={module.title} />
                </div>
                <h3>{module.title}</h3>
                <p>{module.author}</p>
                <Link to="/hostsettings" className="module-btn">Start Game</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-about">
              <div className="footer-logo">
                <i className="fas fa-hands" style={{ marginRight: '10px' }}></i>
                PictureThis
              </div>
              <p className="footer-description">
                An educational app that bridges communication gaps through interactive sign language games and tools.
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
    </div>
  );
};

export default HostGame;

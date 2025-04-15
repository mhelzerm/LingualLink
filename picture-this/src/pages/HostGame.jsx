import React from 'react';
import { Link } from 'react-router-dom';
import '../css/other-pages.css';

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
                An educational app that bridges communication gaps through
                interactive sign language games and tools.
              </p>
            </div>

            <div className="footer-links">
              <br />
              <div className="cta-buttons">
                <Link to="/faq" className="primary-btn">FAQ</Link>
              </div>
            </div>
            <div className="footer-links">
              <br />
              <div className="cta-buttons">
                <Link to="/communication" className="primary-btn">Communicate</Link>
              </div>
            </div>
            <div className="footer-links">
              <br />
              <div className="cta-buttons">
                <Link to="/game" className="primary-btn">Games</Link>
              </div>
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
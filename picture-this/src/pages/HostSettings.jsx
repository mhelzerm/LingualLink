import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/other-pages.css';

const HostSettings = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    players: '',
    visibility: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <section className="contact-section">
        <div className="container">
          <div className="contact-form-container">
            <h2>New Game</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="title">Game Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter title of game"
                  required
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description (optional)</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Enter description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="players">Max Number of Players</label>
                <input
                  type="number"
                  id="players"
                  name="players"
                  placeholder="Enter max number of players allowed"
                  required
                  value={formData.players}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="visibility">Private or Public Game</label>
                <select
                  id="visibility"
                  name="visibility"
                  required
                  value={formData.visibility}
                  onChange={handleChange}
                >
                  <option value="" disabled>Choose option</option>
                  <option value="public">Public Game</option>
                  <option value="private">Private Game</option>
                </select>
              </div>

              <Link to="/hostloading" className="cta-btn">Start Game</Link>
            </form>
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

export default HostSettings;
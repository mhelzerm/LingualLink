import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/other-pages.css';
import '../css/popup.css';
import '../css/singleplayer.css';
import axios from 'axios';

const SinglePlayer = () => {
  const [showLanguagePopup, setShowLanguagePopup] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/games`);
        setModules(res.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching game modules:', error);
        setLoading(false);
      }
    };
  
    fetchModules();
  }, []);
  

  const showLanguagePopupHandler = () => {
    setShowLanguagePopup(true);
    setSelectedLanguage(null);
  };

  const hideLanguagePopup = () => {
    setShowLanguagePopup(false);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
  };

  const startGame = (game_id) => {
    hideLanguagePopup();
    //alert(`Starting game in ${selectedLanguage === 'english' ? 'English' : 'Spanish'}`);
    // Add your redirect here using `useNavigate()` if needed
    console.log(modules[game_id - 1])
    console.log(game_id)
    navigate(`/game/${game_id}`)
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Single Player</h1>
          <p>Select a module below to start practicing sign language at your own pace!</p>
        </div>
      </section>

      <section className="modules">
        <div className="container">
          {loading ? (
            <p>Loading modules...</p>
          ) : (
            <div className="modules-grid">
              {modules.map((module) => (
                <div className="modules-card" key={module.game_id}>
                  <div className="modules-icon">
                    <img src={'https://placehold.co/200x100'} alt={module.game_name} />
                  </div>
                  <h3>{module.game_name}</h3>
                  <p>Creator Unknown</p>
                  <a
                    href="#"
                    className="module-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      startGame(module.game_id);
                    }}
                  >
                    Start Game
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Language selection popup - unchanged */}
      {showLanguagePopup && (
        <div className="popup-overlay" style={{ display: 'flex' }}>
          <div className="language-popup">
            <div className="popup-header">
              <h2>Select Your Language</h2>
              <p>Choose the language for game instructions and interface</p>
            </div>
            <div className="language-options">
              <div
                className={`language-option ${selectedLanguage === 'english' ? 'selected' : ''}`}
                onClick={() => selectLanguage('english')}
              >
                <div className="language-flag">
                  <i className="fas fa-flag-usa"></i>
                </div>
                <h3>English</h3>
              </div>

              <div
                className={`language-option ${selectedLanguage === 'spanish' ? 'selected' : ''}`}
                onClick={() => selectLanguage('spanish')}
              >
                <div className="language-flag">
                  <i className="fas fa-globe-americas"></i>
                </div>
                <h3>Español</h3>
              </div>
            </div>
            <div className="popup-actions">
              <button
                className="continue-btn"
                disabled={!selectedLanguage}
                onClick={startGame}
              >
                Continue
              </button>
              <button className="cancel-btn" onClick={hideLanguagePopup}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer stays the same */}
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
    </>
  );
};

export default SinglePlayer;

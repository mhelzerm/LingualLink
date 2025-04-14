import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Import the CSS in your main app file or component that loads this one
// import './css/other-pages.css';

const SinglePlayer = () => {
  const [showLanguagePopup, setShowLanguagePopup] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

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

  const startGame = () => {
    hideLanguagePopup();
    alert(`Starting game in ${selectedLanguage === 'english' ? 'English' : 'Spanish'}`);
    // Redirect would happen here
    // history.push(`/play-game?language=${selectedLanguage}`);
  };

  const modules = [
    { id: 1, title: 'Basic ASL Alphabet', creator: 'SignPlay Team', image: 'https://placehold.co/200x100' },
    { id: 2, title: 'Common Greetings', creator: 'micahh2023', image: 'https://placehold.co/200x100' },
    { id: 3, title: 'Family Members', creator: 'jclarke_asl', image: 'https://placehold.co/200x100' },
    { id: 4, title: 'Numbers 1-20', creator: 'aminata_d', image: 'https://placehold.co/200x100' },
    { id: 5, title: 'Colors and Shapes', creator: 'leeny_signs', image: 'https://placehold.co/200x100' },
    { id: 6, title: 'Food Items', creator: 'jeannew', image: 'https://placehold.co/200x100' },
    { id: 7, title: 'Daily Activities', creator: 'SignPlay Team', image: 'https://placehold.co/200x100' },
    { id: 8, title: 'Emergency Signs', creator: 'andreb_asl', image: 'https://placehold.co/200x100' }
  ];

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <Link to="/">
                <i className="fas fa-hands"></i>
                PictureThis
              </Link>
            </div>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="#" className="active">Games</Link></li>
              <li><Link to="#">Modules</Link></li>
              <li><Link to="#">Community</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
            <div className="auth-buttons">
              <Link to="/login" className="login-btn">Log In</Link>
              <Link to="/signup" className="signup-btn">Sign Up</Link>
            </div>
          </nav>
        </div>
      </header>

      <section className="page-header">
        <div className="container">
          <h1>Single Player</h1>
          <p>Select a module below to start practicing sign language at your own pace!</p>
        </div>
      </section>

      <section className="modules">
        <div className="container">
          <div className="modules-grid">
            {modules.map((module) => (
              <div className="modules-card" key={module.id}>
                <div className="modules-icon">
                  <img src={module.image} alt={module.title} />
                </div>
                <h3>{module.title}</h3>
                <p>{module.creator}</p>
                <a 
                  href="#" 
                  className="module-btn" 
                  onClick={(e) => {
                    e.preventDefault();
                    showLanguagePopupHandler();
                  }}
                >
                  Start Game
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Language Selection Popup */}
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

export default SinglePlayer;

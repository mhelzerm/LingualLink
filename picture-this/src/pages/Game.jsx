import React from 'react';
import { Link } from 'react-router-dom';
import '../css/main.css';
import '../css/games.css';

const Game = () => {
  return (
    <div>
      {/* Header */}
      <section className="app-header">
        <div className="container">
          <div className="app-header-content">
            <div className="app-header-left">
              <h1 className="header-title">Choose Your Game Mode</h1>
            </div>
            {/* Optional Right Side */}
            {/* <div className="app-header-right">
              <div className="points-badge">
                <i className="fas fa-crown crown-icon"></i>
                <span>42 Points</span>
              </div>
              <div className="user-avatar">MH</div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Main Game Options */}
      <main>
        <div className="container">
          <div className="game-options">
            <Link to="/singleplayer" className="game-option">
              <div className="option-icon">
                <i className="fas fa-user"></i>
              </div>
              <div className="option-content">
                <h3 className="option-title">Single Player</h3>
                <p className="option-description">
                  Practice at your own pace with our adaptive learning system. Perfect for beginners or advanced practice.
                </p>
              </div>
            </Link>

            <Link to="/game" className="game-option">
              <div className="option-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="option-content">
                <h3 className="option-title">(WIP) Host a Game</h3>
                <p className="option-description">
                  Create a multiplayer session and invite friends to join. You'll control the game settings and content modules.
                </p>
              </div>
            </Link>

            <Link to="/game" className="game-option">
              <div className="option-icon">
                <i className="fas fa-camera"></i>
              </div>
              <div className="option-content">
                <h3 className="option-title">(WIP) Join a Game</h3>
                <p className="option-description">
                  Enter a game code to join a friend's session. Challenge each other and learn sign language together!
                </p>
              </div>
            </Link>

            
          </div>
        </div>
      </main>

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

      {/* Bottom Navigation Tabs */}
      <div className="bottom-tabs">
        <div className="tab-items">
          <Link to="/" className="tab-item">
            <div className="tab-icon"><i className="fas fa-home"></i></div>
            <span className="tab-label">Home</span>
          </Link>
          <Link to="/modules" className="tab-item">
            <div className="tab-icon"><i className="fas fa-book"></i></div>
            <span className="tab-label">Modules</span>
          </Link>
          <Link to="/game" className="tab-item active">
            <div className="tab-icon"><i className="fas fa-gamepad"></i></div>
            <span className="tab-label">Games</span>
          </Link>
          <Link to="/profile" className="tab-item">
            <div className="tab-icon"><i className="fas fa-user"></i></div>
            <span className="tab-label">Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Game;
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
            <Link to="/hostgame" className="game-option">
              <div className="option-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="option-content">
                <h3 className="option-title">Host a Game</h3>
                <p className="option-description">
                  Create a multiplayer session and invite friends to join. You'll control the game settings and content modules.
                </p>
              </div>
            </Link>

            <Link to="/join" className="game-option">
              <div className="option-icon">
                <i className="fas fa-camera"></i>
              </div>
              <div className="option-content">
                <h3 className="option-title">Join a Game</h3>
                <p className="option-description">
                  Enter a game code to join a friend's session. Challenge each other and learn sign language together!
                </p>
              </div>
            </Link>

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
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-compact">
            <div className="footer-brand">
              <div className="footer-logo">
                <i className="fas fa-hands" style={{ marginRight: '10px' }}></i>
                PictureThis
              </div>
              <div className="copyright">
                <p>&copy; 2025 PictureThis All Rights Reserved</p>
              </div>
            </div>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
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
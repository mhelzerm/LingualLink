// Games.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Games = () => {
  return (
    <>
      {/* Website Header (Desktop) */}
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <i className="fas fa-hands" style={{ marginRight: '10px' }}></i>
              PictureThis
            </div>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/games" className="active">Games</Link></li>
              <li><Link to="/module">Modules</Link></li>
              <li><Link to="/community">Community</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
            <div className="auth-buttons">
              <Link to="/login" className="login-btn">Log In</Link>
              <Link to="/signup" className="signup-btn">Sign Up</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* App-style Header Section */}
      <section className="app-header">
        <div className="container">
          <div className="app-header-content">
            <div className="app-header-left">
              <h1 className="header-title">Choose Your Game Mode</h1>
            </div>
            {/*<div className="app-header-right">
              <div className="points-badge">
                <i className="fas fa-crown crown-icon"></i>
                <span>42 Points</span>
              </div>
              <div className="user-avatar">
                MH
              </div>
            </div>*/}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main>
        <div className="container">
          {/* Game Options */}
          <div className="game-options">
            {/* Host Game Option */}
            <Link to="/hostgame" className="game-option">
              <div className="option-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="option-content">
                <h3 className="option-title">Host a Game</h3>
                <p className="option-description">Create a multiplayer session and invite friends to join. You'll control the game settings and content modules.</p>
              </div>
            </Link>

            {/* Join Game Option */}
            <Link to="/join" className="game-option">
              <div className="option-icon">
                <i className="fas fa-camera"></i>
              </div>
              <div className="option-content">
                <h3 className="option-title">Join a Game</h3>
                <p className="option-description">Enter a game code to join a friend's session. Challenge each other and learn sign language together!</p>
              </div>
            </Link>

            {/* Single Player Option */}
            <Link to="/singleplayer" className="game-option">
              <div className="option-icon">
                <i className="fas fa-user"></i>
              </div>
              <div className="option-content">
                <h3 className="option-title">Single Player</h3>
                <p className="option-description">Practice at your own pace with our adaptive learning system. Perfect for beginners or advanced practice.</p>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Compact Footer */}
      <footer>
        <div className="container">
          <div className="footer-compact">
            <div className="footer-brand">
              <div className="footer-logo">
                <i className="fas fa-hands" style={{ marginRight: '10px' }}></i>
                PictureThis
              </div>
              <div className="copyright">
                <p>&copy; {new Date().getFullYear()} PictureThis All Rights Reserved</p>
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

      {/* Bottom Tab Navigation (Mobile Only) */}
      <div className="bottom-tabs">
        <div className="tab-items">
          <Link to="/" className="tab-item">
            <div className="tab-icon">
              <i className="fas fa-home"></i>
            </div>
            <span className="tab-label">Home</span>
          </Link>
          <Link to="/module" className="tab-item">
            <div className="tab-icon">
              <i className="fas fa-book"></i>
            </div>
            <span className="tab-label">Modules</span>
          </Link>
          <Link to="/games" className="tab-item active">
            <div className="tab-icon">
              <i className="fas fa-gamepad"></i>
            </div>
            <span className="tab-label">Games</span>
          </Link>
          <Link to="/profile" className="tab-item">
            <div className="tab-icon">
              <i className="fas fa-user"></i>
            </div>
            <span className="tab-label">Profile</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Games;

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/other-pages.css';

function Navbar() {
    return (
        <>
            <header>
                <div class="container">
                    <nav className="navbar">
                        <div class="logo">
                            <i class="fas fa-hands"></i>
                            PictureThis
                        </div>
                        <ul class="nav-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/communication">Communicate</Link></li>
                            <li><Link to="/game">Games</Link></li>
                            <li><Link to="#">Modules</Link></li>
                            <li><Link to="/contact">Community</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                        <div class="auth-buttons">
                            <Link to="login.html" class="login-btn">Log In</Link>
                            <Link to="signup.html" class="signup-btn">Sign Up</Link>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navbar;
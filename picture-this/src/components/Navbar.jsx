import React from 'react';
import { useOutletContext, Outlet, Link, useNavigate } from 'react-router-dom';
import '../css/other-pages.css';
import { useUser } from '../components/UserContext';  // Import the context
import { useState } from "react";

function Navbar() {
    const { user, logout } = useUser();
    const navigate = useNavigate();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <header>
                <div class="container">
                    <nav className="navbar">
                        {/*<div class="logo">
                            <i class="fas fa-hands"></i>
                            PictureThis
                        </div> */}
                        <Link to="/" className="logo" onClick={() => setMobileMenuOpen(false)}>
                            <i class="fas fa-hands"></i>
                            PictureThis
                        </Link>

                        {/* Hamburger icon for small screens */}
                        <div className="menu-icon" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                            <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                        </div>

                        {/* Navigation links */}
                        <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
                            <li><Link to="/communication" onClick={() => setMobileMenuOpen(false)}>Communicate</Link></li>
                            <li><Link to="/game" onClick={() => setMobileMenuOpen(false)}>Games</Link></li>
                            <li><Link to="#" onClick={() => setMobileMenuOpen(false)}>Modules</Link></li>
                            <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Community</Link></li>
                            <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
                            {/* Auth Buttons Inside Dropdown */}
                            <li className="auth-section">
                                {user ? (
                                    <>
                                        <span>Welcome, {user.fullname}!</span>
                                        <button className="avatar-nav" onClick={() => {
                                            navigate("/profile");
                                            setMobileMenuOpen(false);
                                        }}>
                                            {user.fullname.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')}
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/login" className="login-btn" onClick={() => setMobileMenuOpen(false)}>Log In</Link>
                                        <Link to="/signup" className="signup-btn" onClick={() => setMobileMenuOpen(false)}>Sign Up</Link>
                                    </>
                                )}
                            </li>
                        </ul>
                        {/* <div class="auth-buttons">
                            {user ? (
                                <>
                                    <span>Welcome, {user.username}!</span>
                                    <button onClick={() => {
                                        navigate("/profile")
                                    }}>
                                        Profile Icon
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" class="login-btn">Log In</Link>
                                    <Link to="/signup" class="signup-btn">Sign Up</Link>
                                </>
                            )}
                            
                            
                        </div>
                        */}
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navbar;
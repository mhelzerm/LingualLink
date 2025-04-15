import React from 'react';
import { Link } from 'react-router-dom';
import '../css/other-pages.css';

const FAQ = () => {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1>Frequently Asked Questions</h1>
                    <p>Find answers to common questions about PictureThis and our services.</p>
                </div>
            </section>

            <section className="faq-section">
                <div className="container">
                    <div className="faq-search">
                        <form>
                            <input type="text" placeholder="Search for a question..." id="faq-search-input" />
                            <button type="submit">
                                <i class="fas fa-search"></i>
                            </button>
                        </form>
                    </div>

                    <div className="faq-categories">
                        <button className="category-btn active" data-category="general">General</button>
                        <button className="category-btn" data-category="account">Account</button>
                        <button className="category-btn" data-category="features">Features</button>
                        <button className="category-btn" data-category="games">Games</button>
                        <button className="category-btn" data-category="troubleshooting">Troubleshooting</button>
                    </div>

                    <div className="faq-content">
                        <div className="faq-category" id="general">
                            <h2>General</h2>

                            <div className="accordion">
                                <div className="accordion-item">
                                    <div className="accordion-header">
                                        <h3>What is PictureThis?</h3>
                                        <i class="fas fa-chevron-down"></i>
                                    </div>
                                    <div className="accordion-content">
                                        <p>PictureThis is an educational app designed to teach American Sign Language through interactive games and activities. Our mission is to bridge communication gaps between hearing and non-hearing individuals by making sign language learning fun and accessible to everyone.</p>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <div className="accordion-header">
                                        <h3>Who can use PictureThis?</h3>
                                        <i class="fas fa-chevron-down"></i>
                                    </div>
                                    <div className="accordion-content">
                                        <p>PictureThis is designed for users of all ages and abilities. Whether you're a student, educator, parent, or someone interested in learning sign language for personal or professional reasons, our platform offers content suitable for various skill levels and learning objectives.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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

export default FAQ;

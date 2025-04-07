import React from 'react';
import '../css/other-pages.css';

const About = () => {
  return (
    <div>
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <h1>About PictureThis</h1>
          <p>Our mission is to bridge communication gaps through fun, interactive sign language learning.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="mission">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>PictureThis was founded with a simple but powerful mission: to create an educational platform that teaches sign language in a fun, engaging way while helping bridge communication gaps between hearing and non-hearing individuals.</p>
            <p>We believe that communication is a fundamental right, and our app serves as a tool for users who lack communication skills or knowledge to connect with others through audio, hand signals, or other languages.</p>
            <p>What makes us unique is our gamified approach to learning sign language, which makes the experience enjoyable while providing valuable skills that can improve lives.</p>
          </div>
          <div className="mission-image">
            <img src="https://placehold.co/500x300" alt="PictureThis mission visual" />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p className="section-intro">We're a passionate group of developers, educators, and communication specialists dedicated to making sign language learning accessible to everyone.</p>
          <div className="team-grid">
            {[
              { name: 'Mary Borg', title: 'Project Manager', bio: 'With a background in special education, Mary brings valuable insights into making our app accessible and effective for all users.' },
              { name: 'Andre Buclay', title: 'Lead Developer', bio: 'Andre\'s expertise in educational technology has been crucial in developing our interactive learning platform.' },
              { name: 'Jack Clarke', title: 'UX Designer', bio: 'Jack ensures our app is intuitive, engaging, and accessible for users of all ages and abilities.' },
              { name: 'Aminata Diop', title: 'Content Specialist', bio: 'Aminata develops our learning modules and ensures the accuracy of our sign language content.' },
              { name: 'Micah Helzerman', title: 'Game Developer', bio: 'Micah creates the engaging games that make learning sign language fun and effective.' },
              { name: 'Jeanne Weimer', title: 'Accessibility Specialist', bio: 'Jeanne ensures our app meets the needs of users with various abilities and learning styles.' },
              { name: 'Leen Yasin', title: 'Community Manager', bio: 'Leen fosters our user community and gathers feedback to help us continuously improve.' },
            ].map((member, index) => (
              <div className="team-member" key={index}>
                <div className="member-photo">
                  <img src="https://placehold.co/150x150" alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p className="member-title">{member.title}</p>
                <p className="member-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="vision">
        <div className="container">
          <div className="vision-content">
            <h2>Our Vision</h2>
            <p>We envision a world where communication barriers are broken down, and everyone has the tools they need to express themselves effectively.</p>
            <p>The future of PictureThis includes:</p>
            <ul>
              <li>Expanding our content to include more languages and dialects</li>
              <li>Enhancing our AI capabilities to provide more personalized learning experiences</li>
              <li>Building partnerships with schools and organizations to reach more users</li>
              <li>Developing advanced features to support those with diverse communication needs</li>
            </ul>
            <p>We're committed to continuous improvement and innovation in making communication accessible for all.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            {[
              { icon: 'fas fa-universal-access', title: 'Accessibility', text: 'We believe communication tools should be available to everyone, regardless of ability or background.' },
              { icon: 'fas fa-users', title: 'Community', text: 'We foster a supportive community where users can learn together and share their experiences.' },
              { icon: 'fas fa-lightbulb', title: 'Innovation', text: 'We continuously seek new ways to improve our platform and make learning more engaging.' },
              { icon: 'fas fa-hands-helping', title: 'Empowerment', text: 'We aim to empower individuals by giving them the tools they need to communicate effectively.' },
            ].map((value, index) => (
              <div className="value-card" key={index}>
                <div className="value-icon"><i className={value.icon}></i></div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Join Our Journey</h2>
          <p>Be part of our mission to make communication accessible for everyone.</p>
          <div className="cta-buttons">
            <a href="/signup" className="primary-btn">Sign Up Now</a>
            <a href="/contact" className="secondary-btn">Contact Us</a>
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
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
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

export default About;

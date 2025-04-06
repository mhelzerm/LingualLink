import { Link, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <nav className="navbar">
        <div class="logo">
          <i class="fas fa-hands" style="margin-right: 10px;"></i>
          PictureThis
        </div>
        <ul class="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="communication-tool.html">Communicate</Link></li>
          <li><Link to="game.html">Games</Link></li>
          <li><Link to="#">Modules</Link></li>
          <li><Link to="contact.html">Community</Link></li>
          <li><Link to="faq.html">About</Link></li>
        </ul>
        <div class="auth-buttons">
          <a href="login.html" class="login-btn">Log In</a>
          <a href="signup.html" class="signup-btn">Sign Up</a>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App

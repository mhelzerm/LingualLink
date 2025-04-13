import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import '../css/common.css';

function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    usertype: 'student'
  });
  const [showPassword, setShowPassword] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Signup attempt with:', formData);
    // Add your signup logic here
      e.preventDefault();
      const { fullname, email, password, usertype } = formData;
      
      try {
        await axios.post(`${import.meta.env.VITE_API_BASE_URL}/register`, { fullname, email, password, usertype });
        alert("User registered successfully!");
      } catch (err) {
          console.error(err.response?.data?.error || "Registration failed");
      }
    navigate("/login")
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="signup-header">
          <h1>Create Account</h1>
          <p>Join our ASL learning community</p>
        </div>
        
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="toggle-password"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          
          <div className="form-group">
            <label>I am a:</label>
            <div className="user-type-options">
              <label className={formData.usertype === 'student' ? 'active' : ''}>
                <input
                  type="radio"
                  name="usertype"
                  value="student"
                  checked={formData.usertype === 'student'}
                  onChange={handleChange}
                />
                Student
              </label>
              
              <label className={formData.usertype === 'user' ? 'active' : ''}>
                <input
                  type="radio"
                  name="usertype"
                  value="user"
                  checked={formData.usertype === 'user'}
                  onChange={handleChange}
                />
                Regular User
              </label>
              
              <label className={formData.usertype === 'parent' ? 'active' : ''}>
                <input
                  type="radio"
                  name="usertype"
                  value="parent"
                  checked={formData.usertype === 'parent'}
                  onChange={handleChange}
                />
                Parent/Guardian
              </label>
            </div>
          </div>
          
          <button type="submit" className="signup-button">
            Create Account
          </button>
        </form>
        
        <div className="signup-footer">
          <p>Already have an account? <a href="/login">Sign in</a></p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
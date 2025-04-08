import React, { useState } from 'react';
import './common.css';

function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    userType: 'student'
  });
  const [showPassword, setShowPassword] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup attempt with:', formData);
    // Add your signup logic here
    window.location.href = '/login';
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
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
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
              <label className={formData.userType === 'student' ? 'active' : ''}>
                <input
                  type="radio"
                  name="userType"
                  value="student"
                  checked={formData.userType === 'student'}
                  onChange={handleChange}
                />
                Student
              </label>
              
              <label className={formData.userType === 'user' ? 'active' : ''}>
                <input
                  type="radio"
                  name="userType"
                  value="user"
                  checked={formData.userType === 'user'}
                  onChange={handleChange}
                />
                Regular User
              </label>
              
              <label className={formData.userType === 'parent' ? 'active' : ''}>
                <input
                  type="radio"
                  name="userType"
                  value="parent"
                  checked={formData.userType === 'parent'}
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
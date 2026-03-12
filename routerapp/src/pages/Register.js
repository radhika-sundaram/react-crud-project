// src/pages/Register.js

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import bgImage from './Router-Images/register.jpeg'; // background image

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Background style
  const bgStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  // Handle form submission
  const handleRegister = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3001/register', { name, email, password })
      .then((res) => {
        alert(res.data);
        navigate('/login'); // Redirect to login page after successful registration
      })
      .catch((err) => {
        console.error(err);
        alert('Registration failed. Please try again.');
      });
  };

  return (
    <div style={bgStyle}>
      <div className="container">
        <div className="row justify-content-center">
           {/* No offsets, fully left-aligned */}
          <div className="col-11 col-sm-10 col-md-6 col-lg-4">

            <div
              className="card p-4 shadow-lg"
              style={{
                borderRadius: '10px',
                backgroundColor: 'rgba(222, 200, 61, 0.9)',
                width: '110%',
                
              }}
            >
              <h3 className="text-center mb-4 fw-bold">Register</h3>

              <form onSubmit={handleRegister}>
                {/* Name Input */}
                <div className="mb-3">
                  <label className="form-label fw-bold fs-5">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="mb-3">
                  <label className="form-label fw-bold fs-5">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Password Input */}
                <div className="mb-3">
                  <label className="form-label fw-bold fs-5">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="d-grid mt-4">
                  <button
                    type="submit"
                    className="btn btn-dark btn-sm fw-bold fs-5"
                  >
                    Register
                  </button>
                </div>
              </form>

              {/* Login Link */}
              <p className="text-center mt-4">
                <a href="/login" style={{ textDecoration: 'none' }}>
                  Already have an account? Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

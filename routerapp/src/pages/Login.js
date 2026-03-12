import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from './Router-Images/L1.jpeg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/login', { email, password })
  .then(res => {
    if (res.data.message === "Login successful") {
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/users');
    }
  })
  .catch(err => {
    if (err.response) {
      alert(err.response.data.message);
    } else {
      alert("Server not responding");
    }
  });
};
  const bgStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={bgStyle}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10 col-md-6 col-lg-4">
            <div className="card p-4 shadow-lg" style={{ borderRadius:"10px", backgroundColor:'rgba(222,200,61,0.9)', width:'100%', maxWidth:'500px', minHeight:'450px' }}>
              <h3 className="text-center mb-4 fw-bold">Login</h3>

              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="form-label fw-bold fs-5">Email</label>
                  <input type="email" className="form-control" placeholder="Enter your email" value={email} onChange={e=>setEmail(e.target.value)} required/>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold fs-5">Password</label>
                  <input type="password" className="form-control" placeholder="Enter your password" value={password} onChange={e=>setPassword(e.target.value)} required/>
                </div>
                <div className="d-grid mt-4">
                  <button type="submit" className="btn btn-dark btn-sm fw-bold fs-5">Login</button>
                </div>
              </form>

              <p className="text-center mt-4">
                <a href="/register" style={{ textDecoration: "none" }}>Don't have an account? Register</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

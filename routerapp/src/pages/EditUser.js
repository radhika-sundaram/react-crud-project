import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  // Fetch user data
  useEffect(() => {
    axios.get(`http://localhost:3001/users/${id}`)
      .then(res => setUser({ ...res.data, password: '' }))
      .catch(err => console.error(err));
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  // Handle form submit
  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/users/${id}`, user)
      .then(res => {
        alert(res.data);
        navigate('/users'); // back to user list
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Edit User</h2>
      <form onSubmit={handleUpdate} style={{ maxWidth: '500px', margin: 'auto' }}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input name="name" type="text" className="form-control" value={user.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input name="email" type="email" className="form-control" value={user.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input name="password" type="text" className="form-control" value={user.password} onChange={handleChange} />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-dark">Update User</button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;

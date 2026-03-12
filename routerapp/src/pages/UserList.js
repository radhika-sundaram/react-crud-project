// src/pages/UserList.js
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Get logged-in user
  const currentUser = JSON.parse(localStorage.getItem("user"));

  /*if (!currentUser) {
  return <Navigate to="/login" />;
}*/


const handleLogout = () => {
  localStorage.removeItem("user");
  navigate("/login");
};



 /* useEffect(() => {
    if (!currentUser){  navigate("/login");
    return;
  }

    if (currentUser.role === "admin") {
      // Admin → fetch all users
      axios.get("http://localhost:3001/users")
        .then(res => setUsers(res.data))
        .catch(err => console.error(err));
    } else {
      // Normal user → fetch only their own data
      axios.get(`http://localhost:3001/users/${currentUser.id}`)
        .then(res => setUsers([res.data]))  // wrap in array
        .catch(err => console.error(err));
    }
  }, [currentUser]);
  useEffect(() => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    navigate("/login");
    return;
  }

  if (user.role === "admin") {
    axios.get("http://localhost:3001/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  } else {
    axios.get(`http://localhost:3001/users/${user.id}`)
      .then(res => setUsers([res.data]))
      .catch(err => console.error(err));
  }

}, [navigate]);*/

useEffect(() => {

  const currentUser = JSON.parse(localStorage.getItem("user"));

  if (!currentUser){
    setUsers([]);
    return;
  }

  if (currentUser.role === "admin") {
    axios.get("http://localhost:3001/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  } else {
    axios.get(`http://localhost:3001/users/${currentUser.id}`)
      .then(res => setUsers([res.data]))
      .catch(err => console.error(err));
  }

}, []);

  // Delete user (admin only)
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios.delete(`http://localhost:3001/users/${id}`)
        .then(res => {
          alert(res.data);
          setUsers(users.filter(user => user.id !== id));
        })
        .catch(err => console.error(err));
    }
  };

  return (
    <div className="container mt-5">

  <div className="d-flex justify-content-between align-items-center mb-4">

    <div>
      <h4>Welcome {currentUser?.name}</h4>
      <small>Role: {currentUser?.role}</small>
    </div>

    <button className="btn btn-danger" onClick={handleLogout}>
      Logout
    </button>

  </div>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                {(currentUser.role === "admin" || currentUser.id === user.id) && (
                  <>
                    <button 
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => navigate(`/edit/${user.id}`)}
                    >
                      Edit
                    </button>
                    {currentUser.role === "admin" && (
                      <button 
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </button>
                    )}
                  </>
                )}
              </td>
            </tr>
          )) : (
            <tr><td colSpan="5" className="text-center">No users found</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList; 
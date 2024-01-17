import React, { useState } from 'react';
import usersData from '../data/users.json';
import adminsData from '../data/admin.json';
import './AdminDashboard.css';

function AdminDashboard() {
  const [users, setUsers] = useState(usersData);

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Welcome, Admin!</h1>
        <p className="lead">This is the admin-only dashboard. You can view and delete user information here.</p>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h3>Users:</h3>
          <ul className="list-group">
            {users.map(user => !user.isAdmin && (
              <li key={user.id} className="list-group-item">
                <span>Username: {user.username},Email: {user.Email}</span>
                <button
                  className="btn btn-danger btn-sm ml-2"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6">
          <h3>Admins:</h3>
          <ul className="list-group">
            {adminsData.map(admin => (
              <li key={admin.id} className="list-group-item">
                <span>Username: {admin.username}</span>
                {/* Display other admin details here */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

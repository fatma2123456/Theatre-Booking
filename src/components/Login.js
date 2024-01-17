import React from 'react';
import { Link } from 'react-router-dom';
import"../components/Login.css"
function Login() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Welcome to Theater Booking System</h2>
          <div className="d-flex justify-content-between">
            <Link to="/admin" className="btn btn-primary">
              Admin Login
            </Link>
            <Link to="/user" className="btn btn-secondary">
              User Login/Registration
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

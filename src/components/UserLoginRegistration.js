import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserByUsernameAndPassword } from '../services/api';

function UserLoginRegistration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const history = useNavigate();

  const handleLogin = () => {
    const user = getUserByUsernameAndPassword(username, password);
    if (user) {
      history('/');
    } else {
      setLoginError(true);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-center mb-4">User Login</h4>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={handleLogin}
                >
                  Login
                </button>
                {loginError && (
                  <p className="text-danger mt-2">Invalid credentials</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLoginRegistration;

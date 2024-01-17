import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLogin from './components/AdminLogin';
import UserLoginRegistration from './components/UserLoginRegistration';
import Home from './components/Home';
import AdminDashboard from './components/AdminDashboard';
import SignUp from './components/SignUp';
import Login from './components/Login';
import SeatAvailability from './components/SeatAvailability';
import Seatbook from './components/Seatbook';
import SeatCancellation from './components/SeatCancellation';
import Theater from './components/Theater';
import TheaterDetails from './components/TheaterDetails';
import Image from "../src/images/logo.png"
import"./App.css"
function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div className="container">
          
          <Link className="navbar-brand" to="/">
          <img src={Image} className='img' width={200} height={100}></img>
          </Link>
          
          <div className="navbar-nav-scrol" id="navbarNav">
            <ul className="navbar-nav bd-navbar-nav flex-row">

          

              <li className="nav-item">
                <Link className="nav-link" to="/theater">
                Theater
                </Link>
              </li>
             

              <li className="nav-item">
                <Link className="nav-link" to="/login">
                 Login
                </Link>
              </li>
             
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container  main-content mb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/user" element={<UserLoginRegistration />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path='/Login' element={<Login />} />
          <Route path="/seat-availability/:seatIds" element={<SeatAvailability />} />
          <Route path="/seat-booking/:seatIds" element={<Seatbook />} />
          <Route path="/seat-cancellation/:seatIds" element={<SeatCancellation />} />
          <Route path='/theater' element={<Theater />}/>
          <Route path="/theater/:theaterId" element={<TheaterDetails />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;

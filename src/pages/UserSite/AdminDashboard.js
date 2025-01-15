import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/AdminDashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('authToken');

    // Redirect the user to the login page
    navigate('/');
  };

  return (
    <div className="Admin-Dashboard">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Welcome</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Add Tutors</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Add Tutor Form */}
      <form className="add-tutor-form">
        <h3>Add a Tutor</h3>
        <div className="form-group">
          <label className="form-label">First Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label className="form-label">Last Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="form-group">
          <label className="form-label">Set Password</label>
          <input type="password" className="form-control" />
        </div>

        <div className="form-group">
          <button type="submit" className="btn submit-btn">Submit</button>
        </div>
      </form>

      {/* Logout Button */}
      <button className="logout-btn" onClick={handleLogout}>Log out</button>
    </div>
  );
}

export default Dashboard;

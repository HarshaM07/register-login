import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  // If user is not logged in
  if (!user) {
    return (
      <div className="message-container">
        <h2>You are not logged in</h2>
        <p>
          Please <Link to="/login">Login</Link> or <Link to="/register">Register</Link>.
        </p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user.name}</h2>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td>Date of Birth</td>
            <td>{user.dob}</td>
          </tr>
        </tbody>
      </table>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;

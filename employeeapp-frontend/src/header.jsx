import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'; // Import CSS file for styling
import logo from './logo/logo1.png'; // Import your logo image file

export default function Header() {
  const token = localStorage.getItem('token');

  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" /> {/* Logo */}
      <NavLink exact to="/" className="nav-link" activeClassName="active-link">Home</NavLink>
      <NavLink to="/employee-list" className="nav-link" activeClassName="active-link">Employee List</NavLink>
      <NavLink to="/create-employee" className="nav-link" activeClassName="active-link">Create Employee</NavLink>
      {token ? (
        <NavLink to="/logout" className="nav-link" activeClassName="active-link">Logout</NavLink>
      ) : null}
    </div>
  );
}

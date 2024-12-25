import React from "react";
import {
  FaCar,
  FaPlusCircle,
  FaQuestionCircle,
  FaSignInAlt,
  FaTachometerAlt,
} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "../styles/dashboard/sidenav.css";

type SideNavProps = object;

const SideNav: React.FC<SideNavProps> = () => {
  return (
    <div className="side_nav-container">
      <div className="logo-container">
        <FaGear className="logo-icon" />
        <h1 className="logo">
          IETP - G98 <span className="version">v0.1</span>
        </h1>
      </div>
      <nav className="side_nav-menu">
        <NavLink to="/dashboard" className="side_nav-item">
          <FaTachometerAlt className="side_nav-icon" />
          Dashboard
        </NavLink>
        <NavLink to="/traffic" className="side_nav-item">
          <FaCar className="side_nav-icon" />
          Traffic Analysis
        </NavLink>
        <NavLink to="/record" className="side_nav-item">
          <FaPlusCircle className="side_nav-icon" />
          Record driver
        </NavLink>
        <NavLink to="/help" className="side_nav-item">
          <FaQuestionCircle className="side_nav-icon" />
          Help
        </NavLink>
        <NavLink to="/login" className="side_nav-item">
          <FaSignInAlt className="side_nav-icon" />
          Login
        </NavLink>
      </nav>
      <div className="side_nav-footer">
        <NavLink to="/about" className="side_nav-footer-link">
          About Us
        </NavLink>
      </div>
    </div>
  );
};

export default SideNav;

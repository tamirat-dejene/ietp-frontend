import React from "react";
import {
  FaCar,
  FaPlusCircle,
  FaQuestionCircle,
  FaTachometerAlt,
} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/dashboard/sidenav.css";
import { LogoutButton } from "../ui/form_components";
import { BiLogIn, BiLogOut } from "react-icons/bi";

const SideNav: React.FC<{
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
}> = ({ loggedIn, setLoggedIn }) => {
  const navigate = useNavigate();
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
        {!loggedIn && (
          <NavLink to="/login" className="side_nav-item">
            <BiLogIn className="side_nav-icon" />
            Login
          </NavLink>
        )}

        {loggedIn && (
          <LogoutButton
            className="side_nav-item"
            onClick={() => {
              localStorage.removeItem("token");
              setLoggedIn(false);
              navigate("/login");
            }}
          >
            <BiLogOut className="side_nav-icon" />
            Logout
          </LogoutButton>
        )}
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

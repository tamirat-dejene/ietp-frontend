import React from 'react';
import { FaTachometerAlt, FaCarCrash, FaQuestionCircle } from 'react-icons/fa';
import '../../styles/dashboard/sidenav.css';
import { FaGear } from 'react-icons/fa6';

type SideNavProps = object;

const SideNav: React.FC<SideNavProps> = () => {
    return (
        <div className="side_nav-container">
            <div className="logo-container">
                <FaGear className="logo-icon" />
                <h1 className="logo">IETP - G98 <span className="version">v0.1</span></h1>
            </div>
            <nav className="side_nav-menu">
                <a href="#dashboard" className="side_nav-item">
                    <FaTachometerAlt className="side_nav-icon" />
                    Dashboard
                </a>
                <a href="#speeding" className="side_nav-item">
                    <FaCarCrash className="side_nav-icon" />
                    Speeding
                </a>
                <a href="#help" className="side_nav-item">
                    <FaQuestionCircle className="side_nav-icon" />
                    Help
                </a>
            </nav>
            <div className="side_nav-footer">
                <a href="#about" className="side_nav-footer-link">About</a>
            </div>
        </div>
    );
};

export default SideNav;

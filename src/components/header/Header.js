import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import logo from './planet.png';

export default function Header() {
  return (
    <header>
      <div className="header-left">
        <img src={logo} alt="logo" className="logo" />
        <h1>Space Travelers Hub</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/space-travelers/" className={(navData) => (navData.isActive ? 'active-style' : 'none')}>
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink to="/space-travelers/missions" className={(navData) => (navData.isActive ? 'active-style' : 'none')}>
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink to="/space-travelers/my-profile" className={(navData) => (navData.isActive ? 'active-style' : 'none')}>
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

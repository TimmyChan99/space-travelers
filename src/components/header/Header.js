import React from 'react';
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
          <li>Rockets</li>
          <li>Missions</li>
          <li>My Profile</li>
        </ul>
      </nav>
    </header>
  );
}

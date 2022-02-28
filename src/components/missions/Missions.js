import React from 'react';
import missionsDatas from '../../datas/missions';
import Mission from './Mission';
import './missions.css';

export default function Missions() {
  const missions = missionsDatas;

  return (
    <div className="missions-container">
      <div className="header-missions">
        <div className="mission-name-header">Mission</div>
        <div className="mission-description-header">Description</div>
        <div className="mission-status-header">Status</div>
        <div className="mission-other-header">#</div>
      </div>
      {missions.map((mission) => (
        <Mission key={mission.missionId} mission={mission} />
      ))}
    </div>
  );
}

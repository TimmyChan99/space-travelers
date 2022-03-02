import React from 'react';
import { useSelector } from 'react-redux';
import './profile.css';

export default function Profile() {
  const missionsList = useSelector((state) => state.missionsReducer.missions);
  const rockets = useSelector((state) => state.rocketsReducer.data);
  const reservedRockets = rockets ? rockets.filter((rocket) => rocket.reserved === true) : [];
  const missions = missionsList || [];

  return (
    <div className="my-profile">
      <section className="rockets-section">
        <h2>My Rockets</h2>
        <ul>
          {reservedRockets.map((rocket) => (
            <li key={rocket.id}>{rocket.rocket_name}</li>
          ))}
        </ul>
      </section>
      <section className="missions-section">
        <h2>My Missions </h2>
        <ul>
          {missions
            .filter((mission) => mission.status)
            .map((filteredMission) => (
              <li key={filteredMission.missionId}>
                {filteredMission.missionName}
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}

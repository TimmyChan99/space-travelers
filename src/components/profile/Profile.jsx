import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {
  const missionsList = useSelector((state) => state.missionsReducer.missions);
  const rockets = useSelector((state) => state.rocketsReducer.data);
  const reservedRockets = rockets ? rockets.filter((rocket) => rocket.reserved === true) : [];
  const missions = missionsList || [];

  return (
    <>
      <div>My Profile</div>
      <section className="rockets-section">
        <h2>My Rockets</h2>
        <ul>
          {reservedRockets.map((rocket) => (
            <li key={rocket.id}>{rocket.rocket_name}</li>
          ))}
        </ul>
      </section>
      <div>
        <h2>My missions : </h2>
        <div>
          {missions
            .filter((mission) => mission.status)
            .map((filteredMission) => (
              <li key={filteredMission.missionId} className="mission-name">
                {filteredMission.missionName}
              </li>
            ))}
        </div>
      </div>
    </>
  );
}

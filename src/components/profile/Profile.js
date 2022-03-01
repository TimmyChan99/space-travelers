import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissionsDispatcher } from '../../redux/missions/missions';

export default function Profile() {
  const dispatch = useDispatch();
  const missionsDatas = useSelector((state) => state.missionsReducer);

  const rockets = useSelector((state) => state.rocketsReducer.data);
  const reservedRockets = rockets ? rockets.filter((rocket) => rocket.reserved === true) : [];

  useEffect(() => {
    dispatch(getMissionsDispatcher());
  }, []);

  const missionsList = missionsDatas.data;
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

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissionsDispatcher } from '../../redux/missions/missions';

export default function Profile() {
  const dispatch = useDispatch();
  const missionsDatas = useSelector((state) => state.missionsReducer);

  useEffect(() => {
    dispatch(getMissionsDispatcher());
  }, []);

  const missionsList = missionsDatas.data;
  const missions = missionsList || [];

  return (
    <>
      <div>My Profile</div>
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

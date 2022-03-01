import React from 'react';
import PropTypes from 'prop-types';

export default function Mission({ mission }) {
  const handleJoinMission = (id) => {
    console.log(id);
  };
  const handleLeaveMission = (id) => {
    console.log(id);
  };

  const status = mission.status ? (
    <div className="active-mb"> Active Member</div>
  ) : (
    <div className="no-active-mb"> NOT A MEMBER</div>
  );

  const missionBt = !mission.status ? (
    <button
      type="button"
      className="join-mission-bt"
      onClick={() => handleJoinMission(mission.missionId)}
    >
      Join Mission
    </button>
  ) : (
    <button
      type="button"
      className="leave-mission-bt"
      onClick={() => handleLeaveMission(mission.missionId)}
    >
      Leave Mission
    </button>
  );

  return (
    <div className="mission-container">
      <div className="mission-name">{mission.missionName}</div>
      <div className="mission-description">{mission.description}</div>
      {status}
      {missionBt}
    </div>
  );
}

Mission.propTypes = {
  mission: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

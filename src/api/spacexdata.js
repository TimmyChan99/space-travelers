import axios from 'axios';

const missionAPI = 'https://api.spacexdata.com/v3/missions';

export const getMissionsFromAPI = async () => {
  const getData = await axios.get(missionAPI);
  const missions = [];
  getData.data.forEach((item) => {
    missions.push({
      missionId: item.mission_id,
      missionName: item.mission_name,
      description: item.description,
      status: false,
    });
  });
  return missions;
};

export default getMissionsFromAPI;

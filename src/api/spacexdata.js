import axios from 'axios';

const rocketAPI = 'https://api.spacexdata.com/v3/rockets';
const missionAPI = 'https://api.spacexdata.com/v3/missions';

export const fetchRocketsAPI = async () => {
  const getData = await axios.get(rocketAPI);
  const res = getData.data;
  const Rockets = [];
  res.forEach((item) => {
    const obj = {};
    obj.id = item.id;
    obj.rocket_name = item.rocket_name;
    obj.description = item.description;
    const firstImage = item.flickr_images[0];
    obj.image = firstImage;
    Rockets.push(obj);
  });
  return Rockets;
};

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

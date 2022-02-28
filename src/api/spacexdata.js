import axios from 'axios';

const rocketAPI = 'https://api.spacexdata.com/v3/rockets';

const fetchRocketsAPI = async () => {
  const getData = await axios.get(rocketAPI);
  const res = getData;
  console.log(res.data);
};

export default fetchRocketsAPI;

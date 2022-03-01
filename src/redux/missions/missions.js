import { getMissionsFromAPI } from '../../api/spacexdata';

const GET_MISSIONS = 'space-travelers/missions/GET_MISSIONS';
const initialState = {};

export const getMissions = (data) => ({
  type: GET_MISSIONS,
  payload: data,
});

export const getMissionsDispatcher = () => async (dispatch) => {
  const missions = await getMissionsFromAPI();
  dispatch(getMissions(missions));
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default missionsReducer;

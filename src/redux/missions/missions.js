import { getMissionsFromAPI } from '../../api/spacexdata';

const INITIALIZE_MISSIONS = 'space-travelers/missions/INITIALIZE_MISSIONS';
const GET_MISSIONS = 'space-travelers/missions/GET_MISSIONS';
const TOGGLE_MISSION = 'space-travelers/missions/TOGGLE_MISSION';

const initialState = {};

export const initializeMissions = (data) => ({
  type: INITIALIZE_MISSIONS,
  payload: data,
});

export const initializeMissionsDispatcher = () => async (dispatch) => {
  const missions = await getMissionsFromAPI();
  dispatch(initializeMissions(missions));
};

export const getMissions = () => ({
  type: GET_MISSIONS,
});

export const getMissionsDispatcher = () => async (dispatch) => {
  dispatch(getMissions());
};

export const toggleMission = (data) => ({
  type: TOGGLE_MISSION,
  payload: data,
});

export const toggleMissionDispatcher = (id) => (dispatch) => dispatch(toggleMission(id));

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_MISSIONS:
      return {
        ...state,
        data: action.payload,
      };
    case GET_MISSIONS:
      return {
        ...state,
      };
    case TOGGLE_MISSION: {
      const s = state.data.map((e) => {
        if (e.missionId === action.payload) {
          return { ...e, status: !e.status };
        }
        return e;
      });
      return {
        ...state,
        data: s,
      };
    }
    default:
      return state;
  }
};

export default missionsReducer;

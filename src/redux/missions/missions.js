import { getMissionsFromAPI } from '../../api/spacexdata';

const INITIALIZE_MISSIONS = 'space-travelers/missions/INITIALIZE_MISSIONS';
const GET_MISSIONS = 'space-travelers/missions/GET_MISSIONS';
const JOIN_LEAVE_MISSION = 'space-travelers/missions/JOIN_MISSION';

const initialState = {
  isMissionsStored: false,
};

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

export const joinMission = (data) => ({
  type: JOIN_LEAVE_MISSION,
  payload: data,
});

export const joinMissionDispatcher = (id) => (dispatch) => dispatch(joinMission(id));
export const leaveMissionDispatcher = (id) => (dispatch) => dispatch(joinMission(id));

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_MISSIONS:
      return {
        ...state,
        isMissionsStored: true,
        data: action.payload,
      };
    case GET_MISSIONS:
      return {
        ...state,
      };
    case JOIN_LEAVE_MISSION: {
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

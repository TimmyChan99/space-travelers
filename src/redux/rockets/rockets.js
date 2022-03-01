import fetchRocketsAPI from "../../api/spacexdata";
const STORE_ROCKETS = 'space-travelers/rockets/STORE_ROCKETS';

const initialState = {
  isDataStored: false,
};

export const storeRockets = (data) => ({
  type: STORE_ROCKETS,
  payload: data,
});

export const getRocketsDispatcher = () => async (dispatch) => {
  const rockets = await fetchRocketsAPI(); 
   dispatch(storeRockets(rockets))
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_ROCKETS:
      return {
        ...state,
        isDataStored: true,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default rocketsReducer;

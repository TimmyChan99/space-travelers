import fetchRocketsAPI from '../../api/spacexdata';

const GET_ROCKETS = 'space-travelers/rockets/GET_ROCKETS';

const initialState = {
  isDataStored: false,
};

export const getRockets = (data) => ({
  type: GET_ROCKETS,
  payload: data,
});

export const getRocketsDispatcher = () => async (dispatch) => {
  const rockets = await fetchRocketsAPI();
  dispatch(getRockets(rockets));
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
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

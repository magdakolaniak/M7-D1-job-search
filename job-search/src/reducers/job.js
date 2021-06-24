import { initialState } from '../store';

const jobReducer = (state = initialState.allOffers, action) => {
  switch (action.type) {
    case 'GET_JOBS':
      return {
        ...state,
        jobs: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
export default jobReducer;

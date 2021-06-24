import { initialState } from '../store';

const listReducer = (state = initialState.list, action) => {
  switch (action.type) {
    case 'ADD_TO_LIST':
      return {
        ...state,
        companies: [...state.companies, action.payload],
      };
    case 'REMOVE_FROM_LIST':
      let newList = state.companies.filter(
        (job, index) => index !== action.payload
      );
      return {
        ...state,
        companies: newList,
      };
    default:
      return state;
  }
};
export default listReducer;

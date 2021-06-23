import { initialState } from '../store';

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_LIST':
      return {
        ...state,
        list: {
          ...state.list,
          companies: [...state.list.companies, action.payload],
        },
      };
    default:
      return state;
  }
};
export default mainReducer;

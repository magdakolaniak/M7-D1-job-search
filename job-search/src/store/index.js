import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import listReducer from '../reducers/list';
import jobReducer from '../reducers/job';
import thunk from 'redux-thunk';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export const initialState = {
  list: {
    companies: [],
  },
  allOffers: {
    jobs: [],
    error: false,
    loading: false,
  },
};

const bigReducer = combineReducers({
  list: listReducer,
  allOffers: jobReducer,
});

const configureStore = () =>
  createStore(
    bigReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );

export default configureStore;

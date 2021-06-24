export const addCompanyToListAction = (company) => {
  return {
    type: 'ADD_TO_LIST',
    payload: company,
  };
};
export const removeFromListAction = (index) => ({
  type: 'REMOVE_FROM_LIST',
  payload: index,
});

export const getJobsAction = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SET_LOADING',
        payload: true,
      });
      let response = await fetch(
        `https://remotive.io/api/remote-jobs?search=frontend`
      );
      if (response.ok) {
        let res = await response.json();
        let data = res.jobs;

        dispatch({
          type: 'GET_JOBS',
          payload: data,
        });
        dispatch({
          type: 'SET_LOADING',
          payload: false,
        });
        dispatch({
          type: 'SET_ERROR',
          payload: false,
        });
      } else {
        console.log('error while fetching');
        dispatch({
          type: 'SET_LOADING',
          payload: false,
        });
        dispatch({
          type: 'SET_ERROR',
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'SET_LOADING',
        payload: false,
      });
      dispatch({
        type: 'SET_ERROR',
        payload: true,
      });
    }
  };
};

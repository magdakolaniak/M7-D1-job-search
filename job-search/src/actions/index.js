export const addCompanyToListAction = (company) => {
  return {
    type: 'ADD_TO_LIST',
    payload: company,
  };
};

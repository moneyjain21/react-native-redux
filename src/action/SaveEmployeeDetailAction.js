export const SaveEmployeeDetails = (employeeDetails) => ({
  type: 'SAVE_EMPLOYEE_DETAIL',
  employeeDetails: {
    name: employeeDetails.name,
    schoolName: employeeDetails.schoolName,
    companyName: employeeDetails.companyName,
  },
});

export const getDetailSuccess = (data) => ({
  type: 'GET_DETAIL_SUCCESS',
  data: data,
});

export const getDetailFailure = (error) => ({
  type: 'GET_DETAIL_ERROR',
  error: error,
});

export const callWebService = () => {
  return (dispatch) => {
    fetch('http://api.tvmaze.com/shows/1/cast')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        dispatch(getDetailSuccess(json));
      })
      .catch((error) => {
        console.log(error);
        dispatch(getDetailFailure(error));
      });
  };
};

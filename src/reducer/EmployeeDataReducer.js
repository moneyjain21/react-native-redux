const initialState = {
  data: {},
  error: undefined,
};
const EmployeeDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DETAIL_ERROR': {
      return {
        ...state,
        error: action.error,
      };
    }
    case 'GET_DETAIL_SUCCESS': {
      return {
        ...state,
        data: action.data,
      };
    }
    default: {
      return state;
    }
  }
};
export default EmployeeDataReducer;

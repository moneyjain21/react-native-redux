import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import EmployeeDetailReducer from '../reducer/EmployeeDetailReducer';
import EmployeeDataReducer from '../reducer/EmployeeDataReducer';

const rootReducer = combineReducers({
  EmployeeDetailReducer: EmployeeDetailReducer,
  EmployeeDataReducer: EmployeeDataReducer,
});

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;

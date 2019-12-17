import { combineReducers } from 'redux';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    // put your reducer here
    login: loginReducer,
});

export default rootReducer;

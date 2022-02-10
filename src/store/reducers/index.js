import { combineReducers } from 'redux';
import authReducer from './authReducer';
import camReducer from './camReducer';

export default combineReducers({
    auth: authReducer,
    stream: camReducer
});
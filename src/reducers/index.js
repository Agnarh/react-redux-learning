import {combineReducers} from 'redux';
import courses from './courseReducer';

var rootReducer = combineReducers({
    courses
});

export default rootReducer;
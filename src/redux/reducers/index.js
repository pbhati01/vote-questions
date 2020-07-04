import { combineReducers } from 'redux';
import questions from './questions';
import modal from './modal';

export default combineReducers({
    questions,
    modal
});

import initialState from '../initialState';
import * as actionTypes from '../actions/types';

const updateSelectedQuestion = (state, data) => {
  let { selectedQuestion } = state;
  const selectedChoiceIdx = selectedQuestion.choices.findIndex(choice => choice.choice ===  data.choice);
  selectedQuestion.choices[selectedChoiceIdx] = data;
  return {...selectedQuestion};
}

const questions = (state = initialState.questions, action) => {
  switch (action.type) {
    case actionTypes.LOAD_APP_ROOT: 
      return ({...state, url: action.url});
    case actionTypes.LOAD_QUESTIONS:
      return ({...state, data: action.data});
    case actionTypes.LOAD_SELECTED_QUESTIONS:
      return ({...state, selectedQuestion: action.data});
    case actionTypes.UPDATE_SELECTED_QUESTIONS:
      const selectedQuestion = updateSelectedQuestion(state, action.data);
      return ({...state, selectedQuestion});      
    default:
      return state;
  }
}

export default questions;

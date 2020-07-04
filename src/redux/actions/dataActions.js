import * as ACTION_TYPES from './types';
import * as services from '../../api';

export const loadAppRoot = (url) => ({
  type: ACTION_TYPES.LOAD_APP_ROOT,
  url
});
export const loadQuestions = (data) => ({
  type: ACTION_TYPES.LOAD_QUESTIONS,
  data
});
export const loadSelectedQuestion = (data) => ({
  type: ACTION_TYPES.LOAD_SELECTED_QUESTIONS,
  data
});
export const updateSelectedQuestion = (data) => ({
  type: ACTION_TYPES.UPDATE_SELECTED_QUESTIONS,
  data
});
export const showModal = (data) => ({
  type: ACTION_TYPES.SHOW_MODAL,
  data
});
export const hideModal = (data) => ({
  type: ACTION_TYPES.HIDE_MODAL,
  data
});
export const fetchAppRoot = (redirectToQuestions) => {
  return (dispatch) => {
    services
    .fetchAppRoot()
    .then(res => {
      const url = res.data.questions_url;
      dispatch(loadAppRoot(url));
      redirectToQuestions(url);
    })
    .catch(err => {
      if(err.response) {
        const { status } = err.response;
        if (status === 404){
          dispatch(showModal({
            title: 'Error',
            content: 'No data found.'
          }));      
        } else{
          dispatch(showModal({
            title: 'Error',
            content: 'Error while fetching repository data. Please try again.'
          }));
        }
      }
    });
  };
};
export const fetchQuestions = (questionsUrl) => {
  return (dispatch) => {
    services
    .fetchQuestions(questionsUrl)
    .then(res => {
      dispatch(loadQuestions(res.data));
    })
    .catch(err => {
      if(err.response) {
        const { status } = err.response;
        if (status === 404){
          dispatch(showModal({
            title: 'Error',
            content: 'No data found.'
          }));      
        } else{
          dispatch(showModal({
            title: 'Error',
            content: 'Error while fetching repository data. Please try again.'
          }));
        }
      }
    });
  };
};
export const fetchQuestionDetails = (url) => {
  return (dispatch) => {
    services
    .fetchQuestionDetails(url)
    .then(res => {
      dispatch(loadSelectedQuestion(res.data));
    })
    .catch(err => {
      if(err.response) {
        const { status } = err.response;
        if (status === 404){
          dispatch(showModal({
            title: 'Error',
            content: 'No data found.'
          }));      
        } else{
          dispatch(showModal({
            title: 'Error',
            content: 'Error while fetching repository data. Please try again.'
          }));
        }
      }
    });
  };
};
export const saveVote = (url) => {
  return (dispatch) => {
    services
    .saveVote(url)
    .then(res => {
      dispatch(updateSelectedQuestion(res.data));
      dispatch(showModal({
        title: 'Status',
        content: 'You have voted successfully.'
      })); 
    })
    .catch(err => {
      const { status } = err.response;
      if (status === 404){
        dispatch(showModal({
          title: 'Error',
          content: 'No data found.'
        }));      
      } else {
        dispatch(showModal({
          title: 'Error',
          content: 'Error while fetching repository data. Please try again.'
        }));
      }
    });
  };
};  
export const createQuestion = (url, question) => {
  return (dispatch) => {  
    services
    .createQuestion(url, question)
    .then(res => {
      dispatch(showModal({
        title: 'Status',
        content: 'Question created successfully.'
      }));
    })
    .catch(err => {
      if(err.response) {
        const { status } = err.response;
        if (status === 404){
          dispatch(showModal({
            title: 'Error',
            content: 'No data found.'
          }));      
        } else{
          dispatch(showModal({
            title: 'Error',
            content: 'Error while fetching repository data. Please try again.'
          }));
        }
      }
    });
  };
};
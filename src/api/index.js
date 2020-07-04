import axios from 'axios';

export const fetchAppRoot = () => axios.get('https://polls.apiblueprint.org/');
export const fetchQuestions = (url) => axios.get(`https://polls.apiblueprint.org${url}`);
export const fetchQuestionDetails = (url) => axios.get(`https://polls.apiblueprint.org${url}`);
export const saveVote = (url) => axios.post(`https://polls.apiblueprint.org${url}`);
export const createQuestion = (url, question) => axios.post(`https://polls.apiblueprint.org${url}`, question);
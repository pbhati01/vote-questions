import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUseStyles, useTheme } from 'react-jss';
import { Button, Table, tbody, tr, td } from 'react-bootstrap';
import { dataActions } from '../../redux/actions';
import { getAppRoot, getQuestions } from '../../redux/selectors';
import styles from './Questions.styles';

const useStyles = createUseStyles(styles);

const Questions = ({ history }) => {
  const theme = useTheme();
  const classes = useStyles({
    theme
  });
  const appRoot = useSelector(getAppRoot);
  const questions = useSelector(getQuestions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataActions.fetchQuestions(appRoot));
  }, []);

  const getQuestionsDetails = (question) => {
    dispatch(dataActions.loadSelectedQuestion(question))
    history.push(question.url);
  }

  const createNewQuestion = () => {
    history.push('question/create')
  }

  const getQuestionsHtml = () => {
    return questions.map((item, key) => {
      const { question, published_at, choices } = item;
      return (<tr key={`question-${key}`} onClick={() => getQuestionsDetails(item)}>
        <td className={classes.question}>{question}</td>
        <td>{published_at}</td>
        <td>{choices.length}</td>
      </tr>);
    }); 
  }

  return (
    <section className={classes.questionsContainer}>
      <h2>Questions</h2>
      <div className={classes.actionBtn}>
        <Button name='createNew' variant='secondary' size='sm' onClick={createNewQuestion}>Create New</Button>
      </div>
      <Table >
      <tbody>
          {questions && questions.length > 0 ?
          getQuestionsHtml()
          :
          <tr><td colSpan='3'>No question to vote</td></tr>}
        </tbody>
      </Table>
    </section>
  );
}

export default Questions;
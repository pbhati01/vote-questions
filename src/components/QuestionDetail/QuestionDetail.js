import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUseStyles, useTheme } from 'react-jss';
import { Button, Table, tbody, tr, td } from 'react-bootstrap';
import { dataActions } from '../../redux/actions';
import { getAppRoot, getSelectedQuestion } from '../../redux/selectors';
import styles from './QuestionDetail.styles';

const useStyles = createUseStyles(styles);

const QuestionDetail = (props) => {
  const theme = useTheme();
  const classes = useStyles({
    theme
  });
  const [selectedChoice, setSelectedChoice] = useState('');
  const appRoot = useSelector(getAppRoot);
  const selectedQuestion = useSelector(getSelectedQuestion);
  const dispatch = useDispatch();

  const saveVote = () => {
    dispatch(dataActions.saveVote(selectedChoice.url));
  }

  const goBack = () => {
    props.history.push(appRoot); 
  }
  
  const getQuestionChoicesHtml = () => {
    return selectedQuestion.choices.map((choice, key) => {
      const percentage = Math.abs((choice.votes/selectedQuestion.choices.length) * 100);
      return (<tr key={`choice_${key}`}>
        <td>{choice.choice}</td>
        <td>{choice.votes}</td>
        <td>{percentage}%</td>
        <td><input type='radio' onChange={() => setSelectedChoice(choice)} checked={choice.choice === selectedChoice.choice}/></td>
      </tr>);
    });
  }

  return (
    <section className={classes.questionDetailsContainer}>
      <h2>Question Detail</h2>
      <h5>Question: {selectedQuestion.question}</h5>
      <Table>
        <tbody>
          {selectedQuestion.choices && selectedQuestion.choices.length > 0 ?
          getQuestionChoicesHtml()
          :
          <tr><td colSpan='4'>No Choices Found</td></tr>}
        </tbody>
      </Table>
      <div className={classes.actionBtn}>
        <Button name='back' variant='secondary' size='sm' onClick={goBack}>Back</Button>
        <Button name='save' variant='secondary' size='sm' onClick={saveVote} disabled={selectedChoice === ''}>Save Vote</Button>
      </div>
    </section>
  );
}

export default QuestionDetail;
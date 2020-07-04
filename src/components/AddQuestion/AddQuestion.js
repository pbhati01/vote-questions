import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUseStyles, useTheme } from 'react-jss';
import { Button, Table, tbody, tr, td } from 'react-bootstrap';
import { dataActions } from '../../redux/actions';
import { getAppRoot } from '../../redux/selectors';
import styles from './AddQuestion.styles';

const useStyles = createUseStyles(styles);

const AddQuestion = (props) => {
  const theme = useTheme();
  const classes = useStyles({
    theme
  });
  const [question, setQuestion] = useState({question:'', choices: []});
  const [choices, setChoices] = useState([]);
  const appRoot = useSelector(getAppRoot);
  const dispatch = useDispatch();

  const createQuestion = () => {
    dispatch(dataActions.createQuestion(appRoot, question));
  }

  const goBack = () => {
    props.history.push(appRoot); 
  }

  const updateChoice = (key, e) => {
    let modifiedQuestion = {...question};
    let modifiedChoices = [...choices];
    modifiedQuestion.choices[key] = e.target.value;
    modifiedChoices[key] = e.target.value;
    setQuestion(modifiedQuestion);
    setChoices(modifiedChoices);
  }

  const addChoice = () => {
    let modifiedChoices = [...choices];
    modifiedChoices.push('');
    setChoices(modifiedChoices);
  }

  const getChoicesHtml = () => {
    return choices.map((choice, key) => {
      return (<tr key={`choice-${key}`}>
        <td><label>Choice {key + 1}:</label></td>
        <td><input type='text' value={choice} onChange={(e) => updateChoice(key, e)} /></td>
      </tr>);
    });
  }

  const validateQuestion = () => {
    if(question.question && question.choices.length > 1) {
      return choices.findIndex(choice => choice === '') > 0;
    }
    return true;
  }

  return (
    <section className={classes.addQuestionContainer}>
      <h2>Add Question Form</h2>
      <Table>
        <tbody>
          <tr>
            <td><label>Question:</label></td>
            <td><input type='text' value={question.question} onChange={(e) => setQuestion({...question, question: e.target.value})} /></td>
          </tr>
          {choices.length > 0 ?
            getChoicesHtml() : <tr><td colSpan='2'>No choices added yet</td></tr>
          }
        </tbody>
      </Table>
      <div className={classes.actionBtn}>
        <Button name='addChoice' variant='secondary' size='sm' onClick={addChoice}>Add Choices</Button>
      </div>
      <div className={classes.actionBtn}>
        <Button name='back' variant='secondary' size='sm' onClick={goBack}>Back</Button>
        <Button name='addQuestion' variant='secondary' size='sm' onClick={createQuestion} disabled={validateQuestion()}>Add Question</Button>
      </div>
    </section>
  );
}

export default AddQuestion;
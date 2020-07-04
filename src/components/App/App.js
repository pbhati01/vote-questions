import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'; 
import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { getAppRoot } from '../../redux/selectors';
import Dialog from '../Common/Dialog';
import LandingPage from './LandingPage';
import Questions from '../Questions';
import QuestionDetail from '../QuestionDetail';
import AddQuestion from '../AddQuestion';

const useStyles = createUseStyles({
  noConnectionError: {
    fontFamily: 'sans-serif',
    fontSize: 14,
    color: '#072F5F',
    padding: 10,
  }
});

const App = () => {
  const appRoot = useSelector(getAppRoot);
  const classes = useStyles();
  const [isDisconnected, setIsDisconnected] = useState(false);
  
  useEffect(() => {
    handleConnectionChange();
    window.addEventListener('online', handleConnectionChange);
    window.addEventListener('offline', handleConnectionChange);
  }, [navigator.onLine]);
  
  const handleConnectionChange = () => {
    setIsDisconnected(!navigator.onLine);
  }

  return (
    <>
      {isDisconnected ? 
      (<section className={classes.noConnectionError}>
        <p>Internet connection lost. Please try after some time</p>
      </section>)
      :
      (<section>
        <Dialog />
        <Router>
          <Route path='/' component={LandingPage} />
          {appRoot === '/questions' &&
          (<Switch>
          <Route exact path='/questions' component={Questions} />
          <Route exact path='/questions/:questionIdx' component={QuestionDetail} />
          <Route exact path='/question/create' component={AddQuestion} />
          </Switch>)}
        </Router>
      </section>)}
    </>
  );
};

export default App;
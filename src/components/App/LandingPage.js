import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { dataActions } from '../../redux/actions';

const LandingPage = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataActions.fetchAppRoot((url) => history.push(url)));
  }, []);

  return null;
};

export default LandingPage;

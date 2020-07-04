import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-jss';
import store from './redux/storeSetup';
import App from './components/App/App';
import theme from './utils/theme';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render((
  <Provider store={store}>
    <ThemeProvider theme={theme}>      
      <App />
    </ThemeProvider>
  </Provider>
), document.getElementById('root'));

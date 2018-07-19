import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import InitialComponent from './components/InitialComponent';

ReactDOM.hydrate(
  <Provider store={store}>
    <InitialComponent/>
  </Provider>,
  document.getElementById('root')
);

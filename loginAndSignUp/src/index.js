import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import Routes from './Routes';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
import React from 'react';
import ReactDOM from 'react-dom';

// State management
import store from 'state/store';
import { Provider } from 'react-redux';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

import './index.scss';
window.store = store;

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
),
document.getElementById('root'));

registerServiceWorker();

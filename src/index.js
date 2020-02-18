import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import mainStore from './redux/store';

import { PersistGate } from 'redux-persist/integration/react';

import './index.css';

ReactDOM.render(
  <Provider store={mainStore.store}>
    <BrowserRouter>
      <PersistGate persistor={mainStore.persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

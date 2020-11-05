import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

import store from './redux/store';
import AuthProvider from './providers/AuthProvider';

console.log(store.getState());

ReactDOM.render(
  <AuthProvider>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </AuthProvider>,
  document.getElementById('root'),
);

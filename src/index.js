import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import  createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './userState';
import userSaga from './userSaga'

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    users: usersReducer
  },
  middleware: [saga]
});
saga.run(userSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



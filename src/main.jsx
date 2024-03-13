import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice.jsx';
import watchFetchUsers from './sagas.jsx';

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    users: userReducer 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga)
});
saga.run(watchFetchUsers) ;
ReactDOM.createRoot(document.getElementById('root')).render(
 
    <React.StrictMode>
     <Provider store={store}>
      <App />
      </Provider>
    </React.StrictMode>
 
);

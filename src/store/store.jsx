import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import userReducer from '../slice/userSlice';
import { watchFetchUsers } from '../sagas';


const saga = createSagaMiddleware();

function* rootSaga() {
    yield all([
      watchFetchUsers() 
    ]);
}


  const store = configureStore({
    reducer: {
      users: userReducer 
    },
    middleware: [saga] 
});

saga.run(rootSaga);

export default store;

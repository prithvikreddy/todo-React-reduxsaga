import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducers } from './reducers';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();


export const store = createStore(
  rootReducers,
  {},
  compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

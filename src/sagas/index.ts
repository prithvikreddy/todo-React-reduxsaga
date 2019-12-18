import { all, fork } from 'redux-saga/effects';
import { watchAddTodo, watchTodos } from './todo-sagas';

export const rootSaga = function* root() {
  yield all([fork(
    watchAddTodo
  ), fork(
    watchTodos
  )]);
};

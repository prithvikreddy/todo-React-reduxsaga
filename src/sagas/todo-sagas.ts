import { call, put, takeEvery } from 'redux-saga/effects';
import { addTodos, getTodos } from '../api/todo.api';
import { addTodoCompletedAction, addTodo } from '../actions/todoActions';
import { BaseAction, actionIds } from '../common';

export function* watchAddTodo() {
    yield takeEvery(
        actionIds.ADD_TODO,
        createNewTodo
    );
}

function* createNewTodo(action: BaseAction) {
    const title = action.payload;
    const todo = yield call(addTodos, title);
    yield put(addTodoCompletedAction(todo));
}

export function* watchTodos() {
    yield takeEvery(
        actionIds.GET_TODO,
        getInitialTodos
    );
}

function* getInitialTodos() {
    const todos = yield call(getTodos);
    yield put(addTodoCompletedAction(todos));
}

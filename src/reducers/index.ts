import { combineReducers } from 'redux';
// import {
//   todosReducer,
//   TodosState,
// } from './number-collection.reducer';

import { BaseAction, actionIds } from '../common';

export type TodosState = any[];

export const todosReducer = (
  state: TodosState = [0],
  action: BaseAction
) => {
  switch (action.type) {
    case actionIds.ADD_TODO_COMPLETED:
      return [...state, action.payload];
  }
  return state;
};

export interface State {
  todos: TodosState;
}

export const rootReducers = combineReducers<State>({
  todos: todosReducer,
});

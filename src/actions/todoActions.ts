import { BaseAction, actionIds } from '../common/index';

export const addTodo = (todo: string): BaseAction => ({
  type: actionIds.ADD_TODO,
  payload: todo,
});

export const getTodos = (): BaseAction => ({
  type: actionIds.GET_TODO
});

export const addTodoCompletedAction = (
  todo: any
): BaseAction => ({
  type: actionIds.ADD_TODO_COMPLETED,
  payload: todo,
});

export const getTodoCompletedAction = (
  todos: any[]
): BaseAction => ({
  type: actionIds.GET_TODO_COMPLETED,
  payload: todos,
});

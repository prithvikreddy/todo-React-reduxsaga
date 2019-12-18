export const actionIds = {
  GET_TODO:
    '[0] Get toDo',
  GET_TODO_COMPLETED:
    '[0] Get Completed toDo ',
  ADD_TODO:
    '[0] Add toDo',
  ADD_TODO_COMPLETED:
    '[0] Completed toDo',
  DELETE_TODO:
    '[1] Delete toDo',
};

export interface BaseAction {
  type: string;
  payload?: any;
}

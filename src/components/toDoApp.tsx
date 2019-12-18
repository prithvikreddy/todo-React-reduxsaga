import React from 'react';
import { AddTodoContainer } from './setter/addToDo.container';
import { TodoContainer } from './viewer/toDo.container';
import TodoHeader from './toDoHeader';

const ToDoApp: React.FC = () => {
  return (
    <div >
      <TodoHeader />
      <AddTodoContainer />
      <TodoContainer />
    </div>
  );
}

export default ToDoApp;

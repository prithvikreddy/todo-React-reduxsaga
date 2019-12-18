import React, { useEffect } from 'react';

interface Props {
    getTodos: () => void,
    todos: any[]
}
const ToDoListItem: React.FC<Props> = ({ getTodos, todos }) => {
    
    useEffect(() => {
        
        getTodos();
    });

    return (<div>{todos.map(todo => <div>{todo.title}</div>)}</div>);
}

export default ToDoListItem;
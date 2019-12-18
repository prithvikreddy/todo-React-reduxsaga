import React from 'react';

interface Props {
    addTodo: (title: string) => void;
}
const AddTodo: React.FC<Props> = ({ addTodo }) => {

    let textInput = React.createRef<any>();

    return (
        <div>
            <input type="text" ref={textInput} className="form-control" placeholder="add a new todo..." />
            <button type="submit" className="btn btn-default" onClick={() => addTodo(textInput.current.value)}>Add</button>
        </div>
    );
}

export default AddTodo;

import { connect } from 'react-redux';
import { addTodo as AddTodoAction } from '../../actions/todoActions';
import AddTodo from './addTodo.component';

const mapDispatchToProps = (dispatch: any) => ({
    addTodo: (todo: string) => dispatch(AddTodoAction(todo)),
});

export  const AddTodoContainer = connect(
    null,
    mapDispatchToProps
)(AddTodo);

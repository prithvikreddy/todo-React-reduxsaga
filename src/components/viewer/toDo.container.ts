import { connect } from 'react-redux';
import { getTodos } from '../../actions/todoActions';
import ToDoListItem from './toDoListItem';
import { State } from '../../reducers';

const mapDispatchToProps = (dispatch: any) => ({
    getTodos: () => dispatch(getTodos()),
});

const mapStateToProps = (state: State) => ({
    todos: state.todos,
  });

export const TodoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoListItem);

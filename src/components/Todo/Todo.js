import React from 'react';
import PropTypes from 'prop-types';

/**
 * Todo
 * Renders todos
 * @param {object} props
 */
const Todo = props => (
  <div className="todo">
    <h1>All Todos:</h1>
    <ol>
      {
        props.isLoading ? <p>Loading...</p>
          : props.todos.map((value, index) => (
            <li key={index} onClick={() => props.deleteTodo(value.id)}>
              <span>{value.userId} : </span>
              {value.title}
            </li>
          ))
      }
    </ol>
  </div>
);

/**
 * propTypes
 * @property {array} todos - Array of all the todos.
 * @property {boolean} isLoading - Flag when request is loading.
 * @property {function} deleteTodo - Function to delete todos.
 */
Todo.propTypes = {
  todos: PropTypes.array,
  isLoading: PropTypes.bool,
  deleteTodo: PropTypes.func,
};


export default Todo;

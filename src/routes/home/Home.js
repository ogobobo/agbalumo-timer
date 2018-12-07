import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import todoAPI from '../../api/todo';
import Todo from '../../components/Todo/Todo';
import { saveState, loadState } from '../../tools/localStorage';

/**
 * Home
 * Fetches todos and renders component
 */
function Home() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // Fetch todos from API
  const fetchData = async () => {
    setIsLoading(true);
    const result = await todoAPI();
    setTodos(result);
    setIsLoading(false);
  };
  // Call Todos on load
  useEffect(() => {
    const todosFromMemory = loadState();
    // Load todos from Session Storage if available
    if (todosFromMemory) {
      setTodos(todosFromMemory);
    } else {
      fetchData();
    }
  }, []);
  // Save data to Session Storage
  useEffect(() => {
    if (todos.length > 1) {
      saveState(todos);
    }
  }, [todos]);
  return (
    <div>
      {isLoading ? <p>Loading...</p>
        : <Todo
          todos={todos}
          isLoading={isLoading}
          deleteTodo={id => setTodos(todos.filter(itm => itm.id !== id))}
          />
      }
    </div>
  );
}

/**
 * propTypes
 * @property {function} todoAPI - API to retrieve Todos.
 */
Home.propTypes = {
  todoAPI: PropTypes.func,
};

export default Home;

/**
 * Loades state from localstorage.
 * @return {object} - Parsed state from local storage
 */
export const loadStateName = () => {
  try {
    const serializedState = localStorage.getItem('username');
    if (serializedState === null || serializedState === 'undefined') {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    throw err;
  }
};

/**
 * Saves state to local storage
 * @param {object} state - State to be cached.
 */
export const saveStateName = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('username', serializedState);
    return true;
  } catch (err) {
    throw err;
  }
};


/**
 * Delete state and set to undefined
 */
export const deleteStateName = () => {
  localStorage.setItem('tasks', undefined);
};

/**
 * Loades state from localstorage.
 * @return {object} - Parsed state from local storage
 */
export const loadStateTask = () => {
  try {
    const serializedState = localStorage.getItem('tasks');
    if (serializedState === null || serializedState === 'undefined') {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    throw err;
  }
};

/**
 * Saves state to local storage
 * @param {object} state - State to be cached.
 */
export const saveStateTask = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('tasks', serializedState);
    return true;
  } catch (err) {
    throw err;
  }
};


/**
 * Delete state and set to undefined
 */
export const deleteStateTask = () => {
  localStorage.setItem('tasks', undefined);
};

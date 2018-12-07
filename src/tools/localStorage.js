/**
 * Loades state from localstorage.
 * @return {object} - Parsed state from local storage
 */
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('truck-app');
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
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('truck-app', serializedState);
    return true;
  } catch (err) {
    throw err;
  }
};


/**
 * Delete state and set to undefined
 */
export const deleteState = () => {
  localStorage.setItem('truck-app', undefined);
};

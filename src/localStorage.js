export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('gymmieState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('gymmieState', serializedState);
  } catch (err) {
    // ignore errors for now ...
  }
};

export const clearState = () => {
  try {
    localStorage.removeItem('gymmieState');
  } catch (err) {
    // ignore errors for now ...
  }
};

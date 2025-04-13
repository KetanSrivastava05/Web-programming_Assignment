import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'inc': return state + 1;
    case 'dec': return state - 1;
    default: return state;
  }
}

function CounterUseReducer() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>Using useReducer</h2>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: 'inc' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'dec' })}>Decrease</button>
    </div>
  );
}

export default CounterUseReducer;

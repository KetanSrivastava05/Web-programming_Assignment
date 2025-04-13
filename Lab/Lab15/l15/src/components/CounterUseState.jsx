import React, { useState } from 'react';

function CounterUseState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Using useState</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default CounterUseState;

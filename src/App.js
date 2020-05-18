import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className='App' style={{ textAlign: 'center' }}>
      <span>count: </span>
      <span className='counter'>{count}</span>
      <div>
        <button className='increment' onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;

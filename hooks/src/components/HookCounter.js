import React, { useState } from "react";

function HookCounter() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const plusFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => {
        return prevCount + 1;
      });
    }
  };

  return (
    <div>
      Count: {count}
      <button
        onClick={() => {
          setCount(initialCount);
        }}
      >
        Reset
      </button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+1</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-1</button>
      <button onClick={plusFive}> plusFive</button>
    </div>
  );
}

export default HookCounter;

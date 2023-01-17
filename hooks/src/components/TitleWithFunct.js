import React, { useEffect, useState } from "react";

function TitleWithFunct() {
  const [count, setCount] = useState(0);
  const [name1, setName] = useState("");

  useEffect(() => {
    console.log(`title updated`);
    document.title = `You clicked ${count}`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name1}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>clicked {count} times</button>
    </div>
  );
}
export default TitleWithFunct;

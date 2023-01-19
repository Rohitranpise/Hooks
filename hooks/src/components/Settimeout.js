import React, { useEffect, useState } from "react";

function Settimeout() {
  const [name, setName] = useState("first");

  useEffect(() => {
    if (name === "first") {
      setTimeout(() => {
        setName("Second");
      }, 2000);
    }
  });
  useEffect(() => {
    if (name === "Second") {
      setTimeout(() => {
        setName("first");
      }, 2000);
    }
  });

  return <div>{name}</div>;
}

export default Settimeout;

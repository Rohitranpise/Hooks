import React from "react";
import { useState } from "react";

function ArrayComponent() {
  let bioData = [
    {
      id: 1,
      name: "Rohit",
      skill: "NodeJs",
    },
    {
      id: 2,
      name: "utkarsh",
      skill: "ReactJs",
    },
    {
      id: 3,
      name: "Omkar",
      skill: "Java",
    },
    {
      id: 4,
      name: "prathamesh",
      skill: "AngularJS",
    },
  ];

  const [myArray, setMyArray] = useState(bioData);

  let clearArray = () => {
    setMyArray([]);
  };

  let removeElement = (id) => {
    let myNewArray = myArray.filter((item) => {
      return item.id !== id;
    });

    setMyArray(myNewArray);
  };

  return (
    <>
      {myArray.map((item) => {
        return (
          <h2 key={item.id}>
            {item.id}. name: {item.name}, skill: {item.skill}
            <button onClick={() => removeElement(item.id)}>Remove</button>
          </h2>
        );
      })}
      <button onClick={clearArray}>clear</button>
    </>
  );
}

export default ArrayComponent;

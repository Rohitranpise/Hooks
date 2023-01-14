import React, { useState } from "react";

function Object() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const lastNameHandler = (event) => {
    //we are using spread operator because, we want to copy every property from name object
    //and then overwrite the values...
    setName({ ...name, lastName: event.target.value });
  };
  const firstNameHandler = (event) => {
    setName({ ...name, firstName: event.target.value });
  };

  return (
    <div>
      <form action="">
        <input type="text" value={name.firstName} onChange={firstNameHandler} />
        <input type="text" value={name.lastName} onChange={lastNameHandler} />
        <h2>your first name is: {name.firstName}</h2>
        <h2>your last name is: {name.lastName}</h2>
      </form>
    </div>
  );
}

export default Object;

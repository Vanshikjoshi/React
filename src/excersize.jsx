import React from "react";

const Excersize = ({ name, age }) => {
  const obj = {
    backgroundColor: "grey",
    borderRadius: "10px",
    border: "2px solid black",
    margin: "5px",
  };
  const obj1={
    padding: '15px;'
  }
  return (
    <div
      style={obj}
    >
      <h1 style={obj1}>Hello {name}!</h1>
      <h2 style={{ padding: "10px" }}>
        You are <i style={{ color: "yellow" }}>{age}</i> year old.
      </h2>
      
    </div>
  );
};

export default Excersize;

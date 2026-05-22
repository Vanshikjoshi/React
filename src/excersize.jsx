import React from "react";
const excersize = () => {
  const person = {
    name: "vanshika joshi",
    age: 19,
  };
  const product = {
    title: "iphone",
    model: "iphone-15",
    price: 68967
  }
  return (
    <>
      <div>
        <h1>Welcome to React</h1>
        <h2>Hello, {person.name}</h2>
        <h3>You are {person.age} years old!</h3>
      </div>
      <div>
        <h1>Product details-</h1>
        <h2>Product- {product.title}</h2>
        <h3>Model- {product.model}</h3>
        <h3>Price- {product.price}</h3>
      </div>
    </>
  );
};

export default excersize;

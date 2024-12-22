import React from 'react';

// This component demonstrates passing data into a component using props.
// 'props' is an object that holds information passed down from a parent component.
// Here, we expect a 'name' prop, which we will use to personalize the greeting.
function Greeting({ name }) {
  // The component returns a paragraph that greets the user by the name provided via props.
  return <p>Hello, {name}! Welcome to learning React.</p>;
}

export default Greeting;

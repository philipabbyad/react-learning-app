import React from 'react';
// Import our custom components that we created to demonstrate various React concepts
import HelloWorld from './components/HelloWorld';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

function App() {
  // App is the root component of our application.
  // It brings together multiple child components to demonstrate how React works.
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      {/* A main heading for our application */}
      <h1>React Learning Tool</h1>
      <hr />

      {/* Section demonstrating a simple component that just renders "Hello World!" */}
      <section>
        <h2>Hello World Component</h2>
        {/* This will display a basic "Hello World!" message from HelloWorld.js */}
        <HelloWorld />
      </section>
      <hr />

      {/* Section demonstrating passing data to components via props */}
      <section>
        <h2>Props Demonstration (Greeting)</h2>
        {/* Greeting receives a 'name' prop, which it uses to personalize the greeting */}
        <Greeting name="Alice" />
        <Greeting name="Bob" />
      </section>
      <hr />

      {/* Section demonstrating the use of state within a component (the Counter) */}
      <section>
        <h2>State Demonstration (Counter)</h2>
        {/* Counter shows how to track and update state (in this case, a number) over time */}
        <Counter />
      </section>
    </div>
  );
}

export default App;

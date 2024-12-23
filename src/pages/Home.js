import React from 'react';
import HelloWorld from '../components/HelloWorld';
import Greeting from '../components/Greeting';
import Counter from '../components/Counter';

/**
 * Home.js
 *
 * Serves as the homepage of the single-page React app, containing the
 * original components: HelloWorld, Greeting, and Counter.
 */
function Home() {
  return (
    <div>
      <h1>React Learning Tool - Home</h1>
      <hr />

      <section>
        <h2>Hello World Component</h2>
        <HelloWorld />
      </section>
      <hr />

      <section>
        <h2>Props Demonstration (Greeting)</h2>
        <Greeting name="Alice" />
        <Greeting name="Bob" />
      </section>
      <hr />

      <section>
        <h2>State Demonstration (Counter)</h2>
        <Counter />
      </section>
    </div>
  );
}

export default Home;

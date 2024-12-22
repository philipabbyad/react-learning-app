import React, { useState } from 'react';

function Counter() {
  // useState is a React Hook that allows us to have state in a functional component.
  // Here, 'count' is the current state variable, and 'setCount' is a function
  // used to update that state.
  const [count, setCount] = useState(0);

  // The component returns a simple UI:
  // 1. A paragraph showing the current count.
  // 2. A button that increments the count by calling setCount when clicked.
  return (
    <div>
      {/* Display the current count in a sentence */}
      <p>You clicked {count} times.</p>

      {/* When the button is clicked, setCount updates the count state by adding 1 */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;


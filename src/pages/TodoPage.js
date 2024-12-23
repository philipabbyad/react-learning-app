import React from 'react';
import TodoList from '../components/TodoList';

/**
 * TodoPage.js
 *
 * A dedicated page displaying the Dynamic To-Do List component.
 * Users can add tasks, remove tasks, and filter tasks by completion.
 */
function TodoPage() {
  return (
    <div>
      <h1>To-Do List Feature</h1>
      <TodoList />
    </div>
  );
}

export default TodoPage;

import React, { useState } from 'react';

/**
 * TodoList
 * 
 * This component allows users to add new tasks, remove tasks, and filter tasks
 * by their 'completed' or 'incomplete' status. It demonstrates how React state
 * can dynamically manage lists and update the UI in response to user actions.
 */

function TodoList() {
  // 'tasks' holds an array of task objects, each with an 'id', 'text', and 'completed' property.
  // 'setTasks' is the function we call to update this state.
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React Basics', completed: false },
    { id: 2, text: 'Practice JSX', completed: true },
  ]);

  // 'newTask', controlled by setNewTask, stores the user input for creating a new task.
  const [newTask, setNewTask] = useState('');

  // 'filterStatus' can be 'all', 'completed', or 'incomplete'. It controls which tasks to display.
  const [filterStatus, setFilterStatus] = useState('all');

  /**
   * handleAddTask
   * Adds a new task to the tasks array with a unique ID, 
   * the text from 'newTask', and a default completed value of false.
   */
  const handleAddTask = () => {
    if (newTask.trim() === '') return;

    const newTaskObj = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask('');
  };

  /**
   * handleRemoveTask
   * Removes a task by filtering it out of the 'tasks' array using its ID.
   * @param {number} taskId 
   */
  const handleRemoveTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  /**
   * toggleTaskCompletion
   * Toggles whether a task is completed or not, based on its ID.
   * @param {number} taskId 
   */
  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  // Filter tasks based on the selected filterStatus ('all', 'completed', 'incomplete').
  const filteredTasks = tasks.filter((task) => {
    if (filterStatus === 'completed') {
      return task.completed;
    } else if (filterStatus === 'incomplete') {
      return !task.completed;
    }
    return true; // 'all' case
  });

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>To-Do List</h1>

      {/* Input field and "Add Task" button */}
      <div style={{ display: 'flex', gap: '5px' }}>
        <input
          type="text"
          placeholder="Enter a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{ flex: 1 }}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      {/* Filter Options */}
      <div style={{ margin: '10px 0' }}>
        <label>
          <input
            type="radio"
            value="all"
            checked={filterStatus === 'all'}
            onChange={() => setFilterStatus('all')}
          />
          All
        </label>
        {' '}
        <label>
          <input
            type="radio"
            value="completed"
            checked={filterStatus === 'completed'}
            onChange={() => setFilterStatus('completed')}
          />
          Completed
        </label>
        {' '}
        <label>
          <input
            type="radio"
            value="incomplete"
            checked={filterStatus === 'incomplete'}
            onChange={() => setFilterStatus('incomplete')}
          />
          Incomplete
        </label>
      </div>

      {/* List of filtered tasks */}
      <ul style={{ paddingLeft: '20px' }}>
        {filteredTasks.map((task) => (
          <li key={task.id} style={{ marginBottom: '8px' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                marginLeft: '8px',
              }}
            >
              {task.text}
            </span>
            {' '}
            <button
              onClick={() => handleRemoveTask(task.id)}
              style={{ marginLeft: '8px' }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

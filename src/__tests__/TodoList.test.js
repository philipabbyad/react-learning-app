import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial tasks', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React Basics')).toBeInTheDocument();
    expect(screen.getByText('Practice JSX')).toBeInTheDocument();
  });

  test('adds a new task', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Enter a new task...');
    const addButton = screen.getByText('Add Task');

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Task')).toBeInTheDocument();
  });

  test('removes a task', () => {
    render(<TodoList />);
    const removeButton = screen.getAllByText('Remove')[0];
    fireEvent.click(removeButton);

    // The first task was "Learn React Basics", so it should be removed
    expect(screen.queryByText('Learn React Basics')).not.toBeInTheDocument();
  });

  test('toggles task completion', () => {
    render(<TodoList />);
    const checkbox = screen.getAllByRole('checkbox')[0];
    expect(checkbox).not.toBeChecked();

    // Click the checkbox to toggle completion
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});

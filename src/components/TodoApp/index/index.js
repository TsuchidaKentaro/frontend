import React from 'react';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';

function TodoApp() {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default TodoApp;

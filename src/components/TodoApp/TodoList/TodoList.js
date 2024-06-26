import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../../../recoil/atoms';
import TodoItem from '../TodoItem/TodoItem';

function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <ul>
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </ul>
  );
}

export default TodoList;

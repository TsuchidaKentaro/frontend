import React from 'react';
import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import TodoList from '../index/index';
import { todoListState } from '../../../recoil/atoms';

const mockTodoList = [
  { id: 1, text: 'Test Todo 1', isComplete: false },
  { id: 2, text: 'Test Todo 2', isComplete: true },
];

test('renders todo items', () => {
  render(
    <RecoilRoot
      initializeState={({ set }) => set(todoListState, mockTodoList)}
    >
      <TodoList />
    </RecoilRoot>
  );

  const items = screen.getAllByRole('listitem');
  expect(items).toHaveLength(mockTodoList.length); // 確認：アイテムの数が正しいこと

  mockTodoList.forEach((todo) => {
    expect(screen.getByDisplayValue(todo.text)).toBeInTheDocument(); // 確認：各アイテムのテキストが表示されていること
  });
});

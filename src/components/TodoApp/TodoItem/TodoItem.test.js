import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import TodoItem from '../index/index';
import { todoListState } from '../../../recoil/atoms';

const mockTodo = { id: 1, text: 'Test Todo', isComplete: false };

test('toggles todo item completion', () => {
  render(
    <RecoilRoot
      initializeState={({ set }) => set(todoListState, [mockTodo])}
    >
      <TodoItem item={mockTodo} />
    </RecoilRoot>
  );

  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);

  expect(checkbox.checked).toBe(true); // 確認：チェックボックスの状態が変わること
});

test('deletes a todo item', () => {
  const { rerender } = render(
    <RecoilRoot
      initializeState={({ set }) => set(todoListState, [mockTodo])}
    >
      <TodoItem item={mockTodo} />
    </RecoilRoot>
  );

  const deleteButton = screen.getByRole('button', { name: /x/i });
  fireEvent.click(deleteButton);

  rerender(
    <RecoilRoot
      initializeState={({ set }) => set(todoListState, [])}
    >
      <TodoItem item={mockTodo} />
    </RecoilRoot>
  );

  expect(screen.queryByDisplayValue(mockTodo.text)).not.toBeInTheDocument(); // 確認：アイテムが削除されること
});

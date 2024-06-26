import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import TodoApp from './index';

test('adds and displays a new todo item', () => {
  render(
    <RecoilRoot>
      <TodoApp />
    </RecoilRoot>
  );

  const input = screen.getByRole('textbox');
  const addButton = screen.getByRole('button', { name: /add/i });

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  expect(screen.getByDisplayValue('New Todo')).toBeInTheDocument(); // 確認：新しいTodoがリストに追加されること
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import TodoInput from '../index/index';

test('adds a new todo item', () => {
  render(
    <RecoilRoot>
      <TodoInput />
    </RecoilRoot>
  );

  const input = screen.getByRole('textbox');
  const addButton = screen.getByRole('button', { name: /add/i });

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  expect(input.value).toBe(''); // 確認：入力フィールドがクリアされること
});

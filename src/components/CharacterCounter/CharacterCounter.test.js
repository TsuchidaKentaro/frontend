import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import CharacterCounter from './CharacterCounter';

test('CharacterCounter updates character count', () => {
    render(
      <RecoilRoot>
        <CharacterCounter />
      </RecoilRoot>
    );
  
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Recoil' } });
  
    const characterCount = screen.getByTestId('character-count');
    const echo = screen.getByTestId('echo');
  
    expect(characterCount.textContent).toBe('Character Count: 6');
    expect(echo.textContent).toBe('Echo: Recoil');
  });

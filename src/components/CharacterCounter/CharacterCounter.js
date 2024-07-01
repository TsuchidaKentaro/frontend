import React from 'react';
import { useRecoilState } from 'recoil';
import { textState } from '../../recoil/atoms';

function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      <span data-testid="echo">Echo: {text}</span>
    </div>
  );
}

function CharacterCount() {
  const [text] = useRecoilState(textState);

  return <span data-testid="character-count">Character Count: {text.length}</span>;
}

export default CharacterCounter;

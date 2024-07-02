import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../../../recoil/atoms';

// utility for creating unique Id
let id = 0;
function getId() {
    const currentId = id;
    id += 1; // 代入演算子を使って値を1増やします
    return currentId;
}

function TodoInput() {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);

    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false,
            },
        ]);
        setInputValue('');
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="button" onClick={addItem}>
                Add
            </button>
        </div>
    );
}

export default TodoInput;

/*App.js*/

import { RecoilRoot } from 'recoil';
import React, { useState, useEffect } from 'react';
import CharacterCounter from './components/CharacterCounter/CharacterCounter';
import TodoApp from './components/TodoApp/index';

const App = () => {
  const [fruits, setFruits] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api');
        const json = await res.json();
        setFruits(json);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container fruitsList">
      <h1>Fruits Store</h1>

      <h1></h1>

      {fruits?.map((fruit) => (
        <div key={fruit.id}>
          <div className="text">
            <h2>{fruit.name}</h2>
            <p>{`￥${fruit.price}`}</p>
          </div>
        </div>
      ))}
      <RecoilRoot>
        <CharacterCounter />
        <TodoApp />
      </RecoilRoot>
    </div>
  );
};
export default App;

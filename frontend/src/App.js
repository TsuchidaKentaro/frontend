/*App.js*/


import React, { useState, useEffect } from "react";


const App = () => {
  const [fruits, setFruits] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api");
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


      {fruits?.map((fruit) => (
        <div key={fruit.id}>
          <div className="text">
            <h2>{fruit.name}</h2>
            <p>{`￥${fruit.price}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default App;


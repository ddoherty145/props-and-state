import Counter from './Counter';
import { useState } from 'react';
import './App.css';

function App() {
  const [counts, setCounts] = useState([1, 4, 3]);

  const updateCount = (index, delta) => {
    const newCounts = [...counts];
    const newValue = newCounts[index] + delta;
    // Prevent counter from going below 0 or above 10
    if (newValue >= 0 && newValue <= 10) {
      newCounts[index] = newValue;
      setCounts(newCounts);
    }
  };

  const resetCounters = () => {
    setCounts(counts.map(() => 0));
  };

  const addCounter = () => {
    setCounts([...counts, 0]);
  };

  return (
    <div className="App">
      <h1>Total Count: {counts.reduce((sum, count) => sum + count, 0)}</h1>
      <div className="controls">
        <button onClick={resetCounters}>Reset All</button>
        <button onClick={addCounter}>➕ Add Counter</button>
      </div>
      {counts.map((value, index) => (
        <Counter 
          key={index} 
          label={`Counter ${index + 1}`} 
          value={value} 
          increment={() => updateCount(index, 1)}
          decrement={() => updateCount(index, -1)}
        />
      ))}
    </div>
  )
}

export default App;

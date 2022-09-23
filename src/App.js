import { useState } from 'react';
import './App.css';

function App() {
    // Declare new state counter var
    const [count, setCount] = useState(0)

    function decrement() {
        setCount(prevCount => prevCount - 1);
    }

    function increment() {
        setCount(prevCount => prevCount + 1);
    }

    return (
        <div className="count-wrapper">
            <button onClick={decrement}>-</button>
            <button>{count}</button>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default App;

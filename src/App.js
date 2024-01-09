
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement,addby } from './Redux/CounterSlice';

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(addby())}>Add by 10</button>
    </div>
  );
}

export default App;

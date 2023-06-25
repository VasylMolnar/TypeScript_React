import { FC, ReactNode, useContext } from 'react';
import { CounterContext } from './context/CounterContext';

interface ICounter {
  children: (num: number) => ReactNode;
}

const Counter: FC<ICounter> = ({ children }) => {
  const { state, increment, decrement, handleTextInput } =
    useContext(CounterContext);

  return (
    <>
      <h1>{children(state.count)}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <input type="text" onChange={handleTextInput} />
      <h2>{state.text}</h2>
    </>
  );
};

export default Counter;

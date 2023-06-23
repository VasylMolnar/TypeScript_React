import { FC, ReactNode } from 'react';

interface ICounter {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
}

const Counter: FC<ICounter> = ({ setCount, children }) => {
  return (
    <section>
      <h1>{children}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      <button onClick={() => setCount(prev => prev - 1)}>-</button>
    </section>
  );
};

export default Counter;

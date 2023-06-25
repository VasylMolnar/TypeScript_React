import {
  useCallback,
  useState,
  MouseEvent,
  KeyboardEvent,
  useEffect,
  useMemo,
  useRef,
} from 'react';

interface User {
  id: number;
  username: string;
}

type fibFunc = (n: number) => number;

const fib: fibFunc = n => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const add = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => {
      setCount(prev => prev + 2);
    },
    []
  );

  const result = useMemo((): number => {
    console.log('useMemo');
    return fib(count);
  }, [count]);

  //or
  //const result = useMemo<number>(() => fib(myNum),[myNum])

  useEffect(() => {
    console.log('mounting');
    console.log('Users: ', users);

    return () => console.log('unmounting');
  }, [users]);

  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={add}>Add</button>
      <h2>Fib: {result}</h2>
      <input ref={inputRef} type="text" />
    </>
  );
}

export default App;

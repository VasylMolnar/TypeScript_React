import { ReactNode } from 'react';

interface IList<T> {
  //items: Array<T>;
  items: T[];
  render: (item: T) => ReactNode;
}

const List = <T,>({ items, render }: IList<T>) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{render(item)}</li>
      ))}
    </ul>
  );
};

export default List;

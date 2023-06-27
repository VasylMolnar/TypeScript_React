interface IList<T> {
  title: string;
  items: T[];
  render(item: T): React.ReactNode;
}

const List = <T,>({ title, items, render }: IList<T>) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {items.map(item => render(item))}
    </div>
  );
};

export default List;

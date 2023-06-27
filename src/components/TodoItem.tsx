import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { ITodo } from '../types/todoTypes';

interface ITodoItem {
  todo: ITodo;
}

const TodoItem: FC<ITodoItem> = ({ todo }) => {
  const [checked, setChecked] = useState<boolean>(todo.completed);

  return (
    <div className="userItem" style={{ display: 'flex' }}>
      <div style={{ marginRight: '30px' }}>
        <input
          type="checkbox"
          checked={checked}
          onClick={() => setChecked(!checked)}
        />
      </div>
      <Link to={`/todos/${todo.id}`}>
        {todo.id}. {todo.title}
      </Link>
    </div>
  );
};

export default TodoItem;

import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import List from '../components/List';
import { ITodo } from '../types/todoTypes';
import TodoItem from '../components/TodoItem';

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get<ITodo[]>(
        'https://jsonplaceholder.typicode.com/todos'
      );
      setTodos(response.data);
    };

    fetchUsers();
  }, []);

  return (
    <main className="TodosPage">
      <section className="section">
        <div className="container">
          <List
            title={'LIST OF TODOS'}
            items={todos}
            render={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
          />
        </div>
      </section>
    </main>
  );
};

export default TodosPage;

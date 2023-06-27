import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ITodo } from '../types/todoTypes';

const CurrentUser: FC = () => {
  const [todo, setTodo] = useState<ITodo | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get<ITodo>(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      setTodo(response.data);
    };

    fetchUsers();
  }, [id]);

  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 style={{ textAlign: 'center' }}>TODO PAGE</h1>
          <p> TODO ID: {todo?.id}</p>
          <div>TODO TITLE: {todo?.title}</div>
        </div>
      </section>
    </main>
  );
};

export default CurrentUser;

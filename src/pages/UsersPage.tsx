import { FC, useEffect, useState } from 'react';
import { IUser } from '../types/userTypes';
import axios from 'axios';

const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setUsers(response.data);
    };

    fetchUsers();
  }, []);

  return (
    <main className="UsersPage">
      <section className="section">
        <div className="container">
          <h1 style={{ textAlign: 'center' }}>LIST OF USERS</h1>
        </div>
      </section>
    </main>
  );
};

export default UsersPage;

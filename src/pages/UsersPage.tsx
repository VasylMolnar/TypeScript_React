import { FC, useEffect, useState } from 'react';
import { IUser } from '../types/userTypes';
import axios from 'axios';
import List from '../components/List';
import UserItem from '../components/UserItem';

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
          <List
            title={'LIST OF USERS'}
            items={users}
            render={(user: IUser) => <UserItem user={user} key={user.id} />}
          />
        </div>
      </section>
    </main>
  );
};

export default UsersPage;

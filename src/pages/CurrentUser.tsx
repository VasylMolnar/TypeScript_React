import { FC, useEffect, useState } from 'react';
import { IUser } from '../types/userTypes';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CurrentUser: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get<IUser>(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUser(response.data);
    };

    fetchUsers();
  }, [id]);

  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 style={{ textAlign: 'center' }}>USER PAGE</h1>
          <p> Name: {user?.name}</p>
          <div>Email: {user?.email}</div>
          <div>
            <p>
              Address:
              {user?.address.city} {user?.address.street}{' '}
              {user?.address.zipcode}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CurrentUser;

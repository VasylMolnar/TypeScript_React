import { FC } from 'react';
import { IUser } from '../types/userTypes';
import { Link } from 'react-router-dom';

interface IUserItem {
  user: IUser;
}

const UserItem: FC<IUserItem> = ({ user }) => {
  return (
    <Link to={`/${user.id}`}>
      <div className="userItem">
        {user.id}. {user.name} lives in the city {user.address.city} on the
        street
        {user.address.street}
      </div>
    </Link>
  );
};

export default UserItem;

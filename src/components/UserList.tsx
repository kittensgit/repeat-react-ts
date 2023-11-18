import React, { FC } from 'react';
import { IUser } from '../types/types';

interface UserListProp {
    users: IUser[];
}

const UserList: FC<UserListProp> = ({ users }) => {
    return (
        <div>
            {users.map((user) => (
                <div
                    key={user.id}
                    style={{ padding: 15, border: '1px solid gray' }}
                >
                    {user.id}. {user.name} live in the {user.address.city} at
                    the {user.address.street} street
                </div>
            ))}
        </div>
    );
};

export default UserList;

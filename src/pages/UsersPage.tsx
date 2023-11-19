import React, { FC, useState, useEffect } from 'react';
import { IUser } from '../types/types';
import axios from 'axios';
import List from '../components/List';
import UserItem from '../components/UserItem';
import { useNavigate } from 'react-router-dom';

const UsersPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get<IUser[]>(
                'https://jsonplaceholder.typicode.com/users'
            );
            setUsers(response.data);
        } catch (error) {
            alert(error);
        }
    };
    return (
        <div>
            <h1>Users</h1>
            <List
                items={users}
                renderItem={(user: IUser) => (
                    <UserItem
                        onClick={(user) => navigate(`/users/${user.id}`)}
                        user={user}
                        key={user.id}
                    />
                )}
            />
        </div>
    );
};

export default UsersPage;

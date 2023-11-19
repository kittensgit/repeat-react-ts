import React, { FC, useEffect, useState } from 'react';
import { IUser } from '../types/types';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const response = await axios.get<IUser>(
                `https://jsonplaceholder.typicode.com/users/${id}`
            );
            setUser(response.data);
        } catch (error) {
            alert(error);
        }
    };
    return (
        <div>
            <button onClick={() => navigate('/users')}>back</button>
            <h1>User page of {user?.name}</h1>
            <div>{user?.email}</div>
            <div>{user?.address.city}</div>
        </div>
    );
};

export default UserItemPage;

import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';
import axios from 'axios';

const App: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        fetchUsers();
    });

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
        <div className="App">
            <Card width="200px" height="200px" variant={CardVariant.outlined}>
                <button>click me</button>
            </Card>
            <UserList users={users} />
        </div>
    );
};

export default App;

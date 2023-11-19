import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import { ITodo, IUser } from './types/types';
import axios from 'axios';
import List from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import EventsExample from './components/EventsExample';

const App: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchUsers();
        fetchTodo();
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
    const fetchTodo = async () => {
        try {
            const response = await axios.get<ITodo[]>(
                'https://jsonplaceholder.typicode.com/todos?_limit=10'
            );
            setTodos(response.data);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className="App">
            <Card width="200px" height="200px" variant={CardVariant.outlined}>
                <button>click me</button>
            </Card>
            <EventsExample />
            <h1>Users</h1>
            <List
                items={users}
                renderItem={(user: IUser) => (
                    <UserItem user={user} key={user.id} />
                )}
            />
            <h1>Todos</h1>
            <List
                items={todos}
                renderItem={(todo: ITodo) => (
                    <TodoItem todo={todo} key={todo.id} />
                )}
            />
        </div>
    );
};

export default App;

import React, { FC, useEffect, useState } from 'react';
import { ITodo } from '../types/types';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const TodoItemPage: FC = () => {
    const [todo, setTodo] = useState<ITodo | null>(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchTodo();
    }, []);

    const fetchTodo = async () => {
        try {
            const response = await axios.get<ITodo>(
                `https://jsonplaceholder.typicode.com/todos/${id}`
            );
            setTodo(response.data);
        } catch (error) {
            alert(error);
        }
    };
    return (
        <div>
            <button onClick={() => navigate('/todos')}>back</button>
            <h1>
                Todo page of{' '}
                <span style={{ color: 'aqua' }}>{todo?.title}</span>
            </h1>
        </div>
    );
};

export default TodoItemPage;

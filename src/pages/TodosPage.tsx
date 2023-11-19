import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { ITodo } from '../types/types';
import TodoItem from '../components/TodoItem';
import List from '../components/List';

const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchTodo();
    }, []);

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
        <div>
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

export default TodosPage;

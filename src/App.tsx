import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import TodosPage from './pages/TodosPage';
import { Link } from 'react-router-dom';
import UserItemPage from './pages/UserItemPage';
import TodoItemPage from './pages/TodoItemPage';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <div>
                    <Link to={'/users'}>Users</Link>
                    <Link to={'/todos'}>Todos</Link>
                </div>
                <Routes>
                    <Route path="/users" element={<UsersPage />} />
                    <Route path="/users/:id" element={<UserItemPage />} />
                    <Route path="/todos" element={<TodosPage />} />
                    <Route path="/todos/:id" element={<TodoItemPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;

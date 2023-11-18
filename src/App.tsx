import React from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';

const App: React.FC = () => {
    const users = [
        {
            id: 1,
            name: 'kirill',
            email: 'kotl@gmail.com',
            address: {
                city: 'Novik',
                street: 'ejak',
                zipcode: 'hz',
            },
        },
    ];
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

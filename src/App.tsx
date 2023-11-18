import React from 'react';
import Card, { CardVariant } from './components/Card';

const App: React.FC = () => {
    return (
        <div className="App">
            <Card
                onClick={(num) => console.log('meow', num)}
                width="200px"
                height="200px"
                variant={CardVariant.outlined}
            >
                <button>click me</button>
            </Card>
        </div>
    );
};

export default App;

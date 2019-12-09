import React from 'react';
import Hook from './hook';
import Timer from './comps/time';
import List from './comps/list';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                React Hook
            </header>
            <Timer />
            <Hook />
            <List number={[1,3,4,5,6]}/>
        </div>
    );
}

export default App;
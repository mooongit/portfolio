import React from 'react';
import './App.css';
import {About} from './components/About';
import {Header} from './components/Header';

const App = () => {
    return (
        <div className="container">
            <Header />
            <About />
        </div>
    );
};

export default App;

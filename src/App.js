import React, { Component } from 'react';
import Header from './Header';
import Links from './Links';

import './App.css';

class App extends Component {
    
    render() {

        return (
            <div className="app">
                <Header />
                <Links />
            </div>
        );
    }
}

export default App;
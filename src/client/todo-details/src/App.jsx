import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        React app sucessfully loaded
                    </p>
                </header>
                <app-ng-todolist></app-ng-todolist>
            </div>
        );
    }
}

export default App;

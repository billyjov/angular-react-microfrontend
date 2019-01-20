import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { totalDoneTasks: 0 };
    }

    componentDidMount() {
        this.nv.addEventListener('allDoneTasksEmitter', this.handleNvEnter);
    }

    componentWillUnmount() {
        this.nv.removeEventListener('allDoneTasksEmitter', this.handleNvEnter);
    }

    handleNvEnter = (event) => {
        this.setState({ totalDoneTasks: event.detail.length });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>
                        React app sucessfully loaded: {this.state.totalDoneTasks} done tasks
                    </h1>
                </header>
                <app-ng-todolist ref={elem => this.nv = elem}></app-ng-todolist>
            </div>
        );
    }
}

export default App;

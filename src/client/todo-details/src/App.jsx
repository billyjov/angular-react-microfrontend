import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allTasks: [],
            totalDoneTasks: [],
            taskForToday: []
        };
    }

    componentDidMount() {
        this.nv.addEventListener('ngAllTasksEmitter', this.handleTasksEvent);
    }

    componentWillUnmount() {
        this.nv.removeEventListener('ngAllTasksEmitter', this.handleTasksEvent);
    }

    handleTasksEvent = (tasksEvent) => {
        console.log('event got: ', tasksEvent);
        const allTasks = tasksEvent.detail;
        const allDoneTasks = this.getAllDoneTasks(allTasks);
        const taskForToday = this.getTodayDueDateTasks(allTasks)
        this.setState({
            allTasks: allTasks,
            totalDoneTasks: allDoneTasks,
            taskForToday: taskForToday
        });
    }

    getAllDoneTasks = (allTasks) => {
        const allDoneTasks = allTasks.filter(tasks => tasks.done);
        return allDoneTasks;
    }

    getTodayDueDateTasks = (allTasks) => {
        const today = new Date().toDateString();
        console.log('all task for filter today', allTasks);
        console.log('today is', today);
        const taskForToday = allTasks.filter(tasks => (tasks.dueDate) === today);
        console.log('task for today ', taskForToday);
        return taskForToday;
    }

    render() {
        return (
            <div className="App mb-5">
                <header className="App-header mb-5">
                    <nav className="navbar navbar-light bg-info">
                        <a className="navbar-brand" href=""><img src={logo} className="App-logo" alt="logo" /></a>
                        <div className="text-right">
                            <span className="navbar-icon--container">
                                <i className="material-icons navbar-icon">
                                    assignment
                                </i>
                                <span className="navbar-icon--badge">{this.state.allTasks.length}</span>
                            </span>
                            <span className="navbar-icon--container">
                                <i className="material-icons navbar-icon">
                                    assignment_turned_in
                                </i>
                                <span className="navbar-icon--badge">{this.state.totalDoneTasks.length}</span>
                            </span>

                        </div>
                    </nav>
                </header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <app-ng-todolist ref={elem => this.nv = elem} reactEvent={this.state.totalDoneTasks}></app-ng-todolist>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-5">
                                <div className="card-header bg-info text-white">
                                    <h4 className="text-uppercase">To do today</h4>
                                </div>
                                <div className="card-body">
                                    <p className="alert alert-primary d-flex">
                                        <i className="material-icons mr-2">visibility_off</i>
                                        <span>Nothing to see yet</span>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header bg-info text-white">
                                    <h4 className="text-uppercase">To do this week</h4>
                                </div>
                                <div className="card-body">
                                    <p className="alert alert-primary d-flex">
                                        <i className="material-icons mr-2">visibility_off</i>
                                        <span>Nothing to see yet</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

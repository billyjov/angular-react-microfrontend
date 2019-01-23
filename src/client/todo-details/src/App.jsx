import React, { Component } from 'react';

import './App.css';
import logo from './logo.svg';

import Header from './components/header/Header.jsx';
import DailyTasks from './components/daily-tasks/index.jsx';
import WeeklyTasks from './components/weekly-tasks/index.jsx';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allTasks: [],
            totalDoneTasks: [],
            allDailyTasks: [],
            allWeeklyTasks: []
        };
    }

    componentDidMount() {
        this.nv.addEventListener('ngAllTasksEmitter', this.handleTasksEvent);
    }

    componentWillUnmount() {
        this.nv.removeEventListener('ngAllTasksEmitter', this.handleTasksEvent);
    }

    handleTasksEvent = (tasksEvent) => {
        const allTasks = tasksEvent.detail;
        const allDoneTasks = this.getAllDoneTasks(allTasks);
        const dailyTasks = this.getDailyTasks(allTasks)
        const weeklyTasks = this.getWeeklyTasks(allTasks);
        this.setState({
            allTasks: allTasks,
            totalDoneTasks: allDoneTasks,
            allDailyTasks: dailyTasks,
            allWeeklyTasks: weeklyTasks
        });
    }

    getAllDoneTasks = (allTasks) => {
        const allDoneTasks = allTasks.filter(tasks => tasks.done);
        return allDoneTasks;
    }

    getDailyTasks = (allTasks) => {
        const date = new Date();
        date.setUTCHours(0, 0, 0, 0);
        const today = date.toISOString();
        const dailyTasks = allTasks.filter(tasks => tasks.dueDate === today);
        return dailyTasks;
    }

    getWeeklyTasks = (allTasks) => {
        const date = new Date();
        date.setUTCHours(0, 0, 0, 0);
        const firstDayOfWeek = new Date(date.setDate(date.getDate() - date.getDay())).toISOString();
        const lastDayOfWeek = new Date(date.setDate(date.getDate() - date.getDay() + 6)).toISOString();
        let weeklyTasks = [];
        allTasks.forEach(task => {
            if (this.isDateBetweenRange(firstDayOfWeek, lastDayOfWeek, task.dueDate)) {
                weeklyTasks.push(task);
            }
        });
        return weeklyTasks;
    }

    isDateBetweenRange = (from, to, dateToCheck) => {
        const fromValue = Date.parse(from);
        const toValue = Date.parse(to);
        const dateToCheckValue = Date.parse(dateToCheck);

        if (dateToCheckValue <= toValue && dateToCheckValue >= fromValue) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <div className="App mb-5">
                <Header logo={logo} allTasks={this.state.allTasks} totalDoneTasks={this.state.totalDoneTasks}></Header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <app-ng-todolist ref={elem => this.nv = elem} reactEvent={this.state.totalDoneTasks}></app-ng-todolist>
                        </div>
                        <div className="col-md-4">
                            <DailyTasks logo={logo} allDailyTasks={this.state.allDailyTasks}></DailyTasks>
                            <WeeklyTasks logo={logo} allWeeklyTasks={this.state.allWeeklyTasks}></WeeklyTasks>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

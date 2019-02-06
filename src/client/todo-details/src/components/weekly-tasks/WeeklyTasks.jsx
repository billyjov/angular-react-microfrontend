import React, { Component } from 'react';
import WeeklyTaskTable from './WeeklyTaskTable.jsx';

export default class WeeklyTasks extends Component {
    render() {
        const isWeeklyTasksEmpty = this.props.allWeeklyTasks.length === 0 ? true : false;
        return (
            <div className="card">
                <div className="card-header bg-info text-white">
                    <img src={this.props.logo} className="App-logo" alt="logo" />
                    <h4 className="text-uppercase">To do this week</h4>
                </div>
                <div className="card-body">
                    {
                        isWeeklyTasksEmpty &&
                        <p className="alert alert-primary d-flex">
                            <i className="material-icons mr-2">mood</i>
                            <span>There are no tasks this week</span>
                        </p>
                    }
                    {!isWeeklyTasksEmpty && <WeeklyTaskTable weeklyTasks={this.props.allWeeklyTasks} />}
                </div>
            </div>
        );
    }
}

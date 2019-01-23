import React, { Component } from 'react';
import DailyTaskTable from './DailyTaskTable.jsx';

export default class DailyTasks extends Component {
    render() {
        const isDailyTasksEmpty = this.props.allDailyTasks.length === 0 ? true : false;
        return (
            <div className="card mb-5">
                <div className="card-header bg-info text-white">
                    <img src={this.props.logo} className="App-logo" alt="logo" />
                    <h4 className="text-uppercase">To do today</h4>
                </div>
                <div className="card-body">
                    {
                        isDailyTasksEmpty &&
                        <p className="alert alert-primary d-flex">
                            <i className="material-icons mr-2">mood</i>
                            <span>Nothing to do today</span>
                        </p>
                    }
                    {!isDailyTasksEmpty && <DailyTaskTable dailyTasks={this.props.allDailyTasks} ></DailyTaskTable>}
                </div>
            </div>
        );
    }
}

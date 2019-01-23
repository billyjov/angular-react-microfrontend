import React, { Component } from 'react';
import WeeklyTaskRow from './WeeklyTaskRow.jsx';
export default class WeeklyTaskTable extends Component {

    getTaskRows = () => {
        return this.props.weeklyTasks.map(task => {
            return (<WeeklyTaskRow task={task} key={task.id}></WeeklyTaskRow>)
        })
    }

    render() {
        return (
            <table className="table table-striped table-borderless">
                <thead>
                    <tr>
                        <th className="text-uppercase">Title</th>
                        <th className="text-uppercase">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {this.getTaskRows()}
                </tbody>
            </table>
        );
    }
}

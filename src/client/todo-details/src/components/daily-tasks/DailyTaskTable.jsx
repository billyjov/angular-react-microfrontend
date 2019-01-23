import React, { Component } from 'react';
import DailyTaskRow from './DailyTaskRow.jsx';
export default class DailyTaskTable extends Component {

    getTaskRows = () => {
        return this.props.dailyTasks.map(task => {
            return (<DailyTaskRow task={task} key={task.id}></DailyTaskRow>)
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

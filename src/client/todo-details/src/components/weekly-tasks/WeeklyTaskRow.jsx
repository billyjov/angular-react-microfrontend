import React, { Component } from 'react';

export default class WeeklyTaskRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.task.title}</td>
                <td>{
                    this.props.task.done ? <span className="badge badge-danger">done</span> : <span className="badge badge-info">to do</span>}
                </td>
            </tr>
        );
    }
}

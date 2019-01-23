import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header className="App-header mb-5">
                <nav className="navbar navbar-light bg-info">
                    <span className="navbar-brand"><img src={this.props.logo} className="App-logo" alt="logo" /></span>
                    <div className="text-right">
                        <span className="navbar-icon--container">
                            <i className="material-icons navbar-icon">assignment</i>
                            <span className="navbar-icon--badge">{this.props.allTasks.length}</span>
                        </span>
                        <span className="navbar-icon--container">
                            <i className="material-icons navbar-icon">assignment_turned_in</i>
                            <span className="navbar-icon--badge">{this.props.totalDoneTasks.length}</span>
                        </span>
                    </div>
                </nav>
            </header>
        );
    }
}

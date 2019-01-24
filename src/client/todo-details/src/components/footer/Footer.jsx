import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="container">
                    <p className="navbar-text pull-left d-flex">
                        Made with <i className="material-icons mx-2 copyright-favorite">favorite</i> by
                        <a href="https://github.com/billyjov" target="_blank" rel="noopener noreferrer" className="mx-2">Billy Lando(@billyjov) </a>
                    </p>
                </div>
            </div>
        )
    }
}


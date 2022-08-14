import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            
            <nav className="navbar">
                <i className="fa-solid fa-leaf navbar__icon"></i>
                <span>Habit Tracker</span>
                <span className="navbar__count">{this.props.totalCount}</span>
                </nav>
        )
    }
}

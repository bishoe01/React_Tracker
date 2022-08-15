import React, { PureComponent } from 'react'

export default class Navbar extends PureComponent {
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

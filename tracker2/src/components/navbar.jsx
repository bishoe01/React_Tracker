import React from 'react';

export default function Navbar(props){
    return (
        <nav className="nav">
            <i className="nav__icon fa-solid fa-leaf"></i>
            <span>Habit Tracker</span>
            <span className='nav__span'>0</span>
        </nav>
    )
}

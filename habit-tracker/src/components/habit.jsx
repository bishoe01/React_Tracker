import React, { Component } from 'react';

class Habit extends Component {
    handleIncrement = (event) => {
        this.props.OnIncrement(this.props.habit);
    }
    handleDecrement = (event) => {
        this.props.OnDecrement(this.props.habit);
    }
    handleDelete = (event) => {
        this.props.onDelete(this.props.habit);
    }
    render() {
        const {name, count} = this.props.habit;
        return (
            <li className="habit">
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" 
            onClick={this.handleIncrement}>
                <i className="fa-solid fa-circle-plus"></i></button>
            <button className="habit-button habit-decrease"
            onClick={this.handleDecrement}>
                <i className="fa-solid fa-circle-minus"></i></button>
            <button className="habit-button habit-delete" 
            onClick={this.handleDelete}>
                <i className="fa-solid fa-trash-can"></i></button>
            </li>
        );
    }
}

export default Habit;
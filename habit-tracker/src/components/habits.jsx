import React, { Component } from 'react'
import Habit from './habit';
import HabitForm from './habitForm';
export default class Habits extends Component {
    handleAdd = name => {
        this.props.onAdd(name);
    }
    render() {
        return (
            <>
            <HabitForm onAdd={this.handleAdd}/>
            <ul>
                {this.props.habits.map(habit => 
                <Habit 
                key={habit.id} 
                habit={habit}
                onIncrement = {this.props.onIncrement}
                onDecrement = {this.props.onDecrement}
                onDelete = {this.props.onDelete}
                ></Habit>
                    )}
            </ul>
            <button className="habits__reset" onClick={this.props.onReset}>Reset All</button>
            </>
        );
    }
}


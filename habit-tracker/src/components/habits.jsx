import React, { Component } from 'react'
import Habit from './habit';
export default class Habits extends Component {

    state = {
        habits: [
            {id : 1,name : "Reading",count : 0},
            {id : 2,name : "Running",count : 0},
            {id : 3,name : "Coding",count : 0},
        ],
    };
    onIncrement = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({habits});
    }
    onDecrement = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        const cnt = habits[index].count-1;
        habits[index].count = cnt < 0 ? 0 : cnt;
        this.setState({habits});
    }
    onDelete = (habit) => {
        const habits = this.state.habits.filter(item => item.id !== habit.id);
        this.setState({habits});
        
    }
    render() {
        return (
            <ul>
                {this.state.habits.map(habit => 
                <Habit 
                key={habit.id} 
                habit={habit}
                OnIncrement = {this.onIncrement}
                OnDecrement = {this.onDecrement}
                onDelete = {this.onDelete}
                ></Habit>
                    )}
            </ul>
        );
    }
}


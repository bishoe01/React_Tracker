import './app.css';
import React, { Component } from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
        {id : 1,name : "Reading",count : 0},
        {id : 2,name : "Running",count : 0},
        {id : 3,name : "Coding",count : 0},
    ],
    totalCount : 0,
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
handleAdd = (name) => {
  const habits = [...this.state.habits ,{id : Date.now() ,name : name, count: 0} ];
  this.setState({habits});
}
  render() {
    return (
      <>
        <Navbar habits={this.state.habits}
        totalCount={this.state.habits.filter(item => item.count>0).length}
        />
        <Habits habits={this.state.habits} 
        onIncrement = {this.onIncrement}
        onDecrement = {this.onDecrement}
        onDelete = {this.onDelete}
        onAdd = {this.handleAdd}
        />
      </>
    )
  }
}

export default App;

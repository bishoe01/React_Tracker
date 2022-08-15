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
  const habits = this.state.habits.map(item => {
    if(item.id === habit.id){
      return { ...habit, count: habit.count + 1}
    }
    // 같지 않으면 
    return item;
  });
  this.setState({habits});
}
onDecrement = (habit) => {
  const habits = this.state.habits.map(item => {
    if(item.id === habit.id){
      const count = habit.count - 1 ;
      return { ...habit, count: count < 0 ? 0 : count}
    }
    return item;
  });
  this.setState({habits});
}
onDelete = (habit) => {
  const habits = this.state.habits.filter(item => item.id !== habit.id);
  this.setState({habits});
  
}
handleAdd = (name) => {
  const habits = [...this.state.habits ,{id : Date.now() ,name, count: 0} ];
  this.setState({habits});
};
handleReset = () => {
  const habits = this.state.habits.map(item => {
    if(item.count !==0){
      return { ...item, count: 0}
    }
    return item;
  });
  this.setState({habits});
};

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
        onReset = {this.handleReset}
        />
      </>
    )
  }
}

export default App;

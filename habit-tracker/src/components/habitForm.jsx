import React, { Component } from 'react'

export default class HabitForm extends Component {
    inputRef = React.createRef();
    onSubmit = (event) => {
        event.preventDefault();
        const name =this.inputRef.current.value; 
        name && this.props.onAdd(name);
        this.inputRef.current.value= "";
    };
    render() {
        return (
            <form className='input' onSubmit={this.onSubmit}>
                <input 
                ref={this.inputRef}
                type="text" placeholderclassName='input__type' placeholder="Habit"  />
                <button className='input__btn'>Add</button>
            </form>
        )
    }
}

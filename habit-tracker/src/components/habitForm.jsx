import React, { PureComponent } from 'react'

export default class HabitForm extends PureComponent {
    inputRef = React.createRef();
    formRef = React.createRef();
    onSubmit = (event) => {
        event.preventDefault();
        const name =this.inputRef.current.value; 
        name && this.props.onAdd(name);
        this.formRef.current.reset();
    };
    render() {
        return (
            <form ref={this.formRef} className='input' onSubmit={this.onSubmit}>
                <input 
                ref={this.inputRef}
                type="text" className='input__type' placeholder="Habit"  />
                <button className='input__btn'>Add</button>
            </form>
        )
    }
}

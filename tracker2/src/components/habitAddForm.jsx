import React from 'react';

function HabitAddForm(props) {
    const ref = React.createRef();
    const inputRef = React.createRef();
    const onAdd = (e) => {
        e.preventDefault();
        const value = inputRef.current.value;
        value && props.handleAdd(value);
        ref.current.reset();

    }
    return (
        <div>
            <form className='habitForm' onSubmit={onAdd} ref={ref}>
                <input ref={inputRef} type="text" className='habitForm__input' placeholder='Habit'/>
                <button  className="habitForm__btn">Enter</button>
            </form>
        </div>
    );
}

export default HabitAddForm;
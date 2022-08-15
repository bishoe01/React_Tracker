import React from 'react';

function HabitList({habit, id, handleplus,handleminus, handledelete}) {
    return (
        <div>
            <li className="habit__list">
                <span>{habit.name}</span>
                <span className="nav__span">{habit.count}</span>
                <button className="habit__icon habit__plus" onClick={() => {handleplus(habit);}}><i className="fa-solid fa-circle-plus"></i></button>
                <button className="habit__icon habit__minus" onClick={() => {handleminus(habit);}}><i className="fa-solid fa-circle-minus"></i></button>
                <button className="habit__icon habit__delete" onClick={()=> {handledelete(habit);}}><i className="fa-solid fa-trash-can"></i></button>
            </li>
        </div>
    );
}

export default HabitList;
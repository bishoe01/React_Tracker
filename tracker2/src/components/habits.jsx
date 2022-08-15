import React from "react"
import HabitList from "./habitlist"

export default function Habits(props){
    return(
        <div>
            {props.habitarr.map((habit) => 
            <HabitList key={habit.id} habit={habit} 
            handleplus={props.handleplus}
            handleminus={props.handleminus}
            handledelete={props.handledelete}
            handleAdd ={props.handleAdd}
            />
            )}
        </div>
    )
}
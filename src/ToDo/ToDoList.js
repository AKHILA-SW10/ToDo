import { useState } from "react";
import ToDoItem from "./ToDoItem";

const ToDoList=(props)=>{
    const remove=(event)=>{
        props.remove(event.target.id);
    }

    const completed=(event)=>{
        props.completed(event.target.id);
    }
    props.items.map(todo=>(console.log(todo.id+" "+todo.task+" "+todo.isCompleted)))

    if(props.items.length==0){
        return <h3 className='no-msg'> No activities found ..!! </h3>;
   } else{
        return props.items.map(todo=>(
                <div><ToDoItem id={todo.id} title={todo.task} remove={remove} isCompleted={todo.isCompleted} completed={completed} /></div>
        ));
   }
}
export default ToDoList;
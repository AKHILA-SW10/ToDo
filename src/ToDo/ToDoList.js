import { useState } from "react";
import ToDoItem from "./ToDoItem";

const ToDoList=(props)=>{
    const remove=(event)=>{
        props.remove(event.target.id);
    }
    if(props.items.length==0){
        return <h3 className='no-msg'> No activities found ..!! </h3>;
   } else{
        return props.items.map(todo=>(
            <div><ToDoItem id={todo.id} title={todo.task} remove={remove}/></div>
        ));
   }
}
export default ToDoList;
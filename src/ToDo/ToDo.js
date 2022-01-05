import { useState } from "react";
import TaskForm from "./TaskForm";
import ToDoList from "./ToDoList";
import './ToDo.css';
import Axios from 'axios';
const ToDo=(props)=>{
    
    const sample=[];
    const [isAddClicked,setAddClick]=useState(false);
    const [key,setKey]=useState(0);
    const [todoItems,setItems]=useState(sample);

    const addTask=(title)=>{
        const newItem={id:key,task:title};
        setItems((todoItems)=>{
            return [...todoItems,newItem];
        });
        setKey(key+1);
    }

    const removeTask=(id)=>{
        console.log("remove..!!!!",id);
        const tempItems=[...todoItems];
        for(var i=0;i<todoItems.length;i++){
            if(id==tempItems[i].id){
                tempItems.splice(i,1);
                break;
            }
        }
        setItems((todoItems)=>{
                return [...tempItems];
        })
    }

    const addClicked=(event)=>{
        setAddClick(!isAddClicked);
    }

    const suggestion=()=>{
        Axios.get("https://www.boredapi.com/api/activity?participants="+Math.ceil(Math.random()*4)).then((response)=>{
            console.log(response.data.activity);
            addTask(response.data.activity);
        })
    }

  return (
      <div>
          <h1>{props.user}, Here is your To-Do List..!!</h1>
          <ToDoList items={todoItems} remove={removeTask}/>
          {isAddClicked?<TaskForm add={addTask} remove={removeTask} hide={addClicked}/>:<button className="add-button" id="Add" onClick={addClicked}>Add</button>}
          {!isAddClicked ? <button className="suggest-button" onClick={suggestion}>Suggest</button>:<div/>};
      </div>
  )
}
export default ToDo;
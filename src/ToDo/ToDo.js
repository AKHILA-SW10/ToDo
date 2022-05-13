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
        if(title.length==0) return;
        const newItem={id:key,task:title,isCompleted:false};
        setItems((todoItems)=>{
            return [...todoItems,newItem];
        });
        setKey(key+1);
    }

    const removeTask=(id)=>{
        console.log("remove..!!!!",id,todoItems);
        const tempItems=[...todoItems];
        
        for(var i=0;i<todoItems.length;i++){
            if(id==tempItems[i].id){
                tempItems.splice(i,1);
                break;
            }
        }
        console.log("after remove..!!!!",id,tempItems);
        setItems((todoItems)=>{
                return [...tempItems];
        })
    }
    const completedTask=(id)=>{
        console.log("id is id",id,todoItems);
        const tempItems=[...todoItems];
        for(var i=0;i<todoItems.length;i++){
            if(id==tempItems[i].id){
                const newItem={id:tempItems[i].id,task:tempItems[i].task,isCompleted:true};
                tempItems.splice(i,1,newItem);
                break;
            }
        }
        console.log("after complete ",tempItems)
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
          <ToDoList items={todoItems} remove={removeTask} completed={completedTask}/>
          {isAddClicked?
             <TaskForm add={addTask} remove={removeTask} hide={addClicked}/>:
             <div>
             <button className="add-button" id="Add" onClick={addClicked}>Add</button>
             <button className="suggest-button" onClick={suggestion}>Suggest</button>
             </div>
          }
      </div>
  )
}
export default ToDo;
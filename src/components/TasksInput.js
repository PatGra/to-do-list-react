
import './TasksInput.scss'
import { useState } from 'react';
import TaskItem from "./TaskItem";

const TasksInput = (props) => {
    
    const [name, setName] = useState('');
    

    const answer = (event) => {
      event.preventDefault()
    props.onButton(name);
   setName('')

    }

    const changeHandler =(event) =>{
        console.log(event.target.value)
        setName(event.target.value)
    }

  
        
    return(
        <div className='TasksInput'>
            <div className='border'>
              <form className='form' action="">
            <input 
            value={name}
            type="text" id="tasks" name="name" placeholder="add new task"
            onChange={changeHandler}
            />
            <input className= 'btn' type="submit" value='add' onClick={answer} />
            </form>
            <div className='ShowNewToDo'>
            <p className='NewToDo'>Add: {name} ?</p>
            </div>        
            </div>

        </div>
    );
};

export default TasksInput;
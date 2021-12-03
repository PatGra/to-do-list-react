
import './TasksInput.scss'
import { useState } from 'react';

const TasksInput = (props) => {
    
    const [name, setName] = useState('Wäsche waschen');
    
    const answer = () => {
    props.onButton(name);
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
            type="text" id="tasks" name="fname" placeholder="add new task"
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
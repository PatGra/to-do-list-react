
import './TasksInput.scss'
import { useState } from 'react';


const TasksInput = (props) => {
    
    const [input, setInput] = useState('');
    

    const answer = (event) => {
      event.preventDefault()
      props.dispatch({type:'submit', payload:{name:input}});
      setInput('')

    }

    const changeHandler =(event) =>{
        console.log(event.target.value)
        setInput(event.target.value)
    }

  
        
    return(
        <div className='TasksInput'>
            <div className='border'>
              <form className='form' action="">
            <input 
            value={input}
            type="text" id="tasks" name="name" placeholder="add new task"
            onChange={changeHandler}
            />
            <input className= 'btn' type="submit" value='add' onClick={answer} />
            </form>
            <div className='ShowNewToDo'>
           {/*  <p className='NewToDo'>Add: {input} ?</p>*/}
            </div>        
            </div>

        </div>
    );
};

export default TasksInput;
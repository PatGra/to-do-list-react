
import './TasksInput.scss'

const TasksInput = () => {
    return(
        <div className='TasksInput'>
              <form className='form' action="">

<label for="tasks"></label>
<input type="text" id="tasks" name="fname" placeholder="add new task"/>
<input className= 'btn' type="submit"></input>
</form>
        </div>
    )
}

export default TasksInput;
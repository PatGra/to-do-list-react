

const TaskItem = (props) => {
    console.log(props);
    return(
     
      
        <div className='Tasks'>
            <form action="">
            <label className="MyCheckbox"> 
            <input className='Checkbox' type="checkbox" />
             <span className="Input"></span>
             <span> {props.todo.name}</span>
            </label>
            </form>
        </div>
    )
}

export default TaskItem;
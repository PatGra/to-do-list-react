

const TaskItem = (props) => {
        // const todo = props.todo;
        const { text, done } = props.todo;
    console.log(props);
    return(
     
      
        <div className='Tasks'>
            <form action="">
            <label className="MyCheckbox"> 
            <input type="checkbox" />
             <span className="Input"></span>
             <span> {text}</span>
            </label>
            </form>
        </div>
    )
}

export default TaskItem;
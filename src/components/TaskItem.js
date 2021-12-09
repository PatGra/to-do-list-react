

const TaskItem = (props) => {

    function clicked(){
        props.dispatch({type: 'checkbox', payload: {index: props.index}})
    }
    console.log('taskItem', props);
    return( 
        <div className='Tasks'>
            <form action="">
            <label className="MyCheckbox"> 
            <input className='Checkbox' type="checkbox" onClick={clicked}/>
             <span className="Input"></span>
             <span> {props.todo.name}</span>
            </label>
            </form>
        </div>
    )
}

export default TaskItem;
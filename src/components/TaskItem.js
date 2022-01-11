

const TaskItem = (props) => {

    function clicked(){
        if( props.todo.done){
            props.dispatch({type: 'remove', payload: {id: props.todo.id}})
        } else{
            props.dispatch({type: 'checkbox', payload: {id: props.todo.id}})
        }
        

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
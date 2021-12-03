import TaskItem from "./TaskItem";
import './Tasks.scss'

function Tasks(props) {
console.log(props);

    return(
        <div className='tasks'>
             {props.todoList.map((todo) => (<TaskItem todo={todo} />))}
        </div>
    )
}

export default Tasks
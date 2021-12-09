import TaskItem from "./TaskItem";
import './Tasks.scss'

function Tasks(props) {
console.log(props);

    return(
        <div>
             {props.todoList.map((todo, index) => (<TaskItem dispatch={props.dispatch} todo={todo} key={index} index={index} />))}
        </div>
    )
}

export default Tasks
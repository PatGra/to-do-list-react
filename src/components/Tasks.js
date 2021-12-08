import TaskItem from "./TaskItem";
import './Tasks.scss'

function Tasks(props) {
console.log(props);

    return(
        <div>
             {props.todoList.map((todo, index) => (<TaskItem todo={todo} key={index}/>))}
        </div>
    )
}

export default Tasks
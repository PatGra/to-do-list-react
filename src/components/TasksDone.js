
import './TasksDone.scss';
import TaskItem from './TaskItem';

const TasksDone = (props) => {
    return(
        <div className='TasksDone'>
            Done
            <div className='Done'>
            {props.todoList.map((todo, index) => (<TaskItem dispatch={props.dispatch} todo={todo} key={index} index={index} />))}
            </div>
        </div>
    )
}

export default TasksDone;
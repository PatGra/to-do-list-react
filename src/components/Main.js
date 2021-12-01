import Tasks from "./Tasks";
import TasksInput from "./TasksInput";
import TasksDone from "./TasksDone";

const Main = () => {
    return(
        <div className='Main'>
            <Tasks/>
            <TasksInput/>
            <TasksDone/>
        </div>
    )
}

export default Main;
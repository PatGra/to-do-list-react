
import TasksInput from "./TasksInput";
import TasksDone from "./TasksDone";
import Tasks from './Tasks';


const Main = () => {
    const addTodo = (name) => {
        alert(`Button clicked. New Task: "${name}"`);
    }

    const todoList = [
        {
            text: 'supermarket',
            done: false
        },

        {
            text: 'make the laundry',
            done: false
        },

        {
            text: 'cleaning',
            done: true
        }
    ]
        const openTodos = todoList.filter(todo => !todo.done);
        const doneTodos = todoList.filter(todo => todo.done);


    return(
        <div className='Main'>
            <Tasks
            todoList={openTodos}
            />
            <TasksInput 
                  onButton={addTodo}
            />
            <TasksDone/>
        </div>
    )
};

export default Main;

import TasksInput from "./TasksInput";
import TasksDone from "./TasksDone";
import Tasks from './Tasks';
import { useState } from "react";
import TaskItem from "./TaskItem";


const Main = () => {
    const addTodo = (name) => {
        alert(`Button clicked. New Task: "${name}"`);
        const newTask = {name:name, done: false}
        setTodoList([...todoList, newTask])
    }

  
    const [todoList, setTodoList ] = useState([])

       const openTodos = todoList.filter(todo => !todo.done);
       const doneTodos = todoList.filter(todo => todo.done);


       /*const deleteTodo =()=>{
           dispatch(
               {type:'checkbox'}
           )
       }*/

    return(
        <div className='Main'>
            <Tasks
            todoList={openTodos}
            />
            <TasksInput 
                  onButton={addTodo} 
            />
            {/*<TaskItem onCheckbox={deleteTodo}/>*/}
            <TasksDone
            todoList={doneTodos}
            />
        </div>
    )
};

export default Main;
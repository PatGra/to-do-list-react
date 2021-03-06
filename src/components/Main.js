
import TasksInput from "./TasksInput";
import TasksDone from "./TasksDone";
import Tasks from './Tasks';
import { useReducer, useEffect } from "react";


const Main = () => {

 useEffect(()=>{
     dispatch({
         type: 'restoreLocalStorage', payload: JSON.parse(localStorage.getItem('toDo'))
     })
 }, [])

    //array = das late array; action = {type:..., payload: ...}
    const reducer = (array, action)=> {
        if(action.type === 'checkbox'){
            const id = action.payload.id
            const result = array.map((todo, index)=> { 
                if(id === todo.id){
                    return {...todo, done:!todo.done}
                }
                return todo;
            })
            return result
        }
        if(action.type === 'submit'){
            const result = [...array, {name: action.payload.name, done: false, id: action.payload.id}]
            return result
        }
        if(action.type === 'restoreLocalStorage'){
            return action.payload
        }
        if(action.type ==='remove'){
            const id= action.payload.id
            const result = array.filter(todo=> todo.id !== id)
            return result
        }
    }

    const [todoList, dispatch] = useReducer(reducer, []);
    useEffect(()=>{
        const jsonNewTask = JSON.stringify(todoList);
        localStorage.setItem('toDo', jsonNewTask);

    },[todoList])
       


     const openTodos = todoList.filter(todo => !todo.done);
     const doneTodos = todoList.filter(todo => todo.done);

      const deleteTodo =()=>{
           dispatch(
               {type:'checkbox'}
           );
       };

       const addTodo = () => {
        dispatch(
            {type:'submit'}
        );
       }
      

    return(
        <div className='Main'>
            <Tasks list={todoList} todoList={openTodos} dispatch={dispatch}/>
            <TasksInput dispatch={dispatch} />
            <TasksDone todoList={doneTodos} dispatch={dispatch}
            />
        </div>
    )
};

export default Main;
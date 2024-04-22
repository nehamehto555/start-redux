
import { useState } from "react";

//The useDispatch hook allow you to send or dispatch an action to the redux store by giving the action as an argument to the dispatch variable//
import { useDispatch} from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm(){
    const[task, setTask] = useState('');
    const dispatch = useDispatch();

    const submitHandler=(evt)=>{
        evt.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
        setTask("");
    };
    return(
    <>

    <form onSubmit={submitHandler}>
      
        <input type="text" onChange={(e)=>setTask(e.target.value)} placeholder=" Add more"></input>
        <button type="submit">Add Task</button>
        </form>
        </>
    )
}
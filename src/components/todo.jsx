// The useSelector hooks allow you to extract data or the state from the Redux store//
// useSelector function.(return the data)//
import { useSelector } from "react-redux"
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";

export default function todo(){
    const todos = useSelector((state)=> state.todos);
    console.log(todos);

    const dispatch = useDispatch();

    const clickHandler=(id)=>{
dispatch(deleteTodo(id));
}

    return(
        <>
        <AddForm/>
        <h3>
            Todo List 
        </h3>
        <ul>
            {todos.map((todo)=>(
            <li key={todo.id}>{todo.task}
            <button onClick={()=>clickHandler(todo.id)}>Delete</button></li>
            
        )
    )}</ul>
        </>
    );
}

      //CREATE A REDUX STATE SLICE FOR SETUP PROJECT//

// import from reduxjs//
import { createSlice, nanoid } from '@reduxjs/toolkit'

//define initialstate//
 const initialState = {
    todos:[{ id:"abc", task:"demo-task", isDone: false }],
};

//define slice//
export const todoSlice = createSlice({
    //name and initialstate
    name: "todo",
    initialState,
    
    //write a reducers function//
    reducers:{
        addTodo: (state,action) => {
            const newTodo = {
                 id:nanoid(),
                 task: action.payload,
                 isDone: false,
}
         state.todos.push(newTodo);
        },
        deleteTodo:(state,action)=>{
           state.todos=state.todos.filter((todo)=> todo.id !== action.payload) 
        },
        marksAsDone: (state,action)=>{
          state.todos = state.todos.map((todo)=>{
               if(todo.id===action.payload){
                todo.isDone= true;
               } 
            });
        },
    },
});

export const { addTodo, deleteTodo, marksAsDone} = todoSlice.actions;

export default todoSlice.reducer


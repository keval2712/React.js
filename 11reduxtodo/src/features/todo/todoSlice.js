import { createSlice ,nanoid} from "@reduxjs/toolkit";


const initialState={
    todos:[{id:1,text:"todo1",completed:false}]
}

export const todoSlice =createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        toggleTodo:(state,action)=>{
            const index=state.todos.findIndex((todo)=>todo.id===action.payload)
        },
        editTodo:(state,action)=>{
            const index=state.todos.findIndex((todo)=>todo.id===action.payload.id)
        },
        clearCompleted:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.completed===false)
        },


    }   
})
export const {addTodo,removeTodo,toggleTodo,editTodo,clearCompleted}=todoSlice.actions

export default todoSlice.reducer
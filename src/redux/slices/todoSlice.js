import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        
        setTodos: (state, action) => {
            return action.payload;
        },
        
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        
        deleteTodo: (state, action) => {
            return state.filter((_, index) => index !== action.payload);  // Remove the todo by index
        }
    }
});


export const { setTodos, addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

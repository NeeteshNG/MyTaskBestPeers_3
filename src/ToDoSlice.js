import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
    name : 'todos',
    initialState : [],
    reducers : {
        addTodo : (state, action) => {
            state.push(action.payload);
        },
        updateTodo : (state, action) => {
            const { id, text } = action.payload;
            const toDoUpdate = state.find((todo) => todo.id === id);
            if (toDoUpdate) {
                toDoUpdate.text = text
            }
        },
        deleteTodo : (state, action) => {
            const id = action.payload;
            return state.filter((todo) => todo.id !== id);
        },
    },
})

export const { addTodo, updateTodo, deleteTodo } = toDoSlice.actions;
export default toDoSlice.reducer;
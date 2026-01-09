import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        removeTodo: (state, action) => {
            return state.filter((t) => t.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const { id, title } = action.payload;
            const index = state.findIndex((t) => t.id === id);
            if (index !== -1) {
                state[index] = { ...state[index], title };
            }
        },
    },
});

export const { addTodo, removeTodo, updateTodo } = todosSlice.actions;
export default todosSlice.reducer;
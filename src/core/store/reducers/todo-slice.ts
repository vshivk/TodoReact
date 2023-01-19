import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Todo, TodoState} from "../../types/todo";
import {RootState} from "../store";

const initialState: TodoState = {
    tasks: [],
    completed: [],
}
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        todoChecking(state, action: PayloadAction<Todo[]>) {
            state.tasks = action.payload;
        },
        todoChanging(state, action: PayloadAction<string>) {
            state.tasks = state.tasks.map(task => ({...task, name: action.payload}))
        },
        todoAdding(state, action: PayloadAction<Todo>) {
            state.tasks = [...state.tasks, action.payload]
        },
        todoRemoving(state, action: PayloadAction<string>) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        }
    }
});
export const {
    todoAdding,
    todoRemoving
} = todoSlice.actions;
export const selectTodoReducer = (state: RootState) => state.todoReducer;
export default todoSlice.reducer;
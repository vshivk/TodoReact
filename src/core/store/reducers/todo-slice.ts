import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Todo} from "../../types/todo";
import {RootState} from "../store";
import {initialState} from "../../utils/todo";

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        todoAdding(state, action: PayloadAction<Todo>) {
            state.tasks = [...state.tasks, action.payload];
        },
        todoRemoving(state, action: PayloadAction<string>) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        todoCompletingTask(state,action: PayloadAction<Todo>){
            state.completed = [...state.completed, action.payload];
        },
        todoRemovingFromCompleted(state, action: PayloadAction<string>){
            state.completed = state.completed.filter(task => task.id !== action.payload);
        },
        todoRemovingAllCompleted(state){
            state.completed = [];
        }
    }
});
export const {
    todoAdding,
    todoRemoving,
    todoCompletingTask,
    todoRemovingFromCompleted,
    todoRemovingAllCompleted
} = todoSlice.actions;
export const selectTodoReducer = (state: RootState) => state.todoReducer;
export default todoSlice.reducer;
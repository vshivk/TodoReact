import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TodoState} from "../../types/todo";

const initialState: TodoState = {
    tasks: [],
    completed: [],
}
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        todoAdding(state, action: PayloadAction<TodoState>) {

        },
        todoRemoving(state, action: PayloadAction<TodoState>) {

        }
    }
});
export const {
    todoAdding,
    todoRemoving
} = todoSlice.actions;
export default todoSlice.reducer;
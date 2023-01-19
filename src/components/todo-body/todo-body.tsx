import React from 'react';
import plus from "../../assets/svg/plus.svg";
import TodoList from "../todo-list/todo-list";
import "./style.scss"
import {useAppSelector} from "../../core/hooks/use-app-selector";
import {selectTodoReducer, todoAdding, todoSlice} from "../../core/store/reducers/todo-slice";
import {useDispatch} from "react-redux";
import {nanoid} from "@reduxjs/toolkit";

const TodoBody = () => {
    const dispatch = useDispatch();
    const taskInput = document.querySelector('.todo-text') as HTMLElement | null;

    const addTodo = () => {
        dispatch(todoAdding({value: '', id: nanoid(10)}))
        taskInput?.focus();
    }

    return (
        <div className={'todo-body todo-border todo-spacing'}>
            <p>Tasks</p>
            <TodoList/>
            <div className={'todo-actions'}>
                <button className={'todo-button todo-add'} onClick={addTodo}>
                    <img src={plus} width={'20px'} height={'20px'} alt="check-circle"/>
                    <span className={'todo-add-title'}>Add item</span>
                </button>
            </div>
        </div>
    );
};

export default TodoBody;
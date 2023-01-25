import React from 'react';
import plus from "../../assets/svg/plus.svg";
import {todoAdding} from "../../core/store/reducers/todo-slice";
import {nanoid} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import "./style.scss";

const TodoButton = () => {
    const dispatch = useDispatch();

    const addTodo = () => {
        dispatch(todoAdding({value: '', id: nanoid(10)}))
    }
    return (
        <button className={'todo-button'} onClick={addTodo}>
            <img src={plus} width={'20px'} height={'20px'} alt="check-circle"/>
            <span>Add item</span>
        </button>
    );
};

export default TodoButton;
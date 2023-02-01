import React, { FC, FormEvent} from 'react';
import TodoInput from "./todo-input";
import {todoAdding} from "../../core/store/reducers/todo-slice";
import {nanoid} from "@reduxjs/toolkit";
import plus from "../../assets/svg/plus.svg";
import {ITodoInputProps} from "../../core/types/props";
import {useAppDispatch} from "../../core/hooks/use-app-dispatch";

const TodoActions: FC<ITodoInputProps> = ({taskValue, setTaskValue}) => {
    const isEmpty = taskValue === '';
    const dispatch = useAppDispatch();

    const addTodo = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isEmpty) return taskValue;
        dispatch(todoAdding({value: taskValue, id: nanoid(10)}));
        setTaskValue('');
    }

    return (
        <form onSubmit={addTodo} className={'todo-actions'}>
            <TodoInput
                taskValue={taskValue}
                setTaskValue={setTaskValue}
            />
            <button className={'todo-button'} type={"submit"}>
                <img src={plus} alt="check-circle"/>
            </button>
        </form>
    );
};

export default TodoActions;
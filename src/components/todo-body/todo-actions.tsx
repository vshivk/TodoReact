import React, {Dispatch, FC, FormEvent} from 'react';
import TodoInput from "./todo-input";
import {useDispatch} from "react-redux";
import {todoAdding} from "../../core/store/reducers/todo-slice";
import {nanoid} from "@reduxjs/toolkit";
import plus from "../../assets/svg/plus.svg";

interface ITodoActionsProps {
    taskValue: string,
    setTaskValue: Dispatch<React.SetStateAction<string>>
}

const TodoActions: FC<ITodoActionsProps> = ({taskValue, setTaskValue}) => {
    const isEmpty = taskValue === '';
    const dispatch = useDispatch();

    const addTodo = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isEmpty) return taskValue;
        dispatch(todoAdding({value: taskValue, id: nanoid(10)}));
        setTaskValue('');
    }

    return (
        <form onSubmit={addTodo} className={'todo-actions'}>
            <TodoInput taskValue={taskValue} setTaskValue={setTaskValue}/>
            <button className={'todo-button'} type={"submit"}>
                <img src={plus} width={'20px'} height={'20px'} alt="check-circle"/>
            </button>
        </form>
    );
};

export default TodoActions;
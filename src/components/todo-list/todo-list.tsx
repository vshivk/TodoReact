import React, {FC, useState} from 'react';
import circle from "../../assets/svg/circle.svg";
import buttonDelete from "../../assets/svg/delete.svg";
import {useAppSelector} from "../../core/hooks/use-app-selector";
import {selectTodoReducer, todoSlice} from "../../core/store/reducers/todo-slice";
import TodoInput from "./todo-input";

const TodoList: FC = () => {
    const {tasks} = useAppSelector(selectTodoReducer);
    const isEmpty = tasks.length > 0;

    return (
        <ul className={'todo-list'}>
            {isEmpty && tasks.map(task =>
                <li className={'todo-item'} key={task.id}>
                    <button className={'todo-button'}>
                        <img width={'20px'} height={'20px'} src={circle}
                             alt="circle"/>
                    </button>
                    <TodoInput task={task}/>
                    <button className={'todo-button'}>
                        <img src={buttonDelete} width={'20px'} height={'20px'} alt="button-delete"/>
                    </button>
                </li>
            )}
        </ul>
    );
};

export default TodoList;
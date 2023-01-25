import React, {FC, useState} from 'react';
import {useAppSelector} from "../../core/hooks/use-app-selector";
import {selectTodoReducer} from "../../core/store/reducers/todo-slice";
import TodoItem from "./todo-item";
import "./style.scss";

const TodoList: FC = () => {
    const {tasks} = useAppSelector(selectTodoReducer);
    const isEmpty = tasks.length > 0;

    return (
        <>
            {isEmpty &&
                <ul className={'todo-list'}>
                    {tasks.map(task =>
                        <TodoItem key={task.id} task={task}/>
                    )}
                </ul>
            }
        </>
    );
};

export default TodoList;
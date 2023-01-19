import React, {FC, useState} from 'react';
import {Todo} from "../../core/types/todo";
import {useAppDispatch} from "../../core/hooks/use-app-dispatch";
import {selectTodoReducer, todoAdding, todoRemoving} from "../../core/store/reducers/todo-slice";
import {nanoid} from "@reduxjs/toolkit";
import {useAppSelector} from "../../core/hooks/use-app-selector";

interface ITodoInputProps {
    task: Todo
}

const TodoInput: FC<ITodoInputProps> = ({task}) => {
    const [taskValue, setTaskValue] = useState('');
    const dispatch = useAppDispatch();
    const {tasks} = useAppSelector(selectTodoReducer);
    const taskInput = document.querySelector('.todo-text') as HTMLElement | null;

    console.log(tasks)

    const onTaskBlur = (id:string) => {
        if (taskValue !== '') {
            dispatch(todoAdding({value: taskValue, id: nanoid(10)}));
            taskInput?.blur();
        } else {
            dispatch(todoRemoving(id));
        }
    }

    return (
        <input className={'todo-text'}
               value={taskValue}
               onChange={e => setTaskValue(e.target.value)}
               onBlur={()=>onTaskBlur(task.id)}
               type="text"/>
    );
};

export default TodoInput;
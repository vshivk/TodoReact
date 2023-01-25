import React, {FC, useState} from 'react';
import {Todo} from "../../core/types/todo";

interface ITodoInputProps {
    task: Todo
}

const TodoInput: FC<ITodoInputProps> = ({task}) => {
    const [taskValue, setTaskValue] = useState('');

    return (
        <input className={'todo-text'}
               value={taskValue}
               onChange={e => setTaskValue(e.target.value)}
               type="text"/>
    );
};

export default TodoInput;
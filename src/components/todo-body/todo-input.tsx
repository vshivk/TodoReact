import React, {FC} from 'react';
import {ITodoInputProps} from "../../core/types/props";

const TodoInput: FC<ITodoInputProps> = ({taskValue,setTaskValue}) => {
    return (
        <input className={'todo-input'}
               value={taskValue}
               onChange={e => setTaskValue(e.target.value)}
               placeholder={'Type your task'}
               type="text"/>
    );
};

export default TodoInput;
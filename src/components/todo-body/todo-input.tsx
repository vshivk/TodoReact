import React, {Dispatch, FC} from 'react';

interface ITodoInputProps {
    taskValue: string,
    setTaskValue: Dispatch<React.SetStateAction<string>>
}

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
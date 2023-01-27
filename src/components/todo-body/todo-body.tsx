import React, {FC, useState} from 'react';
import TodoList from "./todo-list";
import "./style.scss"
import TodoActions from "./todo-actions";

const TodoBody: FC = () => {
    const [taskValue, setTaskValue] = useState('');

    return (
        <div className={'todo-body todo-border todo-spacing'}>
            <p>Tasks</p>
            <TodoActions taskValue={taskValue} setTaskValue={setTaskValue}/>
            <TodoList taskValue={taskValue} setTaskValue={setTaskValue}/>
        </div>
    );
};

export default TodoBody;
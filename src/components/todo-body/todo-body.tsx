import React, {FC} from 'react';
import TodoList from "./todo-list";
import "./style.scss"
import TodoButton from "../todo-button/todo-button";

const TodoBody:FC = () => {
    return (
        <div className={'todo-body todo-border todo-spacing'}>
            <p>Tasks</p>
            <TodoList/>
            <div className={'todo-actions'}>
               <TodoButton/>
            </div>
        </div>
    );
};

export default TodoBody;
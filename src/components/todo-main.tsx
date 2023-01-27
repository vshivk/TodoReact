import React from 'react';
import TodoBody from "./todo-body/todo-body";
import TodoFooter from "./todo-footer/todo-footer";
import './style.scss';

const TodoMain = () => {
    return (
        <div className={'todo-inner'}>
            <TodoBody/>
            <TodoFooter/>
        </div>
    );
};

export default TodoMain;
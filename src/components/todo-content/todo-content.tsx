import React from 'react';
import TodoHeader from "../todo-header/todo-header";
import TodoBody from "../todo-body/todo-body";
import TodoFooter from "../todo-footer/todo-footer";
import "./style.scss";

const TodoContent = () => {
    return (
        <>
            <TodoHeader/>
            <div className={'todo-inner'}>
                <TodoBody/>
                <TodoFooter/>
            </div>
        </>
    );
};

export default TodoContent;
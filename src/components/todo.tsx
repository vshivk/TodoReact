import React, {FC} from 'react';
import TodoHeader from "./todo-header/todo-header";
import TodoBody from "./todo-body/todo-body";
import TodoFooter from "./todo-footer/todo-footer";
import "./style.scss";

const Todo:FC = () => {
    return (
        <div className={'todo'}>
            <TodoHeader/>
            <div className={'todo-inner'}>
                <TodoBody/>
                <TodoFooter/>
            </div>
        </div>
    );
};

export default Todo;
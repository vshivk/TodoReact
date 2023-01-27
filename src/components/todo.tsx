import React, {FC} from 'react';
import TodoHeader from "./todo-header/todo-header";
import "./style.scss";
import TodoMain from "./todo-main";

const Todo:FC = () => {
    return (
        <div className={'todo'}>
            <TodoHeader/>
            <TodoMain/>
        </div>
    );
};

export default Todo;
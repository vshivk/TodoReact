import React, {FC} from 'react';
import checkMark from "../../assets/svg/check-mark.svg";
import "./style.scss";

const TodoHeader:FC = () => {
    return (
        <div className={'todo-header todo-border todo-spacing'}>
            <img src={checkMark}
                 alt="check-mark"/>
            <h4>Todo</h4>
        </div>
    );
};

export default TodoHeader;
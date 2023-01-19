import React, {FC} from 'react';
import checkMark from "../../assets/svg/check-mark.svg";
import "./style.scss";

const TodoHeader:FC = () => {
    return (
        <div className={'todo-header todo-border todo-spacing'}>
            <img width={'20px'} height={'20px'} src={checkMark}
                 alt="check-mark"/>
            <p className={'todo-header-title'}>Todo</p>
        </div>
    );
};

export default TodoHeader;
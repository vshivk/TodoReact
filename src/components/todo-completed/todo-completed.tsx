import React from 'react';
import checkCircle from "../../assets/svg/check-circle.svg";
import buttonDelete from "../../assets/svg/delete.svg";

const TodoCompleted = () => {
    return (
        <ul className={'todo-list'}>
            <li className={'todo-item'}>
                <button className={'todo-button'}>
                    <img width={'20px'} height={'20px'} src={checkCircle}
                         alt="check-circle"/>
                </button>
                <input className={'todo-text'} value={'hello'} type="text"/>
                <button className={'todo-button'}>
                    <img src={buttonDelete} width={'20px'} height={'20px'} alt="button-delete"/>
                </button>
            </li>
        </ul>
    );
};

export default TodoCompleted;
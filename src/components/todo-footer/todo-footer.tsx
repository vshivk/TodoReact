import React, {FC} from 'react';
import buttonDelete from "../../assets/svg/delete.svg";
import TodoCompleted from "./todo-completed";
import "./style.scss";

const TodoFooter:FC = () => {
    return (
        <div className={'todo-footer todo-spacing'}>
            <div className={'todo-complete'}>
                <p>Completed</p>
                <button className={'todo-button'}>
                    <img src={buttonDelete} width={'20px'} height={'20px'} alt="button-delete"/>
                </button>
            </div>
            <TodoCompleted/>
        </div>
    );
};

export default TodoFooter;
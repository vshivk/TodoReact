import React, {FC} from 'react';
import buttonDelete from "../../assets/svg/delete.svg";
import TodoCompleted from "./todo-completed";
import "./style.scss";
import {useAppDispatch} from "../../core/hooks/use-app-dispatch";
import {selectTodoReducer, todoRemovingAllCompleted} from "../../core/store/reducers/todo-slice";
import {useAppSelector} from "../../core/hooks/use-app-selector";

const TodoFooter: FC = () => {
    const dispatch = useAppDispatch();
    const {completed} = useAppSelector(selectTodoReducer);
    const isEmpty=completed.length>0;

    const removeAllCompleted = () => {
        if (isEmpty){
            dispatch(todoRemovingAllCompleted());
        }

    }

    return (
        <div className={'todo-footer todo-spacing'}>
            <div className={'todo-complete'}>
                <p>Completed</p>
                <button className={'todo-button'} onClick={removeAllCompleted}>
                    <img src={buttonDelete} width={'20px'} height={'20px'} alt="button-delete"/>
                </button>
            </div>
            <TodoCompleted/>
        </div>
    );
};

export default TodoFooter;
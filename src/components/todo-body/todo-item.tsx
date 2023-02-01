import React, {FC} from 'react';
import buttonDelete from "../../assets/svg/delete.svg";
import {selectTodoReducer, todoCompletingTask, todoRemoving} from "../../core/store/reducers/todo-slice";
import {useAppSelector} from "../../core/hooks/use-app-selector";
import {useAppDispatch} from "../../core/hooks/use-app-dispatch";
import {ITodoItemProps} from "../../core/types/props";

const TodoItem: FC<ITodoItemProps> = ({task}) => {
    const {id, value} = task;
    const dispatch = useAppDispatch();
    const {completed} = useAppSelector(selectTodoReducer);

    const removeFromTasks = () => {
        dispatch(todoRemoving(id));
    }

    const completeTask = () => {
        if (!completed.includes(task)) {
            dispatch(todoCompletingTask(task));
            removeFromTasks();
        }
    }

    return (
        <li className={'todo-item'}>
            <div className={'todo-item-value'}>
                <input className={'todo-item-value__checkbox'}
                       type="checkbox"
                       id={id}
                       onChange={completeTask}/>
                <label className={'todo-item-value__label'} htmlFor={id}>{value}</label>
            </div>
            <button className={'todo-button'} onClick={removeFromTasks}>
                <img src={buttonDelete} alt="button-delete"/>
            </button>
        </li>
    );
};

export default TodoItem;
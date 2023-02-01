import React, {FC} from 'react';
import buttonDelete from "../../assets/svg/delete.svg";
import {selectTodoReducer, todoCompletingTask, todoRemoving} from "../../core/store/reducers/todo-slice";
import {useAppSelector} from "../../core/hooks/use-app-selector";
import {useAppDispatch} from "../../core/hooks/use-app-dispatch";
import {ITodoItemProps} from "../../core/types/props";

const TodoItem: FC<ITodoItemProps> = ({task}) => {
    const dispatch = useAppDispatch();
    const {completed} = useAppSelector(selectTodoReducer);

    const removeFromTasks = () => {
        dispatch(todoRemoving(task.id));
    }

    const completeTask = () => {
        if (!completed.includes({value: task.value, id: task.id})) {
            dispatch(todoCompletingTask({value: task.value, id: task.id}));
            removeFromTasks();
        }
    }

    return (
        <li className={'todo-item'}>
            <div className={'todo-item-value'} style={{display: "flex", gap: '10px'}}>
                <input className={'todo-item-value__checkbox'} type="checkbox" id={task.id} onChange={completeTask}/>
                <label className={'todo-item-value__label'} htmlFor={task.id}>{task.value}</label>
            </div>
            <button className={'todo-button'} onClick={removeFromTasks}>
                <img src={buttonDelete} width={'20px'} height={'20px'} alt="button-delete"/>
            </button>
        </li>
    );
};

export default TodoItem;
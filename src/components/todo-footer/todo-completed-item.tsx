import React, {FC} from 'react';
import checkCircle from "../../assets/svg/check-circle.svg";
import buttonDelete from "../../assets/svg/delete.svg";
import {todoRemovingFromCompleted} from "../../core/store/reducers/todo-slice";
import {useAppDispatch} from "../../core/hooks/use-app-dispatch";
import {ITodoCompletedItemProps} from "../../core/types/props";

const TodoCompletedItem: FC<ITodoCompletedItemProps> = ({task}) => {
    const {id, value} = task;
    const dispatch = useAppDispatch();

    const removeFromCompletedTasks = () => {
        dispatch(todoRemovingFromCompleted(id));
    }

    return (
        <li className={'todo-complete-item'}>
            <div className={'todo-complete-item-value'}>
                <img src={checkCircle}
                     alt="check-circle"/>
                <p>{value}</p>
            </div>
            <button className={'todo-button'} onClick={removeFromCompletedTasks}>
                <img src={buttonDelete} alt="button-delete"/>
            </button>
        </li>
    );
};

export default TodoCompletedItem;
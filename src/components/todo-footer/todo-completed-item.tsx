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
            <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                <img width={'20px'} height={'20px'} src={checkCircle}
                     alt="check-circle"/>
                <p>{value}</p>
            </div>
            <button className={'todo-button'} onClick={removeFromCompletedTasks}>
                <img src={buttonDelete} width={'20px'} height={'20px'} alt="button-delete"/>
            </button>
        </li>
    );
};

export default TodoCompletedItem;
import React, {FC} from 'react';
import circle from "../../assets/svg/circle.svg";
import buttonDelete from "../../assets/svg/delete.svg";
import {Todo} from "../../core/types/todo";
import {useDispatch} from "react-redux";
import {selectTodoReducer, todoCompletingTask, todoRemoving} from "../../core/store/reducers/todo-slice";
import {useAppSelector} from "../../core/hooks/use-app-selector";
import TodoInput from "./todo-input";

interface ITodoItemProps {
    task: Todo
}

const TodoItem: FC<ITodoItemProps> = ({task}) => {
    const {id} = task;
    const {tasks} = useAppSelector(selectTodoReducer);
    const dispatch = useDispatch();

    const removeFromList = () => {
        dispatch(todoRemoving(id));
    }
    const completeTask = () => {
        return tasks.filter(task => {
            if (task.id === id) {
                dispatch(todoCompletingTask(task));
                dispatch(todoRemoving(id));
            }
        })
    }
    return (
        <li className={'todo-item'}>
            <button className={'todo-button'} onClick={completeTask}>
                <img width={'20px'} height={'20px'} src={circle}
                     alt="circle"/>
            </button>
            <TodoInput task={task}/>
            <button className={'todo-button'} onClick={removeFromList}>
                <img src={buttonDelete} width={'20px'} height={'20px'} alt="button-delete"/>
            </button>
        </li>
    );
};

export default TodoItem;
import React from 'react';
import {useAppSelector} from "../../core/hooks/use-app-selector";
import {selectTodoReducer} from "../../core/store/reducers/todo-slice";
import TodoCompletedItem from "./todo-completed-item";

const TodoCompleted = () => {
    const {completed} = useAppSelector(selectTodoReducer);
    const isEmpty = completed.length > 0;

    return (
        <>
            {isEmpty
                &&
                <ul className={'todo-list'}>
                    {completed.map(task=>
                        <TodoCompletedItem key={task.id} value={task.value}/>
                    )}
                </ul>
            }
        </>
    );
};

export default TodoCompleted;
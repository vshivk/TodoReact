import React, {Dispatch, FC} from 'react';
import {useAppSelector} from "../../core/hooks/use-app-selector";
import {selectTodoReducer} from "../../core/store/reducers/todo-slice";
import TodoItem from "./todo-item";
import "./style.scss";

interface ITodoListProps {
    taskValue: string,
    setTaskValue: Dispatch<React.SetStateAction<string>>
}
const TodoList: FC<ITodoListProps> = ({taskValue,setTaskValue}) => {
    const {tasks} = useAppSelector(selectTodoReducer);
    const isEmpty = tasks.length > 0;

    return (
        <>
            {isEmpty &&
                <ul className={'todo-list'}>
                    {tasks.map(task =>
                        <TodoItem key={task.id} task={task} taskValue={taskValue} setTaskValue={setTaskValue}/>
                    )}
                </ul>
            }
        </>
    );
};

export default TodoList;
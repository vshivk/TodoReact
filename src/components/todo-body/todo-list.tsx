import React, {FC} from 'react';
import {useAppSelector} from "../../core/hooks/use-app-selector";
import {selectTodoReducer} from "../../core/store/reducers/todo-slice";
import TodoItem from "./todo-item";
import "./style.scss";
import {ITodoInputProps} from "../../core/types/props";

const TodoList: FC<ITodoInputProps> = ({taskValue, setTaskValue}) => {
    const {tasks} = useAppSelector(selectTodoReducer);
    const isNotEmpty = tasks.length > 0;

    return (
        <>
            {isNotEmpty &&
                <ul className={'todo-list'}>
                    {tasks.map(task =>
                        <TodoItem key={task.id}
                                  task={task}
                                  taskValue={taskValue}
                                  setTaskValue={setTaskValue}
                        />
                    )}
                </ul>
            }
        </>
    );
};

export default TodoList;
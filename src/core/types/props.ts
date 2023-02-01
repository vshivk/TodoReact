import {Todo} from "./todo";
import React, {Dispatch} from "react";

export interface ITodoCompletedItemProps {
    task: Todo
}

export interface ITodoActionsProps {
    taskValue: string,
    setTaskValue: Dispatch<React.SetStateAction<string>>
}

export interface ITodoItemProps {
    task: Todo,
    taskValue: string,
    setTaskValue: Dispatch<React.SetStateAction<string>>
}

export interface ITodoInputProps {
    taskValue: string,
    setTaskValue: Dispatch<React.SetStateAction<string>>
}

export interface ITodoListProps {
    taskValue: string,
    setTaskValue: Dispatch<React.SetStateAction<string>>
}
export interface Todo{
    value: string,
    id: string
}
export interface TodoState{
    tasks: Todo[],
    completed: Todo[]
}
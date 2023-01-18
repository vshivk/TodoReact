export interface Todo{
    task: string
}
export interface TodoState{
    tasks: Todo[],
    completed: Todo[]
}
import { TodoType } from "./types/TodoType";

export const Todo = (props:Pick<TodoType,"title"|"userId"|"completed">)=>{
    const {title,userId,completed=false}=props;
    const completeMark=completed?"[complete]":"[error]"
    return<p>{`${completeMark}${title}(user:${userId})`}</p>
}
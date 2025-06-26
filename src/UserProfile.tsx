import { FC } from "react";
import { User } from "./types/user"
type Props={
    user:User;
}
export const UserProfile:FC<Props>=(props)=>{
    const{user}=props;
   return(
    <dl>
        <dt>name</dt>
        <dd>{user.name}</dd>
        <dt>tastes</dt>
        <dd>{user.tastes?.join("/")}</dd>
    </dl>
   ) 
}
import { FC } from "react";
import { UserProfile } from "../types/userProfile"

type Props = {
    user:UserProfile
}

const style={
    border:"solid 1px #ccc",
    borderRadius:"8px",
    padding:"0 16px",
    margin:"8px"
}
export const UserCard:FC<Props> = (props)=>{
    const {user}=props;
    return(
        <>
            <div style={style}>
                <dt>name</dt>
                <dd>{user.name}</dd>
                <dt>email</dt>
                <dd>{user.email}</dd>
                <dt>address</dt>
                <dd>{user.address}</dd>
            </div>
        </>
    )
}
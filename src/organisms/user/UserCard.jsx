import styled from "styled-components"
import { useContext } from "react";
import sampleUserImage from "../../img/kevin-woblick-NIAlMzwwbNA-unsplash.jpg"
import { Card } from "../../atoms/card/Card";
import { UserContext } from "../../providers/UserProvider";

export const UserCard = props=>{
    const {userInfo,setUserInfo}=useContext(UserContext);
    const {user=userSample} = props;
    return(
        <>
        <Card user={user} isAdmin={userInfo.isAdmin}/>
        </>
    )
}

export const userSample={
    name:"username",
    image:sampleUserImage,
    email:"111@aaa.com",
    TEL:"000-111-222",
    company:"hoge corporate",
    web:"http.///.com",
    id:0
};

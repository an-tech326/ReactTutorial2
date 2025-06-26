import styled from "styled-components"
import sampleUserImage from "../../img/kevin-woblick-NIAlMzwwbNA-unsplash.jpg"
import { Card } from "../../atoms/card/Card";

export const UserCard = props=>{
    const {user=userSample, isAdmin=false} = props;
    return(
        <>
        <Card user={user} isAdmin={isAdmin}/>
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

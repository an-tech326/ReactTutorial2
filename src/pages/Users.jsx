import styled from "styled-components"
import { HeaderOnly } from "../templates/HeaderOnly"
import { SearchInput } from "../molecules/SearchInput"
import { UserCard, userSample } from "../organisms/user/UserCard"
import { useLocation } from "react-router-dom"
export const Users = () =>{
    const {state}=useLocation();
    const isAdmin = state ? state.isAdmin : false;
    return(
        <>
        <HeaderOnly>
            <SContainer>
                <h2>Users</h2>
                <SearchInput />
                <SUserArea>
                    {users.map((user) => (
                        <UserCard key={user.id} user={user} isAdmin={isAdmin} />
                    ))}
                </SUserArea>
            </SContainer>
        </HeaderOnly>
        </>
    )
}
const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`
const users = [...Array(10).keys()].map((val) => ({
    ...userSample,
    name: userSample.name + val,
    id:val
}));
const SUserArea = styled.div`
    padding-top:40px;
    width:100%;
    max-width:1200px;
    margin:0 auto;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
    grid-gap:20px;
`

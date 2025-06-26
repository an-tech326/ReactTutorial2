import styled from "styled-components"
import { DefaultLayout } from "../templates/DefaultLayout"
import { SecondaryButton } from "../atoms/button/SecondaryButton"
import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import { UserContext } from "../providers/UserProvider"

export const Top = () =>{
    const history = useNavigate();
    const {userInfo,setUserInfo}=useContext(UserContext);
    const ClickAdmin = () => {
        setUserInfo({isAdmin:true})
         history("/users");
         }
    const ClickUser = () => { 
        setUserInfo({isAdmin:false})
        history("/users"); 
    }
    return(
        <>
        <DefaultLayout>
            <SContainer>
                <h2>Top Page</h2>
                <SecondaryButton onClick={ClickAdmin}>Admin</SecondaryButton><br/><br/>
                <SecondaryButton onClick={ClickUser}>User</SecondaryButton>
            </SContainer>
        </DefaultLayout>
        </>
    )
}
const SContainer = styled.div`
    text-align:center
`

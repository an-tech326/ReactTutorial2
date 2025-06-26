import styled from "styled-components"
import { DefaultLayout } from "../templates/DefaultLayout"
import { SecondaryButton } from "../atoms/button/SecondaryButton"
import { useNavigate } from "react-router-dom"

export const Top = () =>{
    const history = useNavigate();
    const ClickAdmin = () => { history("/users", { state: { isAdmin: true } }); }
    const ClickUser = () => { history("/users", { state: { isAdmin: false } }); }
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

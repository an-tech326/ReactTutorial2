import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = (props) =>{
    return(
        <>
            <SHeader>
                <SLink to="/">HOME</SLink><br />
                <SLink to="/users">USERS</SLink>
            </SHeader>
        </>

    );
};
const SHeader = styled.header`
    background-color:#11999e;
    color:#fff;
    text-align:center;
    padding:8px 0px;
`
const SLink = styled(Link)`
    margin:0 8px;
`
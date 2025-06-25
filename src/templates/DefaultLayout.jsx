import styled from "styled-components";
import { Header } from "../atoms/layout/Header";
import { Footer } from "../atoms/layout/Footer";

export const DefaultLayout = (props) =>{
    const {children} = props; 
    return(
        <>
            <Header/>
               {children} 
            <Footer />
        </>

    );
};
const HD = styled.div`
    background-color:"red",
    height:"50px",
    margin:"0px";
`
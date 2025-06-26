import styled from "styled-components"
import { SButton } from "./PrimaryButton";
export const SecondaryButton = (props)=>{
    const {children, onClick}=props;
    return(
        <SSButton onClick={onClick}>{children}</SSButton>
    )
}

const SSButton = styled(SButton)`
    background-color:#11999e;
`;
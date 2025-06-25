import styled from "styled-components"

export const Card = ({user})=>{
    return(
        <>
        <SCard>
                <img src={user.image} alt="plofile" height={160}width={160}/>
                <p>{user.name}</p>
                <SDl>
                    <dt>mail</dt>
                    <dd>{user.email}</dd>
                    <dt>TEL</dt>
                    <dd>{user.TEL}</dd>
                    <dt>company</dt>
                    <dd>{user.company}</dd>
                    <dt>web</dt>
                    <dd>{user.web}</dd>
                </SDl>
            </SCard>
        </>
    )
}
const SDl = styled.dl`
    text-align:left;
    dt{
    float:left;}
    dd{
        padding-left:32px;
        padding-bottom:8px;
    }
`

const SCard = styled.div`
    background-color:#fff;
    box-shadow:#ddd 0px 0px 4px 2px;
    border-radius: 8px;
    padding:16px;
`
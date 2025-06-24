import { useParams } from "react-router-dom"

export const UrlParameter = () =>{
    const {id} = useParams();
    return (
        <>
            <div>
                <h2>UrlParam</h2>
                <p>id:{id}</p>
            </div>
        </>
    )
}
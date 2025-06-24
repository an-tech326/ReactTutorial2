import { useLocation, useParams } from "react-router-dom"


export const UrlParameter = () =>{
    const {id} = useParams();
    const {search} = useLocation();
    const Query = new URLSearchParams(search)
    return (
        <>
            <div>
                <h2>UrlParam</h2>
                <p>id:{id}</p>
                <p>query:{Query.get("name")}</p>
            </div>
        </>
    )
}
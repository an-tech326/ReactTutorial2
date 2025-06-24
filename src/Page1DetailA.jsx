import { useLocation } from "react-router-dom"

export const DetailA = () =>{
    const {state} = useLocation();
    return (
        <>
            <div>
                <h1>DetailA</h1>
                <p>state:{state}</p>
            </div>
        </>
    )
}
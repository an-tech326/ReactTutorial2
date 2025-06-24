import { Link, Outlet, useNavigate } from "react-router-dom";
import { DetailA } from "./Page1DetailA";
import { DetailB } from "./Page1DetailB";
export const Page1 = () =>{
    const state = [...Array(10).keys()];
    const history = useNavigate();
    const onClickButton = ()=>{history("/page1/detailA",{state:"useButton"})}
    return (
        <>
            <div>
                <h1>Page1</h1>
                <Link to="DetailA" state={state}>DetailA</Link><br />
                <Link to="DetailB">DetailB</Link><br />
                <button onClick={onClickButton}>MoveDetailA</button>
            </div>
            <Outlet />
        </>
    )
}
export const page1Routers = [
    {
        path:"/page1",
        element:<Page1 />,
        children:[
            {
                path: "DetailA",
                element:<DetailA/>
            },
            {
                path: "DetailB",
                element:<DetailB/>
            }
        ]
    }
]

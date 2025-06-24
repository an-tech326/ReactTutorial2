import { Link, Outlet } from "react-router-dom";
import { DetailA } from "./Page1DetailA";
import { DetailB } from "./Page1DetailB";
export const Page1 = () =>{
    return (
        <>
            <div>
                <h1>Page1</h1>
                <Link to="DetailA">DetailA</Link><br />
                <Link to="DetailB">DetailB</Link>
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

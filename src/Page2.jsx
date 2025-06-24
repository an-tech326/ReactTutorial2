import { Link, Outlet } from "react-router-dom";
import { UrlParameter } from "./UrlParameters";
import { useState } from "react";

export const Page2 = () =>{
    const [count, setCount] = useState(0);
    return (
        <>
            <div>
                <h1>Page2</h1>
                <button onClick={()=>setCount(count+1)}>count:{count}</button><br />
                <Link to={`/page2/${count}`}>Url parameters</Link><br />
                <Link to={`/page2/${count}?name=hoge`}>Query parameters</Link>

            </div>
            <Outlet />
        </>
    )
}

export const page2Routers = [
    {
        path:"/page2",
        element:<Page2 />,
        children:[
            {
                path :":id",
                element:<UrlParameter />
            }
        ]
    }
];

import {  Link,  Outlet } from "react-router-dom";
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

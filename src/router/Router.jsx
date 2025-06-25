import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Users } from "../pages/Users"
import { Top } from "../pages/Top"
import { DefaultLayout } from "../templates/DefaultLayout"

export const Router = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/"element={<Top/>}/>
                <Route path="/users" element={<Users/>}/>
            </Routes>
        </BrowserRouter>
    )
}
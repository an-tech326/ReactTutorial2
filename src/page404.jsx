export const Page404 = ()=>
{
    return (
        <>
        <div>
            <h1>404</h1>
        </div>
        </>
    )
}
export const page404Routers =[
    {
        path:"/*",
        element:<Page404 />,
    }
]
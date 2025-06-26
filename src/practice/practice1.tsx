type Practice1Props={
    num:number;
}
export const Practice1=({num}:Practice1Props)=>{
    const ClickPractice=()=>{alert(num*1.1)}
    return (
        <>
            <div>
                <button onClick={ClickPractice}>Practice1</button>
            </div>
        </>
    )
}
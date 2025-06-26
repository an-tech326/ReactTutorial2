export const Practice2=()=>{
    const func = (num:number)=>{return num*1.1;}
    const ClickPractice=()=>{
        alert(func(1010))
    }
    return(
        <>
            <div>
                <button onClick={ClickPractice}>Practice2</button>
            </div>
        </>
    )
}
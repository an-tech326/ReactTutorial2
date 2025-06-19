export const App = ()=>{
    const onClickButton = ()=>alert();
    const contentStyle = {
        color:"blue",
        fontSize:"18px"
    };
    return (
    <>
        <h1 style={{color:"red"}}>hello</h1>
        <h1 style={contentStyle}>world</h1>
        <button onClick={onClickButton}>button</button>
    </>
    );
}
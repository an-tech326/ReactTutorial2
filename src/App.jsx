import { ColorMessage } from "./components/ColorMessage";

export const App = ()=>{
    const onClickButton = ()=>alert();
    const contentStyle = {
        color:"blue",
        fontSize:"18px"
    };
    return (
    <>
        <ColorMessage color="red" message="hello"/>
        <ColorMessage color="blue">world</ColorMessage>
        <button onClick={onClickButton}>button</button>
    </>
    );
}
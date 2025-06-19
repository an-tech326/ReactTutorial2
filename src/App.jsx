import { ColorMessage } from "./components/ColorMessage";
import { useState } from "react";

export const App = ()=>{
    const [num,setNum]=useState(0);
    const onClickCountUp = ()=>setNum(num+1);
    const[isShow,setIsShow]=useState(true);
    const onClickToggle = ()=>setIsShow(!isShow);
    const contentStyle = {
        color:"blue",
        fontSize:"18px"
    };
    return (
    <>
        <ColorMessage color="red" message="hello"/>
        <ColorMessage color="blue">world</ColorMessage>
        <button onClick={onClickCountUp}>countUp</button>
        <p>{num}</p>
        <button onClick={onClickToggle}>show</button>
        {isShow&&<p>$$$$$</p>}
    </>
    );
}
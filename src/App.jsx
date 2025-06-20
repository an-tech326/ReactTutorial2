import { useState ,useCallback} from "react";
import { ChildArea } from "./ChildArea";

export const App = ()=>{
    const [count,setCount]=useState(0);
    const [text, setText]=useState('')
    const [open, setOpen]=useState(false);
    const onChangeText = (e)=>{
        setText(e.target.value);
    }
    const onClickOpen=()=>setOpen(!open);
    const onClickClose= useCallback(()=>setOpen(false),[setOpen]);
    return (
    <>
       <div className="App">
            <input valu={text} onChange={onChangeText}/>
            <br />
            <br />
            <button onClick={onClickOpen}>表示</button>
            <ChildArea open={open} onClickClose={onClickClose}/>
        </div> 
    </>
    );
}
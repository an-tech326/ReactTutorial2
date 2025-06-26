
import axios from "axios";
import { Practice1 } from "./practice/practice1";
import { Practice2 } from "./practice/Practice2";
import "./styles.css";

export default function App() {
  const onClickFetchData=()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>{
      console.log(res)
    })
  }
  return (
    <div className="App">
      <button onClick={onClickFetchData}>call API</button>
    </div>
  );
}

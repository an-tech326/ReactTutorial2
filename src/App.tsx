
import { Practice1 } from "./practice/practice1";
import { Practice2 } from "./practice/Practice2";
import "./styles.css";

export default function App() {
  const onClickFetchData=()=>{
    axios
  }
  return (
    <div className="App">
      <button onClick={onClickFetchData}>call API</button>
    </div>
  );
}

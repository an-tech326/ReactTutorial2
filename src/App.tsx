
import { Practice1 } from "./practice/practice1";
import { Practice2 } from "./practice/Practice2";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Practice1 num={1000}/>
      <Practice2 />
    </div>
  );
}

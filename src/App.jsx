import { useState } from "react";
import Counter from "./UserComponent";
function App(){
  const [count, setCount] = useState(0);
  const[data, setData] = useState(0);
  const[display, setDisplay] = useState(true);
  return(
    <div>
      <h1>Use Effect </h1>
      {
        display?<Counter count={count} data={data}></Counter>:null
      }
      <button onClick={()=>setCount(count+1)}>Count</button>
      <button onClick={()=>setData(data+1)}>Data</button>
      <button onClick={()=>setDisplay(!display)}>Toggle</button>
    </div>
  )
}
export default App;
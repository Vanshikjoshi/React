import React from "react";
import Excersize from "./Excersize";
const App = () => {
  const click = () => {
    alert("Button clicked");
  };
  const add = (a) => {
    alert(a + 10);
  };
  return (
    <div>
      <Excersize name="Vanshika" age={19} />
      <br></br>
      <Excersize name="Ankur" age={21} />
      <br></br>
      <Excersize name="Mahima" age={18} />
      <br></br>
      <button onClick={click}>Click</button>
      <br></br>
      <button onClick={()=>add(8)}>Add</button>
    </div>
  );
};

export default App;

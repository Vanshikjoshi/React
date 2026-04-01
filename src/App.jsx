import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <button onClick={() => setColor("green")}>
        Change color
      </button>
    </div>
  );
}

export default App;